import type { ReactNode } from 'react'

/**
 * Payload CMS admin layout.
 * Deliberately bare — no Navbar, Footer, or SmoothScrollProvider.
 * This is the correct pattern per the brief's route group standard.
 */
export default function PayloadLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
