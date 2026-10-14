# Performance Audit Guide — Sunkey Design Systems

## Targets

| Metric | Target | Tool |
|---|---|---|
| Lighthouse Performance | ≥ 90 | Chrome DevTools / PageSpeed Insights |
| Lighthouse Accessibility | 100 | Chrome DevTools |
| Lighthouse Best Practices | ≥ 95 | Chrome DevTools |
| Lighthouse SEO | 100 | Chrome DevTools |
| LCP (Largest Contentful Paint) | < 2.5 s | CrUX / PageSpeed Insights |
| INP (Interaction to Next Paint) | < 200 ms | CrUX / PageSpeed Insights |
| CLS (Cumulative Layout Shift) | < 0.1 | CrUX / PageSpeed Insights |
| TTFB (Time to First Byte) | < 800 ms | WebPageTest |

---

## Running a Lighthouse Audit

**Chrome DevTools:**
1. Open Chrome, navigate to `https://sunkeydesignsystems.com`
2. DevTools → Lighthouse tab
3. Select: Performance, Accessibility, Best Practices, SEO
4. Device: Mobile (primary) and Desktop (secondary)
5. Click "Analyse page load"

**PageSpeed Insights (field data):**
- https://pagespeed.web.dev — paste the URL
- Shows both lab (Lighthouse) and field (CrUX) data
- Run after the site has been live for at least 28 days for field data

**Which pages to audit:**
- `/` — Homepage (most critical — highest traffic)
- `/services/pcb-design` — Service page template
- `/industries/semiconductor` — Industry page template
- `/services/pcb-design/semiconductor` — pSEO template
- `/technology/ddr4-pcb-layout` — Technology page template
- `/contact` — Contact page (form performance)

---

## What Is Already Optimised in the Codebase

These items are implemented and should not be regression points:

### Fonts
- Poppins loaded via `next/font/google` with `display: 'swap'`
- Fonts are self-hosted by Next.js (no external font request on page load)
- The `--font-poppins` CSS variable is applied on `<html>` to prevent FOUT

### Rendering strategy
- All pages are Server Components by default
- Client Components are limited to: Navbar (scroll detection), ServicesSection (tabs), ContactForm (form state), CookieBanner, AnalyticsProvider
- All pSEO pages (54 + 40 = 94 pages) are fully static via `generateStaticParams`
- Blog posts use `force-dynamic` — necessary and isolated to `/resources/[slug]`

### Animation
- `LazyMotion + domAnimation` reduces Framer Motion bundle from ~34 KB to ~16 KB
- All scroll animations use `viewport: { once: true }` — no re-triggering
- `prefers-reduced-motion` is respected via `useMotionSafe` and CSS `@media` rules

### Images
- Hero background is inline SVG (zero network request, zero LCP impact)
- PCB panel in hero uses CSS/HTML (no images)
- OG images generated at edge via `ImageResponse` (no static file needed)

### Third-party scripts
- GTM loads only after explicit cookie consent (AnalyticsProvider)
- No blocking scripts on initial page load
- Lenis smooth scroll uses `requestAnimationFrame` (no layout thrashing)

---

## Manual Accessibility Checklist (WCAG 2.1 AA)

Run these manually before go-live:

### Keyboard navigation
- [ ] Tab through all interactive elements on homepage — focus ring visible at every step
- [ ] Service tabs operable by keyboard (Tab to select, Enter to activate)
- [ ] Contact form completable by keyboard only
- [ ] Cookie banner: Tab to Decline, Tab to Accept, Enter to activate
- [ ] Mobile menu: Escape key closes it
- [ ] All navigation links reachable from keyboard

### Screen reader (test with VoiceOver / NVDA)
- [ ] Skip-to-content link present (add if not already there)
- [ ] All SVG icons have `aria-hidden="true"`
- [ ] All decorative elements have `aria-hidden="true"`
- [ ] Form labels associated with inputs (`for` / `id`)
- [ ] Service tab panel uses `role="tabpanel"`, `aria-labelledby`
- [ ] Cookie banner has `role="dialog"`, `aria-label`

### Colour contrast
- [ ] All body text on white background: ≥ 4.5:1 ratio
- [ ] White text on `#1a1a1a` dark background: ✓ (exceeds 7:1)
- [ ] `text-muted` (`#787878`) on white (`#ffffff`): 4.54:1 ✓ (passes AA)
- [ ] Gradient text (`#f05030` → `#ec4040`) — do NOT use for body text, only decorative
- [ ] CTA buttons: white on gradient background — verify contrast at darkest point

### Semantic HTML
- [ ] One `<h1>` per page
- [ ] Heading hierarchy not skipped (h1 → h2 → h3, no gaps)
- [ ] Navigation wrapped in `<nav>` with `aria-label`
- [ ] Main content wrapped in `<main>`
- [ ] Footer wrapped in `<footer>` with `aria-label`
- [ ] Lists use `<ul>` / `<ol>` (not divs with gap)

### Images (once real images are added)
- [ ] Every `<Image>` has a descriptive `alt` attribute
- [ ] Decorative images have `alt=""`
- [ ] No text in images (affects screen readers and zoom)

---

## Common Issues and Fixes

### LCP too high (> 2.5 s)
The LCP element on the homepage is the H1 text — text LCP is generally fast. If LCP is slow:
- Check TTFB: if > 800 ms, the Vercel edge may be cold-starting. Enable [ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration) or ensure pages are pre-built.
- Check font loading: `display: swap` is set but if Poppins preload is missing, there may be a render-blocking delay.
- Add `<link rel="preload">` for critical resources if identified.

### CLS from late-loading elements
- Lenis scroll initialises on mount — ensure no layout shift from scroll position change.
- Cookie banner slides up from bottom — uses CSS `transform` which does not trigger CLS. ✓
- Check that `next/font` variable is on `<html>` (it is in layout.tsx). ✓

### INP from heavy JS
- Tab switching in ServicesSection and ContactForm is immediate (React state, no async). ✓
- CookieBanner show/hide uses CSS transform. ✓
- If INP is high, profile with Chrome DevTools Performance panel — look for long tasks.

### Lighthouse Best Practices < 100
- Ensure `NEXT_PUBLIC_SITE_URL` is set to `https://...` (not `http://`) in production.
- Verify HTTPS is enforced (HSTS middleware is set). ✓
- Check browser console for JavaScript errors on initial load.

---

## Cross-Browser QA Matrix

Test the following pages on each browser/device before go-live:

| Page | Chrome | Safari | Firefox | Edge | iOS Safari | Android Chrome |
|---|---|---|---|---|---|---|
| Homepage | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Services (tab switch) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Contact form (submit) | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Mobile nav menu | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Cookie banner | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |
| Privacy Policy | [ ] | [ ] | [ ] | [ ] | [ ] | [ ] |

**Browsers to cover:**
- Chrome 120+ (Windows, macOS)
- Safari 17+ (macOS, iOS)
- Firefox 121+ (Windows, macOS)
- Edge 120+ (Windows)
- iOS Safari (iPhone 14+)
- Chrome for Android (Pixel 7+)

**CSS to verify manually:**
- Gradient text (`gradient-text` class) — check in Safari (requires `-webkit-background-clip`)
- `backdrop-filter: blur()` on Navbar — verify in Firefox (partial support)
- Lenis smooth scroll — disable on `prefers-reduced-motion` ✓ (check iOS)
- Sticky Navbar — test at various scroll positions on iOS

---

## After Go-Live

1. Submit sitemap to Google Search Console: `https://sunkeydesignsystems.com/sitemap.xml`
2. Set up Core Web Vitals monitoring in Search Console (data available ~28 days after launch)
3. Set up [Vercel Speed Insights](https://vercel.com/docs/speed-insights) (free tier available)
4. Run PageSpeed Insights weekly for the first month
5. Set up uptime monitoring (UptimeRobot free tier covers 5-minute checks)
