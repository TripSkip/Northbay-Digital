const express = require('express')
const { PrismaClient } = require('../generated/prisma')
const { verifyToken } = require('./auth')

const router = express.Router()
const prisma = new PrismaClient()

// Get user profile — PROTECTED
router.get('/profile', verifyToken, async (req, res) => {
  try {
    console.log('[Profile] Fetching user:', req.user.email)

    let user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    // If user doesn't exist, create them
    if (!user) {
      const fallbackName =
        req.user?.name ||
        (req.user?.email ? req.user.email.split('@')[0] : null) ||
        'TripSkip Traveler'

      console.log('[Profile] Creating new user:', req.user.email)

      user = await prisma.user.create({
        data: {
          email: req.user.email,
          password: `firebase:${req.user.uid}`,
          name: fallbackName,
          userType: 'TRAVELER',
        },
        include: { hostProfile: true },
      })

      console.log('[Profile] ✅ New user created:', user.id)
    }

    res.json(user)
  } catch (error) {
    console.error('[Profile] Error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// Update user profile — PROTECTED
router.put('/profile', verifyToken, async (req, res) => {
  try {
    console.log('[UpdateProfile] Updating user:', req.user.email)
    
    const { name, phone, bio, avatar } = req.body

    const user = await prisma.user.update({
      where: { email: req.user.email },
      data: {
        name: name || undefined,
        phone: phone || undefined,
        bio: bio || undefined,
        avatar: avatar || undefined,
      },
    })

    console.log('[UpdateProfile] ✅ User updated:', user.id)
    res.json(user)
  } catch (error) {
    console.error('[UpdateProfile] Error:', error.message)
    res.status(400).json({ error: error.message })
  }
})

// Create host profile — PROTECTED
router.post('/host-profile', verifyToken, async (req, res) => {
  try {
    const { hostName, bio, phone, bankAccount } = req.body

    const sanitizedBody = {
      hostName: hostName || null,
      bio: bio || null,
      phone: phone || null,
      bankAccount: bankAccount ? '[provided]' : '[missing]',
    }

    console.log('[HostProfile] Request from:', req.user.email)
    console.log('[HostProfile] Payload:', sanitizedBody)

    const fallbackName = hostName || req.user?.name || (req.user?.email ? req.user.email.split('@')[0] : null) || 'TripSkip Host'

    // Check if user exists by email (not Firebase uid)
    let user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })
    console.log('[HostProfile] Existing user found:', Boolean(user))

    // If user doesn't exist, create them as HOST
    if (!user) {
      console.log('[HostProfile] Creating new user as HOST:', req.user.email)

      user = await prisma.user.create({
        data: {
          email: req.user.email,
          password: `firebase:${req.user.uid}`,
          name: fallbackName,
          userType: 'HOST',
          phone: phone || undefined,
          bio: bio || undefined,
        },
      })

      console.log('[HostProfile] ✅ New HOST user created:', user.id)
    } else {
      // Update existing user to HOST type
      console.log('[HostProfile] Converting existing user to HOST:', user.id)

      user = await prisma.user.update({
        where: { email: req.user.email },
        data: {
          userType: 'HOST',
          name: hostName || user.name,
          phone: phone || user.phone,
          bio: bio || user.bio,
        },
      })

      console.log('[HostProfile] ✅ User updated to HOST:', user.id)
    }

    res.json({
      message: 'Host profile created',
      userRole: 'host',
      userType: 'HOST',
      hostName,
      bio,
      phone,
    })
  } catch (error) {
    console.error('[HostProfile] Error:', error.message)
    res.status(400).json({ error: error.message })
  }
})

// Get user's wishlist — PROTECTED
router.get('/wishlist', verifyToken, async (req, res) => {
  try {
    console.log('[Wishlist] Fetching for user:', req.user.email)

    const { page = 1, limit = 20 } = req.query

    // Find user by email first (req.user.email from Firebase token)
    // Then use their database id to fetch wishlist
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const wishlist = await prisma.savedListing.findMany({
      where: { userId: user.id },
      include: { listing: true },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      orderBy: { savedAt: 'desc' }, // Changed from createdAt to savedAt
    })

    console.log('[Wishlist] ✅ Found', wishlist.length, 'saved listings')
    res.json(wishlist)
  } catch (error) {
    console.error('[Wishlist] Error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
