const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Pool } = require('pg')
// Use the generated Prisma client in this repo
const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()

// Import Prisma services
const userService = require('./services/userService')
const listingService = require('./services/listingService')

// Import routes
const { router: authRouter, verifyToken } = require('./routes/auth')
const usersRouter = require('./routes/users')
const listingsRouter = require('./routes/listings')

const admin = require('firebase-admin')

// Initialize Firebase Admin
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  // Need to make sure .env string is on the env variables on railway backend service
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : require('./firebase-key.json') // Fallback for local dev

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const app = express()

// Simple request logger to trace API calls and origins
app.use((req, _res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} origin=${req.headers.origin || 'n/a'}`
  )
  next()
})

// Allow local development and a configurable list of production origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  process.env.FRONTEND_URL,
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.WEB_APP_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
].filter(Boolean)

const corsOptions = {
  origin: (origin, callback) => {
    const logOrigin = origin || 'n/a'

    if (!origin || process.env.NODE_ENV !== 'production') {
      console.log(`[CORS] Allowing ${logOrigin} (dev or missing origin)`) 
      return callback(null, true)
    }

    if (allowedOrigins.includes(origin)) {
      console.log(`[CORS] Allowing ${logOrigin} (whitelist match)`) 
      return callback(null, true)
    }

    console.warn(`[CORS] Rejecting ${logOrigin} (not in whitelist)`) 
    return callback(new Error('Not allowed by CORS'))
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))
app.use(express.json())

// Mount routes
app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/listings', listingsRouter)

// Keep existing PostgreSQL connection for backward compatibility
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'user',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'appdb',
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined
})

// Health check endpoint
app.get('/health', async (_req, res) => {
  try {
    if (process.env.DATABASE_URL) {
      await prisma.$queryRaw`SELECT 1`
      return res.json({ ok: true, db: true, via: 'prisma' })
    }
    const r = await pool.query('SELECT 1 as ok')
    return res.json({ ok: true, db: r.rows[0].ok === 1, via: 'pg' })
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message })
  }
})

// Root endpoint
app.get('/', (_req, res) => {
  res.json({ message: 'TripSkip Direct Booking API is running' })
})

// ============================================================================
// PORT & SERVER
// ============================================================================

const port = Number(process.env.PORT || 4000)
app.listen(port, () => {
  console.log(`🚀 TripSkip Direct Booking API listening on http://localhost:${port}`)
})

/*
===============================================================================
DEPLOYMENT CHECKLIST (Railway + Supabase)
- Rotate the Supabase DB password before going live.
- Set Railway Variables (Backend service → Variables):
  1) DATABASE_URL = postgresql://<db_user>:<db_password>@aws-1-us-east-2.pooler.supabase.com:6543/postgres?pgbouncer=true&sslmode=require
  2) DIRECT_URL   = postgresql://<db_user>:<db_password>@db.<project-ref>.supabase.co:5432/postgres?sslmode=require
  3) NODE_ENV     = production
  4) PORT         = 4000
- Prefer Prisma (DATABASE_URL) in production; /health will use Prisma when DATABASE_URL is present.
- If you keep the pg Pool fallback, set DB_SSL=true and DB_* variables in Railway; avoid relying on the 'postgres' Docker hostname.
- Never commit real secrets to backend/.env; use Railway Variables.
- Run migrations on deploy: `prisma migrate deploy` (uses DIRECT_URL).
===============================================================================
*/

// Warn if misconfigured in prod
if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
  console.warn('DEPLOYMENT WARNING: DATABASE_URL is not set. Configure Railway Variables.');
}
