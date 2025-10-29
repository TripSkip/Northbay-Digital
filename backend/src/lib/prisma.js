const { PrismaClient } = require('../generated/prisma');

// Create a single instance of Prisma Client to avoid connection issues
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

// Handle graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = prisma;