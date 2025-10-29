# API URL Configuration Fix

## Problem

The frontend was making API calls to relative paths like `/api/users/host-profile`, which on the frontend running at `localhost:3000` would resolve to `localhost:3000/api/users/host-profile` instead of the backend at `localhost:3001/api/users/host-profile`. This caused the requests to fail with a "SyntaxError: The string did not match the expected pattern" because the frontend server was returning an HTML 404 error instead of JSON.

## Solution

Added `NEXT_PUBLIC_API_URL` environment variable to configure the backend URL.

### Changes Made

1. **Updated `.env.local`**

   - Added: `NEXT_PUBLIC_API_URL=http://localhost:3001`
   - For production on Railway/Vercel, this would be set to the Railway backend URL

2. **Updated API calls in frontend files:**

   - `/frontend/src/app/(auth)/signin/page.tsx` - Updated both email and Google sign-in to use API URL
   - `/frontend/src/app/(dashboard)/dashboard/host/onboarding/page.tsx` - Updated host profile submission
   - `/frontend/src/app/(dashboard)/dashboard/profile/page.tsx` - Updated profile fetch and update calls
   - `/frontend/src/app/(dashboard)/dashboard/wishlist/page.tsx` - Updated wishlist fetch

3. **Created utility helpers** at `/frontend/src/lib/api.ts`
   - `apiCall()` - Makes API calls with proper URL prepending
   - `apiCallWithAuth()` - Makes authenticated calls with Bearer token

### Pattern Used

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
const response = await fetch(`${apiUrl}/api/endpoint`, options);
```

## Testing

1. Restart the frontend dev server to pick up the new env variable
2. Try the "Become a Host" flow again - should now connect to backend successfully
3. Check browser DevTools Console - should no longer see the SyntaxError

## For Production

When deploying to Vercel + Railway:

1. Set `NEXT_PUBLIC_API_URL` to your Railway backend URL (e.g., `https://your-backend.railway.app`)
2. Vercel will automatically expose this via environment variable UI
3. No code changes needed - just environment configuration

## Future Improvements

- Use the helper functions in `/frontend/src/lib/api.ts` instead of repeating the pattern
- Consider moving all API calls to a centralized API layer
- Add proper error handling for network failures
