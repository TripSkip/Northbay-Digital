const express = require('express')
const listingService = require('../services/listingService')
const { verifyToken } = require('./auth')
const { PrismaClient } = require('../generated/prisma')

const router = express.Router()
const prisma = new PrismaClient()

// ============================================================================
// LISTINGS API
// ============================================================================

// Get my listings — PROTECTED (MUST BE BEFORE /:id ROUTE)
router.get('/my-listings', verifyToken, async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query
    
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) return res.status(404).json({ error: 'User not found' })

    const result = await listingService.getHostListings(user.id, Number(page), Number(limit))
    // Don't wrap it again - just return the result directly
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Search listings with filters
router.get('/search', async (req, res) => {
  try {
    const { city, country, category, minPrice, maxPrice, minGuests, query, page = 1, limit = 20 } = req.query
    const filters = { city, country, category, minPrice: minPrice ? Number(minPrice) : null, maxPrice: maxPrice ? Number(maxPrice) : null, minGuests: minGuests ? Number(minGuests) : null, searchQuery: query }
    const results = await listingService.searchListings(filters, Number(page), Number(limit))
    res.json(results)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get featured listings
router.get('/featured', async (req, res) => {
  try {
    const listings = await listingService.getFeaturedListings(10)
    res.json(listings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all listings (paginated)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query
    const listings = await listingService.getAllListings(Number(page), Number(limit))
    res.json(listings)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create listing (host only) — PROTECTED
router.post('/', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const listing = await listingService.createListing(user.id, req.body)
    res.status(201).json(listing)
  } catch (error) {
    console.error('[CreateListing] Error:', error.message)
    res.status(400).json({ error: error.message })
  }
})

// Get single listing (MUST BE AFTER /my-listings, /search, /featured)
router.get('/:id', async (req, res) => {
  try {
    const listing = await listingService.getListingById(req.params.id)
    if (!listing) return res.status(404).json({ error: 'Listing not found' })
    res.json(listing)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update listing (host only) — PROTECTED
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const listing = await listingService.updateListing(req.params.id, user.id, req.body)
    res.json(listing)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete listing (host only) — PROTECTED
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    await listingService.deleteListing(req.params.id, user.id)
    res.json({ message: 'Listing deleted' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Toggle featured status (protected)
router.put('/:id/featured', verifyToken, async (req, res) => {
  try {
    const { isFeatured } = req.body
    
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const listing = await prisma.listing.update({
      where: { id: req.params.id },
      data: { isFeatured },
    })

    res.json(listing)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Save a listing (add to favorites) — PROTECTED
router.post('/:listingId/save', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const saved = await listingService.saveListing(user.id, req.params.listingId)
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Remove a saved listing — PROTECTED
router.delete('/:listingId/unsave', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    await listingService.unsaveListing(user.id, req.params.listingId)
    res.json({ message: 'Listing removed from favorites' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

module.exports = router
