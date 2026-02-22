/**
 * Lodgify API Client
 * Handles authentication and API calls to Lodgify channel manager
 *
 * Documentation: https://docs.lodgify.com/reference/introduction
 */

class LodgifyClient {
  constructor(apiKey) {
    this.baseUrl = 'https://api.lodgify.com/v2';
    this.apiKey = apiKey;
  }

  /**
   * Make authenticated request to Lodgify API
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'X-ApiKey': this.apiKey,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Lodgify API error (${response.status}): ${errorText}`);
    }

    return response.json();
  }

  /**
   * Get all properties from Lodgify account
   */
  async getProperties() {
    return this.request('/properties');
  }

  /**
   * Get a single property by ID
   */
  async getProperty(propertyId) {
    return this.request(`/properties/${propertyId}`);
  }

  /**
   * Get property images
   */
  async getPropertyImages(propertyId) {
    return this.request(`/properties/${propertyId}/images`);
  }

  /**
   * Get property rates/pricing
   */
  async getPropertyRates(propertyId) {
    return this.request(`/properties/${propertyId}/rates`);
  }

  /**
   * Test API connection by fetching properties
   */
  async testConnection() {
    try {
      await this.getProperties();
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Map Lodgify property to TripSkip listing format
   * NOTE: Field names may need adjustment after testing with real Lodgify account
   *
   * CRITICAL FIELDS:
   * - directBookingUrl: Host's direct booking website
   * - latitude/longitude: For map display
   * - images: For hero photo and gallery
   * - externalLinks: Airbnb/VRBO URLs for ShareLink table
   */
  mapToTripSkip(lodgifyProperty) {
    // Extract images with proper ordering
    const images = (lodgifyProperty.images || []).map((img, index) => ({
      url: img.url || img.image_url || img.src,
      altText: img.caption || img.text || `Property image ${index + 1}`,
      order: img.sort_order || img.position || index,
    })).filter(img => img.url); // Only include images with valid URLs

    // Extract amenities
    const amenities = (lodgifyProperty.amenities || []).map(a =>
      typeof a === 'string' ? a : (a.name || a.text || '')
    ).filter(Boolean);

    // Build the mapped listing
    return {
      // Basic info
      title: lodgifyProperty.name || lodgifyProperty.title || 'Untitled Property',
      description: lodgifyProperty.description || lodgifyProperty.summary || '',

      // Location - try multiple possible field names
      location: lodgifyProperty.address?.street ||
                lodgifyProperty.street ||
                lodgifyProperty.address || '',
      city: lodgifyProperty.address?.city ||
            lodgifyProperty.city || '',
      state: lodgifyProperty.address?.state ||
             lodgifyProperty.state ||
             lodgifyProperty.address?.region || '',
      country: lodgifyProperty.address?.country ||
               lodgifyProperty.country || '',
      postalCode: lodgifyProperty.address?.zip ||
                  lodgifyProperty.address?.postal_code ||
                  lodgifyProperty.zip || '',

      // Coordinates for map - CRITICAL for correct map location
      latitude: lodgifyProperty.latitude ||
                lodgifyProperty.lat ||
                lodgifyProperty.address?.latitude ||
                lodgifyProperty.location?.lat || null,
      longitude: lodgifyProperty.longitude ||
                 lodgifyProperty.lng ||
                 lodgifyProperty.address?.longitude ||
                 lodgifyProperty.location?.lng || null,

      // Property details
      bedrooms: lodgifyProperty.bedrooms ||
                lodgifyProperty.bedroom_count || 0,
      bathrooms: lodgifyProperty.bathrooms ||
                 lodgifyProperty.bathroom_count || 0,
      beds: lodgifyProperty.beds ||
            lodgifyProperty.bed_count || 0,
      maxGuests: lodgifyProperty.max_people ||
                 lodgifyProperty.max_guests ||
                 lodgifyProperty.person_capacity || 0,

      // Pricing
      basePrice: lodgifyProperty.rates?.base_rate ||
                 lodgifyProperty.base_price ||
                 lodgifyProperty.price || 0,

      // Amenities
      amenities,

      // Images for gallery
      images,

      // CRITICAL: Direct booking URL - this is the host's own booking website
      // Users clicking on TripSkip listings will be redirected here
      directBookingUrl: lodgifyProperty.website_url ||
                        lodgifyProperty.booking_url ||
                        lodgifyProperty.direct_booking_url ||
                        lodgifyProperty.url || '',

      // Platform identifier
      bookingPlatform: 'LODGIFY',

      // Category and property type (defaults, can be adjusted)
      category: this.mapPropertyType(lodgifyProperty.property_type || lodgifyProperty.type),
      propertyType: 'ENTIRE_PLACE',

      // External channel links for ShareLink table
      // These are the Airbnb/VRBO shareable URLs
      externalLinks: {
        airbnb: lodgifyProperty.airbnb_url ||
                lodgifyProperty.channels?.airbnb?.url ||
                lodgifyProperty.external_links?.airbnb || null,
        vrbo: lodgifyProperty.vrbo_url ||
              lodgifyProperty.homeaway_url ||
              lodgifyProperty.channels?.vrbo?.url ||
              lodgifyProperty.external_links?.vrbo || null,
        booking: lodgifyProperty.booking_com_url ||
                 lodgifyProperty.channels?.booking?.url ||
                 lodgifyProperty.external_links?.booking || null,
        expedia: lodgifyProperty.expedia_url ||
                 lodgifyProperty.channels?.expedia?.url ||
                 lodgifyProperty.external_links?.expedia || null,
      },

      // Store original Lodgify ID for reference
      externalId: lodgifyProperty.id?.toString() || null,
    };
  }

  /**
   * Map Lodgify property type to TripSkip category
   */
  mapPropertyType(type) {
    if (!type) return 'HOUSE';

    const typeMapping = {
      'apartment': 'APARTMENT',
      'house': 'HOUSE',
      'villa': 'VILLA',
      'cabin': 'CABIN',
      'condo': 'CONDO',
      'condominium': 'CONDO',
      'bungalow': 'BUNGALOW',
      'cottage': 'CABIN',
      'chalet': 'CABIN',
      'townhouse': 'HOUSE',
      'loft': 'APARTMENT',
      'studio': 'APARTMENT',
    };

    const normalizedType = type.toLowerCase().trim();
    return typeMapping[normalizedType] || 'HOUSE';
  }
}

module.exports = LodgifyClient;
