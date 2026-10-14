import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:  'Privacy Policy',
  description:
    'How Sunkey Design Systems collects, uses, and protects personal data. Covers contact form submissions and optional analytics.',
  robots: { index: true, follow: false },
  alternates: { canonical: 'https://sunkeydesignsystems.com/privacy-policy' },
}

const LAST_UPDATED = '1 August 2025'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-[140px] pb-[100px]">
      <div className="section-container max-w-[780px]">

        {/* Header */}
        <div className="mb-12">
          <div className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-brand-red mb-3">
            Legal
          </div>
          <h1 className="text-[2.2rem] font-black tracking-tightest leading-[1.1] text-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-[0.85rem] text-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-legal">

          <Section title="1. Who We Are">
            <p>
              This website is operated by <strong>Sunkey Design Systems Private Limited</strong>,
              an electronics engineering company incorporated in India (CIN: U71100TN2025PTC178926),
              with its registered office in Chennai, Tamil Nadu, India. We are referred to in this
              policy as &ldquo;Sunkey&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;.
            </p>
            <p>
              We are the data controller for personal data collected through this website. Questions
              about this policy or your personal data can be sent to{' '}
              <a href="mailto:info@sunkeydesignsystems.com">info@sunkeydesignsystems.com</a>.
            </p>
          </Section>

          <Section title="2. What Data We Collect and Why">
            <p>We collect personal data only through the contact form on this website.</p>
            <SubSection heading="Contact form submissions">
              <p>
                When you submit the &ldquo;Book a Discovery Call&rdquo; or &ldquo;Share Requirement&rdquo;
                form, we collect your name, work email address, company name, and the project or service
                details you provide. We use this information solely to respond to your enquiry and to
                scope the services you have asked about.
              </p>
              <p>
                <strong>Legal basis:</strong> Legitimate interests (Article 6(1)(f) GDPR) — we have a
                legitimate interest in receiving and responding to business enquiries. We process no more
                data than is necessary for this purpose.
              </p>
            </SubSection>
            <SubSection heading="Analytics (optional, consent-based)">
              <p>
                If you accept analytics cookies, we use Google Analytics (via Google Tag Manager) to
                understand how visitors use this site — which pages are visited, how long visitors stay,
                and how they arrive. This data is aggregated and does not identify you personally.
              </p>
              <p>
                <strong>Legal basis:</strong> Consent (Article 6(1)(a) GDPR). You can withdraw consent
                at any time by clearing your browser cookies. No analytics data is collected unless you
                accept.
              </p>
            </SubSection>
          </Section>

          <Section title="3. How Long We Keep Your Data">
            <p>
              Contact form submissions are retained for up to two years from the date of receipt.
              If a submission results in an active business engagement, relevant data may be kept for
              the duration of the engagement plus any applicable statutory retention period under Indian law.
            </p>
            <p>
              Analytics data is retained according to Google Analytics&rsquo; standard retention settings
              (14 months by default). Sunkey does not maintain a separate copy of analytics data.
            </p>
          </Section>

          <Section title="4. Who We Share Data With">
            <p>We share contact form data with the following processors only:</p>
            <ul>
              <li>
                <strong>Resend, Inc.</strong> (resend.com) — our email delivery provider, used to send
                notification emails to our team and confirmation emails to you. Resend processes your
                name and email address on our behalf. Data is processed in the United States under
                standard contractual clauses.
              </li>
            </ul>
            <p>
              If you accept analytics cookies, data is shared with:
            </p>
            <ul>
              <li>
                <strong>Google LLC</strong> — for Google Analytics. Processed under Google&rsquo;s
                standard data processing terms. See{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Google&rsquo;s Privacy Policy
                </a>.
              </li>
            </ul>
            <p>
              We do not sell, rent, or share your personal data with any other third parties for
              marketing or commercial purposes.
            </p>
          </Section>

          <Section title="5. Your Rights">
            <p>
              If you are located in the European Economic Area, the United Kingdom, or another
              jurisdiction with applicable data protection law, you have the following rights:
            </p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> Request deletion of your data where there is no lawful basis for continued processing.</li>
              <li><strong>Restriction:</strong> Request that we limit how we use your data while a dispute is being resolved.</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format where technically feasible.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests. We will stop unless we have compelling grounds that override your interests.</li>
              <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time by clearing your cookies.</li>
            </ul>
            <p>
              To exercise any right, email{' '}
              <a href="mailto:info@sunkeydesignsystems.com">info@sunkeydesignsystems.com</a>.
              We will respond within 30 days. You also have the right to lodge a complaint with
              your local data protection authority.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              This website uses two categories of cookies:
            </p>
            <ul>
              <li>
                <strong>Strictly necessary:</strong> A cookie that stores your analytics consent
                preference. This does not track you and is necessary for the cookie banner to work.
                It is set regardless of your consent choice.
              </li>
              <li>
                <strong>Analytics (optional):</strong> Google Analytics cookies, set only after you
                accept. These include <code>_ga</code>, <code>_ga_*</code>, and related cookies
                that help us understand site usage. If you decline, these cookies are not set.
              </li>
            </ul>
            <p>
              You can withdraw consent at any time by clearing your browser cookies and reloading
              the page — the consent banner will reappear.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              This website is served over HTTPS. Contact form data is transmitted to Resend using
              TLS encryption. We do not store form submissions in our own database — they are
              delivered directly as email notifications to our team.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this policy when our data practices change. The &ldquo;Last updated&rdquo;
              date at the top of this page reflects the most recent revision. We recommend reviewing
              this policy periodically.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              For questions about this policy or to exercise your data rights:
            </p>
            <p>
              <strong>Sunkey Design Systems Private Limited</strong><br />
              Chennai, Tamil Nadu, India<br />
              Email:{' '}
              <a href="mailto:info@sunkeydesignsystems.com">info@sunkeydesignsystems.com</a>
            </p>
          </Section>

        </div>

        <div className="mt-12 pt-8 border-t border-border-light">
          <Link
            href="/"
            className="text-[0.85rem] font-semibold text-brand-red hover:underline"
          >
            ← Back to Sunkey Design Systems
          </Link>
        </div>
      </div>

      {/* Inline prose styles — scoped to this page only */}
      <style>{`
        .prose-legal p {
          font-size: 0.92rem;
          line-height: 1.78;
          color: #555;
          margin-bottom: 14px;
        }
        .prose-legal ul {
          margin: 10px 0 14px 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .prose-legal li {
          font-size: 0.9rem;
          line-height: 1.72;
          color: #555;
        }
        .prose-legal a {
          color: #f05030;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-legal strong { color: #1a1a1a; font-weight: 700; }
        .prose-legal code {
          font-family: ui-monospace, monospace;
          font-size: 0.82em;
          background: #f2f2f2;
          padding: 1px 5px;
          border-radius: 3px;
          color: #333;
        }
      `}</style>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[1.05rem] font-bold tracking-tight text-dark mb-4 mt-2">
        {title}
      </h2>
      {children}
    </div>
  )
}

function SubSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-[0.9rem] font-bold text-dark mb-2">{heading}</h3>
      {children}
    </div>
  )
}
