"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<"guest" | "host" | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("firebaseToken");
    const role = localStorage.getItem("userRole");

    if (!token) {
      router.push("/signin");
    } else {
      setIsAuthenticated(true);
      setUserRole(role as "guest" | "host");
      setLoading(false);
    }
  }, [router]);

  const handleSignOut = () => {
    localStorage.removeItem("firebaseToken");
    localStorage.removeItem("userRole");
    setIsAuthenticated(false);
    setUserRole(null);
    router.push("/signin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-app">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-app text-body">
      {/* Navbar - Same as Explore */}
      <nav className="bg-surface border-b border-muted backdrop-blur supports-[backdrop-filter]:bg-surface sticky top-0 z-50">
        <div className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 flex items-center justify-between">
          {/* Left: brand + nav links */}
          <div className="flex items-center gap-8">
            <Link href="/explore" className="text-2xl font-bold text-body hover:text-primary">
              TripSkip
            </Link>

            {/* Navigation links */}
            <div className="hidden md:flex items-center gap-6">
              {userRole === "host" && (
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
              {userRole === "host" && (
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
          </div>

          {/* Right: CTA buttons */}
          <div className="flex items-center gap-2">
            {userRole === "guest" && (
              <Link
                href="/dashboard/host/onboarding"
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Become a Host
              </Link>
            )}
            {userRole === "host" && (
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8">{children}</main>
    </div>
  );
}
