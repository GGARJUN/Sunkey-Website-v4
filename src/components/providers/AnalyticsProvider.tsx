'use client'

import { useEffect } from 'react'

/**
 * AnalyticsProvider — loads Google Tag Manager only after explicit consent.
 *
 * GDPR compliance:
 * - Analytics are NOT loaded on first visit.
 * - GTM is loaded only when the user clicks "Accept" in the CookieBanner.
 * - Consent is stored in localStorage under CONSENT_KEY.
 * - If the user declines, GTM is never loaded — not even on subsequent visits.
 *
 * Uses a custom DOM event ('analytics-consent') dispatched by CookieBanner
 * to signal real-time consent. This avoids polling and works even if the
 * user accepts during the current session.
 */

export const CONSENT_KEY = 'sunkey_analytics_consent'

interface AnalyticsProviderProps {
  gtmId: string
}

export function AnalyticsProvider({ gtmId }: AnalyticsProviderProps) {
  useEffect(() => {
    if (!gtmId) return

    /** Load GTM once — idempotent (checks if already loaded) */
    function loadGtm() {
      // Prevent double-loading
      if (document.getElementById('gtm-script')) return

      // Push initial dataLayer event
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })

      // Inject GTM script
      const script = document.createElement('script')
      script.id    = 'gtm-script'
      script.async = true
      script.src   = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`
      document.head.appendChild(script)
    }

    // Load immediately if already consented in a previous session
    const existing = localStorage.getItem(CONSENT_KEY)
    if (existing === 'granted') {
      loadGtm()
    }

    // Listen for real-time consent from CookieBanner
    function handleConsent(e: Event) {
      if ((e as CustomEvent<string>).detail === 'granted') loadGtm()
    }
    window.addEventListener('analytics-consent', handleConsent)
    return () => window.removeEventListener('analytics-consent', handleConsent)
  }, [gtmId])

  return null
}

/* ── Global type augmentation for dataLayer ─────────────── */
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
