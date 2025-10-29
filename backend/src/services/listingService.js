const prisma = require('../lib/prisma');

class ListingService {
  // Create a new listing
  async createListing(hostId, listingData) {
    return prisma.listing.create({
      data: {
        ...listingData,
        hostId,
      },
      include: {
        host: {
          select: { id: true, name: true, avatar: true },
        },
        images: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: { savedBy: true },
        },
      },
    });
  }

  // Get listing by ID
  async getListingById(id, userId = null) {
    const listing = await prisma.listing.findUnique({
      where: { id },
      include: {
        host: {
          select: { id: true, name: true, avatar: true, bio: true, hostProfile: true },
        },
        images: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: { savedBy: true },
        },
      },
    });

    if (listing && userId) {
      // Track the view
      await this.trackListingView(id, userId);

      // Check if user saved this listing
      const savedListing = await prisma.savedListing.findUnique({
        where: {
          userId_listingId: { userId, listingId: id },
        },
      });
      listing.isSaved = !!savedListing;
    }

    return listing;
  }

  // Search listings
  async searchListings(filters = {}, page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const {
      city,
      country,
      category,
      minPrice,
      maxPrice,
      minGuests,
      searchQuery,
    } = filters;

    const where = {
      isActive: true,
      ...(city && { city }),
      ...(country && { country }),
      ...(category && { category }),
      ...(minPrice && { basePrice: { gte: minPrice } }),
      ...(maxPrice && { basePrice: { lte: maxPrice } }),
      ...(minGuests && { maxGuests: { gte: minGuests } }),
      ...(searchQuery && {
        OR: [
          { title: { contains: searchQuery, mode: 'insensitive' } },
          { description: { contains: searchQuery, mode: 'insensitive' } },
          { city: { contains: searchQuery, mode: 'insensitive' } },
        ],
      }),
    };

    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where,
        include: {
          host: {
            select: { id: true, name: true, avatar: true },
          },
          images: {
            take: 1,
            orderBy: { order: 'asc' },
          },
          _count: {
            select: { savedBy: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.listing.count({ where }),
    ]);

    return {
      listings,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  }

  // Get listings by host
  async getHostListings(hostId, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const [listings, total] = await Promise.all([
      prisma.listing.findMany({
        where: { hostId },
        include: {
          host: {
            select: { id: true, name: true, avatar: true },
          },
          images: {
            orderBy: { order: 'asc' },
          },
          _count: {
            select: { savedBy: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.listing.count({ where: { hostId } }),
    ]);

    return {
      listings,
      total,
      page,
      pages: Math.ceil(total / limit),
    };
  }

  // Update listing
  async updateListing(id, hostId, listingData) {
    // Verify host owns this listing
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing || listing.hostId !== hostId) {
      throw new Error('Unauthorized to update this listing');
    }

    return prisma.listing.update({
      where: { id },
      data: listingData,
      include: {
        images: {
          orderBy: { order: 'asc' },
        },
        _count: {
          select: { savedBy: true },
        },
      },
    });
  }

  // Delete listing
  async deleteListing(id, hostId) {
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing || listing.hostId !== hostId) {
      throw new Error('Unauthorized to delete this listing');
    }

    return prisma.listing.delete({
      where: { id },
    });
  }

  // Add listing images
  async addListingImages(listingId, hostId, images) {
    // Verify host owns this listing
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing || listing.hostId !== hostId) {
      throw new Error('Unauthorized to add images to this listing');
    }

    return prisma.listingImage.createMany({
      data: images.map((img, idx) => ({
        listingId,
        url: img.url,
        altText: img.altText,
        order: img.order ?? idx,
      })),
    });
  }

  // Delete listing image
  async deleteListingImage(imageId, hostId) {
    const image = await prisma.listingImage.findUnique({
      where: { id: imageId },
      include: { listing: true },
    });

    if (!image || image.listing.hostId !== hostId) {
      throw new Error('Unauthorized to delete this image');
    }

    return prisma.listingImage.delete({
      where: { id: imageId },
    });
  }

  // Track listing view
  async trackListingView(listingId, userId = null) {
    // Get visitor IP from process.env or request (to be passed from controller)
    return prisma.listingView.create({
      data: {
        listingId,
        userId,
      },
    });
  }

  // Get listing statistics
  async getListingStats(listingId, hostId) {
    const listing = await prisma.listing.findUnique({
      where: { id: listingId },
    });

    if (!listing || listing.hostId !== hostId) {
      throw new Error('Unauthorized');
    }

    const [views, reviews, inquiries, avgRating] = await Promise.all([
      prisma.listingView.count({
        where: { listingId },
      }),
      prisma.review.count({
        where: { listingId },
      }),
      prisma.inquiry.count({
        where: { listingId },
      }),
      prisma.review.aggregate({
        where: { listingId },
        _avg: { rating: true },
      }),
    ]);

    return {
      views,
      reviews,
      inquiries,
      avgRating: avgRating._avg.rating || 0,
      savedCount: listing._count?.savedBy || 0,
    };
  }

  // Increment listing views
  async incrementViews(id) {
    return prisma.listing.update({
      where: { id },
      data: { views: { increment: 1 } },
    });
  }

  // Feature/unfeature listing
  async toggleFeatured(id, hostId) {
    const listing = await prisma.listing.findUnique({
      where: { id },
    });

    if (!listing || listing.hostId !== hostId) {
      throw new Error('Unauthorized');
    }

    return prisma.listing.update({
      where: { id },
      data: { isFeatured: !listing.isFeatured },
    });
  }

  // Get featured listings
  async getFeaturedListings(limit = 10) {
    return prisma.listing.findMany({
      where: {
        isActive: true,
        isFeatured: true,
      },
      include: {
        host: {
          select: { id: true, name: true, avatar: true },
        },
        images: {
          take: 1,
          orderBy: { order: 'asc' },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  // Get user's saved listings
  async getUserSavedListings(userId, page = 1, limit = 20) {
    const skip = (page - 1) * limit;

    const savedListings = await prisma.savedListing.findMany({
      where: { userId },
      include: {
        listing: {
          include: {
            host: {
              select: { id: true, name: true, avatar: true },
            },
            images: {
              take: 1,
              orderBy: { order: 'asc' },
            },
          },
        },
      },
      orderBy: { savedAt: 'desc' },
      skip,
      take: limit,
    });

    const total = await prisma.savedListing.count({
      where: { userId },
    });

    return {
      data: savedListings.map(sl => sl.listing),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    };
  }

  // Save a listing
  async saveListing(userId, listingId) {
    return prisma.savedListing.create({
      data: {
        userId,
        listingId,
      },
      include: {
        listing: {
          include: {
            host: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });
  }

  // Remove a saved listing
  async unsaveListing(userId, listingId) {
    return prisma.savedListing.deleteMany({
      where: {
        userId,
        listingId,
      },
    });
  }
}

module.exports = new ListingService();