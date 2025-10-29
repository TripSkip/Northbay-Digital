const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

class UserService {
  // Create a new user
  async createUser(userData) {
    return prisma.user.create({
      data: userData,
      include: {
        hostProfile: true,
      },
    })
  }

  // Get user by ID
  async getUserById(id) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        hostProfile: true,
        listings: { take: 10, orderBy: { createdAt: 'desc' } },
      },
    })
  }

  // Get user by email
  async getUserByEmail(email) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        hostProfile: true,
      },
    })
  }

  // Update user
  async updateUser(id, userData) {
    return prisma.user.update({
      where: { id },
      data: userData,
      include: {
        hostProfile: true,
      },
    })
  }

  // Update or create user preferences
  async updateUserPreferences(userId, preferencesData) {
    // TODO: Implement if you have a preferences table
    return null
  }

  // Delete user
  async deleteUser(id) {
    return prisma.user.delete({
      where: { id },
    })
  }
}

module.exports = new UserService()