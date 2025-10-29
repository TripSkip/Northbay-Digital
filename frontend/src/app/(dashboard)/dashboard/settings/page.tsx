'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'profile' | 'account' | 'notifications' | 'privacy'>('profile')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [userRole, setUserRole] = useState<'guest' | 'host' | null>(null)

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    avatar: '',
  })

  const [accountData, setAccountData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    bookingAlerts: true,
    marketingEmails: false,
    weeklyDigest: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    allowMessages: true,
    dataCollection: true,
  })

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    setUserRole(role as 'guest' | 'host')
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('firebaseToken')
      if (!token) return

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''
      console.log('[fetchProfile] API URL:', apiUrl)
      console.log('[fetchProfile] Token exists:', !!token)
      
      const response = await fetch(`${apiUrl}/api/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      console.log('[fetchProfile] Response status:', response.status)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('[fetchProfile] Error response:', errorText)
        throw new Error('Failed to fetch profile')
      }

      const data = await response.json()
      setProfileData({
        name: data.name || '',
        email: data.email || '',
        phone: data.phone || '',
        bio: data.bio || '',
        avatar: data.avatar || '',
      })
    } catch (err) {
      console.error('[fetchProfile] Error:', err)
    }
  }

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAccountData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationChange = (key: keyof typeof notificationSettings) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handlePrivacyChange = (key: keyof typeof privacySettings, value: any) => {
    setPrivacySettings((prev) => ({ ...prev, [key]: value }))
  }

  const saveProfileChanges = async (e: React.FormEvent) => {
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
          name: profileData.name,
          phone: profileData.phone,
          bio: profileData.bio,
          avatar: profileData.avatar,
        }),
      })

      if (!response.ok) throw new Error('Failed to update profile')

      setMessage('✅ Profile updated successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage('❌ Error updating profile')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (accountData.newPassword !== accountData.confirmPassword) {
      setMessage('❌ Passwords do not match')
      setLoading(false)
      return
    }

    if (accountData.newPassword.length < 6) {
      setMessage('❌ Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const token = localStorage.getItem('firebaseToken')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

      const response = await fetch(`${apiUrl}/api/auth/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: accountData.currentPassword,
          newPassword: accountData.newPassword,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to change password')
      }

      setMessage('✅ Password changed successfully!')
      setAccountData({ currentPassword: '', newPassword: '', confirmPassword: '' })
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage(`❌ ${err instanceof Error ? err.message : 'Error changing password'}`)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) return

    try {
      const token = localStorage.getItem('firebaseToken')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || ''

      const response = await fetch(`${apiUrl}/api/auth/delete-account`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) throw new Error('Failed to delete account')

      localStorage.removeItem('firebaseToken')
      localStorage.removeItem('userRole')
      router.push('/signin')
    } catch (err) {
      setMessage('❌ Error deleting account')
      console.error(err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-2">Settings</h1>
      <p className="text-lg text-subtle mb-8">Manage your account and preferences</p>

      {message && (
        <div
          className={`mb-8 p-4 rounded-lg ${
            message.includes('✅')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message}
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-muted overflow-x-auto">
        {['profile', 'account', 'notifications', 'privacy'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition ${
              activeTab === tab
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-subtle hover:text-body'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-surface rounded-xl shadow p-8 border border-muted">
        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <form onSubmit={saveProfileChanges} className="space-y-6">
            <h2 className="text-2xl font-bold text-body mb-6">Profile Information</h2>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleProfileChange}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
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
                value={profileData.phone}
                onChange={handleProfileChange}
                className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-body mb-2">Bio</label>
              <textarea
                name="bio"
                value={profileData.bio}
                onChange={handleProfileChange}
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
                {loading ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </form>
        )}

        {/* Account Tab */}
        {activeTab === 'account' && (
          <div className="space-y-8">
            {/* Change Password */}
            <div>
              <h2 className="text-2xl font-bold text-body mb-6">Change Password</h2>
              <form onSubmit={changePassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-body mb-2">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={accountData.currentPassword}
                    onChange={handleAccountChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-body mb-2">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={accountData.newPassword}
                    onChange={handleAccountChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                    placeholder="Enter new password"
                  />
                  <p className="text-xs text-subtle mt-1">At least 6 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-body mb-2">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={accountData.confirmPassword}
                    onChange={handleAccountChange}
                    required
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none bg-app text-body"
                    placeholder="Confirm new password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-muted disabled:text-subtle transition font-semibold"
                >
                  {loading ? 'Updating...' : 'Change Password'}
                </button>
              </form>
            </div>

            {/* Danger Zone */}
            <div className="border-t border-muted pt-8">
              <h2 className="text-2xl font-bold text-red-600 mb-6">Danger Zone</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-2">Delete Account</h3>
                <p className="text-red-800 text-sm mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <button
                  onClick={handleDeleteAccount}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-body mb-6">Notification Preferences</h2>

            <div className="space-y-4">
              {[
                { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates about your account' },
                { key: 'bookingAlerts', label: 'Booking Alerts', desc: 'Get notified about new bookings and inquiries' },
                { key: 'marketingEmails', label: 'Marketing Emails', desc: 'Receive promotional offers and updates' },
                { key: 'weeklyDigest', label: 'Weekly Digest', desc: 'Get a weekly summary of your activity' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 bg-app border border-muted rounded-lg">
                  <div>
                    <p className="font-medium text-body">{item.label}</p>
                    <p className="text-sm text-subtle">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(item.key as keyof typeof notificationSettings)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                      notificationSettings[item.key as keyof typeof notificationSettings] ? 'bg-indigo-600' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                        notificationSettings[item.key as keyof typeof notificationSettings] ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-muted pt-6">
              <p className="text-sm text-subtle mb-4">
                💡 These preferences will be saved automatically. You can change them anytime.
              </p>
            </div>
          </div>
        )}

        {/* Privacy Tab */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-body mb-6">Privacy Settings</h2>

            <div className="space-y-4">
              <div className="p-4 bg-app border border-muted rounded-lg">
                <label className="block text-sm font-medium text-body mb-2">Profile Visibility</label>
                <select
                  value={privacySettings.profileVisibility}
                  onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
                  className="w-full px-4 py-2 border border-muted rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none bg-surface text-body"
                >
                  <option value="public">Public - Anyone can see your profile</option>
                  <option value="private">Private - Only you can see your profile</option>
                  <option value="friends">Friends Only - Only approved users can see</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-app border border-muted rounded-lg">
                <div>
                  <p className="font-medium text-body">Show Email Address</p>
                  <p className="text-sm text-subtle">Allow others to see your email</p>
                </div>
                <button
                  onClick={() => handlePrivacyChange('showEmail', !privacySettings.showEmail)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                    privacySettings.showEmail ? 'bg-indigo-600' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                      privacySettings.showEmail ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-app border border-muted rounded-lg">
                <div>
                  <p className="font-medium text-body">Allow Messages</p>
                  <p className="text-sm text-subtle">Let others send you messages</p>
                </div>
                <button
                  onClick={() => handlePrivacyChange('allowMessages', !privacySettings.allowMessages)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                    privacySettings.allowMessages ? 'bg-indigo-600' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                      privacySettings.allowMessages ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-app border border-muted rounded-lg">
                <div>
                  <p className="font-medium text-body">Data Collection</p>
                  <p className="text-sm text-subtle">Allow us to collect usage data to improve TripSkip</p>
                </div>
                <button
                  onClick={() => handlePrivacyChange('dataCollection', !privacySettings.dataCollection)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                    privacySettings.dataCollection ? 'bg-indigo-600' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                      privacySettings.dataCollection ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="border-t border-muted pt-6">
              <p className="text-sm text-subtle">
                🔒 Your privacy is important to us. Learn more in our <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}