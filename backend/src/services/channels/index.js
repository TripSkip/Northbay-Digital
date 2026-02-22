/**
 * Channel Manager Factory
 *
 * Factory pattern for creating channel manager clients.
 * Makes it easy to add new channel managers in the future.
 *
 * Usage:
 *   const client = ChannelManagerFactory.create('LODGIFY', { apiKey: '...' });
 *   const properties = await client.getProperties();
 *
 * To add a new channel manager:
 *   1. Create a new client class in ./[platform]/[Platform]Client.js
 *   2. Implement: getProperties(), getProperty(id), mapToTripSkip(property), testConnection()
 *   3. Add case to ChannelManagerFactory.create()
 */

const LodgifyClient = require('./lodgify/LodgifyClient');

class ChannelManagerFactory {
  /**
   * Create a channel manager client
   * @param {string} platform - Channel manager platform (e.g., 'LODGIFY', 'GUESTY')
   * @param {object} credentials - Platform-specific credentials
   * @returns {object} Channel manager client instance
   */
  static create(platform, credentials) {
    switch (platform.toUpperCase()) {
      case 'LODGIFY':
        if (!credentials.apiKey) {
          throw new Error('Lodgify requires an API key');
        }
        return new LodgifyClient(credentials.apiKey);

      // Future channel managers can be added here:
      // case 'GUESTY':
      //   return new GuestyClient(credentials.apiKey, credentials.secret);
      // case 'OWNERREZ':
      //   return new OwnerRezClient(credentials.apiKey);

      default:
        throw new Error(`Unsupported channel manager: ${platform}`);
    }
  }

  /**
   * Get list of supported channel managers
   * @returns {string[]} Array of supported platform names
   */
  static getSupportedPlatforms() {
    return [
      'LODGIFY',
      // Add new platforms here as they're implemented
    ];
  }

  /**
   * Check if a platform is supported
   * @param {string} platform - Platform name to check
   * @returns {boolean} True if platform is supported
   */
  static isSupported(platform) {
    return this.getSupportedPlatforms().includes(platform.toUpperCase());
  }
}

module.exports = {
  ChannelManagerFactory,
  LodgifyClient,
};
