# TripSkip User Workflow: Guest → Host

## Signup/Signin Process

### 1. User Lands on App

- Not authenticated → redirected to `/signin` or `/signup`

### 2. Signup (New Users)

**Path:** `/signup`

- User enters: **email, password, confirm password**
- ~~Role selection removed~~ (all users start as guests)
- Options: Email signup OR Google sign-in
- Firebase creates user account
- Frontend stores:
  - `firebaseToken` → localStorage
  - `userRole` → 'guest' (always by default)
- Redirects to `/dashboard`

### 3. Signin (Existing Users)

**Path:** `/signin`

- User enters: **email, password**
- Options: Email signin OR Google sign-in
- Firebase authenticates user
- Frontend stores:
  - `firebaseToken` → localStorage
  - `userRole` → from backend (guest or host)
- Redirects to `/dashboard`

---

## Dashboard Layout

**Path:** `/dashboard` (protected route group)

### Protected Middleware

- Checks if `firebaseToken` exists in localStorage
- If missing → redirects to `/signin`
- If exists → allows access

### Sidebar Navigation (Dynamic)

#### For Guests:

- Dashboard (home)
- Explore (browse listings)
- Wishlist (saved properties)
- Profile
- **Sign Out**
- **→ "Become a Host" CTA button**

#### For Hosts:

- Dashboard (home)
- Explore (browse listings)
- Wishlist (saved properties)
- **My Listings** (host section)
- **Post Listing** (host section)
- Profile
- **Sign Out**

---

## Guest User Flow

### 1. Guest Dashboard

**Path:** `/dashboard`

- Welcome message
- Quick actions:
  - "Explore Listings" → `/explore/listings`
  - "My Wishlist" → `/dashboard/wishlist`
- **"Ready to Host?" CTA card** → Click → Step 2

### 2. Explore Listings

**Path:** `/explore/listings`

- Browse all available properties
- Search by location/type/price
- Click listing card → `/explore/{id}` (view details)
- Heart icon → Save to wishlist (calls `/api/listings/{id}/save`)

### 3. Wishlist

**Path:** `/dashboard/wishlist`

- View all saved listings
- Remove from wishlist
- Click "View Details" → `/explore/{id}`

### 4. Profile Management

**Path:** `/dashboard/profile`

- Edit: First name, last name, phone, profile image
- Email is read-only (Firebase-managed)
- Save changes → `/api/users/profile` (PUT)

---

## Guest → Host Conversion

### Step 1: Click "Become a Host"

**Location:** Dashboard sidebar or dashboard hero card

- User clicks button
- Frontend updates `localStorage.userRole = 'host'`
- Redirects to `/dashboard/host/onboarding`

### Step 2: Host Onboarding

**Path:** `/dashboard/host/onboarding`

**Step 1 of Onboarding:**

- Your Name
- About You (bio)
- Phone Number

**Step 2 of Onboarding:**

- Bank Account (for payouts)
- Security note: "Your information is encrypted"

**On Submit:**

- Sends data to `/api/users/host-profile` (POST)
- Backend creates HostProfile
- Updates user `userType = 'HOST'` in database
- Redirects to `/dashboard`

### Step 3: Host Dashboard

**Path:** `/dashboard`

- Sidebar now shows "Hosting" section:
  - My Listings (view/edit properties)
  - Post Listing (create new)
- Dashboard shows host stats:
  - Total Listings: 0
  - Total Bookings: 0
  - Revenue: $0

---

## Host User Flow

### 1. Post Listing

**Path:** `/dashboard/listings/create`

- TBD: Form for property details
- Upload photos
- Set pricing, availability, amenities
- Saves to `/api/listings` (POST)

### 2. My Listings

**Path:** `/dashboard/listings`

- View all host's properties
- Edit/Delete listings
- View bookings per property
- Manage availability calendar

### 3. Listing Details

**Path:** `/explore/{id}`

- Full listing details (guest view)
- Book button (if guest)
- Edit button (if owner/host)

---

## Key API Endpoints

| Method | Endpoint                  | Auth | Description              |
| ------ | ------------------------- | ---- | ------------------------ |
| POST   | `/api/auth/signup`        | ✗    | Create Firebase user     |
| POST   | `/api/auth/signin`        | ✗    | Authenticate user        |
| GET    | `/api/users/profile`      | ✓    | Get current user profile |
| PUT    | `/api/users/profile`      | ✓    | Update user profile      |
| POST   | `/api/users/host-profile` | ✓    | Create host profile      |
| GET    | `/api/listings`           | ✗    | Get all listings         |
| GET    | `/api/listings/{id}`      | ✗    | Get single listing       |
| POST   | `/api/listings`           | ✓    | Create listing (host)    |
| PUT    | `/api/listings/{id}`      | ✓    | Update listing (host)    |
| DELETE | `/api/listings/{id}`      | ✓    | Delete listing (host)    |
| POST   | `/api/listings/{id}/save` | ✓    | Save to wishlist         |
| GET    | `/api/users/wishlist`     | ✓    | Get wishlist             |

---

## LocalStorage Keys

| Key             | Value                   | Lifetime               |
| --------------- | ----------------------- | ---------------------- |
| `firebaseToken` | Firebase ID token (JWT) | Session (until logout) |
| `userRole`      | 'guest' \| 'host'       | Session (until logout) |

---

## Frontend Folder Structure

```
frontend/src/app/
├── layout.tsx (root layout)
├── page.tsx (home)
│
├── (auth)/
│   ├── signin/page.tsx ✓
│   └── signup/page.tsx ✓
│
├── (dashboard)/
│   ├── layout.tsx (protected + sidebar) ✓
│   ├── dashboard/
│   │   ├── page.tsx (guest/host dashboard) ✓
│   │   ├── wishlist/page.tsx ✓
│   │   ├── profile/page.tsx ✓
│   │   ├── host/
│   │   │   └── onboarding/page.tsx ✓
│   │   └── listings/
│   │       ├── page.tsx (host's listings - TBD)
│   │       ├── create/page.tsx (create listing - TBD)
│   │       └── [id]/
│   │           └── edit/page.tsx (edit listing - TBD)
│
├── explore/
│   ├── page.tsx (existing map view)
│   ├── listings/page.tsx ✓ (grid view)
│   └── [id]/page.tsx (listing details - TBD)
│
└── pricing/page.tsx (TBD)
```

---

## Next Steps

1. ✅ Signup flow (guest-only)
2. ✅ Signin flow
3. ✅ Dashboard layout (protected)
4. ✅ Guest dashboard
5. ✅ Host onboarding
6. ✅ Guest → Host conversion
7. ⏳ Post Listing page
8. ⏳ My Listings page
9. ⏳ Listing Details page
10. ⏳ Wishlist API integration
11. ⏳ Profile API integration
12. ⏳ Host profile API integration
13. ⏳ Stripe integration (payments)
14. ⏳ Email notifications
15. ⏳ CSV upload (Channel Manager)

---

## Testing Checklist

- [ ] Signup as guest with email
- [ ] Signup with Google
- [ ] Signin with email
- [ ] Signin with Google
- [ ] Guest dashboard loads
- [ ] Browse explore/listings
- [ ] Save to wishlist
- [ ] View profile
- [ ] Click "Become a Host"
- [ ] Complete onboarding
- [ ] Host dashboard loads
- [ ] Verify sidebar changes
- [ ] Verify localStorage updates
- [ ] Signout and verify redirect to signin
- [ ] Verify protected routes (no token = redirect to signin)
