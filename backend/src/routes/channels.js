/**
 * Channel Manager API Routes
 *
 * Endpoints for connecting and importing from channel managers like Lodgify.
 * Does NOT affect existing Hostaway integration.
 */

const express = require('express')
const { PrismaClient } = require('../generated/prisma')
const { verifyToken } = require('./auth')
const { ChannelManagerFactory } = require('../services/channels')

const router = express.Router()
const prisma = new PrismaClient()

// ==================== CONNECTION STATUS ====================

/**
 * Get all channel manager connection statuses for current user
 */
router.get('/status', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.json({ connections: [] })
    }

    const integrations = await prisma.aPIIntegration.findMany({
      where: { hostId: user.hostProfile.id },
      select: {
        id: true,
        platform: true,
        isActive: true,
        lastSyncedAt: true,
        syncStatus: true,
        syncError: true,
      },
    })

    res.json({ connections: integrations })
  } catch (error) {
    console.error('[Channels] Error fetching status:', error.message)
    res.status(500).json({ error: error.message })
  }
})

// ==================== LODGIFY ENDPOINTS ====================

/**
 * Connect Lodgify account
 * POST /api/channels/lodgify/connect
 */
router.post('/lodgify/connect', verifyToken, async (req, res) => {
  try {
    const { apiKey } = req.body

    if (!apiKey) {
      return res.status(400).json({ error: 'API key is required' })
    }

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.status(403).json({ error: 'Must be a host to connect channel manager' })
    }

    // Test connection with Lodgify API
    const client = ChannelManagerFactory.create('LODGIFY', { apiKey })
    const testResult = await client.testConnection()

    if (!testResult.success) {
      return res.status(400).json({ error: `Connection failed: ${testResult.error}` })
    }

    // Save or update APIIntegration record
    const integration = await prisma.aPIIntegration.upsert({
      where: {
        hostId_platform: {
          hostId: user.hostProfile.id,
          platform: 'LODGIFY',
        },
      },
      update: {
        apiKey,
        isActive: true,
        syncStatus: 'idle',
        syncError: null,
      },
      create: {
        hostId: user.hostProfile.id,
        userId: user.id,
        platform: 'LODGIFY',
        apiKey,
        isActive: true,
        syncStatus: 'idle',
      },
    })

    console.log('[Channels] Lodgify connected for host:', user.hostProfile.id)
    res.json({ success: true, integrationId: integration.id })
  } catch (error) {
    console.error('[Channels] Lodgify connect error:', error.message)
    res.status(400).json({ error: error.message })
  }
})

/**
 * Disconnect Lodgify account
 * POST /api/channels/lodgify/disconnect
 */
router.post('/lodgify/disconnect', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.status(403).json({ error: 'Must be a host' })
    }

    await prisma.aPIIntegration.updateMany({
      where: {
        hostId: user.hostProfile.id,
        platform: 'LODGIFY',
      },
      data: {
        isActive: false,
      },
    })

    console.log('[Channels] Lodgify disconnected for host:', user.hostProfile.id)
    res.json({ success: true })
  } catch (error) {
    console.error('[Channels] Lodgify disconnect error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

/**
 * Preview listings from Lodgify (before import)
 * GET /api/channels/lodgify/listings
 */
router.get('/lodgify/listings', verifyToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.status(403).json({ error: 'Must be a host' })
    }

    const integration = await prisma.aPIIntegration.findFirst({
      where: {
        hostId: user.hostProfile.id,
        platform: 'LODGIFY',
        isActive: true,
      },
    })

    if (!integration) {
      return res.status(404).json({ error: 'Lodgify not connected' })
    }

    const client = ChannelManagerFactory.create('LODGIFY', { apiKey: integration.apiKey })
    const properties = await client.getProperties()

    // Map to TripSkip format for preview
    const mapped = properties.map(p => client.mapToTripSkip(p))

    console.log('[Channels] Fetched', mapped.length, 'Lodgify listings for preview')
    res.json({ listings: mapped })
  } catch (error) {
    console.error('[Channels] Lodgify listings error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

/**
 * Import listings from Lodgify to TripSkip
 * POST /api/channels/lodgify/import
 *
 * This creates listings with:
 * - Hero photo (first image)
 * - All property photos
 * - Map location (lat/lng)
 * - Property details
 * - Direct booking URL (CRITICAL - for book direct functionality)
 * - External links in ShareLink table (Airbnb, VRBO, etc.)
 */
router.post('/lodgify/import', verifyToken, async (req, res) => {
  try {
    const { propertyIds } = req.body // Optional: specific properties to import

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.status(403).json({ error: 'Must be a host' })
    }

    const integration = await prisma.aPIIntegration.findFirst({
      where: {
        hostId: user.hostProfile.id,
        platform: 'LODGIFY',
        isActive: true,
      },
    })

    if (!integration) {
      return res.status(404).json({ error: 'Lodgify not connected' })
    }

    // Update sync status to syncing
    await prisma.aPIIntegration.update({
      where: { id: integration.id },
      data: { syncStatus: 'syncing', syncError: null },
    })

    try {
      const client = ChannelManagerFactory.create('LODGIFY', { apiKey: integration.apiKey })
      const properties = await client.getProperties()

      // Filter to specific properties if requested
      const toImport = propertyIds
        ? properties.filter(p => propertyIds.includes(p.id) || propertyIds.includes(p.id?.toString()))
        : properties

      const imported = []
      const errors = []

      for (const prop of toImport) {
        try {
          const listingData = client.mapToTripSkip(prop)
          const { externalLinks, images, externalId, ...listingFields } = listingData

          // Create the listing in TripSkip
          const listing = await prisma.listing.create({
            data: {
              ...listingFields,
              hostId: user.hostProfile.id,
              userId: user.id,
              // Create images in nested write
              images: {
                create: images.map(img => ({
                  url: img.url,
                  altText: img.altText || '',
                  order: img.order || 0,
                })),
              },
            },
            include: { images: true },
          })

          // Create ShareLinks for external channel URLs (Airbnb, VRBO, etc.)
          if (externalLinks) {
            const shareLinksToCreate = []

            if (externalLinks.airbnb) {
              shareLinksToCreate.push({
                listingId: listing.id,
                platform: 'AIRBNB',
                url: externalLinks.airbnb,
              })
            }
            if (externalLinks.vrbo) {
              shareLinksToCreate.push({
                listingId: listing.id,
                platform: 'VRBO',
                url: externalLinks.vrbo,
              })
            }
            if (externalLinks.booking) {
              shareLinksToCreate.push({
                listingId: listing.id,
                platform: 'BOOKING_COM',
                url: externalLinks.booking,
              })
            }
            if (externalLinks.expedia) {
              shareLinksToCreate.push({
                listingId: listing.id,
                platform: 'EXPEDIA',
                url: externalLinks.expedia,
              })
            }

            if (shareLinksToCreate.length > 0) {
              await prisma.shareLink.createMany({ data: shareLinksToCreate })
            }
          }

          imported.push({
            id: listing.id,
            title: listing.title,
            externalId,
            imageCount: listing.images.length,
          })

          console.log('[Channels] Imported listing:', listing.title)
        } catch (err) {
          console.error('[Channels] Error importing property:', prop.id, err.message)
          errors.push({ propertyId: prop.id, error: err.message })
        }
      }

      // Update sync status to success
      await prisma.aPIIntegration.update({
        where: { id: integration.id },
        data: {
          syncStatus: 'success',
          lastSyncedAt: new Date(),
          syncError: errors.length > 0 ? JSON.stringify(errors) : null,
        },
      })

      console.log('[Channels] Import complete:', imported.length, 'listings,', errors.length, 'errors')
      res.json({
        success: true,
        imported: imported.length,
        errors: errors.length,
        listings: imported,
        errorDetails: errors.length > 0 ? errors : undefined,
      })
    } catch (importError) {
      // Update sync status to error
      await prisma.aPIIntegration.update({
        where: { id: integration.id },
        data: {
          syncStatus: 'error',
          syncError: importError.message,
        },
      })
      throw importError
    }
  } catch (error) {
    console.error('[Channels] Lodgify import error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

/**
 * Sync a single listing from Lodgify (update existing)
 * POST /api/channels/lodgify/sync/:listingId
 */
router.post('/lodgify/sync/:listingId', verifyToken, async (req, res) => {
  try {
    const { listingId } = req.params
    const { lodgifyPropertyId } = req.body

    if (!lodgifyPropertyId) {
      return res.status(400).json({ error: 'Lodgify property ID required' })
    }

    const user = await prisma.user.findUnique({
      where: { email: req.user.email },
      include: { hostProfile: true },
    })

    if (!user?.hostProfile) {
      return res.status(403).json({ error: 'Must be a host' })
    }

    // Verify listing belongs to this host
    const listing = await prisma.listing.findFirst({
      where: {
        id: listingId,
        hostId: user.hostProfile.id,
      },
    })

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' })
    }

    const integration = await prisma.aPIIntegration.findFirst({
      where: {
        hostId: user.hostProfile.id,
        platform: 'LODGIFY',
        isActive: true,
      },
    })

    if (!integration) {
      return res.status(404).json({ error: 'Lodgify not connected' })
    }

    const client = ChannelManagerFactory.create('LODGIFY', { apiKey: integration.apiKey })
    const property = await client.getProperty(lodgifyPropertyId)
    const mapped = client.mapToTripSkip(property)

    const { externalLinks, images, externalId, ...updateFields } = mapped

    // Update the listing
    const updated = await prisma.listing.update({
      where: { id: listingId },
      data: updateFields,
    })

    console.log('[Channels] Synced listing:', updated.title)
    res.json({ success: true, listing: updated })
  } catch (error) {
    console.error('[Channels] Sync error:', error.message)
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
