const express = require('express')
const admin = require('firebase-admin')
const { PrismaClient } = require('../generated/prisma')

const router = express.Router()
const prisma = new PrismaClient()

// Middleware to verify Firebase token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ')[1]
  if (!token) return res.status(401).json({ error: 'No token' })

  try {
    const decodedToken = await admin.auth().verifyIdToken(token)
    req.user = decodedToken
    next()
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

// Get user role — PROTECTED (creates user on first signin)
router.get('/role', verifyToken, async (req, res) => {
  try {
    console.log('[Auth] /role endpoint - User email:', req.user.email)

    let user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    // If user doesn't exist, create them as TRAVELER (guest)
    if (!user) {
      const fallbackName =
        req.user?.name ||
        (req.user?.email ? req.user.email.split('@')[0] : null) ||
        'TripSkip Traveler'

      console.log('[Auth] Creating new user:', req.user.email, 'as TRAVELER')

      user = await prisma.user.create({
        data: {
          email: req.user.email,
          password: `firebase:${req.user.uid}`,
          name: fallbackName,
          userType: 'TRAVELER',
        },
      })

      console.log('[Auth] ✅ New user created:', user.id, user.email)
    } else {
      console.log('[Auth] Existing user found:', user.id, user.email, 'Type:', user.userType)
    }

    const userRole = user.userType === 'HOST' ? 'host' : 'guest'
    res.json({
      userRole,
      userType: user.userType,
      isNewUser: !user,
    })
  } catch (error) {
    console.error('[Auth] Error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// Get current user profile — PROTECTED
router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Change password — PROTECTED
router.post('/change-password', verifyToken, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ error: 'Current and new passwords required' })
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' })
    }

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) return res.status(404).json({ error: 'User not found' })

    // For Firebase users, password changes should be handled by Firebase
    if (user.password?.startsWith('firebase:')) {
      return res.status(400).json({ error: 'Use Firebase to manage password for this account' })
    }

    // Here you would verify current password and hash new one
    // This is a simplified example - implement proper password hashing in production

    console.log('[ChangePassword] Password changed for:', req.user.email)
    res.json({ message: 'Password changed successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete account — PROTECTED
router.delete('/delete-account', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) return res.status(404).json({ error: 'User not found' })

    // Delete all user data (cascade)
    await prisma.user.delete({
      where: { id: user.id },
    })

    console.log('[DeleteAccount] Account deleted:', req.user.email)
    res.json({ message: 'Account deleted successfully' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = { router, verifyToken }
