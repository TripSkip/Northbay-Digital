'use client'

import { useState, useEffect } from 'react'

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    avatar: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('firebaseToken')
        if (!token) {
          setMessage('No authentication token found')
          return
        }
        
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
        const response = await fetch(`${apiUrl}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `Failed to fetch profile (${response.status})`)
        }

        const data = await response.json()
        setFormData({
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          bio: data.bio || '',
          avatar: data.avatar || '',
        })
      } catch (err) {
        console.error('Profile fetch error:', err)
        setMessage(err instanceof Error ? err.message : 'Failed to load profile')
      }
    }

    fetchProfile()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const token = localStorage.getItem('firebaseToken')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const response = await fetch(`${apiUrl}/api/users/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          bio: formData.bio,
          avatar: formData.avatar,
        }),
      })

      if (!response.ok) throw new Error('Failed to update profile')

      setMessage('Profile updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error(err)
      setMessage('Error updating profile. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-2">My Profile</h1>
      <p className="text-lg text-subtle mb-8">Manage your account information</p>

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

      <form onSubmit={handleSubmit} className="bg-surface rounded-xl shadow p-8 border border-muted space-y-6">
        <div>
          <label className="block text-sm font-semibold text-body mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-body mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="w-full px-4 py-3 border border-muted rounded-lg bg-muted text-subtle cursor-not-allowed"
          />
          <p className="text-xs text-subtle mt-1">Email cannot be changed</p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-body mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-body mb-2">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
            placeholder="Tell us about yourself..."
          />
        </div>

        <div className="border-t border-muted pt-6">
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-muted disabled:text-subtle transition font-semibold"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}
