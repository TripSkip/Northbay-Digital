'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<'guest' | 'host' | null>(null)

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    setUserRole(role as 'guest' | 'host')
  }, [])

  return (
    <div className="min-h-screen">
      {userRole === 'guest' ? (
        // Guest Dashboard
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to TripSkip</h1>
          <p className="text-lg text-subtle mb-12">Discover amazing homes and experiences</p>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Explore */}
            <Link
              href="/explore"
              className="block p-8 bg-surface rounded-xl shadow hover:shadow-lg transition border border-muted hover:border-primary group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-body mb-2">Explore Listings</h3>
                  <p className="text-subtle">Browse and search for available properties</p>
                </div>
                <svg className="w-8 h-8 text-primary group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* Wishlist */}
            <Link
              href="/dashboard/wishlist"
              className="block p-8 bg-surface rounded-xl shadow hover:shadow-lg transition border border-muted hover:border-primary group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-body mb-2">My Wishlist</h3>
                  <p className="text-subtle">View your saved favorite listings</p>
                </div>
                <svg className="w-8 h-8 text-primary group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Host CTA */}
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Host?</h2>
            <p className="text-indigo-100 mb-6 text-lg">
              Share your property and start earning with TripSkip today
            </p>
            <Link
              href="/dashboard/host/onboarding"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition"
            >
              Get Started as a Host
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        // Host Dashboard
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Host Dashboard</h1>
          <p className="text-lg text-subtle mb-12">Manage your listings and bookings</p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface rounded-xl p-6 border border-muted">
              <p className="text-subtle text-sm mb-2">Total Listings</p>
              <p className="text-4xl font-bold text-body">0</p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-muted">
              <p className="text-subtle text-sm mb-2">Total Bookings</p>
              <p className="text-4xl font-bold text-body">0</p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-muted">
              <p className="text-subtle text-sm mb-2">Total Revenue</p>
              <p className="text-4xl font-bold text-body">$0</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Create Listing */}
            <Link
              href="/dashboard/listings/create"
              className="block p-8 bg-surface rounded-xl shadow hover:shadow-lg transition border border-muted hover:border-primary group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-body mb-2">Create Listing</h3>
                  <p className="text-subtle">Add a new property to your portfolio</p>
                </div>
                <svg className="w-8 h-8 text-primary group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* My Listings */}
            <Link
              href="/dashboard/listings"
              className="block p-8 bg-surface rounded-xl shadow hover:shadow-lg transition border border-muted hover:border-primary group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-body mb-2">My Listings</h3>
                  <p className="text-subtle">Manage your existing properties</p>
                </div>
                <svg className="w-8 h-8 text-primary group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
