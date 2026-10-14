import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── V2 Dark Design System ── */
        'bg':          '#0D0F14',   // global canvas
        'surface':     '#1A1D24',   // cards, elevated sections
        'surface-2':   '#151A20',   // deeper elevation
        'border-card': '#2A2E36',   // card border
        'text-primary':   '#FFFFFF',
        'text-secondary': '#E5E7EB',
        'text-muted':     '#737C87',
        'accent':      '#FF5A1F',   // brand orange
        'accent-soft': 'rgba(255,90,31,0.15)',

        /* ── Legacy aliases (kept for compatibility) ── */
        'brand-red':    '#ec4040',
        'brand-orange': '#f05030',
        'dark':         '#0D0F14',
        'dark-2':       '#111111',
        'surface-light':'#f2f2f2',
        'muted':        '#737C87',
        'border-light': '#e4e4e4',
      },
      fontFamily: {
        sans:    ['var(--font-poppins)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF5A1F 0%, #ec4040 100%)',
        'card-gradient':  'linear-gradient(135deg, rgba(255,90,31,0.08) 0%, rgba(236,64,64,0.04) 100%)',
      },
      fontSize: {
        'hero':    'clamp(2.8rem, 5vw, 4.5rem)',
        'section': 'clamp(1.9rem, 3.2vw, 2.8rem)',
      },
      letterSpacing: {
        'tightest': '-0.045em',
        'tighter':  '-0.03em',
        'eyebrow':  '0.14em',
      },
      borderRadius: {
        'card': '16px',
      },
      boxShadow: {
        'card-hover': '0 8px 32px rgba(255,90,31,0.15)',
        'glow':       '0 0 24px rgba(255,90,31,0.3)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'entry': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
