import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display:  'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sunkeydesignsystems.com'
  ),
  title: {
    default:  'Sunkey Design Systems — End-to-End Electronics Engineering',
    template: '%s | Sunkey Design Systems',
  },
  description:
    'PCB design, embedded firmware, PCBA, and electronics manufacturing for hardware teams in the USA and Europe. Prototype costing in 2 business days.',
  icons: {
    icon:             '/images/favicon-32.png',
    shortcut:         '/images/favicon-32.png',
    apple:            '/images/apple-touch-icon.png',
    other: [{ rel: 'icon', url: '/images/favicon-512.png', sizes: '512x512' }],
  },
  openGraph: {
    siteName: 'Sunkey Design Systems',
    type:     'website',
    locale:   'en_US',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots:  { index: true, follow: true },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
