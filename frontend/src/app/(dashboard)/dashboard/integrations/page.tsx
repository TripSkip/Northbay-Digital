'use client'

import { useState, useEffect } from 'react'

interface Connection {
  id: string
  platform: string
  isActive: boolean
  lastSyncedAt: string | null
  syncStatus: string
  syncError: string | null
}

interface PreviewListing {
  title: string
  city: string
  country: string
  bedrooms: number
  bathrooms: number
  basePrice: number
  directBookingUrl: string
  images: { url: string }[]
}

export default function IntegrationsPage() {
  const [channelType, setChannelType] = useState<'hostaway' | 'lodgify'>('lodgify')
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info')
  const [connections, setConnections] = useState<Connection[]>([])
  const [listings, setListings] = useState<PreviewListing[]>([])
  const [importing, setImporting] = useState(false)

  useEffect(() => {
    fetchConnections()
  }, [])

  const showMessage = (msg: string, type: 'success' | 'error' | 'info' = 'info') => {
    setMessage(msg)
    setMessageType(type)
    // Auto-clear success messages
    if (type === 'success') {
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const fetchConnections = async () => {
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) return

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${apiUrl}/api/channels/status`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.ok) {
        const data = await res.json()
        setConnections(data.connections || [])
      }
    } catch (err) {
      console.error('Error fetching connections:', err)
    }
  }

  const handleConnect = async () => {
    if (channelType === 'hostaway') {
      showMessage('Hostaway is already integrated. Contact support for help.', 'info')
      return
    }

    if (!apiKey.trim()) {
      showMessage('Please enter your Lodgify API key', 'error')
      return
    }

    setLoading(true)
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('Not authenticated')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${apiUrl}/api/channels/lodgify/connect`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ apiKey }),
      })

      const data = await res.json()

      if (data.success) {
        showMessage('Lodgify connected successfully!', 'success')
        setApiKey('')
        fetchConnections()
      } else {
        showMessage(`Error: ${data.error}`, 'error')
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to connect'
      showMessage(errorMsg, 'error')
    } finally {
      setLoading(false)
    }
  }

  const handleDisconnect = async () => {
    if (!confirm('Are you sure you want to disconnect Lodgify?')) return

    setLoading(true)
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('Not authenticated')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${apiUrl}/api/channels/lodgify/disconnect`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()

      if (data.success) {
        showMessage('Lodgify disconnected', 'success')
        setListings([])
        fetchConnections()
      } else {
        showMessage(`Error: ${data.error}`, 'error')
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to disconnect'
      showMessage(errorMsg, 'error')
    } finally {
      setLoading(false)
    }
  }

  const fetchListings = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('Not authenticated')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${apiUrl}/api/channels/lodgify/listings`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()

      if (data.listings) {
        setListings(data.listings)
        showMessage(`Found ${data.listings.length} properties to import`, 'success')
      } else {
        showMessage(`Error: ${data.error}`, 'error')
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to fetch listings'
      showMessage(errorMsg, 'error')
    } finally {
      setLoading(false)
    }
  }

  const importListings = async () => {
    if (!confirm(`Import ${listings.length} listings from Lodgify to TripSkip?`)) return

    setImporting(true)
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) throw new Error('Not authenticated')

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      const res = await fetch(`${apiUrl}/api/channels/lodgify/import`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      })

      const data = await res.json()

      if (data.success) {
        showMessage(
          `Successfully imported ${data.imported} listings!${data.errors > 0 ? ` (${data.errors} errors)` : ''}`,
          'success'
        )
        setListings([])
        fetchConnections()
      } else {
        showMessage(`Error: ${data.error}`, 'error')
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to import'
      showMessage(errorMsg, 'error')
    } finally {
      setImporting(false)
    }
  }

  const isLodgifyConnected = connections.some(c => c.platform === 'LODGIFY' && c.isActive)
  const isHostawayConnected = connections.some(c => c.platform === 'HOSTAWAY' && c.isActive)
  const lodgifyConnection = connections.find(c => c.platform === 'LODGIFY')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-2">Channel Manager</h1>
      <p className="text-lg text-subtle mb-8">Connect your property management system to import listings</p>

      {/* Status Message */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg border ${
            messageType === 'success'
              ? 'bg-green-50 text-green-700 border-green-200'
              : messageType === 'error'
              ? 'bg-red-50 text-red-700 border-red-200'
              : 'bg-blue-50 text-blue-700 border-blue-200'
          }`}
        >
          {message}
        </div>
      )}

      {/* Connection Status Card */}
      <div className="bg-surface rounded-xl shadow p-6 border border-muted mb-8">
        <h2 className="text-xl font-bold text-body mb-4">Connection Status</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-app rounded-lg border border-muted">
            <div>
              <span className="font-semibold text-body">Hostaway</span>
              <p className="text-sm text-subtle">Existing integration</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isHostawayConnected
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {isHostawayConnected ? 'Connected' : 'Not Connected'}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-app rounded-lg border border-muted">
            <div>
              <span className="font-semibold text-body">Lodgify</span>
              {lodgifyConnection?.lastSyncedAt && (
                <p className="text-sm text-subtle">
                  Last synced: {new Date(lodgifyConnection.lastSyncedAt).toLocaleDateString()}
                </p>
              )}
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isLodgifyConnected
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {isLodgifyConnected ? 'Connected' : 'Not Connected'}
            </span>
          </div>
        </div>
      </div>

      {/* Connect Channel Manager */}
      <div className="bg-surface rounded-xl shadow p-6 border border-muted mb-8">
        <h2 className="text-xl font-bold text-body mb-4">Connect Channel Manager</h2>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-body mb-2">Select Channel Manager</label>
          <select
            value={channelType}
            onChange={(e) => setChannelType(e.target.value as 'hostaway' | 'lodgify')}
            className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
          >
            <option value="lodgify">Lodgify</option>
            <option value="hostaway">Hostaway (Existing)</option>
          </select>
        </div>

        {channelType === 'lodgify' && !isLodgifyConnected && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-body mb-2">Lodgify API Key</label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="Enter your Lodgify API key"
              />
              <p className="text-xs text-subtle mt-2">
                Find your API key in Lodgify Dashboard → Settings → Public API Keys
              </p>
            </div>
            <button
              onClick={handleConnect}
              disabled={loading || !apiKey.trim()}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition font-semibold"
            >
              {loading ? 'Connecting...' : 'Connect Lodgify'}
            </button>
          </div>
        )}

        {channelType === 'lodgify' && isLodgifyConnected && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium">Lodgify is connected and ready to import listings.</p>
            </div>
            <button
              onClick={handleDisconnect}
              disabled={loading}
              className="px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50 transition font-semibold"
            >
              Disconnect Lodgify
            </button>
          </div>
        )}

        {channelType === 'hostaway' && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              Hostaway integration is managed separately. Contact support if you need assistance.
            </p>
          </div>
        )}
      </div>

      {/* Import Section - Only show when Lodgify is connected */}
      {isLodgifyConnected && channelType === 'lodgify' && (
        <div className="bg-surface rounded-xl shadow p-6 border border-muted">
          <h2 className="text-xl font-bold text-body mb-4">Import Listings from Lodgify</h2>
          <p className="text-subtle mb-6">
            Import your properties with photos, map location, and direct booking links.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={fetchListings}
              disabled={loading}
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 disabled:opacity-50 transition font-semibold"
            >
              {loading ? 'Loading...' : 'Preview Listings'}
            </button>
            {listings.length > 0 && (
              <button
                onClick={importListings}
                disabled={importing}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 transition font-semibold"
              >
                {importing ? 'Importing...' : `Import ${listings.length} Listings`}
              </button>
            )}
          </div>

          {/* Preview Listings */}
          {listings.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-body">Properties to Import:</h3>
              {listings.map((listing, i) => (
                <div key={i} className="p-4 bg-app rounded-lg border border-muted flex gap-4">
                  {listing.images?.[0]?.url && (
                    <img
                      src={listing.images[0].url}
                      alt={listing.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h4 className="font-semibold text-body">{listing.title}</h4>
                    <p className="text-sm text-subtle">
                      {listing.city}{listing.country ? `, ${listing.country}` : ''}
                    </p>
                    <p className="text-sm text-body mt-1">
                      {listing.bedrooms} bed · {listing.bathrooms} bath · ${listing.basePrice}/night
                    </p>
                    {listing.directBookingUrl && (
                      <p className="text-xs text-green-600 mt-1">
                        Direct booking link available
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
