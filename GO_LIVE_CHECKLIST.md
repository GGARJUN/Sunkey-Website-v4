# Go-Live Checklist — Sunkey Design Systems

**Domain:** sunkeydesignsystems.com  
**Hosting:** Vercel  
**CMS:** Payload v3 on Neon PostgreSQL  
**Email:** Resend  
**Target:** Production launch

Work through this list top-to-bottom. Do not skip sections.

---

## Phase 1 — Pre-Deployment (Before pushing to Vercel)

### Code
- [ ] All 6 batches merged into `main` branch
- [ ] No TypeScript errors: `npm run build` completes cleanly
- [ ] No ESLint errors: `npm run lint` returns zero issues
- [ ] `.env.local` is in `.gitignore` (it is — verified in Batch 1)
- [ ] No API keys or secrets committed to the repository
- [ ] `next.config.ts` uses `withPayload` wrapper ✓

### Content review
- [ ] All 119 pages reviewed for copy accuracy
- [ ] Stats are correct: 30+ projects, 98% success, 99% on-time, 9.7/10
- [ ] "2+ Active Clients" (not "17+") — check all mentions
- [ ] No Defence vertical listed anywhere in public pages
- [ ] All client details in case studies are fully anonymized
- [ ] Company identifiers correct: CIN U71100TN2025PTC178926, DIPP273645
- [ ] Contact email correct: info@sunkeydesignsystems.com
- [ ] Privacy Policy and Terms of Service last updated date is current

### SEO review
- [ ] Every page has a unique `<title>` tag
- [ ] Every page has a unique `<meta description>` under 160 characters
- [ ] Canonical URL on every page points to the correct `https://` URL
- [ ] Sitemap covers all 119 pages (`/sitemap.xml` returns valid XML)
- [ ] robots.txt allows crawling of public pages, blocks `/admin` and `/api`
- [ ] JSON-LD on service pages, industry pages, and pSEO pages is valid
  - Validate at: https://validator.schema.org

---

## Phase 2 — Infrastructure Setup

### Neon PostgreSQL
- [ ] Create a Neon project at https://console.neon.tech
- [ ] Create database: `sunkey_production`
- [ ] Copy connection string (format: `postgresql://user:password@host/db?sslmode=require`)
- [ ] Note: Neon free tier includes 0.5 GB storage — sufficient for launch

### Resend
- [ ] Create account at https://resend.com
- [ ] Add and verify domain: `sunkeydesignsystems.com`
  - Add the TXT, MX, and DKIM DNS records Resend provides
  - Verification takes up to 48 hours
- [ ] Create API key (name it "Production — Sunkey Website")
- [ ] Send a test email to confirm delivery works
- [ ] Set up reply-to address as `info@sunkeydesignsystems.com`

### Google Analytics / GTM
- [ ] Create GTM container at https://tagmanager.google.com
  - Container name: Sunkey Design Systems
  - Target platform: Web
- [ ] Note the container ID (format: GTM-XXXXXXX)
- [ ] Inside GTM, set up GA4 tag:
  - Tag type: Google Analytics: GA4 Configuration
  - Measurement ID: from your GA4 property
  - Trigger: All Pages
- [ ] Publish the GTM container (Submit → Publish)
- [ ] Test in GTM Preview mode before publishing

---

## Phase 3 — Vercel Setup

### Create Vercel Project
1. Go to https://vercel.com/new
2. Import the GitHub repository
3. Framework Preset: Next.js (auto-detected)
4. Root Directory: `/` (leave default)
5. Build Command: `npm run build` (or leave as Next.js default)

### Environment Variables
Set these in Vercel Dashboard → Settings → Environment Variables → Production:

| Variable | Value | Notes |
|---|---|---|
| `DATABASE_URI` | PostgreSQL connection string | From Neon, append `?sslmode=require` |
| `PAYLOAD_SECRET` | 32+ char random string | Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `NEXT_PUBLIC_SITE_URL` | `https://sunkeydesignsystems.com` | No trailing slash |
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | From Resend dashboard |
| `NEXT_PUBLIC_GTM_ID` | `GTM-XXXXXXX` | From GTM dashboard |
| `SEED_SECRET` | Random string | For `/api/seed` endpoint — remove after seeding |

- [ ] All 6 variables set in Vercel for **Production** environment
- [ ] `DATABASE_URI`, `PAYLOAD_SECRET`, `RESEND_API_KEY`, `SEED_SECRET` are NOT set as `NEXT_PUBLIC_` (server-side only — correct as defined)

### Initial Deployment
1. Trigger a deployment (push to `main` or click "Redeploy")
2. Watch build logs for errors
3. Common build errors:
   - Missing env var → check all 6 are set
   - TypeScript error → fix in code and redeploy
   - Payload schema error → check `payload.config.ts`

- [ ] Build succeeds (green checkmark in Vercel)
- [ ] Deployment URL is accessible (e.g., `sunkey-website.vercel.app`)

---

## Phase 4 — DNS Configuration

### Current DNS records to ADD

Add these records at your domain registrar (or wherever DNS is hosted):

```
Type    Name     Value                           TTL
A       @        76.76.21.21                     300
CNAME   www      cname.vercel-dns.com            300
```

If you are using a registrar that does not support CNAME flattening:
```
A       @        76.76.21.21                     300
A       www      76.76.21.21                     300
```

**Resend DNS records (for email sending from sunkeydesignsystems.com):**
```
TXT     @        "v=spf1 include:_spf.resend.com -all"
CNAME   resend._domainkey   [provided by Resend]
```

**Google Search Console verification (if using HTML tag method):**
```
TXT     @        google-site-verification=xxxxxxxxxxxxxxxx
```

### DNS propagation
- TTL is set to 300 seconds (5 minutes) for the initial switch — change to 3600 after 24 hours
- Check propagation at: https://dnschecker.org
- Vercel auto-provisions an SSL certificate once DNS is pointing correctly (usually within 5 minutes)

- [ ] A record added for apex domain (`@`)
- [ ] CNAME added for `www`
- [ ] Resend DNS records added
- [ ] DNS propagated globally (check dnschecker.org)
- [ ] SSL certificate issued (green padlock in browser)
- [ ] Both `https://sunkeydesignsystems.com` and `https://www.sunkeydesignsystems.com` load correctly

### Configure custom domain in Vercel
1. Vercel Dashboard → Project → Settings → Domains
2. Add `sunkeydesignsystems.com`
3. Add `www.sunkeydesignsystems.com`
4. Set redirect: `www` → apex (or apex → `www`, your preference)

- [ ] Custom domain added in Vercel
- [ ] Redirect configured (one canonical URL)
- [ ] HSTS visible in response headers: `strict-transport-security: max-age=63072000`

---

## Phase 5 — Database and CMS Initialisation

### Run Payload migration
After the first deployment with `DATABASE_URI` set, Payload auto-runs migrations on startup.

- [ ] First deployment with `DATABASE_URI` completed (migrations run automatically)
- [ ] Payload admin panel accessible at `https://sunkeydesignsystems.com/admin`
- [ ] Create the first admin user through the admin panel (prompted on first visit)
- [ ] Log in to confirm CMS is working

### Seed blog articles
```bash
curl -X POST https://sunkeydesignsystems.com/api/seed \
  -H "Authorization: Bearer YOUR_SEED_SECRET"
```

Expected response:
```json
{
  "success": true,
  "message": "Seeding complete. 6 articles created, 0 skipped.",
  "results": [...]
}
```

- [ ] Seed command run successfully
- [ ] 6 articles visible in Payload admin: Admin → Blog
- [ ] `/resources` page shows 6 articles
- [ ] Individual article pages load at `/resources/[slug]`

### Remove seed secret
After seeding, remove `SEED_SECRET` from Vercel environment variables:
- Vercel → Settings → Environment Variables → delete `SEED_SECRET`
- Redeploy to apply

- [ ] `SEED_SECRET` removed from Vercel after seeding

---

## Phase 6 — Post-Launch Verification

### Page-by-page smoke test
Open each URL and verify it loads without errors:

- [ ] `https://sunkeydesignsystems.com` — Homepage
- [ ] `/about`
- [ ] `/how-we-work`
- [ ] `/services`
- [ ] `/services/pcb-design`
- [ ] `/services/embedded-firmware`
- [ ] `/services/pcba-manufacturing`
- [ ] `/services/rapid-prototyping`
- [ ] `/services/iot-wireless`
- [ ] `/services/drone-uav-electronics`
- [ ] `/services/high-speed-fpga-design`
- [ ] `/services/cable-harness-box-build`
- [ ] `/services/contract-engineering`
- [ ] `/industries`
- [ ] `/industries/semiconductor`
- [ ] `/industries/drone-uav`
- [ ] `/industries/iot-smart-devices`
- [ ] `/industries/industrial-automation`
- [ ] `/industries/automotive`
- [ ] `/industries/agricultural-technology`
- [ ] `/case-studies`
- [ ] `/case-studies/agricultural-uav-gps-radar`
- [ ] `/case-studies/industrial-cellular-data-logger`
- [ ] `/case-studies/fpga-carrier-card-semiconductor-test`
- [ ] `/resources` — shows 6 articles
- [ ] `/resources/ddr4-pcb-layout-signal-integrity-mistakes`
- [ ] `/contact`
- [ ] `/privacy-policy`
- [ ] `/terms-of-service`
- [ ] `/services/pcb-design/semiconductor` (pSEO)
- [ ] `/technology/ddr4-pcb-layout` (pSEO)
- [ ] `/sitemap.xml` — valid XML, all URLs present
- [ ] `/robots.txt` — blocks /admin and /api
- [ ] `/admin` — Payload CMS loads, login works

### Contact form test
- [ ] Book a Discovery Call form: submit with test data → email received at `info@sunkeydesignsystems.com`
- [ ] Share Requirement form: submit with test data → email received
- [ ] Confirmation email received at the test email address
- [ ] Error state works (submit with empty fields → shows error message)
- [ ] Success state shows after submission (no page reload)

### Cookie consent test
- [ ] Clear cookies, load homepage → cookie banner appears after ~0.8 seconds
- [ ] Click Decline → banner disappears, GTM is NOT loaded (check Network tab)
- [ ] Clear cookies, load homepage again → accept → GTM script loads (check Network tab for `gtm.js`)
- [ ] Reload page after accepting → GTM loads immediately (consent remembered)

### Security headers
Check at https://securityheaders.com — paste `https://sunkeydesignsystems.com`:
- [ ] Content-Security-Policy: present
- [ ] Strict-Transport-Security: present with `max-age=63072000`
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: present
- [ ] Permissions-Policy: present
- [ ] Target grade: A or A+

### JSON-LD validation
- [ ] Homepage: https://validator.schema.org — paste `https://sunkeydesignsystems.com` — no errors
- [ ] Service page: validate `/services/pcb-design`
- [ ] pSEO page: validate `/services/pcb-design/semiconductor`

---

## Phase 7 — Search Console and Monitoring

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://sunkeydesignsystems.com` (URL prefix)
3. Verify ownership via DNS TXT record or HTML file
4. Submit sitemap: Sitemaps → Add sitemap → `sitemap.xml`

- [ ] Search Console property added and verified
- [ ] Sitemap submitted: `https://sunkeydesignsystems.com/sitemap.xml`
- [ ] No manual actions or coverage issues (check after 48 hours)
- [ ] Request indexing for homepage, services page, and industries page

### Vercel monitoring
- [ ] Enable Vercel Analytics (free tier) in project settings
- [ ] Set up [Vercel Speed Insights](https://vercel.com/docs/speed-insights) if available on plan
- [ ] Configure error alerting: Vercel → Notifications → Build and deployment errors

### Uptime monitoring (recommended)
- [ ] Create free account at https://uptimerobot.com
- [ ] Add monitor: `https://sunkeydesignsystems.com` (HTTP, 5-minute interval)
- [ ] Add alert contact: `info@sunkeydesignsystems.com`

---

## Phase 8 — LinkedIn and Marketing Activation

After the site is confirmed live and working:

- [ ] Update Sunkey LinkedIn company page: website field → `https://sunkeydesignsystems.com`
- [ ] Update Mithil Jain's LinkedIn profile: website in contact info
- [ ] Pin the go-live announcement post to Sunkey LinkedIn page
- [ ] Share the URL in the LinkedIn content plan's first batch of posts
- [ ] Add the site URL to any email signatures

---

## Rollback Procedure

If a critical issue is discovered after go-live:

1. In Vercel: Deployments → find the previous successful deployment → "Promote to Production"
2. This takes ~30 seconds and requires no DNS changes
3. Fix the issue in code, push to `main`, and redeploy

**Critical issues that require immediate rollback:**
- Contact form not sending emails (revenue impact)
- Any page returning 500 errors
- Security headers missing (check securityheaders.com)
- Admin panel inaccessible

---

*Checklist complete. Site is live.*
