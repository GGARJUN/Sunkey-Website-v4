'use client'

import { AnimateOnView } from '@/components/ui/AnimateOnView'

/* ── Coordinates on 1000 × 500 Mercator SVG ───────────────── */
const O = { x: 700, y: 268 } // Chennai, India

const DESTS = [
  { id:'usa',       x:185, y:210, flag:'🇺🇸', label:'USA',        role:'Active Client',  anchor:'middle' as const, dx:0,    dy:-16 },
  { id:'germany',   x:492, y:152, flag:'🇩🇪', label:'Germany',    role:'Active Client',  anchor:'start'  as const, dx:9,    dy:-14 },
  { id:'spain',     x:446, y:180, flag:'🇪🇸', label:'Spain',      role:'Active Client',  anchor:'end'    as const, dx:-9,   dy:-14 },
  { id:'uae',       x:600, y:228, flag:'🇦🇪', label:'UAE',        role:'Active Client',  anchor:'start'  as const, dx:10,   dy:-4  },
  { id:'singapore', x:766, y:308, flag:'🇸🇬', label:'Singapore',  role:'Active Client',  anchor:'start'  as const, dx:10,   dy:4   },
  { id:'australia', x:820, y:400, flag:'🇦🇺', label:'Australia',  role:'Active Client',  anchor:'start'  as const, dx:10,   dy:8   },
]

const STATS = [
  { value: '30+', unit: 'Yrs',      label: 'Combined Experience'  },
  { value: '50+', unit: 'Products', label: 'Delivered'            },
  { value: 'E2E', unit: '',         label: 'End-to-End Solutions' },
  { value: '20+', unit: 'Global',   label: 'Customers'            },
]

/* Quadratic bezier arc – curves gently toward north */
function arc(x2: number, y2: number): string {
  const dx   = x2 - O.x
  const dy   = y2 - O.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const cpx  = (O.x + x2) / 2
  const cpy  = (O.y + y2) / 2 - dist * 0.28
  return `M ${O.x} ${O.y} Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${x2} ${y2}`
}

/* ── Continent outlines (simplified) ───────────────────────── */
const CONTINENTS = [
  /* North America */
  'M 68,88 L 158,62 L 228,72 L 295,102 L 322,152 L 312,222 L 288,282 L 252,314 L 225,314 L 198,292 L 174,266 L 150,236 L 124,202 L 98,170 L 72,140 Z',
  /* South America */
  'M 198,292 L 262,288 L 284,322 L 278,374 L 260,428 L 234,474 L 208,474 L 186,444 L 176,396 L 178,348 Z',
  /* Greenland */
  'M 285,52 L 342,46 L 364,66 L 356,96 L 322,108 L 288,96 Z',
  /* Europe */
  'M 418,88 L 504,78 L 538,102 L 546,140 L 526,170 L 492,188 L 454,186 L 428,164 L 416,136 Z',
  /* Scandinavia */
  'M 452,64 L 494,58 L 514,80 L 502,112 L 478,118 L 454,96 Z',
  /* UK */
  'M 414,100 L 436,94 L 442,112 L 430,126 L 414,118 Z',
  /* Africa */
  'M 424,188 L 514,178 L 546,216 L 552,282 L 536,360 L 512,432 L 480,478 L 450,478 L 416,448 L 402,382 L 402,302 L 416,242 Z',
  /* Middle East */
  'M 548,198 L 600,192 L 618,232 L 602,272 L 566,278 L 542,254 Z',
  /* Asia */
  'M 614,190 L 688,182 L 718,140 L 762,102 L 850,90 L 900,110 L 908,158 L 888,204 L 856,232 L 822,248 L 788,264 L 758,270 L 732,258 L 708,238 L 690,278 L 672,304 L 646,340 L 622,336 L 606,296 L 608,246 Z',
  /* Australia */
  'M 756,352 L 874,346 L 902,382 L 898,436 L 864,462 L 812,462 L 768,438 L 748,400 Z',
]

export function GlobalClientele() {
  return (
    <section className="py-[100px] bg-white">
      <div className="section-container">

        <AnimateOnView className="text-center mb-12">
          <div className="section-label">Global Reach</div>
          <h2 className="font-extrabold tracking-tightest leading-[1.1]"
              style={{ fontSize:'clamp(2rem,3.5vw,2.8rem)', color:'#0D0F14' }}>
            Our Global <span className="gradient-text">Clientele</span>
          </h2>
          <p className="text-[0.92rem] mt-3" style={{ color:'#5A6072' }}>
            Serving hardware teams across 3 continents from Chennai, India
          </p>
        </AnimateOnView>

        {/* ── World Map ──────────────────────────────────────── */}
        <AnimateOnView className="w-full mb-12">
          <div className="w-full overflow-hidden rounded-card"
               style={{ border:'1px solid #E2E4EA', background:'#F7F8FB' }}>
            <svg viewBox="0 0 1000 500" className="w-full h-auto"
                 aria-label="World map showing Sunkey global clients">
              <defs>
                {/* Dotted texture */}
                <pattern id="gc-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="1.2" cy="1.2" r="1" fill="rgba(0,0,0,0.065)" />
                </pattern>
                {/* Glow */}
                <filter id="gc-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                {/* Path IDs for animateMotion - one per arc */}
                {DESTS.map(d => (
                  <path key={`def-${d.id}`} id={`gc-arc-${d.id}`} d={arc(d.x, d.y)} fill="none" />
                ))}
              </defs>

              {/* Background */}
              <rect width="1000" height="500" fill="#F7F8FB" />
              <rect width="1000" height="500" fill="url(#gc-dots)" />

              {/* Continents */}
              {CONTINENTS.map((d, i) => (
                <path key={i} d={d}
                      fill="rgba(180,185,200,0.22)"
                      stroke="rgba(140,148,165,0.35)"
                      strokeWidth="0.7" />
              ))}

              {/* Arc lines (static dashed) */}
              {DESTS.map(dest => (
                <path key={`line-${dest.id}`}
                      d={arc(dest.x, dest.y)}
                      fill="none"
                      stroke="rgba(255,90,31,0.28)"
                      strokeWidth="1.2"
                      strokeDasharray="5 7"
                      strokeLinecap="round" />
              ))}

              {/* Animated travel dots */}
              {DESTS.map((dest, i) => (
                <circle key={`dot-${dest.id}`} r="3.5" fill="#FF5A1F" opacity="0.85">
                  <animateMotion dur={`${3.2 + i * 0.45}s`} repeatCount="indefinite" begin={`${i * 0.7}s`}>
                    <mpath href={`#gc-arc-${dest.id}`} />
                  </animateMotion>
                </circle>
              ))}

              {/* ── Origin: Chennai, India ── */}
              {/* Sonar rings */}
              <circle cx={O.x} cy={O.y} fill="none" stroke="rgba(255,90,31,0.35)" strokeWidth="1.2" r="14">
                <animate attributeName="r" values="14;32" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={O.x} cy={O.y} fill="none" stroke="rgba(255,90,31,0.2)" strokeWidth="1" r="14">
                <animate attributeName="r" values="14;32" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              {/* Origin dot */}
              <circle cx={O.x} cy={O.y} r="9" fill="rgba(255,90,31,0.15)" stroke="#FF5A1F" strokeWidth="2" />
              <circle cx={O.x} cy={O.y} r="4.5" fill="#FF5A1F" filter="url(#gc-glow)" />
              {/* Origin label */}
              <text x={O.x} y={O.y - 20} textAnchor="middle"
                    fill="#0D0F14" fontSize="10" fontFamily="Poppins, sans-serif" fontWeight="700">
                {'\u{1F1EE}\u{1F1F3}'} Chennai, India
              </text>
              <text x={O.x} y={O.y - 9} textAnchor="middle"
                    fill="#5A6072" fontSize="8.5" fontFamily="Poppins, sans-serif" fontWeight="500">
                Head Office
              </text>

              {/* ── Destinations ── */}
              {DESTS.map(dest => (
                <g key={`dest-${dest.id}`}>
                  {/* Dot */}
                  <circle cx={dest.x} cy={dest.y} r="6.5" fill="rgba(255,90,31,0.12)" stroke="#FF5A1F" strokeWidth="1.5" />
                  <circle cx={dest.x} cy={dest.y} r="3"   fill="#FF5A1F" />
                  {/* Country name */}
                  <text x={dest.x + dest.dx} y={dest.y + dest.dy}
                        textAnchor={dest.anchor}
                        fill="#0D0F14" fontSize="9.5" fontFamily="Poppins, sans-serif" fontWeight="700">
                    {dest.flag} {dest.label}
                  </text>
                  {/* Role */}
                  <text x={dest.x + dest.dx} y={dest.y + dest.dy + 10}
                        textAnchor={dest.anchor}
                        fill="#5A6072" fontSize="8" fontFamily="Poppins, sans-serif" fontWeight="500">
                    {dest.role}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </AnimateOnView>

        {/* ── Stats Bar ─────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-card overflow-hidden"
             style={{ border:'1px solid #E2E4EA' }}>
          {STATS.map((s, i) => (
            <div key={s.label}
                 className={['flex flex-col items-center justify-center py-8 px-4 text-center bg-white',
                   i < STATS.length - 1 ? 'border-r border-[#E2E4EA]' : ''].join(' ')}>
              <div className="font-black tracking-tightest mb-0.5"
                   style={{ fontSize:'clamp(1.9rem,3.8vw,2.8rem)', color:'#0D0F14' }}>
                {s.value}
                {s.unit && <span className="text-[0.55em] font-bold ml-1" style={{ color:'#9299A6' }}>{s.unit}</span>}
              </div>
              <div className="text-[0.75rem] font-medium" style={{ color:'#5A6072' }}>{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
