'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Listing {
  id: string
  title: string
  image: string
  price: number
  location: string
  rating: number
  reviews: number
}

export default function ExploreListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `/api/listings${searchQuery ? `?search=${searchQuery}` : ''}`
        )

        if (!response.ok) throw new Error('Failed to fetch listings')

        const data = await response.json()
        setListings(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    const timer = setTimeout(fetchListings, 500)
    return () => clearTimeout(timer)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-bold mb-2">Explore Listings</h1>
          <p className="text-indigo-100 mb-6">Discover amazing homes and experiences</p>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by location, type, or name..."
              className="w-full px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-3 top-3 text-gray-600 hover:text-gray-900">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading listings...</p>
          </div>
        ) : listings.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No listings found</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Link
                key={listing.id}
                href={`/explore/${listing.id}`}
                className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group cursor-pointer"
              >
                <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Added to wishlist!')
                    }}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100"
                  >
                    🤍
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition">
                    {listing.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{listing.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${listing.price}
                      <span className="text-sm font-normal text-gray-600">/night</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">⭐ {listing.rating}</span>
                      <span className="text-xs text-gray-600">({listing.reviews})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
