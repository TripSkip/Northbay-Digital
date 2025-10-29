# TripSkip Architecture Summary

**Status:** ✅ Simplified & Ready for Development  
**Version:** 2.0 - Direct Booking Platform  
**Date:** October 20, 2025

---

## 🎯 Core Concept

TripSkip is a **direct booking link aggregator platform**:

1. **Hosts** create listings and provide direct booking URLs (from Airbnb, Booking.com, VRBO, etc.)
2. **Guests** search for listings and click the direct link to book
3. **Platform** handles search, discovery, and favorites - NOT booking/payments/reviews

**Key Differentiator:** We're a discovery/aggregation platform, not a booking platform.

---

## 🏗️ Technology Stack

### Backend

- **Framework:** Node.js + Express.js
- **Database:** PostgreSQL (Docker, cloud-ready)
- **ORM:** Prisma v6.17.1
- **Port:** 4000

### Frontend (Future)

- **Framework:** Next.js (TypeScript)
- **Architecture:** Component-based UI

### DevOps

- **Containerization:** Docker Compose
- **Version Control:** Git/GitHub
- **CI/CD:** GitHub Actions

---

## 📊 Database Architecture

### Models (6 total)

```
User (Hosts & Travelers)
├── HostProfile (extended info for hosts)
├── Listing[] (multiple listings)
│   ├── ListingImage[] (photo gallery)
│   └── SavedListing[] (saved by users)
└── SavedListing[] (user's favorites)

SavedListing (join table)
├── User (who saved)
└── Listing (what they saved)

ListingImage (photo gallery)
└── Listing (belongs to)
```

### Key Fields

**User:**

- `id`, `email`, `password`, `name`, `userType` (HOST | TRAVELER)
- `avatar`, `bio`, `phone`, `isVerified`

**HostProfile:**

- `companyName`, `taxId`, `payoutEmail`, `bankAccount`
- `totalListings`, `totalBookings`, `averageRating`, `responseTime`
- `acceptanceRate`, `cancellationPolicy`

**Listing (The Core):**

- `title`, `description`, `category` (APARTMENT, HOUSE, VILLA, etc.)
- `location`, `city`, `country`, `latitude`, `longitude`
- `basePrice`, `pricePerUnit` (NIGHT, WEEK, MONTH, etc.)
- `maxGuests`, `bedrooms`, `bathrooms`, `beds`
- **`directBookingUrl`** ⭐ (THE MAIN FEATURE - link to external booking site)
- **`bookingPlatform`** ⭐ (AIRBNB, BOOKING_COM, VRBO, HOSTAWAY, etc.)
- `amenities[]`, `rules[]`, `languages[]`
- `isActive`, `isFeatured`, `views`

**ListingImage:**

- `url`, `altText`, `order` (for gallery sorting)

**SavedListing:**

- `userId`, `listingId`, `savedAt` (join table for favorites)

---

## 🔌 API Architecture

### 14 Active Endpoints

```
SEARCH & BROWSE (3)
├── GET /api/listings/search              - Filter by city, price, category, guests
├── GET /api/listings/featured            - Get featured listings
└── GET /api/listings/:id                 - Single listing details

SAVED LISTINGS / FAVORITES (3)
├── GET /api/users/:userId/saved          - User's favorites
├── POST /api/listings/:id/save           - Save to favorites
└── DELETE /api/listings/:id/unsave       - Remove from favorites

HOST LISTING MANAGEMENT (8)
├── POST /api/listings                    - Create listing
├── PUT /api/listings/:id                 - Update listing
├── DELETE /api/listings/:id              - Delete listing
├── GET /api/hosts/:hostId/listings       - Host's all listings
├── POST /api/listings/:id/images         - Add photos
├── DELETE /api/listings/images/:imageId  - Remove photo
├── GET /api/listings/:id/stats           - View stats
└── PATCH /api/listings/:id/featured      - Toggle featured
```

### Response Format

All endpoints return consistent JSON:

```json
{
  "data": { ... },
  "pagination": { "page": 1, "limit": 20, "total": 100 },
  "error": null
}
```

---

## 📁 Project Structure

```
tripskip/
├── backend/                              # Node.js server
│   ├── src/
│   │   ├── index.js                     # Express app + all routes (14 endpoints)
│   │   ├── lib/
│   │   │   └── prisma.js               # Prisma Client singleton
│   │   └── services/
│   │       ├── listingService.js        # Listing CRUD, search, stats
│   │       └── userService.js           # User management
│   ├── prisma/
│   │   ├── schema.prisma                # Database schema (6 models)
│   │   ├── seed.js                      # Sample data (simplified)
│   │   └── migrations/                  # Migration history
│   ├── .env                             # Environment variables
│   ├── package.json                     # Dependencies
│   ├── nodemon.json                     # Dev server config
│   ├── Dockerfile                       # Container image
│   ├── API_DOCUMENTATION_SIMPLIFIED.md  # Full API reference
│   └── DATABASE_SETUP.md                # Database documentation
│
├── frontend/                             # Next.js client (React/TypeScript)
│   ├── src/app/
│   │   ├── (auth)/                      # Authentication pages
│   │   ├── dashboard/                   # Host dashboard
│   │   ├── explore/                     # Guest search/browse
│   │   └── pricing/                     # Pricing page
│   ├── public/                          # Static assets
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── Dockerfile
│
├── docker-compose.yml                   # PostgreSQL + services
├── .github/workflows/ci.yml             # GitHub Actions CI/CD
├── QUICK_START.md                       # Setup guide
├── MIGRATION_GUIDE.md                   # Changes from old version
├── ARCHITECTURE_SUMMARY.md              # This file
└── README.md
```

---

## 🔄 Data Flow

### Guest Journey (Search → Direct Booking)

```
1. Guest opens frontend
2. Guest searches: GET /api/listings/search?city=New+York
3. Backend queries Listing table with filters
4. Returns matching listings with directBookingUrl
5. Guest clicks "BOOK DIRECTLY" button
6. Browser redirects to: listing.directBookingUrl
7. Guest completes booking on Airbnb/Booking.com/VRBO
8. (Optional) Guest can save listing: POST /api/listings/:id/save
```

### Host Journey (Create & Manage)

```
1. Host creates listing: POST /api/listings
   - Provides directBookingUrl (e.g., https://airbnb.com/rooms/123456)
   - Provides bookingPlatform (AIRBNB)
   - Provides title, description, amenities, etc.
2. Host uploads images: POST /api/listings/:id/images
3. Host can edit: PUT /api/listings/:id
4. Host views stats: GET /api/listings/:id/stats (views count)
5. Host features listing: PATCH /api/listings/:id/featured
```

---

## 🔐 Security Considerations

### Current (Demo)

```javascript
// Today: hostId/userId in request body
POST /api/listings
Body: { "hostId": "123", "title": "..." }
// ⚠️ NOT SECURE - anyone can claim any hostId
```

### Future (Production)

```javascript
// With JWT auth middleware:
POST /api/listings
Headers: { "Authorization": "Bearer JWT_TOKEN" }
Body: { "title": "..." }
// ✅ SECURE - hostId extracted from verified JWT
```

### Database Security

- PostgreSQL connections pooled
- Environment variables for credentials
- Password hashing ready (add bcrypt before launch)

---

## 📈 Scalability

### Current Limitations

- Single Node.js process (needs PM2 for production)
- PostgreSQL on localhost:5433 (needs cloud migration)
- No caching layer (add Redis for high-traffic)

### Scaling Path

```
Development (Now)
    ↓
Staging (Docker + Cloud DB)
    ↓
Production (Load balancer, Redis cache, CDN for images)
    ↓
Global (Multi-region, database replication)
```

---

## 🧪 Testing the System

### Setup (5 minutes)

```bash
cd /Users/ashy/Desktop/tripskip
docker compose up -d postgres
cd backend
npm install
npx prisma db push
npm run db:seed
npm run dev
```

### Test Search

```bash
# Search New York apartments under $300/night
curl "http://localhost:4000/api/listings/search?city=New+York&maxPrice=300"

# Response includes: title, price, directBookingUrl, images, host info
```

### Test Create Listing

```bash
curl -X POST "http://localhost:4000/api/listings" \
  -H "Content-Type: application/json" \
  -d '{
    "hostId": "host-uuid-here",
    "title": "Beach Villa",
    "directBookingUrl": "https://vrbo.com/1234567",
    "bookingPlatform": "VRBO",
    ...
  }'
```

---

## 🚀 Deployment Checklist

### Before Production

- [ ] Implement JWT authentication middleware
- [ ] Add password hashing (bcrypt)
- [ ] Set up SSL/TLS (HTTPS)
- [ ] Configure PostgreSQL in cloud (AWS RDS, Railway, Vercel Postgres, etc.)
- [ ] Add rate limiting on endpoints
- [ ] Set up error logging (Sentry, LogRocket)
- [ ] Add email verification for hosts
- [ ] Implement image upload to S3/CloudFront
- [ ] Set up payment tracking (if platform takes commission)
- [ ] Add API documentation to frontend

### Infrastructure

- [ ] Use PM2 or similar for process management
- [ ] Add Redis for caching
- [ ] Set up GitHub Actions for automated tests/deployment
- [ ] Use environment-specific .env files
- [ ] Add database backups (daily)
- [ ] Monitor database performance

---

## 🎯 Development Priorities

### Phase 1: MVP (Current)

- ✅ Backend API complete
- ✅ Database schema finalized
- ✅ Search & listing endpoints working
- ⏳ Frontend: Search UI + Listing detail + Direct booking button

### Phase 2: Authentication

- [ ] User registration/login
- [ ] JWT tokens
- [ ] Email verification
- [ ] Host verification

### Phase 3: Host Dashboard

- [ ] List management
- [ ] Image uploads
- [ ] Analytics dashboard
- [ ] Performance metrics

### Phase 4: Analytics

- [ ] Track external clicks
- [ ] Popular listings
- [ ] Search trends
- [ ] Host performance metrics

### Phase 5: Additional Features

- [ ] Mobile app (React Native)
- [ ] Admin dashboard
- [ ] Platform commission tracking
- [ ] Advanced search filters
- [ ] Saved searches

---

## 📚 Key Files Reference

| File                                     | Purpose                 | Status      |
| ---------------------------------------- | ----------------------- | ----------- |
| `backend/src/index.js`                   | Express server + routes | ✅ Complete |
| `backend/prisma/schema.prisma`           | Database schema         | ✅ Complete |
| `backend/src/services/listingService.js` | Listing business logic  | ✅ Complete |
| `API_DOCUMENTATION_SIMPLIFIED.md`        | Full API docs           | ✅ Complete |
| `QUICK_START.md`                         | Setup instructions      | ✅ Complete |
| `frontend/src/app/page.tsx`              | Homepage                | ⏳ Todo     |
| `frontend/src/app/explore/page.tsx`      | Search/browse           | ⏳ Todo     |
| `frontend/src/app/dashboard/page.tsx`    | Host dashboard          | ⏳ Todo     |

---

## 🆚 Comparison: Before vs After

| Aspect       | Before | After |
| ------------ | ------ | ----- |
| Models       | 14     | 6     |
| Endpoints    | 33     | 14    |
| Complexity   | High   | Low   |
| Reviews      | ✅     | ❌    |
| Messaging    | ✅     | ❌    |
| Direct Links | ✅     | ✅    |
| Search       | ✅     | ✅    |
| Favorites    | ✅     | ✅    |

---

## 💡 Quick Tips

### For Frontend Developers

- Use `directBookingUrl` in button/link: `<a href={listing.directBookingUrl}>`
- Display `bookingPlatform` to show where it redirects (Airbnb logo, etc.)
- Call `/api/listings/search` with filters for dynamic search
- Use `/api/listings/:id` to get full details

### For Backend Developers

- All endpoints in `src/index.js` - easy to find and modify
- Business logic in `services/listingService.js` - keep it organized
- Add new endpoint → add route in `index.js` → add method in service
- Test with cURL or Postman before building frontend

### For DevOps

- `docker-compose.yml` manages PostgreSQL
- Environment variables in `.env` file
- CI/CD already set up in `.github/workflows/ci.yml`
- Database synced with `npx prisma db push`

---

## ❓ Common Questions

**Q: Why no reviews?**
A: Guests leave reviews on the external booking site (Airbnb, Booking.com). We don't duplicate that.

**Q: How do guests contact hosts?**
A: Through the external platform where they're booking.

**Q: Do we handle payments?**
A: No. Payment goes directly to the external platform. We don't process money.

**Q: Is this scalable?**
A: Yes. The architecture is simple, which makes it easy to scale horizontally.

**Q: Can we add features later?**
A: Absolutely! The database and API are modular. Add reviews, messaging, etc. as needed.

---

## 🎓 Learning Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Express.js Guide](https://expressjs.com/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html)
- [REST API Best Practices](https://restfulapi.net/)
- [Next.js Documentation](https://nextjs.org/docs)

---

**Version:** 2.0  
**Last Updated:** October 20, 2025  
**Maintainer:** TripSkip Development Team
