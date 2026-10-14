'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services',       href: '/services'       },
  { label: 'Manufacturing',  href: '/manufacturing'  },
  { label: 'Process',        href: '/how-we-work'    },
  { label: 'Industries',     href: '/industries'     },
  { label: 'Work',           href: '/work'           },
  { label: 'Resources',      href: '/resources'      },
  { label: 'Contact',        href: '/contact'        },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(13,15,20,0.94)] backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.04)] py-3'
            : 'py-5',
        ].join(' ')}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 cursor-pointer" aria-label="Sunkey Design Systems home">
              <Image
                src="/images/logo-white.png"
                alt="Sunkey Design Systems"
                width={180}
                height={40}
                priority
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              <ul className="flex items-center gap-8 list-none">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.85rem] font-medium text-white/60 tracking-[-0.01em] hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA + toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="btn-primary hidden lg:inline-flex text-[0.85rem] px-5 py-2.5">
                Book a Call
              </Link>
              <button
                className="lg:hidden flex items-center justify-center w-9 h-9 text-white cursor-pointer"
                onClick={() => setOpen(p => !p)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden absolute inset-x-0 top-full bg-[rgba(13,15,20,0.98)] backdrop-blur-md border-t border-white/[0.06]"
            >
              <div className="section-container py-6 flex flex-col gap-5">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[0.95rem] font-semibold text-white/70 hover:text-white transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 border-t border-white/[0.06]">
                  <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
                    Book a Call
                  </Link>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  )
}
