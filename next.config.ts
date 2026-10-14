import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

/**
 * Next.js config wrapped with Payload's next plugin.
 *
 * Security headers are handled in src/middleware.ts (edge-level, covers all routes).
 * The duplicate headers block from earlier batches has been removed.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  /**
   * Experimental: partial pre-rendering for better Core Web Vitals.
   * Enables static shell + dynamic holes — key pages get faster LCP.
   * Available in Next.js 15 canary; enable when stable.
   */
  // experimental: { ppr: true },
}

export default withPayload(nextConfig)
