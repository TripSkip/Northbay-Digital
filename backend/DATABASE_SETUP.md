# TripSkip Database Setup with Prisma

This document explains how to set up and use the PostgreSQL database with Prisma for the TripSkip application.

## Prerequisites

1. Node.js installed
2. Prisma CLI installed (`npm install -g prisma` or use `npx`)
3. PostgreSQL database (local Docker or cloud-hosted)

## Database Schema

The application uses the following main models:

### Core Models

- **User**: User accounts and profiles
- **UserPreferences**: User travel preferences and settings
- **Trip**: Main trip planning entity
- **TripItinerary**: Daily activities and plans for trips
- **TripCollaborator**: Shared trip access and permissions

### Booking & Financial

- **Booking**: Flight, hotel, activity reservations
- **Expense**: Trip expense tracking
- **Review**: User reviews for destinations and services
- **Notification**: User notifications and alerts

## Environment Setup

### Local Development

```env
DATABASE_URL="postgresql://user:password@localhost:5433/appdb"
```

### Cloud Deployment

```env
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```

## Getting Started

### 1. Install Dependencies

```bash
cd backend
npm install prisma @prisma/client
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Run Migrations

```bash
# For development
npx prisma migrate dev --name init

# For production
npx prisma migrate deploy
```

### 4. Seed Database (Optional)

```bash
npx prisma db seed
```

## Development Workflow

### Making Schema Changes

1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name your_migration_name`
3. Regenerate client: `npx prisma generate`

### Viewing Database

```bash
npx prisma studio
```

### Reset Database (Development Only)

```bash
npx prisma migrate reset
```

## API Usage Examples

### Creating a User

```javascript
const user = await userService.createUser({
  email: "user@example.com",
  name: "John Doe",
  preferences: {
    create: {
      preferredBudget: 2000,
      interests: ["adventure", "culture"],
      preferredDuration: 7,
    },
  },
});
```

### Creating a Trip

```javascript
const trip = await tripService.createTrip({
  userId: user.id,
  title: "Summer Europe Trip",
  destination: "Europe",
  startDate: new Date("2024-07-01"),
  endDate: new Date("2024-07-14"),
  budget: 3000,
});
```

### Adding Itinerary Items

```javascript
const itineraryItem = await tripService.addItineraryItem(trip.id, user.id, {
  day: 1,
  activity: "Visit Eiffel Tower",
  location: "Paris, France",
  startTime: new Date("2024-07-01T10:00:00Z"),
  cost: 25,
});
```

## Cloud Migration

### Prisma Cloud Database

1. Login to Prisma: `npx prisma login`
2. Create database: `npx prisma db create`
3. Update DATABASE_URL in production environment
4. Run migrations: `npx prisma migrate deploy`

### Other Cloud Providers

The schema is compatible with:

- AWS RDS PostgreSQL
- Google Cloud SQL
- Azure Database for PostgreSQL
- DigitalOcean Managed Databases
- Supabase
- PlanetScale (with minor modifications)

### Production Considerations

1. **Connection Pooling**: Use connection pooling for better performance
2. **SSL**: Ensure SSL connections in production
3. **Backups**: Set up automated backups
4. **Monitoring**: Monitor query performance
5. **Security**: Use strong passwords and network security

## Troubleshooting

### Common Issues

1. **Connection refused**: Check if database is running
2. **Migration conflicts**: Use `prisma migrate reset` in development
3. **Client generation fails**: Ensure schema is valid
4. **SSL issues**: Add `?sslmode=require` to DATABASE_URL

### Useful Commands

```bash
# Check database connection
npx prisma db pull

# View current schema
npx prisma db push --preview-feature

# Format schema file
npx prisma format
```
