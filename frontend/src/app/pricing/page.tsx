'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 border-b border-white/10 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-semibold text-white/90 hover:text-white">Home</Link>
            <Link href="/explore" className="text-white/70 hover:text-white">Explore</Link>
            <span className="text-white/70">Pricing</span>
          </div>
          {/* Top-right brand name per request */}
          <div className="text-2xl font-bold text-indigo-300">TripSkip</div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Founder Listings Program banner */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="mb-8 flex w-full items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
              <span className="text-indigo-300">✦</span>
              Limited Time
            </span>
          </div>

          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Founder Listings Program
          </h1>
          <p className="mt-4 text-center text-white/70 text-lg max-w-3xl mx-auto">
            Join our exclusive launch promotion and get your first listings absolutely free
          </p>

          {/* 3 perks */}
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 text-2xl">✦</div>
              <p className="text-xl font-semibold">10,000 Free Listings</p>
              <p className="mt-1 text-white/60">First 10K listings get 1 year free</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 text-2xl">👥</div>
              <p className="text-xl font-semibold">5 Listings Per Host</p>
              <p className="mt-1 text-white/60">Maximum 5 free listings per account</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 text-2xl">🕒</div>
              <p className="text-xl font-semibold">Limited Time</p>
              <p className="mt-1 text-white/60">Available until 2025 or sold out</p>
            </div>
          </div>

          <p className="mt-10 text-center text-white/80 text-lg max-w-4xl mx-auto">
            Create your first listing today and automatically receive 1 year of free service. Perfect for property managers looking to boost direct bookings without upfront costs.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/signup?role=host"
              className="inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-fuchsia-600/30 hover:bg-fuchsia-500 transition"
            >
              🚀 Simply create a listing to activate your founder benefits
            </Link>
          </div>
        </section>

        {/* Pricing table */}
        <section className="mt-14">
          {/* Toggle header (visual only, annual active) */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button className="px-4 py-2 rounded-full bg-white/5 text-white/60 border border-white/10">Monthly</button>
            <div className="relative">
              <button className="px-4 py-2 rounded-full bg-indigo-600 text-white shadow-md">Annual</button>
              <span className="absolute -top-2 -right-3 text-xs rounded-full bg-fuchsia-600 px-2 py-0.5">Save 17%</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Starter */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Starter</h3>
              <div className="mt-3 text-4xl font-bold">$0<span className="text-base font-normal text-white/60">/year</span></div>
              <p className="mt-2 text-white/70">Perfect for getting started</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>✔ 1 listing</li>
                <li>✔ 300 redirects per month</li>
                <li>✔ Basic analytics</li>
                <li>✔ Custom short URLs</li>
                <li>✔ Email support</li>
              </ul>
              <div className="mt-6">
                <Link href="/signup" className="block w-full rounded-lg bg-white/10 px-4 py-2 text-center hover:bg-white/20">Get Started with Starter</Link>
              </div>
            </div>

            {/* Growth */}
            <div className="relative rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6 ring-1 ring-inset ring-indigo-500/20">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium">Most Popular</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold">Growth</h3>
              <div className="mt-3 text-4xl font-bold">$150<span className="text-base font-normal text-white/60">/year</span></div>
              <p className="mt-2 text-white/70">For growing property portfolios</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>✔ Up to 5 listings</li>
                <li>✔ 1,500 redirects per month</li>
                <li>✔ Advanced analytics</li>
                <li>✔ Custom domains</li>
                <li>✔ Priority support</li>
                <li>✔ Bulk upload</li>
                <li>✔ A/B testing</li>
                <li>✔ Redirect bundles: $25 for 500 extra</li>
              </ul>
              <div className="mt-6">
                <Link href="/signup" className="block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center hover:bg-indigo-500">Get Started with Growth</Link>
              </div>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Pro</h3>
              <div className="mt-3 text-4xl font-bold">$390<span className="text-base font-normal text-white/60">/year</span></div>
              <p className="mt-2 text-white/70">For professional property managers</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>✔ Up to 25 listings</li>
                <li>✔ 5,000 redirects per month</li>
                <li>✔ White-label analytics</li>
                <li>✔ API access</li>
                <li>✔ Priority support</li>
                <li>✔ Advanced integrations</li>
                <li>✔ Custom reporting</li>
                <li>✔ Redirect bundles: $50 for 2,000 extra</li>
              </ul>
              <div className="mt-6">
                <Link href="/signup" className="block w-full rounded-lg bg-white/10 px-4 py-2 text-center hover:bg-white/20">Get Started with Pro</Link>
              </div>
            </div>

            {/* Portfolio */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-semibold">Portfolio</h3>
              <div className="mt-3 text-4xl font-bold">$1500<span className="text-base font-normal text-white/60">/year</span></div>
              <p className="mt-2 text-white/70">For large property portfolios</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>✔ 100 listings included</li>
                <li>✔ 50,000 redirects per month</li>
                <li>✔ White-label solution</li>
                <li>✔ Dedicated API access</li>
                <li>✔ Dedicated support</li>
                <li>✔ Custom integrations</li>
                <li>✔ Enterprise reporting</li>
                <li>✔ Redirect bundles: $100 for 10,000 extra</li>
              </ul>
              <div className="mt-6">
                <Link href="/signup" className="block w-full rounded-lg bg-white/10 px-4 py-2 text-center hover:bg-white/20">Get Started with Portfolio</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        <div className="max-w-7xl mx-auto px-4">&copy; 2025 TripSkip. All rights reserved.</div>
      </footer>
    </div>
  )
}
