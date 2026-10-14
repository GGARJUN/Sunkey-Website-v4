import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Security headers middleware.
 *
 * Applied at the Vercel Edge — runs before any page or API handler.
 * Covers all public-facing pages (Payload admin excluded via matcher).
 *
 * Headers included:
 * - Content-Security-Policy (CSP)
 * - Strict-Transport-Security (HSTS)
 * - X-Frame-Options
 * - X-Content-Type-Options
 * - Referrer-Policy
 * - Permissions-Policy
 *
 * CSP note:
 * 'unsafe-inline' for scripts is required because Next.js 15 injects
 * inline hydration scripts. For a stricter CSP without 'unsafe-inline',
 * implement nonce-based CSP using a custom server or this middleware
 * with nonce generation and propagation to layout.tsx.
 *
 * HSTS preload:
 * Before enabling preload, ensure sunkeydesignsystems.com is submitted
 * to the HSTS preload list at https://hstspreload.org
 */

function buildCsp(): string {
  const directives: string[] = [
    // Default: only same-origin
    "default-src 'self'",

    // Scripts: self + GTM + GA + inline (required by Next.js hydration)
    [
      "script-src",
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",           // Required for Next.js dev mode; safe to remove in prod if needed
      "https://www.googletagmanager.com",
      "https://www.google-analytics.com",
      "https://ssl.google-analytics.com",
    ].join(' '),

    // Styles: self + Google Fonts + inline (Tailwind injects inline styles)
    [
      "style-src",
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com",
    ].join(' '),

    // Fonts: self + Google Fonts CDN
    "font-src 'self' https://fonts.gstatic.com data:",

    // Images: self + data URIs + blobs + any HTTPS (covers OG images, media)
    "img-src 'self' data: blob: https:",

    // Fetch / XHR: self + GA (for beacon/fetch analytics calls)
    [
      "connect-src",
      "'self'",
      "https://www.google-analytics.com",
      "https://region1.google-analytics.com",
      "https://stats.g.doubleclick.net",
    ].join(' '),

    // Frames: only GTM noscript iframe (no other iframes on site)
    "frame-src https://www.googletagmanager.com",

    // Block Flash, Java, etc.
    "object-src 'none'",

    // Prevent base tag injection attacks
    "base-uri 'self'",

    // Form actions: only submit to same origin
    "form-action 'self'",

    // Prevent embedding in other sites (defense in depth with X-Frame-Options)
    "frame-ancestors 'none'",

    // Require all resource loads over HTTPS
    "upgrade-insecure-requests",
  ]

  return directives.join('; ')
}

export function middleware(_request: NextRequest) {
  const response = NextResponse.next()
  const { headers } = response

  /* ── Content Security Policy ──────────────────────────── */
  headers.set('Content-Security-Policy', buildCsp())

  /* ── HSTS — tell browsers to always use HTTPS ─────────── */
  // max-age = 2 years (63,072,000 seconds)
  // includeSubDomains covers admin.sunkeydesignsystems.com etc.
  // preload: submit to https://hstspreload.org before adding
  headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  )

  /* ── Clickjacking protection ──────────────────────────── */
  headers.set('X-Frame-Options', 'DENY')

  /* ── MIME-type sniffing protection ────────────────────── */
  headers.set('X-Content-Type-Options', 'nosniff')

  /* ── Referrer policy ──────────────────────────────────── */
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  /* ── Permissions policy ───────────────────────────────── */
  headers.set(
    'Permissions-Policy',
    [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',    // Opt out of FLoC
      'browsing-topics=()',     // Opt out of Topics API
    ].join(', ')
  )

  /* ── Remove server fingerprinting ─────────────────────── */
  headers.delete('X-Powered-By')
  headers.set('Server', 'Vercel')

  return response
}

/**
 * Matcher: apply to all public pages.
 * Exclude:
 * - /admin and /admin/* — Payload CMS panel (manages its own headers)
 * - /api/* — API routes set cache/CORS headers themselves
 * - /_next/* — Next.js static assets (cached by Vercel CDN)
 * - Static file extensions — served directly by Vercel without middleware
 */
export const config = {
  matcher: [
    '/((?!admin|api|_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|otf|eot|mp4|pdf|xml|txt|json)).*)',
  ],
}
