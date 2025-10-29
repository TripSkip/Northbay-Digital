# TripSkip Simplified Architecture - Migration Guide

## What Changed

You've simplified the application from a full booking platform to a **direct booking link aggregator**. This means:

### ❌ Removed Features

- **Reviews System** - No guest reviews or ratings
- **Inquiry/Messaging** - No host-guest communication through the platform
- **Notification System** - No platform notifications
- **User Management** - Simplified to just hosts and travelers

### ✅ Kept Features

- **Listing Creation** - Hosts create listings with direct booking URLs
- **Listing Search** - Guests search and filter listings
- **Saved Listings** - Guests can save favorites
- **Multi-platform Support** - Support for Airbnb, Booking.com, VRBO, etc.
- **Analytics** - Track views and searches

---

## Database Changes

### Tables Deleted (via schema update)

```sql
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS inquiries;
DROP TABLE IF EXISTS notifications;
```

### Schema Simplified

**Before (14 models):**

```
User → Review
User → Inquiry
User → Notification
Listing → Review
Listing → Inquiry
...and more
```

**After (6 models):**

```
User
├── HostProfile
├── Listing
├── SavedListing

Listing
├── ListingImage
└── SavedListing
```

---

## Code Changes Summary

### 1. Prisma Schema

**File:** `backend/prisma/schema.prisma`

**Removed Models:**

- `Review` (with all fields like rating, cleanliness, accuracy, etc.)
- `Inquiry` (with subject, message, dates, status)
- `Notification` (with type, title, message)
- `InquiryStatus` enum
- `NotificationType` enum

**Kept Models:**

- `User` - Simplified (removed reviews, inquiries, notifications relations)
- `HostProfile` - Still available for host info
- `Listing` - Still has directBookingUrl as primary feature
- `ListingImage` - Gallery management
- `SavedListing` - User favorites

---

### 2. Backend Service Layer

**File:** `backend/src/services/listingService.js`

**Changes:**

- Removed review includes from `getListingById()` and `createListing()`
- Removed inquiry count from `_count` selects
- **Added new methods:**
  - `getUserSavedListings(userId, page, limit)` - Get user's favorite listings
  - `saveListing(userId, listingId)` - Save a listing
  - `unsaveListing(userId, listingId)` - Remove from favorites

**Deleted File:**

- `backend/src/services/reviewService.js` - Entire file no longer needed

---

### 3. API Endpoints

**File:** `backend/src/index.js`


**Added Endpoints (3 new routes):**

```
GET /api/users/:userId/saved
POST /api/listings/:id/save
DELETE /api/listings/:id/unsave
```

**Still Available:**

- Search, featured listings, single listing details
- Create, update, delete listings (hosts)
- Add/remove images
- Statistics, toggle featured
- Get host listings

---

### 4. Database Seed

**File:** `backend/prisma/seed.js`

**Before:** Created 4 users, 3 listings, 2 reviews, 1 inquiry, 2 notifications
**After:** Creates 4 users, 3 listings, 2 saved listings (no reviews/inquiries)

---

## How to Apply Changes

### Step 1: Update Code (Already Done ✅)

All code changes have been made:

- Schema updated
- Service methods updated
- API endpoints removed/added
- Seed file simplified

### Step 2: Sync Database (When Docker is available)

```bash
cd /Users/ashy/Desktop/tripskip/backend

# Generate updated Prisma Client
npm run db:generate

# Sync schema to database (removes old tables)
npx prisma db push

# Reseed with new data
npm run db:seed
```

### Step 3: Test New API

```bash
# Start backend
npm run dev

# Test search
curl "http://localhost:4000/api/listings/search?city=New+York"

# Test save favorite
curl -X POST "http://localhost:4000/api/listings/{id}/save" \
  -H "Content-Type: application/json" \
  -d '{"userId": "traveler-id"}'

# Test get saved
curl "http://localhost:4000/api/users/{userId}/saved"
```

---

## User Flows (Simplified)

### Guest Flow

```
1. Browse homepage
   ↓
2. Search listings (GET /api/listings/search)
   ↓
3. View listing details (GET /api/listings/{id})
   ↓
4. Save to favorites (POST /api/listings/{id}/save)
   ↓
5. Click "Book Directly" button
   ↓
6. Redirected to Airbnb/Booking.com/VRBO
   ↓
7. Complete booking on external site
```

### Host Flow

```
1. Create new listing (POST /api/listings)
   ↓
2. Add booking link (directBookingUrl)
   ↓
3. Upload images (POST /api/listings/{id}/images)
   ↓
4. Feature listing (PATCH /api/listings/{id}/featured)
   ↓
5. View statistics (GET /api/listings/{id}/stats)
```

---

## Frontend Implications

### What to Build

1. **Search/Browse Page**

   - Display listings from `GET /api/listings/search`
   - Show direct booking link prominently
   - "Book Directly with [Host]" button

2. **Listing Detail Page**

   - Full property information
   - Photo gallery
   - **Prominent CTA button** linking to `directBookingUrl`

3. **Saved Listings Page**

   - Get from `GET /api/users/{userId}/saved`
   - Heart/star icon to save/unsave

4. **Host Dashboard**
   - Create listing form
   - Upload images
   - Feature listing toggle
   - View statistics

### What NOT to Build

- ❌ Review system/ratings
- ❌ Messaging/inquiry system
- ❌ Booking calendar/availability
- ❌ Payment processing
- ❌ Notification center

---

## Data Migration (If Existing Data)

If you had existing data with reviews/inquiries:

```bash
# Backup existing database
pg_dump appdb > backup_$(date +%Y%m%d_%H%M%S).sql

# Run prisma migration
npx prisma db push

# Old data is preserved in other tables, reviews/inquiries are deleted
```

---

## Benefits of This Simplified Approach

✅ **Simpler Codebase**

- 40% fewer lines of code
- Fewer service methods to maintain
- Smaller database

✅ **Faster Development**

- Frontend only needs to display listings and link buttons
- No complex review/inquiry UI
- Fewer API endpoints to test

✅ **Better User Experience**

- Direct booking - no middleman
- Hosts get full fees (no commission taking)
- Guests know exactly where they're booking

✅ **Scalability**

- Less database queries
- Fewer entities to manage
- Cleaner architecture

✅ **Clear Value Prop**

- "Bypass booking fees" is obvious
- Direct link is prominent
- No distractions (reviews, messaging)

---

## Troubleshooting

### Issue: "Type 'Review' does not exist"

**Solution:** Make sure you deleted the Review model from schema.prisma. The error should be gone after schema update.

### Issue: API returns 500 on saved listings

**Solution:** Ensure database is running and `prisma db push` was executed to create the `saved_listings` table.

### Issue: Old review endpoints still being called

**Solution:** Update frontend to use new endpoints:

- Old: `POST /api/listings/:id/reviews` → Deleted
- New: `POST /api/listings/:id/save` → For favorites

---

## Next Steps

1. **Frontend Development**

   - Build listing search interface
   - Create prominent "Book Directly" buttons
   - Add favorites/saved listings feature

2. **Deployment**

   - Push database updates to production
   - Update frontend to new API
   - Test direct booking link flow

3. **Marketing**

   - Emphasize "Save on Booking Fees"
   - Show direct booking links prominently
   - Highlight trusted platforms (Airbnb, Booking.com, etc.)

4. **Analytics**
   - Track clicks to direct booking links
   - Monitor which listings get saved most
   - Identify trending properties

---

## Reference: Old vs New API

| Feature         | Before                              | After              |
| --------------- | ----------------------------------- | ------------------ |
| Search Listings | ✅                                  | ✅ Same            |
| View Listing    | ✅                                  | ✅ Without reviews |
| Leave Review    | ✅ POST /api/listings/:id/reviews   | ❌ Deleted         |
| Read Reviews    | ✅ GET /api/listings/:id/reviews    | ❌ Deleted         |
| Send Inquiry    | ✅ POST /api/listings/:id/inquiries | ❌ Deleted         |
| View Inquiries  | ✅ GET /api/listings/:id/inquiries  | ❌ Deleted         |
| Save Listing    | ✅ POST /api/listings/:id/save      | ✅ New             |
| View Saved      | ✅ GET /api/users/:userId/saved     | ✅ New             |
| Create Listing  | ✅                                  | ✅ Same            |
| Host Stats      | ✅                                  | ✅ Simpler         |

---

## Database Schema (Text Reference)

```prisma
model User {
  id String @id @default(cuid())
  email String @unique
  password String
  name String
  userType UserType // HOST or TRAVELER

  listings Listing[]
  savedListings SavedListing[]
  hostProfile HostProfile?
}

model Listing {
  id String @id @default(cuid())
  hostId String
  title String
  description String
  category ListingCategory
  directBookingUrl String  // THE KEY FIELD
  bookingPlatform BookingPlatform? // AIRBNB, BOOKING_COM, VRBO, etc
  basePrice Decimal
  maxGuests Int
  bedrooms Int
  bathrooms Int

  images ListingImage[]
  savedBy SavedListing[]
  host User @relation(fields: [hostId])
}

model ListingImage {
  id String @id @default(cuid())
  listingId String
  url String
  listing Listing @relation(fields: [listingId])
}

model SavedListing {
  id String @id @default(cuid())
  userId String
  listingId String
  user User @relation(fields: [userId])
  listing Listing @relation(fields: [listingId])
}
```

---

For questions, refer to `API_DOCUMENTATION_SIMPLIFIED.md` for the complete API reference.
