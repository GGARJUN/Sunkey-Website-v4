import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Real Unsplash PCB macro — no slide content */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80&auto=format&fit=crop"
          alt="PCB circuit board — Sunkey Design Systems"
          fill priority sizes="100vw"
          className="object-cover object-center"
          style={{ filter: 'brightness(0.28) saturate(0.85)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-bg/40" />
      </div>

      {/* Electrical trace SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
           aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="trace-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g stroke="#FF5A1F" strokeWidth="1" fill="none" filter="url(#trace-glow)" className="trace-animate">
          <line x1="0" y1="200" x2="400" y2="200" /><line x1="400" y1="200" x2="500" y2="300" />
          <line x1="500" y1="300" x2="900" y2="300" /><circle cx="400" cy="200" r="4" fill="#FF5A1F" />
          <circle cx="500" cy="300" r="4" fill="#FF5A1F" />
        </g>
        <g stroke="#FF5A1F" strokeWidth="0.8" fill="none" filter="url(#trace-glow)"
           style={{ animation: 'trace-pulse 4s ease-in-out 1s infinite' }}>
          <line x1="900" y1="500" x2="1200" y2="500" /><line x1="1200" y1="500" x2="1300" y2="400" />
          <line x1="1300" y1="400" x2="1440" y2="400" /><circle cx="1200" cy="500" r="3.5" fill="#FF5A1F" />
        </g>
      </svg>

      {/* Content */}
      <div className="section-container relative z-10 w-full pt-[100px] pb-[80px]">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2.5 mb-7"
               style={{ animation: 'fadeUp 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both' }}>
            <span className="w-7 h-[1.5px] flex-shrink-0" style={{ background: 'linear-gradient(90deg,#FF5A1F,#ec4040)' }} />
            <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-white/50">End-to-end electronics engineering</span>
          </div>
          <h1 className="font-black tracking-tightest leading-[1.05] text-white mb-6"
              style={{ fontSize: 'clamp(3rem,6vw,5rem)', animation: 'fadeUp 0.7s 0.22s cubic-bezier(0.16,1,0.3,1) both' }}>
            Engineering<br />Intelligence.<br /><span className="gradient-text">Delivered.</span>
          </h1>
          <p className="text-[1.05rem] font-normal leading-[1.72] text-white/55 mb-10 max-w-[520px]"
             style={{ animation: 'fadeUp 0.6s 0.38s cubic-bezier(0.16,1,0.3,1) both' }}>
            End-to-end product engineering for electronics, embedded firmware, and IoT systems — serving hardware teams in the USA and Europe.
          </p>
          <div className="flex items-center gap-4 mb-14 flex-wrap"
               style={{ animation: 'fadeUp 0.6s 0.52s cubic-bezier(0.16,1,0.3,1) both' }}>
            <Link href="/services" className="btn-primary">Our Services</Link>
            <Link href="/contact" className="btn-ghost">Contact Us →</Link>
          </div>
          <div className="flex items-center flex-wrap gap-0 pt-7 border-t border-white/[0.08]"
               style={{ animation: 'fadeUp 0.6s 0.64s cubic-bezier(0.16,1,0.3,1) both' }}>
            {['CE & FCC compliance support','2-day prototype costing','2–3 week delivery'].map((item, i) => (
              <span key={item} className={['flex items-center gap-1.5 text-[0.75rem] font-medium text-white/38 pr-5 mr-5', i < 2 ? 'border-r border-white/[0.1]' : ''].join(' ')}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#FF5A1F' }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none z-[2]" />
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        @media (prefers-reduced-motion:reduce) { [style*="fadeUp"] { animation:none!important; opacity:1!important; } }
      `}</style>
    </section>
  )
}
