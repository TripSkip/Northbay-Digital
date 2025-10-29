'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ExploreLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<'guest' | 'host' | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('firebaseToken')
    const role = localStorage.getItem('userRole')
    
    if (token && role) {
      setIsAuthenticated(true)
      setUserRole(role as 'guest' | 'host')
    }
    
    setLoading(false)
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('firebaseToken')
    localStorage.removeItem('userRole')
    setIsAuthenticated(false)
    setUserRole(null)
    router.push('/signin')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-app text-body">
  <nav className="bg-surface border-b border-muted backdrop-blur supports-[backdrop-filter]:bg-surface">
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 grid grid-cols-3 items-center gap-4">
          {/* Left: brand + nav links */}
          <div className="flex items-center gap-8 justify-self-start">
            <Link href="/explore" className="hover:opacity-80 transition" aria-label="TripSkip Home">
              <span className="text-2xl font-semibold tracking-tight text-white">TripSkip</span>
            </Link>

            {/* Navigation links (only show when authenticated) */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center gap-6">
                {userRole === 'host' && (
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-body hover:text-primary transition"
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  href="/explore"
                  className="text-sm font-medium text-body hover:text-primary transition"
                >
                  Explore
                </Link>
                <Link
                  href="/dashboard/wishlist"
                  className="text-sm font-medium text-body hover:text-primary transition"
                >
                  Wishlist
                </Link>
                {userRole === 'host' && (
                  <Link
                    href="/dashboard/listings"
                    className="text-sm font-medium text-body hover:text-primary transition"
                  >
                    My Listings
                  </Link>
                )}
                <Link
                  href="/dashboard/settings"
                  className="text-sm font-medium text-body hover:text-primary transition"
                >
                  Settings
                </Link>
              </div>
            )}
          </div>

          {/* Middle: Search bar */}
          <div className="hidden md:flex justify-self-center w-full max-w-2xl">
            <div className="w-full">
              <div className="flex items-center rounded-full border border-muted bg-surface pl-4 pr-1 py-1 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20">
                <input
                  type="text"
                  placeholder="Paste Airbnb/VRBO link or search destinations..."
                  className="flex-1 bg-transparent outline-none text-sm text-body placeholder-muted py-2"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white hover:bg-accent-hover transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.957l4.275 4.275a.75.75 0 1 0 1.06-1.06l-4.275-4.275A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-2 justify-self-end">
            {!isAuthenticated ? (
              <>
                <Link
                  href="/signin"
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium text-body bg-surface border border-accent hover:brightness-110"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium btn-primary bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                {userRole === 'guest' && (
                  <Link
                    href="/dashboard/host/onboarding"
                    className="hidden sm:inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Become a Host
                  </Link>
                )}
                {userRole === 'host' && (
                  <Link
                    href="/dashboard/listings/create"
                    className="hidden sm:inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Post Listing
                  </Link>
                )}
                <button
                  onClick={handleSignOut}
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
