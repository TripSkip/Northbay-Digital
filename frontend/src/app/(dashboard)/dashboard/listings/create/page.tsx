'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateListingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'APARTMENT',
    propertyType: 'ENTIRE_PLACE',
    location: '',
    city: '',
    state: '',
    country: 'United States',
    postalCode: '',
    basePrice: '',
    maxGuests: '',
    bedrooms: '',
    bathrooms: '',
    beds: '',
    directBookingUrl: '',
    bookingPlatform: 'AIRBNB',
    amenities: '',
    rules: '',
    languages: 'English',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('No authentication token found')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      
      // Format data for API
      const listingData = {
        ...formData,
        basePrice: Number(formData.basePrice),
        maxGuests: Number(formData.maxGuests),
        bedrooms: Number(formData.bedrooms),
        bathrooms: Number(formData.bathrooms),
        beds: Number(formData.beds),
        amenities: formData.amenities.split(',').map(a => a.trim()).filter(Boolean),
        rules: formData.rules.split(',').map(r => r.trim()).filter(Boolean),
        languages: formData.languages.split(',').map(l => l.trim()).filter(Boolean),
      }

      const response = await fetch(`${apiUrl}/api/listings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(listingData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to create listing')
      }

      const data = await response.json()
      setMessage('Listing created successfully!')
      setTimeout(() => {
        router.push('/dashboard/listings')
      }, 1500)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error creating listing'
      setMessage(errorMessage)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-2">Create Listing</h1>
      <p className="text-lg text-subtle mb-8">Add a new property to your portfolio</p>

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

      <form onSubmit={handleSubmit} className="bg-surface rounded-xl shadow p-8 border border-muted space-y-8">
        {/* Basic Information */}
        <div>
          <h2 className="text-2xl font-bold text-body mb-6">Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Property Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="e.g., Modern Downtown Apartment"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="Describe your property, amenities, and what makes it special..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-body mb-2">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                >
                  <option value="APARTMENT">Apartment</option>
                  <option value="HOUSE">House</option>
                  <option value="VILLA">Villa</option>
                  <option value="CABIN">Cabin</option>
                  <option value="CONDO">Condo</option>
                  <option value="BUNGALOW">Bungalow</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-body mb-2">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                >
                  <option value="ENTIRE_PLACE">Entire Place</option>
                  <option value="PRIVATE_ROOM">Private Room</option>
                  <option value="SHARED_ROOM">Shared Room</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="border-t border-muted pt-8">
          <h2 className="text-2xl font-bold text-body mb-6">Location</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Address</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="e.g., 123 Main St, Boston, MA"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-body mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                  placeholder="Boston"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-body mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                  placeholder="MA"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-body mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                  placeholder="02101"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="border-t border-muted pt-8">
          <h2 className="text-2xl font-bold text-body mb-6">Property Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="2"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
                min="0"
                step="0.5"
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="1"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Beds</label>
              <input
                type="number"
                name="beds"
                value={formData.beds}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Max Guests</label>
              <input
                type="number"
                name="maxGuests"
                value={formData.maxGuests}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="4"
              />
            </div>
          </div>
        </div>

        {/* Pricing & Booking */}
        <div className="border-t border-muted pt-8">
          <h2 className="text-2xl font-bold text-body mb-6">Pricing & Booking</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Base Price per Night ($)</label>
              <input
                type="number"
                name="basePrice"
                value={formData.basePrice}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="200"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-body mb-2">Booking Platform</label>
                <select
                  name="bookingPlatform"
                  value={formData.bookingPlatform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                >
                  <option value="AIRBNB">Airbnb</option>
                  <option value="VRBO">VRBO</option>
                  <option value="BOOKING">Booking.com</option>
                  <option value="DIRECT">Direct</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-body mb-2">Direct Booking URL</label>
                <input
                  type="url"
                  name="directBookingUrl"
                  value={formData.directBookingUrl}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                  placeholder="https://airbnb.com/rooms/123456"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Amenities & Rules */}
        <div className="border-t border-muted pt-8">
          <h2 className="text-2xl font-bold text-body mb-6">Amenities & Rules</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Amenities (comma-separated)</label>
              <input
                type="text"
                name="amenities"
                value={formData.amenities}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="WiFi, Kitchen, Pool, AC, Washer, Dryer"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">House Rules (comma-separated)</label>
              <input
                type="text"
                name="rules"
                value={formData.rules}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="No smoking, No pets, No parties, Quiet hours after 10pm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Languages (comma-separated)</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="English, Spanish, French"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="border-t border-muted pt-8">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-muted disabled:text-subtle transition font-semibold"
          >
            {loading ? 'Creating Listing...' : 'Create Listing'}
          </button>
        </div>
      </form>
    </div>
  )
}