const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed for TripSkip direct booking platform...');

  // Create sample host users
  const host1 = await prisma.user.create({
    data: {
      email: 'john@example.com',
      password: 'hashed_password_123', // In production, this should be hashed
      name: 'John Smith',
      userType: 'HOST',
      isVerified: true,
      hostProfile: {
        create: {
          companyName: 'Smith Vacation Rentals',
          totalListings: 2,
          averageRating: 4.8,
          responseTime: 2,
          acceptanceRate: 98,
        },
      },
    },
  });

  const host2 = await prisma.user.create({
    data: {
      email: 'jane@example.com',
      password: 'hashed_password_456',
      name: 'Jane Doe',
      userType: 'HOST',
      isVerified: true,
      hostProfile: {
        create: {
          companyName: 'Doe Hospitality',
          totalListings: 3,
          averageRating: 4.9,
          responseTime: 1,
          acceptanceRate: 100,
        },
      },
    },
  });

  // Create sample traveler users
  const traveler1 = await prisma.user.create({
    data: {
      email: 'traveler1@example.com',
      password: 'hashed_password_789',
      name: 'Alice Johnson',
      userType: 'TRAVELER',
      isVerified: true,
    },
  });

  const traveler2 = await prisma.user.create({
    data: {
      email: 'traveler2@example.com',
      password: 'hashed_password_012',
      name: 'Bob Williams',
      userType: 'TRAVELER',
      isVerified: true,
    },
  });

  // Create sample listings
  const listing1 = await prisma.listing.create({
    data: {
      hostId: host1.id,
      title: 'Cozy Manhattan Apartment with City Views',
      description: 'Modern 2-bedroom apartment in the heart of Manhattan. Perfect for families or groups. Close to subway, restaurants, and attractions.',
      category: 'APARTMENT',
      propertyType: 'ENTIRE_PLACE',
      location: '123 Fifth Avenue, New York, NY',
      latitude: 40.7306,
      longitude: -73.9352,
      city: 'New York',
      state: 'NY',
      country: 'United States',
      postalCode: '10001',
      basePrice: 250,
      pricePerUnit: 'NIGHT',
      maxGuests: 4,
      bedrooms: 2,
      bathrooms: 1,
      beds: 3,
      directBookingUrl: 'https://airbnb.com/rooms/123456',
      bookingPlatform: 'AIRBNB',
      amenities: ['wifi', 'kitchen', 'heating', 'air-conditioning', 'washer', 'dryer', 'tv'],
      rules: ['No smoking', 'No pets', 'No parties', 'Quiet hours after 10pm'],
      languages: ['English', 'Spanish'],
      isActive: true,
      isFeatured: true,
      images: {
        create: [
          {
            url: 'https://example.com/apartment-1.jpg',
            altText: 'Living room with city views',
            order: 1,
          },
          {
            url: 'https://example.com/apartment-2.jpg',
            altText: 'Master bedroom',
            order: 2,
          },
        ],
      },
    },
  });

  const listing2 = await prisma.listing.create({
    data: {
      hostId: host1.id,
      title: 'Sunny Beach House in Miami',
      description: 'Beautiful beachfront villa with direct access to the beach. Features pool, hot tub, and outdoor kitchen. Perfect for vacations.',
      category: 'VILLA',
      propertyType: 'ENTIRE_PLACE',
      location: '456 Ocean Drive, Miami, FL',
      latitude: 25.7907,
      longitude: -80.1300,
      city: 'Miami',
      state: 'FL',
      country: 'United States',
      postalCode: '33139',
      basePrice: 450,
      pricePerUnit: 'NIGHT',
      maxGuests: 8,
      bedrooms: 4,
      bathrooms: 3,
      beds: 6,
      directBookingUrl: 'https://booking.com/properties/789012',
      bookingPlatform: 'BOOKING_COM',
      amenities: ['wifi', 'pool', 'hot tub', 'beach access', 'kitchen', 'ac', 'washer', 'dryer', 'parking'],
      rules: ['No smoking', 'Pets allowed', 'Maximum 2 pets', 'Check-in after 3pm', 'Check-out before 11am'],
      languages: ['English', 'Spanish', 'Portuguese'],
      isActive: true,
      isFeatured: true,
      images: {
        create: [
          {
            url: 'https://example.com/beach-1.jpg',
            altText: 'Beach house exterior with ocean view',
            order: 1,
          },
          {
            url: 'https://example.com/beach-2.jpg',
            altText: 'Pool area',
            order: 2,
          },
        ],
      },
    },
  });

  const listing3 = await prisma.listing.create({
    data: {
      hostId: host2.id,
      title: 'Mountain Cabin Retreat in Aspen',
      description: 'Rustic yet modern cabin in the Colorado mountains. Perfect for hiking, skiing, and relaxation. Fireplace and deck with mountain views.',
      category: 'CABIN',
      propertyType: 'ENTIRE_PLACE',
      location: '789 Pine Road, Aspen, CO',
      latitude: 39.1911,
      longitude: -106.8175,
      city: 'Aspen',
      state: 'CO',
      country: 'United States',
      postalCode: '81611',
      basePrice: 350,
      pricePerUnit: 'NIGHT',
      maxGuests: 6,
      bedrooms: 3,
      bathrooms: 2,
      beds: 5,
      directBookingUrl: 'https://vrbo.com/123456',
      bookingPlatform: 'VRBO',
      amenities: ['wifi', 'kitchen', 'fireplace', 'hot tub', 'sauna', 'heating', 'tv', 'deck'],
      rules: ['No smoking', 'No pets', 'Quiet hours after 10pm', 'Check-in after 4pm'],
      languages: ['English'],
      isActive: true,
      isFeatured: false,
      images: {
        create: [
          {
            url: 'https://example.com/cabin-1.jpg',
            altText: 'Cabin exterior with mountain view',
            order: 1,
          },
        ],
      },
    },
  });

  // Add saved listings (favorites)
  await prisma.savedListing.create({
    data: {
      userId: traveler1.id,
      listingId: listing1.id,
    },
  });

  await prisma.savedListing.create({
    data: {
      userId: traveler2.id,
      listingId: listing2.id,
    },
  });

  console.log('✅ Database seeded successfully!');
  console.log(`👤 Created ${await prisma.user.count()} users (2 hosts, 2 travelers)`);
  console.log(`🏠 Created ${await prisma.listing.count()} listings with direct booking links`);
  console.log(`❤️ Created ${await prisma.savedListing.count()} saved listings (favorites)`);

  // Comment out these if they don't exist in your schema
  // await prisma.inquiry.create({...})
  // await prisma.review.create({...})
  // await prisma.notification.create({...})
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });