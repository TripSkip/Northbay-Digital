# TripSkip Local Development Setup

## Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Firebase Project (with credentials)
- Supabase Project (for database)

## Backend Setup

### 1. Environment Variables

Create `.env` in `/backend`:

```bash
# Database (use Supabase pooler for development)
DATABASE_URL="postgresql://user:password@db.supabase.co:6543/postgres?schema=public"

# Firebase Admin SDK
FIREBASE_SERVICE_ACCOUNT_KEY='{"type":"service_account",...}'

# Server
NODE_ENV=development
PORT=3001
```

### 2. Start Backend

```bash
cd backend
npm install
docker-compose up
```

Backend will run on `http://localhost:3001`

## Frontend Setup

### 1. Environment Variables

Create `.env.local` in `/frontend`:

```bash
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001

# Firebase Web SDK
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 2. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

## API Routes

### Auth Routes

- `GET /api/auth/role` - Get/create user role (protected)
- `GET /api/auth/me` - Get current user profile (protected)

### User Routes

- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update profile (protected)
- `POST /api/users/host-profile` - Create/update host profile (protected)
- `GET /api/users/wishlist` - Get saved listings (protected)

### Listing Routes

- `GET /api/listings` - Get all listings
- `POST /api/listings` - Create listing (protected)
- `GET /api/listings/:id` - Get listing details
- `PUT /api/listings/:id` - Update listing (protected)
- `DELETE /api/listings/:id` - Delete listing (protected)
- `GET /api/listings/search` - Search listings
- `POST /api/listings/:id/save` - Save listing to wishlist (protected)
- `POST /api/listings/:id/unsave` - Remove from wishlist (protected)

## Testing the Flow

1. **Sign Up**

   - Go to http://localhost:3000/signup
   - Create account (defaults to guest role)

2. **Sign In**

   - Go to http://localhost:3000/signin
   - Login with email/password or Google

3. **Become a Host**

   - From dashboard, click "Become a Host"
   - Complete 2-step onboarding form
   - Role changes from guest to host

4. **Update Profile**
   - Go to Profile tab
   - Update user information

## Troubleshooting

### API Calls Failing

- Ensure `NEXT_PUBLIC_API_URL` is set correctly in `.env.local`
- Check backend is running: `curl http://localhost:3001/health`
- Check frontend console for actual error message

### Database Connection Issues

- Verify DATABASE_URL is correct (use Supabase pooler, not direct connection)
- Check Prisma migrations: `npx prisma migrate status`
- Reset database if needed: `npx prisma migrate reset`

### Firebase Authentication Issues

- Verify Firebase credentials in `.env` (backend) and `.env.local` (frontend)
- Check Firebase Console for enabled auth methods
- Ensure Google OAuth redirect URI includes localhost

### CORS Issues

- Backend has `cors()` enabled for all origins in development
- If issues persist, check backend is properly mounting routes

## Common Commands

```bash
# Backend
cd backend
npm install              # Install dependencies
docker-compose up       # Start database
npm run dev            # Start Express server
npx prisma studio     # Open database GUI

# Frontend
cd frontend
npm install            # Install dependencies
npm run dev           # Start Next.js dev server
npm run build         # Build for production
npm run lint          # Run ESLint

# Database (from backend directory)
npx prisma migrate dev --name "add_column"  # Create migration
npx prisma migrate reset --force            # Reset database
npx prisma generate                        # Generate Prisma client
```

## Deployment

### Backend (Railway)

1. Push code to GitHub
2. Connect GitHub repo to Railway
3. Set environment variables in Railway dashboard
4. Deploy

### Frontend (Vercel)

1. Connect GitHub repo to Vercel
2. Set `NEXT_PUBLIC_API_URL` to Railway backend URL
3. Deploy

## Notes

- All API calls require Firebase authentication token
- Token is stored in localStorage as `firebaseToken`
- User role is stored in localStorage as `userRole`
- Dashboard is protected - unauthenticated users redirect to signin
