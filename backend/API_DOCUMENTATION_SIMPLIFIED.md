# TripSkip Direct Booking Platform - Simplified API Documentation

## Overview

TripSkip is a **direct booking platform** that allows hosts to list properties with direct booking links from platforms like Airbnb, Booking.com, VRBO, etc. Guests can search for listings and click directly to book without any intermediary.

**Core Use Case:**

- ✅ **Hosts** create listings with direct booking URLs
- ✅ **Guests** search for listings and click the direct booking link
- ❌ No reviews system
- ❌ No inquiry/messaging system
- ❌ No booking management (guests go directly to the external platform)

---

## Database Schema (Simplified)

### Models

```
User (HOST | TRAVELER)
├── HostProfile (extended host info)
├── Listing[] (properties listed)
├── SavedListing[] (favorite listings)

Listing
├── ListingImage[] (gallery)
├── SavedListing[] (saved by users)
├── HostProfile (via host relationship)

SavedListing
├── User (who saved it)
└── Listing (what was saved)

ListingImage
└── Listing (which listing)
```

### Key Fields

**Listing (Most Important):**

- `directBookingUrl` - The actual booking link (Airbnb, Booking.com, etc.)
- `bookingPlatform` - Platform type (AIRBNB, BOOKING_COM, VRBO, etc.)
- `title`, `description` - Basic info
- `location`, `city`, `country` - Search filters
- `basePrice`, `pricePerUnit` - Cost information
- `amenities`, `rules` - Property details
- `images` - Photo gallery

---

## API Endpoints

### Base URL

```
http://localhost:4000
```

### Health Check

```
GET /health
Response: { ok: true, db: 1 }
```

---

## Listings API

### 1. Search Listings

```
GET /api/listings/search?city=New+York&maxPrice=500&minGuests=2
```

**Query Parameters:**

- `city` (optional) - Filter by city
- `country` (optional) - Filter by country
- `category` (optional) - APARTMENT, HOUSE, VILLA, CABIN, etc.
- `minPrice` (optional) - Minimum price per night
- `maxPrice` (optional) - Maximum price per night
- `minGuests` (optional) - Minimum guest capacity
- `query` (optional) - Search in title/description
- `page` (default: 1)
- `limit` (default: 20)

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Cozy Manhattan Apartment",
      "city": "New York",
      "country": "United States",
      "basePrice": 250,
      "pricePerUnit": "NIGHT",
      "maxGuests": 4,
      "directBookingUrl": "https://airbnb.com/rooms/123456",
      "bookingPlatform": "AIRBNB",
      "images": [
        {
          "url": "https://example.com/image.jpg",
          "altText": "Living room",
          "order": 1
        }
      ],
      "host": {
        "id": "uuid",
        "name": "John Smith",
        "avatar": "url"
      },
      "isSaved": false,
      "_count": {
        "savedBy": 5
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

---

### 2. Get Featured Listings

```
GET /api/listings/featured
```

**Response:** Array of featured listings (same format as search)

---

### 3. Get Single Listing Details

```
GET /api/listings/{id}?userId={userId}
```

**Query Parameters:**

- `userId` (optional) - To track if user saved it

**Response:**

```json
{
  "id": "uuid",
  "title": "Cozy Manhattan Apartment",
  "description": "Modern 2-bedroom apartment in the heart of Manhattan...",
  "category": "APARTMENT",
  "propertyType": "ENTIRE_PLACE",
  "location": "123 Fifth Avenue, New York, NY",
  "city": "New York",
  "country": "United States",
  "basePrice": 250,
  "pricePerUnit": "NIGHT",
  "maxGuests": 4,
  "bedrooms": 2,
  "bathrooms": 1,
  "beds": 3,
  "amenities": ["wifi", "kitchen", "heating", "ac"],
  "rules": ["No smoking", "No pets", "Quiet hours 10pm"],
  "languages": ["English", "Spanish"],
  "directBookingUrl": "https://airbnb.com/rooms/123456",
  "bookingPlatform": "AIRBNB",
  "isActive": true,
  "isFeatured": true,
  "views": 342,
  "isSaved": false,
  "images": [
    {
      "id": "uuid",
      "url": "https://example.com/image.jpg",
      "altText": "Living room",
      "order": 1
    }
  ],
  "host": {
    "id": "uuid",
    "name": "John Smith",
    "avatar": "url",
    "bio": "Experienced host...",
    "hostProfile": {
      "totalListings": 5,
      "averageRating": 4.8,
      "responseTime": 2
    }
  },
  "_count": {
    "savedBy": 15
  }
}
```

---

## Saved Listings API

### 1. Get User's Saved Listings

```
GET /api/users/{userId}/saved?page=1&limit=20
```

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "title": "...",
      "directBookingUrl": "..."
      // ... all listing fields
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 8,
    "pages": 1
  }
}
```

---

### 2. Save a Listing (Add to Favorites)

```
POST /api/listings/{listingId}/save
Content-Type: application/json

{
  "userId": "user-uuid"
}
```

**Response:**

```json
{
  "id": "uuid",
  "userId": "user-uuid",
  "listingId": "listing-uuid",
  "savedAt": "2024-10-20T12:00:00Z",
  "listing": {
    "id": "listing-uuid",
    "title": "...",
    "directBookingUrl": "..."
  }
}
```

---

### 3. Remove a Saved Listing

```
DELETE /api/listings/{listingId}/unsave
Content-Type: application/json

{
  "userId": "user-uuid"
}
```

**Response:**

```json
{
  "message": "Listing removed from favorites"
}
```

---

## Host Listing Management API

### 1. Get Host's Listings

```
GET /api/hosts/{hostId}/listings
```

**Response:**

```json
[
  {
    "id": "uuid",
    "title": "...",
    "views": 150,
    "savedBy": 12,
    "isFeatured": true
  }
]
```

---

### 2. Create Listing (Host Only)

```
POST /api/listings
Content-Type: application/json

{
  "hostId": "host-uuid",
  "title": "Beautiful Apartment",
  "description": "Modern apartment in downtown",
  "category": "APARTMENT",
  "propertyType": "ENTIRE_PLACE",
  "location": "100 Main St, Boston, MA",
  "city": "Boston",
  "country": "United States",
  "basePrice": 200,
  "pricePerUnit": "NIGHT",
  "maxGuests": 2,
  "bedrooms": 1,
  "bathrooms": 1,
  "beds": 1,
  "directBookingUrl": "https://airbnb.com/rooms/123456",
  "bookingPlatform": "AIRBNB",
  "amenities": ["wifi", "kitchen"],
  "rules": ["No smoking"],
  "languages": ["English"]
}
```

**Response:**

```json
{
  "id": "uuid",
  "hostId": "host-uuid",
  "title": "Beautiful Apartment",
  "views": 0,
  "isActive": true,
  "isFeatured": false,
  "images": [],
  "host": {
    "id": "host-uuid",
    "name": "John Smith"
  }
}
```

---

### 3. Update Listing (Host Only)

```
PUT /api/listings/{id}
Content-Type: application/json

{
  "hostId": "host-uuid",
  "title": "Updated Title",
  "description": "Updated description",
  "basePrice": 250,
  "amenities": ["wifi", "kitchen", "ac"]
  // ... other fields to update
}
```

---

### 4. Delete Listing (Host Only)

```
DELETE /api/listings/{id}
Content-Type: application/json

{
  "hostId": "host-uuid"
}
```

**Response:**

```json
{
  "message": "Listing deleted successfully"
}
```

---

### 5. Add Listing Images

```
POST /api/listings/{id}/images
Content-Type: application/json

{
  "hostId": "host-uuid",
  "images": [
    {
      "url": "https://example.com/image1.jpg",
      "altText": "Living room",
      "order": 1
    },
    {
      "url": "https://example.com/image2.jpg",
      "altText": "Bedroom",
      "order": 2
    }
  ]
}
```

---

### 6. Delete Listing Image

```
DELETE /api/listings/images/{imageId}
Content-Type: application/json

{
  "hostId": "host-uuid"
}
```

---

### 7. Get Listing Statistics

```
GET /api/listings/{id}/stats?hostId={hostId}
```

**Response:**

```json
{
  "listingId": "uuid",
  "title": "Beautiful Apartment",
  "views": 342,
  "savedCount": 15,
  "inquiries": 8,
  "averageRating": 4.8,
  "totalReviews": 12
}
```

---

### 8. Toggle Featured Status

```
PATCH /api/listings/{id}/featured
Content-Type: application/json

{
  "hostId": "host-uuid"
}
```

**Response:**

```json
{
  "id": "uuid",
  "isFeatured": true
}
```

---

## Booking Platforms Supported

The `bookingPlatform` enum supports:

- `AIRBNB` - Airbnb.com
- `BOOKING_COM` - Booking.com
- `VRBO` - VRBO.com (Expedia Group)
- `HOSTAWAY` - Hostaway platform
- `AIRBNB_DIRECT` - Direct Airbnb connection
- `HOTEL_OWN_WEBSITE` - Hotel's own website
- `OTHER` - Any other platform

---

## Listing Categories

```
APARTMENT, HOUSE, VILLA, CONDO, COTTAGE, CABIN, ROOM,
HOTEL, RESORT, HOSTEL, BOAT, OTHER
```

---

## Property Types

```
ENTIRE_PLACE, PRIVATE_ROOM, SHARED_ROOM
```

---

## Price Units

```
NIGHT, WEEK, MONTH, HOUR, PERSON_NIGHT
```

---

## Error Handling

All endpoints return errors in this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

**Common Status Codes:**

- `200` - Success
- `201` - Created
- `400` - Bad request (validation error)
- `401` - Unauthorized (missing hostId/userId)
- `404` - Not found
- `500` - Server error

---

## Example Workflows

### Workflow 1: Guest Searching and Booking

```
1. Guest searches for apartments in New York:
   GET /api/listings/search?city=New+York&maxPrice=300

2. Guest views listing details:
   GET /api/listings/{id}?userId={guestId}

3. Guest clicks "Book Directly" button → Goes to directBookingUrl
   (External platform - Airbnb, Booking.com, etc.)

4. Guest completes booking on external platform
```

### Workflow 2: Guest Saving Favorites

```
1. Guest finds listing they like:
   GET /api/listings/{id}

2. Guest saves it to favorites:
   POST /api/listings/{id}/save
   Body: { "userId": "guest-uuid" }

3. Guest views saved listings later:
   GET /api/users/{userId}/saved
```

### Workflow 3: Host Creating a Listing

```
1. Host creates new listing:
   POST /api/listings
   Body: {
     "hostId": "host-uuid",
     "title": "Beachfront Villa",
     "directBookingUrl": "https://vrbo.com/12345",
     "bookingPlatform": "VRBO",
     // ... other fields
   }

2. Host adds images:
   POST /api/listings/{id}/images
   Body: {
     "hostId": "host-uuid",
     "images": [...]
   }

3. Host features listing:
   PATCH /api/listings/{id}/featured
   Body: { "hostId": "host-uuid" }

4. Host views statistics:
   GET /api/listings/{id}/stats?hostId={hostId}
```

---

## Testing with cURL

### Search Listings

```bash
curl "http://localhost:4000/api/listings/search?city=New+York"
```

### Get Featured Listings

```bash
curl "http://localhost:4000/api/listings/featured"
```

### Get Listing Details

```bash
curl "http://localhost:4000/api/listings/{id}"
```

### Create Listing

```bash
curl -X POST "http://localhost:4000/api/listings" \
  -H "Content-Type: application/json" \
  -d '{
    "hostId": "host-id",
    "title": "Beautiful Apartment",
    "description": "Modern apartment",
    "category": "APARTMENT",
    "propertyType": "ENTIRE_PLACE",
    "location": "100 Main St, Boston, MA",
    "city": "Boston",
    "country": "United States",
    "basePrice": 200,
    "pricePerUnit": "NIGHT",
    "maxGuests": 2,
    "bedrooms": 1,
    "bathrooms": 1,
    "beds": 1,
    "directBookingUrl": "https://airbnb.com/rooms/123456",
    "bookingPlatform": "AIRBNB",
    "amenities": ["wifi", "kitchen"],
    "rules": ["No smoking"],
    "languages": ["English"]
  }'
```

### Save Listing

```bash
curl -X POST "http://localhost:4000/api/listings/{id}/save" \
  -H "Content-Type: application/json" \
  -d '{"userId": "user-uuid"}'
```

### Get Saved Listings

```bash
curl "http://localhost:4000/api/users/{userId}/saved"
```

---

## Notes

- This API does **not** handle bookings - all bookings go directly to the external platform
- No authentication/JWT implemented yet - use `hostId`/`userId` in request body (production: implement middleware)
- Images are expected to be URLs - no multipart file upload yet
- All timestamps are in ISO 8601 format
- Database uses PostgreSQL with Prisma ORM

---

## Next Steps

1. **Frontend**: Build React/Next.js components to display listings and direct booking buttons
2. **Authentication**: Implement JWT middleware for secure hostId/userId validation
3. **Image Upload**: Implement actual image upload functionality (multipart/form-data)
4. **Analytics**: Track clicks to direct booking URLs
5. **Admin Dashboard**: Monitor listings, hosts, and platform metrics
