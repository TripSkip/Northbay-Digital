'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface SavedListing {
  id: string
  title: string
  image: string
  price: number
  location: string
  rating: number
  reviews: number
}

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<SavedListing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem('firebaseToken')
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
        const response = await fetch(`${apiUrl}/api/users/wishlist`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) throw new Error('Failed to fetch wishlist')

        const data = await response.json()
        setWishlist(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchWishlist()
  }, [])

  if (loading) {
    return (
      <div className="p-8">
        <div className="text-center">
          <p className="text-gray-600">Loading your wishlist...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Wishlist</h1>
      <p className="text-gray-600 mb-8">Saved properties you're interested in</p>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your wishlist is empty</p>
          <Link
            href="/explore"
            className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Explore Listings
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100">
                  ❤️
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{listing.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{listing.location}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-bold text-gray-900">${listing.price}/night</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">⭐ {listing.rating}</span>
                    <span className="text-xs text-gray-600">({listing.reviews})</span>
                  </div>
                </div>
                <Link
                  href={`/explore/${listing.id}`}
                  className="block w-full px-4 py-2 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
