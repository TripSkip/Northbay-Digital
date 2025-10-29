"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

function GoogleMap() {
  const mapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const g = (globalThis as any).google
    if (!mapRef.current || !g?.maps) return

    const map = new g.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 10,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    })

    // Example marker to confirm it works
    new g.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map,
      title: "TripSkip Demo",
    })
  }, [])

  return <div ref={mapRef} className="w-full h-full" />
}

type Listing = {
  id: number
  title: string
  city: string
  beds: number
  baths: number
  guests: number
  price: number
  rating: number
  img: string
}

function ListingCard({ l, className }: { l: Listing; className?: string }) {
  return (
    <article className={`rounded-2xl bg-surface border border-muted overflow-hidden flex flex-col w-full ${className ?? ""}`}>
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        <img src={l.img} alt={l.title} className="h-full w-full object-cover" />
        <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base font-semibold text-body line-clamp-1 flex-1">{l.title}</h3>
          <div className="flex items-center gap-1 text-body flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-token"><path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193z"/></svg>
            <span className="text-sm">{l.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-subtle text-sm line-clamp-1 mb-1">{l.city}</p>
        <p className="text-subtle text-xs mb-2">
          {l.beds} bed · {l.baths} bath · {l.guests} guests
        </p>
        <p className="mt-auto text-body text-sm"><span className="font-semibold">${l.price}</span> <span className="text-subtle">/ night</span></p>
      </div>
    </article>
  )
}

function CityRow({ title, city, allListings, scrollPosition, onScroll }: { 
  title: string; 
  city: string; 
  allListings: Listing[]; 
  scrollPosition: number; 
  onScroll: (pos: number) => void 
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const CARD_W = 260 // matches w-[260px]
  const GAP = 24 // gap-6 = 24px
  const ITEMS_PER_PAGE = 4

  const visibleCards = Math.min(ITEMS_PER_PAGE, Math.max(allListings.length, 1))
  const containerWidth = visibleCards * CARD_W + Math.max(0, visibleCards - 1) * GAP
  const totalWidth = allListings.length * CARD_W + Math.max(0, allListings.length - 1) * GAP

  const cardStride = CARD_W + GAP
  const cardsPerPage = Math.max(1, Math.floor((containerWidth + GAP) / cardStride))
  const totalPages = Math.max(0, Math.ceil(allListings.length / cardsPerPage) - 1)

  const currentPage = Math.min(Math.max(scrollPosition, 0), totalPages)
  const canScrollLeft = currentPage > 0
  const canScrollRight = currentPage < totalPages

  const pixelsPerPage = cardStride * cardsPerPage
  const targetTransform = currentPage * pixelsPerPage
  const maxTransform = Math.max(0, totalWidth - containerWidth)
  const actualTransform = Math.min(targetTransform, maxTransform)



  const scrollLeft = () => {
    if (!canScrollLeft) return
    onScroll(scrollPosition - 1)
  }

  const scrollRight = () => {
    if (!canScrollRight) return
    onScroll(scrollPosition + 1)
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-subtle">{allListings.length} properties available</p>
        </div>
      </div>
      <div className="relative mt-4">
        {/* Left arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollLeft();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          disabled={!canScrollLeft}
          className={`absolute -left-8 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full w-10 h-10 border border-muted shadow-sm transition-all ${
            canScrollLeft ? 'bg-surface hover:bg-muted cursor-pointer' : 'bg-surface opacity-40 cursor-not-allowed'
          }`}
          aria-label="Previous listings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Scroll container - fixed width showing exactly 4 cards */}
        <div 
          ref={containerRef}
          className="overflow-hidden mx-auto"
          style={{ width: `${containerWidth}px`, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform transition-transform duration-500 ease-in-out"
            style={{ 
              width: `${totalWidth}px`,
              transform: `translateX(-${actualTransform}px)` 
            }}
          >
            {allListings.map((l) => (
              <div key={l.id} className="w-[260px] flex-shrink-0">
                <ListingCard l={l} className="h-[340px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            scrollRight();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          disabled={!canScrollRight}
          className={`absolute -right-8 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center rounded-full w-10 h-10 border border-muted shadow-sm transition-all ${
            canScrollRight ? 'bg-surface hover:bg-muted cursor-pointer' : 'bg-surface opacity-40 cursor-not-allowed'
          }`}
          aria-label="Next listings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default function ExplorePage() {
  
  const [location, setLocation] = useState("")
  const [checkIn, setCheckIn] = useState<string>("")
  const [checkOut, setCheckOut] = useState<string>("")
  const [guests, setGuests] = useState<number>(1)
  
  // Scroll positions for each city row
  const [nyScroll, setNyScroll] = useState(0)
  const [laScroll, setLaScroll] = useState(0)
  const [austinScroll, setAustinScroll] = useState(0)
  const [miamiScroll, setMiamiScroll] = useState(0)
  
  const listings: Listing[] = [
    {
      id: 1,
      title: "Modern Soho Loft",
      city: "New York, NY",
      beds: 2,
      baths: 2,
      guests: 4,
      price: 350,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Stylish Brooklyn Studio",
      city: "New York, NY",
      beds: 1,
      baths: 1,
      guests: 2,
      price: 185,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Sunny City Center Flat",
      city: "San Francisco, CA",
      beds: 2,
      baths: 1,
      guests: 3,
      price: 220,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Cozy Mountain View Retreat",
      city: "Denver, CO",
      beds: 3,
      baths: 2,
      guests: 6,
      price: 290,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d87?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Beachfront Bungalow",
      city: "Miami, FL",
      beds: 2,
      baths: 2,
      guests: 4,
      price: 310,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1505691723518-34d6a21c3d47?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Lakeview Cabin",
      city: "Lake Tahoe, CA",
      beds: 3,
      baths: 2,
      guests: 6,
      price: 275,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Minimalist Downtown Suite",
      city: "Seattle, WA",
      beds: 1,
      baths: 1,
      guests: 2,
      price: 200,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Desert Oasis Villa",
      city: "Scottsdale, AZ",
      beds: 4,
      baths: 3,
      guests: 8,
      price: 420,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Historic District Townhome",
      city: "Charleston, SC",
      beds: 2,
      baths: 2,
      guests: 4,
      price: 240,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 10,
      title: "Coastal Light-Filled Condo",
      city: "San Diego, CA",
      beds: 2,
      baths: 1,
      guests: 4,
      price: 260,
      rating: 4.5,
      img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop",
    },
  ]
  
  // Suggested listings for carousel (can be replaced with API-backed suggestions later)
  const suggested: Listing[] = listings.slice(0, 8)

  function SuggestedCarousel({ items, speed = 30 }: { items: Listing[]; speed?: number }) {
    // speed in px/sec
    const trackRef = useRef<HTMLDivElement | null>(null)
    const firstHalfRef = useRef<HTMLDivElement | null>(null)
    const animRef = useRef<number | null>(null)
    const lastTsRef = useRef<number | null>(null)
    const offsetRef = useRef<number>(0)
    const loopWidthRef = useRef<number>(0)
    const pausedRef = useRef<boolean>(false)

    useEffect(() => {
      const measure = () => {
        const w = firstHalfRef.current?.getBoundingClientRect().width || 0
        loopWidthRef.current = w
      }
      measure()
      const ro = new ResizeObserver(measure)
      if (firstHalfRef.current) ro.observe(firstHalfRef.current)
      const onResize = () => measure()
      window.addEventListener('resize', onResize)

      const step = (ts: number) => {
        if (pausedRef.current) {
          lastTsRef.current = ts
          animRef.current = requestAnimationFrame(step)
          return
        }
        const last = lastTsRef.current ?? ts
        const dt = Math.min(64, ts - last) // clamp for tab switches
        lastTsRef.current = ts
        offsetRef.current += (speed * dt) / 1000
        const loopW = loopWidthRef.current || 1
        if (offsetRef.current >= loopW) {
          offsetRef.current -= loopW
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`
        }
        animRef.current = requestAnimationFrame(step)
      }
      animRef.current = requestAnimationFrame(step)

      return () => {
        if (animRef.current) cancelAnimationFrame(animRef.current)
        window.removeEventListener('resize', onResize)
        ro.disconnect()
      }
    }, [speed, items])

    const onEnter = () => {
      pausedRef.current = true
    }
    const onLeave = () => {
      pausedRef.current = false
    }

    return (
      <div className="relative w-full overflow-hidden" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{
            transform: 'translateX(0)',
          }}
        >
          {/* First copy */}
          <div ref={firstHalfRef} className="flex gap-3">
            {items.map((l) => (
              <div key={`a-${l.id}`} className="shrink-0 min-w-[208px] max-w-[208px] h-[272px]">
                <ListingCard l={l} className="h-full flex flex-col" />
              </div>
            ))}
          </div>
          {/* Second copy for seamless loop */}
          <div className="flex gap-3" aria-hidden>
            {items.map((l) => (
              <div key={`b-${l.id}`} className="shrink-0 min-w-[208px] max-w-[208px] h-[272px]">
                <ListingCard l={l} className="h-full flex flex-col" />
              </div>
            ))}
          </div>
        </div>
        {/* Gradient edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16" style={{background: 'linear-gradient(90deg, var(--background) 20%, rgba(0,0,0,0) 100%)'}} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16" style={{background: 'linear-gradient(270deg, var(--background) 20%, rgba(0,0,0,0) 100%)'}} />
      </div>
    )
  }

  return (
    <div>
  {/* Header block: tighten spacing so suggested listings are fully visible at top */}
  <section className="flex flex-col">
  <h1 className="text-4xl md:text-5xl font-normal mt-0 md:mt-0 mb-8 md:mb-8 text-center">Book Direct, Pay Less</h1>

  {/* Segmented inputs styled like the design (using palette tokens) */}
  <div className="mt-0 mb-1">
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto w-full max-w-6xl">
          <div className="flex items-center justify-between gap-3 rounded-full bg-surface border border-muted p-2.5 shadow-sm">
            {/* Location */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hover:brightness-110 min-w-48 shrink-0">
              <span className="h-8 w-8 rounded-full border border-muted flex items-center justify-center text-subtle shrink-0">
                {/* Map pin icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/><circle cx="12" cy="11" r="2.5"/></svg>
              </span>
              <span className="text-sm font-semibold text-body">Locations</span>
            </div>

            {/* Check-in (inline label; label triggers native picker) */}
            <label htmlFor="checkInInput" className="relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hover:brightness-110 min-w-48 shrink-0 cursor-pointer">
              <span className="h-8 w-8 rounded-full border border-muted flex items-center justify-center text-subtle shrink-0">
                {/* Calendar icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
              </span>
              <span className="text-sm font-semibold text-body">Check-In</span>
            </label>
            <input
              id="checkInInput"
              aria-label="Check-In"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />

            {/* Check-out (inline label; label triggers native picker) */}
            <label htmlFor="checkOutInput" className="relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hover:brightness-110 min-w-48 shrink-0 cursor-pointer">
              <span className="h-8 w-8 rounded-full border border-muted flex items-center justify-center text-subtle shrink-0">
                {/* Calendar icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>
              </span>
              <span className="text-sm font-semibold text-body">Check-Out</span>
            </label>
            <input
              id="checkOutInput"
              aria-label="Check-Out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
            />

            {/* Guests */}
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hover:brightness-110 min-w-48 shrink-0">
              <span className="h-8 w-8 rounded-full border border-muted flex items-center justify-center text-subtle shrink-0">
                {/* Users icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="9" cy="7" r="3"/><path d="M2 21v-1a7 7 0 0 1 14 0v1"/><circle cx="17" cy="7" r="3"/><path d="M21 21v-1a7 7 0 0 0-4-6"/></svg>
              </span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-subtle">Guests</span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10) || 1)}
                  className="bg-transparent text-body outline-none pr-4 text-sm"
                >
                  {Array.from({ length: 16 }).map((_, i) => (
                    <option key={i + 1} value={i + 1} className="bg-surface text-body">
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search button */}
            <div className="shrink-0">
              <button type="submit" className="inline-flex items-center justify-center rounded-full btn-primary px-7 py-2.5 text-sm font-medium">
                Search
              </button>
            </div>
          </div>

          {/* Validation hint */}
          {checkIn && checkOut && new Date(checkOut) < new Date(checkIn) && (
            <p className="mt-2 text-sm" style={{ color: 'var(--danger)' }}>
              Check-out date must be the same as or after check-in date.
            </p>
          )}
          </form>

        </div>

        {/* Search categories removed */}

  {/* Suggested carousel (full-width) */}
  <section className="mt-2 md:mt-3 w-full">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Suggested for you</h2>
          </div>
          <SuggestedCarousel items={suggested} speed={40} />
        </section>
      </section>

  {/* Map left, listings right */}
  <section className="mt-8 md:mt-12 lg:mt-16 grid lg:grid-cols-2 gap-6">
        {/* Map column */}
        <div className="rounded-xl border border-muted bg-surface overflow-hidden h-[calc(100vh-1rem)] min-h-[600px] sticky top-4 self-start">
          <GoogleMap />
        </div>

        {/* Listings column (2 cols) */}
        <div>
          {/* Results summary now placed above listings on all screens (further down the page) */}
          <div className="md:text-left">
            <h2 className="text-2xl font-bold">24 stays in map area</h2>
            <p className="text-subtle">Explore properties in the current map view</p>
          </div>
          <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map((l) => (
              <ListingCard key={l.id} l={l} />
            ))}
          </div>
        </div>
      </section>

  {/* Value props strip */}
  <section className="mt-10">
        <div className="rounded-3xl border border-muted bg-surface p-5 sm:p-6 md:p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Perfect Place */}
            <div className="flex items-start gap-4">
              <span className="icon-circle bg-badge">
                {/* Home icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M3 12l9-7 9 7"/><path d="M9 21V9h6v12"/></svg>
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-body">Find the Perfect Place</h3>
                <p className="text-subtle">Handpicked stays for every kind of traveler.</p>
              </div>
            </div>

            {/* Book Direct and Save */}
            <div className="flex items-start gap-4">
              <span className="icon-circle bg-badge">
                {/* Savings/tag icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><path d="M20 13.5L10.5 4H4v6.5L13.5 20a1.5 1.5 0 0 0 2.121 0L20 15.621A1.5 1.5 0 0 0 20 13.5z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-body">Book Direct and Save</h3>
                <p className="text-subtle">Skip platform fees and keep more in your pocket.</p>
              </div>
            </div>

            {/* Explore New Places */}
            <div className="flex items-start gap-4">
              <span className="icon-circle bg-badge">
                {/* Compass icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent"><circle cx="12" cy="12" r="10"/><path d="M16 8l-4 2-2 4 4-2 2-4z"/></svg>
              </span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-body">Explore New Places</h3>
                <p className="text-subtle">Discover hidden gems beyond the usual spots.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  {/* Top cities rows */}
  <section className="mt-14 container mx-auto px-4">
        <h2 className="text-3xl font-bold">Explore Top Cities</h2>
        <p className="text-subtle mt-2">Discover amazing stays in popular destinations across the United States</p>

        {/* New York */}
        <CityRow 
          key="new-york"
          title="New York, NY"
          city="New York"
          allListings={[
            listings[0], 
            listings[1], 
            { id: 11, title: "Manhattan Penthouse", city: "New York, NY", beds: 3, baths: 3, guests: 6, price: 650, rating: 5.0, img: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f6?q=80&w=1600&auto=format&fit=crop" }, 
            { id: 12, title: "Cozy East Village Apartment", city: "New York, NY", beds: 1, baths: 1, guests: 3, price: 220, rating: 4.8, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" },
            { id: 25, title: "Brooklyn Heights Townhouse", city: "New York, NY", beds: 4, baths: 3, guests: 8, price: 580, rating: 4.9, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop" },
            { id: 26, title: "Upper West Side Classic", city: "New York, NY", beds: 2, baths: 2, guests: 4, price: 420, rating: 4.7, img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop" },
            { id: 27, title: "Tribeca Luxury Suite", city: "New York, NY", beds: 2, baths: 2, guests: 4, price: 525, rating: 4.8, img: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=1600&auto=format&fit=crop" },
            { id: 28, title: "Queens Modern Apartment", city: "New York, NY", beds: 1, baths: 1, guests: 2, price: 175, rating: 4.6, img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop" }
          ]}
          scrollPosition={nyScroll}
          onScroll={setNyScroll}
        />

        {/* Los Angeles */}
        <CityRow 
          key="los-angeles"
          title="Los Angeles, CA"
          city="Los Angeles"
          allListings={[
            { id: 13, title: "Santa Monica Beach House", city: "Los Angeles, CA", beds: 3, baths: 2, guests: 6, price: 425, rating: 4.9, img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop" },
            { id: 14, title: "Hollywood Hills Villa", city: "Los Angeles, CA", beds: 4, baths: 3, guests: 8, price: 550, rating: 4.8, img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop" },
            { id: 15, title: "Downtown LA Loft", city: "Los Angeles, CA", beds: 2, baths: 2, guests: 4, price: 295, rating: 4.6, img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop" },
            { id: 16, title: "Venice Beach Bungalow", city: "Los Angeles, CA", beds: 2, baths: 1, guests: 4, price: 375, rating: 4.9, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" },
            { id: 29, title: "Malibu Oceanfront", city: "Los Angeles, CA", beds: 3, baths: 3, guests: 6, price: 680, rating: 5.0, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" },
            { id: 30, title: "Beverly Hills Estate", city: "Los Angeles, CA", beds: 5, baths: 4, guests: 10, price: 890, rating: 4.9, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" },
            { id: 31, title: "Silver Lake Retreat", city: "Los Angeles, CA", beds: 2, baths: 2, guests: 4, price: 315, rating: 4.7, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" },
            { id: 32, title: "Pasadena Craftsman", city: "Los Angeles, CA", beds: 3, baths: 2, guests: 6, price: 395, rating: 4.8, img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop" }
          ]}
          scrollPosition={laScroll}
          onScroll={setLaScroll}
        />

        {/* Austin */}
        <CityRow 
          key="austin"
          title="Austin, TX"
          city="Austin"
          allListings={[
            { id: 17, title: "Downtown Austin Condo", city: "Austin, TX", beds: 2, baths: 2, guests: 4, price: 280, rating: 4.7, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" },
            { id: 18, title: "South Congress Loft", city: "Austin, TX", beds: 1, baths: 1, guests: 2, price: 195, rating: 4.8, img: "https://images.unsplash.com/photo-1502672260066-6bc35f0b8e4f?q=80&w=1600&auto=format&fit=crop" },
            { id: 19, title: "Lake Travis Retreat", city: "Austin, TX", beds: 3, baths: 2, guests: 6, price: 340, rating: 4.9, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1600&auto=format&fit=crop" },
            { id: 20, title: "East Austin Bungalow", city: "Austin, TX", beds: 2, baths: 1, guests: 4, price: 250, rating: 4.6, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop" },
            { id: 33, title: "Zilker Park Cottage", city: "Austin, TX", beds: 2, baths: 2, guests: 4, price: 265, rating: 4.7, img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop" },
            { id: 34, title: "West Campus Student Pad", city: "Austin, TX", beds: 1, baths: 1, guests: 2, price: 175, rating: 4.5, img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1600&auto=format&fit=crop" },
            { id: 35, title: "Hill Country Ranch", city: "Austin, TX", beds: 4, baths: 3, guests: 8, price: 450, rating: 4.9, img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop" },
            { id: 36, title: "Barton Springs Hideaway", city: "Austin, TX", beds: 2, baths: 2, guests: 4, price: 290, rating: 4.8, img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1600&auto=format&fit=crop" }
          ]}
          scrollPosition={austinScroll}
          onScroll={setAustinScroll}
        />

        {/* Miami */}
        <CityRow 
          key="miami"
          title="Miami, FL"
          city="Miami"
          allListings={[
            { id: 21, title: "South Beach Ocean View", city: "Miami, FL", beds: 2, baths: 2, guests: 4, price: 450, rating: 4.9, img: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1600&auto=format&fit=crop" },
            { id: 22, title: "Brickell High-Rise", city: "Miami, FL", beds: 1, baths: 1, guests: 2, price: 320, rating: 4.7, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop" },
            { id: 23, title: "Wynwood Arts District Loft", city: "Miami, FL", beds: 2, baths: 2, guests: 4, price: 285, rating: 4.8, img: "https://images.unsplash.com/photo-1502672260066-6bc35f0b8e4f?q=80&w=1600&auto=format&fit=crop" },
            { id: 24, title: "Coconut Grove Villa", city: "Miami, FL", beds: 3, baths: 3, guests: 6, price: 520, rating: 5.0, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" },
            { id: 37, title: "Coral Gables Estate", city: "Miami, FL", beds: 4, baths: 4, guests: 8, price: 640, rating: 4.9, img: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1600&auto=format&fit=crop" },
            { id: 38, title: "Key Biscayne Beachfront", city: "Miami, FL", beds: 3, baths: 2, guests: 6, price: 580, rating: 4.8, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop" },
            { id: 39, title: "Design District Penthouse", city: "Miami, FL", beds: 2, baths: 2, guests: 4, price: 395, rating: 4.7, img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop" },
            { id: 40, title: "Little Havana Casita", city: "Miami, FL", beds: 1, baths: 1, guests: 2, price: 245, rating: 4.6, img: "https://images.unsplash.com/photo-1600573472550-303630c4f762?q=80&w=1600&auto=format&fit=crop" }
          ]}
          scrollPosition={miamiScroll}
          onScroll={setMiamiScroll}
        />
      </section>
      {/* CTA: Encourage exploration and hosting */}
      <section className="mt-14 container mx-auto px-4">
        <div className="rounded-3xl border border-muted bg-surface p-6 sm:p-8 md:p-10 md:grid md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-body text-left">Plan Smarter. Travel Freely.</h2>
            <p className="mt-3 text-subtle max-w-2xl text-left">Skip the middleman — book directly with trusted hosts and save more on every stay.</p>
          </div>
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:justify-end md:ml-auto">
            <Link href="/signup" className="rounded-full btn-primary px-6 py-3 text-sm font-medium text-center">Start Exploring</Link>
            <Link href="/signup" className="rounded-full btn-accent px-6 py-3 text-sm font-medium text-center">List Your Property</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ExploreFooter />
    </div>
  )
}

// Footer specific to Explore page
function ExploreFooter() {
  return (
    <footer className="mt-16 full-bleed border-t border-muted">
      {/* Link grid section (content width constrained) */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Support */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-body mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Cancellation & Refund Policy</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Safety & Security Guidelines</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-body mb-3">Hosting</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">List Your Property</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Channel Manager API</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Hosting Standards & Tips</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Community Guidelines</a></li>
            </ul>
          </div>

          {/* TripSkip */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-body mb-3">TripSkip</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">About TripSkip</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-subtle hover:text-accent transition-colors">Privacy & Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Full-width divider */}
      <div className="full-bleed border-t border-muted" />
      {/* Legal stripe full-width with centered content */}
      <div className="full-bleed">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between text-subtle">
          <p>© {new Date().getFullYear()} TripSkip. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {/* X (Twitter) official glyph with center gap via evenodd */}
            <a href="#" aria-label="X" title="X"
               className="text-accent hover:text-accent-hover transition-colors inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.244 2.25h3.683l-8.058 9.19 9.47 11.06h-7.359l-5.296-6.637L4.24 22.5H.556l8.46-9.646L0 2.25h7.375l4.756 5.988 6.113-5.988zM16.864 20.343h2.037L7.223 4.31H5.086l11.778 16.033z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" title="Instagram"
               className="text-accent hover:text-accent-hover transition-colors inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M16.5 7.5h.01" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" title="Facebook"
               className="text-accent hover:text-accent-hover transition-colors inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-3c-.3 0-1 .2-1 1V12h3.2l-.5 3H13v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
