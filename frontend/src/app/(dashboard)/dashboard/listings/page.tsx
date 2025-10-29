'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Listing {
  id: string
  title: string
  description: string
  location: string
  city: string
  basePrice: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  isActive: boolean
  isFeatured: boolean
  images?: Array<{ url: string }>
  _count?: { savedBy: number }
}

export default function MyListingsPage() {
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchListings()
  }, [])

  const fetchListings = async () => {
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('No authentication token found')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const url = `${apiUrl}/api/listings/my-listings`
      
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('[MyListings] Error response:', errorText)
        throw new Error('Failed to fetch listings')
      }

      const data = await response.json()
      setListings(Array.isArray(data.listings) ? data.listings : [])
    } catch (err) {
      console.error('[MyListings] Error:', err)
      setMessage('Failed to load listings')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (listingId: string) => {
    if (!confirm('Are you sure you want to delete this listing?')) return

    try {
      const token = localStorage.getItem('firebaseToken')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      
      const response = await fetch(`${apiUrl}/api/listings/${listingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) throw new Error('Failed to delete listing')

      setListings(listings.filter(l => l.id !== listingId))
      setMessage('Listing deleted successfully')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage('Error deleting listing')
      console.error(err)
    }
  }

  const handleToggleFeatured = async (listingId: string, isFeatured: boolean) => {
    try {
      const token = localStorage.getItem('firebaseToken')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      
      const response = await fetch(`${apiUrl}/api/listings/${listingId}/featured`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isFeatured: !isFeatured }),
      })

      if (!response.ok) throw new Error('Failed to update listing')

      setListings(
        listings.map(l =>
          l.id === listingId ? { ...l, isFeatured: !isFeatured } : l
        )
      )
    } catch (err) {
      console.error(err)
      setMessage('Error updating listing')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-subtle">Loading listings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">My Listings</h1>
          <p className="text-lg text-subtle">Manage your properties and bookings</p>
        </div>
        <Link
          href="/dashboard/listings/create"
          className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          + New Listing
        </Link>
      </div>

      {message && (
        <div
          className={`mb-8 p-4 rounded-lg ${
            message.includes('success')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}

      {listings.length === 0 ? (
        <div className="bg-surface rounded-xl border border-muted p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-subtle mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12a9 9 0 0110-8.8c4.37 0 8.14 2.88 9.37 6.82.2.56.3 1.15.3 1.78 0 4.97-4.03 9-9 9s-9-4.03-9-9z" />
          </svg>
          <h2 className="text-2xl font-bold text-body mb-2">No listings yet</h2>
          <p className="text-subtle mb-6">Create your first listing to get started</p>
          <Link
            href="/dashboard/listings/create"
            className="inline-flex px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Create First Listing
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-surface rounded-xl border border-muted overflow-hidden hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-48 h-48 bg-muted flex-shrink-0 overflow-hidden">
                  {listing.images && listing.images.length > 0 ? (
                    <img
                      src={listing.images[0].url}
                      alt={listing.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-muted">
                      <svg className="w-12 h-12 text-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-body">{listing.title}</h3>
                        <p className="text-subtle text-sm">{listing.location}</p>
                      </div>
                      {listing.isFeatured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <p className="text-subtle text-sm mb-4 line-clamp-2">{listing.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-subtle">Bedrooms</p>
                        <p className="text-lg font-semibold text-body">{listing.bedrooms}</p>
                      </div>
                      <div>
                        <p className="text-xs text-subtle">Bathrooms</p>
                        <p className="text-lg font-semibold text-body">{listing.bathrooms}</p>
                      </div>
                      <div>
                        <p className="text-xs text-subtle">Guests</p>
                        <p className="text-lg font-semibold text-body">{listing.maxGuests}</p>
                      </div>
                      <div>
                        <p className="text-xs text-subtle">Price/Night</p>
                        <p className="text-lg font-semibold text-body">${listing.basePrice}</p>
                      </div>
                    </div>

                    {/* Engagement Stats */}
                    {listing._count && (
                      <div className="flex gap-6 text-sm">
                        <span className="text-subtle">
                          ❤️ {listing._count.savedBy} saved
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-4 border-t border-muted">
                    <Link
                      href={`/dashboard/listings/${listing.id}/edit`}
                      className="flex-1 px-4 py-2 text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleToggleFeatured(listing.id, listing.isFeatured)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 border border-yellow-600 rounded-lg hover:bg-yellow-50 transition"
                    >
                      {listing.isFeatured ? 'Unfeature' : 'Feature'}
                    </button>

                    <button
                      onClick={() => handleDelete(listing.id)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 border border-red-600 rounded-lg hover:bg-red-50 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}