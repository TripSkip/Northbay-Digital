# TripSkip Direct Booking Platform - Quick Start Guide

**✨ SIMPLIFIED VERSION:** Hosts create listings with direct booking links. Guests search and click to book directly.

## 🚀 Quick Setup

### 1. Start the Database (if not already running)

```bash
cd /Users/ashy/Desktop/tripskip
docker compose up -d postgres
```

### 2. Install Dependencies

```bash
cd backend
npm install
```

### 3. Set Up Database

```bash
# Generate Prisma Client
npm run db:generate

# Sync schema (removes old review/inquiry tables)
npx prisma db push

# Seed with sample data
npm run db:seed
```

### 4. Start the Backend Server

```bash
npm run dev
```

Server will start at: `http://localhost:4000`

---

## 📝 Sample Data

After seeding, you have:

**Hosts (2):**

- John Smith (john@example.com) - 2 listings
- Jane Doe (jane@example.com) - 1 listing

**Travelers (2):**

- Alice Johnson (traveler1@example.com)
- Bob Williams (traveler2@example.com)

**Sample Listings (3):**

1. **Manhattan Apartment** - $250/night → Airbnb direct link ✨
2. **Miami Beach House** - $450/night → Booking.com direct link ✨
3. **Aspen Mountain Cabin** - $350/night → VRBO direct link ✨

**Saved Listings (2):**

- Alice saved Manhattan Apartment
- Bob saved Miami Beach House

---

## 🧪 Test the API

### Search Listings

```bash
curl "http://localhost:4000/api/listings/search?city=New+York"
```

### Get Listing Details (with direct booking link!)

```bash
curl "http://localhost:4000/api/listings/<listing-id>"
```

### Save a Listing to Favorites

```bash
curl -X POST "http://localhost:4000/api/listings/<listing-id>/save" \
  -H "Content-Type: application/json" \
  -d '{"userId": "traveler1-id"}'
```

### Get User's Saved Listings

```bash
curl "http://localhost:4000/api/users/<user-id>/saved"
```

### Create Listing (as Host)

```bash
curl -X POST "http://localhost:4000/api/listings" \
  -H "Content-Type: application/json" \
  -d '{
    "hostId": "host-id-here",
    "title": "Beautiful Apartment",
    "description": "Modern apartment in downtown",
    "category": "APARTMENT",
    "propertyType": "ENTIRE_PLACE",
    "location": "100 Main St, Boston, MA",
    "city": "Boston",
    "country": "United States",
    "basePrice": 200,
    "maxGuests": 2,
    "bedrooms": 1,
    "bathrooms": 1,
    "beds": 1,
    "directBookingUrl": "https://airbnb.com/rooms/123456",
    "bookingPlatform": "AIRBNB",
```

---

## 📊 View Database

Open Prisma Studio to visualize your database:

```bash
npm run db:studio
```

This opens at `http://localhost:5555` with an interactive database browser.

---

## 🏗️ Project Structure

```
backend/
├── src/
│   ├── index.js                 # Main API server (search, listings, saved)
│   ├── lib/
│   │   └── prisma.js           # Prisma client instance
│   ├── services/
│   │   ├── listingService.js    # Listing CRUD, search, save
│   │   └── userService.js       # User management
│   └── generated/
│       └── prisma/             # Auto-generated Prisma types
├── prisma/
│   ├── schema.prisma           # Database schema (6 models)
│   ├── seed.js                 # Sample data (simplified)
│   └── migrations/             # Migration history
├── .env                        # Environment variables
├── package.json
├── API_DOCUMENTATION_SIMPLIFIED.md   # Complete API reference
└── DATABASE_SETUP.md           # Database documentation
```

---

## 🔧 Environment Variables

**`.env` file:**

```properties
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5433/appdb"
DB_HOST=postgres
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=appdb
```

---

## 📚 Core API Endpoints (Simplified)

| Method | Endpoint                      | Purpose                      |
| ------ | ----------------------------- | ---------------------------- |
| GET    | `/api/listings/search`        | Search listings with filters |
| GET    | `/api/listings/featured`      | Get featured listings        |
| GET    | `/api/listings/:id`           | Get listing details          |
| POST   | `/api/listings`               | Create listing (host)        |
| PUT    | `/api/listings/:id`           | Update listing (host)        |
| DELETE | `/api/listings/:id`           | Delete listing (host)        |
| POST   | `/api/listings/:id/save`      | Save to favorites            |
| DELETE | `/api/listings/:id/unsave`    | Remove from favorites        |
| GET    | `/api/users/:userId/saved`    | Get user's saved listings    |
| GET    | `/api/hosts/:hostId/listings` | Get host's listings          |

**Full API Documentation:** See `API_DOCUMENTATION_SIMPLIFIED.md`

---

## 🐛 Troubleshooting

### Database Connection Error

```
Can't reach database server at localhost:5433
```

**Solution:** Make sure Docker container is running:

```bash
docker compose up -d postgres
```

### Prisma Client Not Found

```
Error: Cannot find module '@prisma/client'
```

**Solution:** Generate Prisma Client:

```bash
npm run db:generate
```

### Tables Don't Exist

```
Error: The table `public.users` does not exist
```

**Solution:** Sync database schema:

```bash
npx prisma db push
npm run db:seed
```

### Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::4000
---

## 🎯 Next Steps

1. **Frontend Development** - Build search UI with prominent "Book Directly" buttons
2. **Authentication** - Implement JWT auth (replace `hostId`/`userId` in requests)
3. **Image Upload** - Implement multipart/form-data for actual image uploads
4. **Analytics** - Track clicks to direct booking URLs
5. **Admin Dashboard** - Manage platform, verify hosts, monitor listings

---

## 📚 Documentation

- **`MIGRATION_GUIDE.md`** - What changed from full platform to simplified version
- **`API_DOCUMENTATION_SIMPLIFIED.md`** - Complete API reference with examples
- **`DATABASE_SETUP.md`** - Database configuration and deployment

---

## 📖 Learning Resources

- **Prisma Docs**: https://www.prisma.io/docs/
- **Express.js**: https://expressjs.com/
- **PostgreSQL**: https://www.postgresql.org/docs/

Happy building! 🚀
```
