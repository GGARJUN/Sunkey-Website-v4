import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt     = 'Sunkey Design Systems — End-to-End Electronics Engineering'
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Default Open Graph image.
 * Rendered by the Edge runtime — fast, no Node.js required.
 *
 * Uses system sans-serif because Poppins loading at the edge adds latency.
 * The gradient, typography scale, and layout still communicate the brand clearly.
 *
 * Individual pages can export their own opengraph-image.tsx file to
 * override with page-specific title text.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          background:      '#1a1a1a',
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'flex-end',
          padding:         '72px 80px',
          position:        'relative',
          fontFamily:      'system-ui, -apple-system, sans-serif',
          overflow:        'hidden',
        }}
      >
        {/* Gradient glow orb — top right */}
        <div
          style={{
            position:     'absolute',
            top:          -120,
            right:        -80,
            width:        560,
            height:       560,
            borderRadius: '50%',
            background:   'radial-gradient(circle, rgba(240,80,48,0.28) 0%, transparent 68%)',
          }}
        />

        {/* Circuit trace accent — top left */}
        <div
          style={{
            position:     'absolute',
            top:          48,
            left:         80,
            width:        280,
            height:       1.5,
            background:   'linear-gradient(90deg, #f05030, #ec4040)',
            opacity:      0.4,
          }}
        />

        {/* Logo mark — top left */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'absolute', top: 60, left: 80 }}>
          {/* S-mark circle */}
          <div
            style={{
              width:        48,
              height:       48,
              borderRadius: '50%',
              background:   'linear-gradient(135deg, #f05030 0%, #ec4040 100%)',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              fontSize:     22,
              fontWeight:   900,
              color:        'white',
            }}
          >
            S
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: '0.1em', color: 'white' }}>
              SUNKEY
            </div>
            <div style={{ fontSize: 9, fontWeight: 400, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)' }}>
              DESIGN SYSTEMS
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize:      72,
              fontWeight:    900,
              lineHeight:    1.05,
              letterSpacing: '-0.04em',
              color:         'white',
              maxWidth:      900,
            }}
          >
            End-to-end electronics engineering.
          </div>

          {/* Gradient accent line */}
          <div
            style={{
              fontSize:      28,
              fontWeight:    600,
              letterSpacing: '-0.02em',
              background:    'linear-gradient(135deg, #f05030 0%, #ec4040 100%)',
              WebkitBackgroundClip: 'text',
              color:         'transparent',
            }}
          >
            PCB design · Firmware · PCBA · Manufacturing
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position:       'absolute',
            bottom:         0,
            left:           0,
            right:          0,
            height:         4,
            background:     'linear-gradient(90deg, #f05030 0%, #ec4040 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
