const prisma = require('../lib/prisma');

class TripService {
  // Create a new trip
  async createTrip(tripData) {
    return prisma.trip.create({
      data: tripData,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        itinerary: {
          orderBy: [{ day: 'asc' }, { order: 'asc' }],
        },
      },
    });
  }

  // Get trip by ID
  async getTripById(id, userId = null) {
    const whereClause = { id };
    
    // If userId is provided, ensure user has access to the trip
    if (userId) {
      whereClause.OR = [
        { userId }, // Owner
        { collaborators: { some: { userId, status: 'ACCEPTED' } } }, // Collaborator
        { isPublic: true }, // Public trip
      ];
    }

    return prisma.trip.findFirst({
      where: whereClause,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        itinerary: {
          orderBy: [{ day: 'asc' }, { order: 'asc' }],
        },
        bookings: {
          orderBy: { startDate: 'asc' },
        },
        collaborators: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
        expenses: {
          orderBy: { date: 'desc' },
        },
      },
    });
  }

  // Get trips for a user
  async getUserTrips(userId, page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    return prisma.trip.findMany({
      where: {
        OR: [
          { userId }, // Owner
          { collaborators: { some: { userId, status: 'ACCEPTED' } } }, // Collaborator
        ],
      },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        _count: {
          select: {
            itinerary: true,
            bookings: true,
            expenses: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
    });
  }

  // Update trip
  async updateTrip(id, userId, tripData) {
    // Ensure user has permission to update
    const trip = await this.getTripById(id, userId);
    if (!trip || (trip.userId !== userId && !trip.collaborators.some(c => c.userId === userId && c.role !== 'VIEWER'))) {
      throw new Error('Unauthorized to update this trip');
    }

    return prisma.trip.update({
      where: { id },
      data: tripData,
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
        itinerary: {
          orderBy: [{ day: 'asc' }, { order: 'asc' }],
        },
      },
    });
  }

  // Add itinerary item
  async addItineraryItem(tripId, userId, itemData) {
    // Check permissions
    const trip = await this.getTripById(tripId, userId);
    if (!trip || (trip.userId !== userId && !trip.collaborators.some(c => c.userId === userId && c.role !== 'VIEWER'))) {
      throw new Error('Unauthorized to modify this trip');
    }

    return prisma.tripItinerary.create({
      data: {
        ...itemData,
        tripId,
      },
    });
  }

  // Get trip statistics
  async getTripStats(userId) {
    const [totalTrips, upcomingTrips, completedTrips, totalExpenses] = await Promise.all([
      prisma.trip.count({
        where: {
          OR: [
            { userId },
            { collaborators: { some: { userId, status: 'ACCEPTED' } } },
          ],
        },
      }),
      prisma.trip.count({
        where: {
          OR: [
            { userId },
            { collaborators: { some: { userId, status: 'ACCEPTED' } } },
          ],
          startDate: { gte: new Date() },
          status: { in: ['PLANNING', 'CONFIRMED'] },
        },
      }),
      prisma.trip.count({
        where: {
          OR: [
            { userId },
            { collaborators: { some: { userId, status: 'ACCEPTED' } } },
          ],
          status: 'COMPLETED',
        },
      }),
      prisma.expense.aggregate({
        where: {
          trip: {
            OR: [
              { userId },
              { collaborators: { some: { userId, status: 'ACCEPTED' } } },
            ],
          },
        },
        _sum: { amount: true },
      }),
    ]);

    return {
      totalTrips,
      upcomingTrips,
      completedTrips,
      totalExpenses: totalExpenses._sum.amount || 0,
    };
  }
}

module.exports = new TripService();