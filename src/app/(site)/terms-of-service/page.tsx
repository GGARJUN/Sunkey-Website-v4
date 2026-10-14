import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:  'Terms of Service',
  description:
    'Terms governing use of the Sunkey Design Systems website. Engineering services are delivered under separate project agreements.',
  robots: { index: true, follow: false },
  alternates: { canonical: 'https://sunkeydesignsystems.com/terms-of-service' },
}

const LAST_UPDATED = '1 August 2025'

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen pt-[140px] pb-[100px]">
      <div className="section-container max-w-[780px]">

        {/* Header */}
        <div className="mb-12">
          <div className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-brand-red mb-3">
            Legal
          </div>
          <h1 className="text-[2.2rem] font-black tracking-tightest leading-[1.1] text-dark mb-4">
            Terms of Service
          </h1>
          <p className="text-[0.85rem] text-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        <div className="prose-legal">

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the website at sunkeydesignsystems.com (the &ldquo;Site&rdquo;),
              you agree to be bound by these Terms of Service. If you do not agree, please do not
              use the Site.
            </p>
            <p>
              These terms govern your use of the Site only. The delivery of electronics engineering
              services by Sunkey Design Systems Private Limited is governed by separate project
              agreements and proposals entered into between Sunkey and each client. Nothing in these
              terms creates an obligation for Sunkey to provide any services.
            </p>
          </Section>

          <Section title="2. About the Site">
            <p>
              The Site is operated by <strong>Sunkey Design Systems Private Limited</strong>,
              incorporated in India (CIN: U71100TN2025PTC178926), with its registered office
              in Chennai, Tamil Nadu, India. The Site is an informational and lead generation
              platform through which prospective clients may learn about Sunkey&rsquo;s services
              and submit enquiries.
            </p>
          </Section>

          <Section title="3. Use of the Site">
            <p>You agree not to:</p>
            <ul>
              <li>Use the Site for any unlawful purpose or in violation of applicable laws.</li>
              <li>
                Attempt to access, disrupt, or damage any systems or infrastructure associated
                with the Site.
              </li>
              <li>Scrape, harvest, or systematically collect data from the Site without permission.</li>
              <li>
                Transmit any material that is defamatory, offensive, fraudulent, or otherwise
                objectionable.
              </li>
              <li>
                Represent yourself as a Sunkey employee or agent, or misrepresent your affiliation
                with any person or entity.
              </li>
            </ul>
            <p>
              Sunkey reserves the right to suspend or terminate access to the Site for any user
              who violates these terms.
            </p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>
              All content on this Site — including text, graphics, layouts, and technical
              documentation — is the property of Sunkey Design Systems Private Limited or its
              licensors and is protected under applicable intellectual property laws.
            </p>
            <p>
              You may view and print pages from the Site for your personal, non-commercial use.
              You may not reproduce, distribute, modify, publicly display, or create derivative
              works from any content on the Site without express written permission from Sunkey.
            </p>
            <p>
              The Sunkey name, logo, and any associated marks are trademarks of Sunkey Design
              Systems Private Limited. You may not use these marks without prior written consent.
            </p>
          </Section>

          <Section title="5. Information Accuracy">
            <p>
              Sunkey makes reasonable efforts to ensure that information on the Site is accurate
              and current. However, the Site is provided &ldquo;as is&rdquo; without any warranty
              of accuracy, completeness, or fitness for a particular purpose. Technical
              specifications, capabilities, and pricing described on the Site are indicative only
              and subject to change.
            </p>
            <p>
              Nothing on the Site constitutes professional engineering advice. Specific engineering
              requirements should always be discussed directly with Sunkey&rsquo;s engineering team.
            </p>
          </Section>

          <Section title="6. Third-Party Links">
            <p>
              The Site may contain links to third-party websites. These links are provided for
              convenience only. Sunkey does not endorse, control, or accept responsibility for
              the content or privacy practices of any third-party site. Accessing third-party
              sites is at your own risk.
            </p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, Sunkey Design Systems Private
              Limited shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages arising from your use of, or inability to use, the Site —
              including loss of data, business, or revenue.
            </p>
            <p>
              Sunkey&rsquo;s total liability for any claim arising from use of the Site shall not
              exceed INR 1,000 (one thousand Indian rupees) or the equivalent in the currency of
              your jurisdiction.
            </p>
            <p>
              Nothing in these terms excludes or limits liability that cannot be excluded by law,
              including liability for death or personal injury caused by negligence, or for fraud.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The Site and all content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              without any warranty, express or implied, including warranties of merchantability,
              fitness for a particular purpose, non-infringement, or uninterrupted availability.
              Sunkey does not warrant that the Site is free of viruses or other harmful code.
            </p>
          </Section>

          <Section title="9. Privacy">
            <p>
              Your use of the Site is also governed by our{' '}
              <Link href="/privacy-policy" className="text-brand-red underline underline-offset-2">
                Privacy Policy
              </Link>
              , which is incorporated into these terms by reference. By using the Site, you
              consent to data practices described in the Privacy Policy.
            </p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>
              Sunkey may update these terms at any time by posting a revised version on this page.
              The &ldquo;Last updated&rdquo; date at the top indicates when the most recent revision
              was made. Continued use of the Site after changes are posted constitutes acceptance
              of the revised terms.
            </p>
          </Section>

          <Section title="11. Governing Law and Jurisdiction">
            <p>
              These terms are governed by and construed in accordance with the laws of India.
              Any dispute arising from these terms or your use of the Site shall be subject to the
              exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>
              For questions about these terms, contact us at:
            </p>
            <p>
              <strong>Sunkey Design Systems Private Limited</strong><br />
              Chennai, Tamil Nadu, India<br />
              Email:{' '}
              <a href="mailto:info@sunkeydesignsystems.com">info@sunkeydesignsystems.com</a>
            </p>
          </Section>

        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex items-center justify-between flex-wrap gap-4">
          <Link href="/" className="text-[0.85rem] font-semibold text-brand-red hover:underline">
            ← Back to Sunkey Design Systems
          </Link>
          <Link href="/privacy-policy" className="text-[0.85rem] font-semibold text-muted hover:text-dark transition-colors duration-150">
            Privacy Policy →
          </Link>
        </div>
      </div>

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
      `}</style>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-[1.05rem] font-bold tracking-tight text-dark mb-4 mt-2">{title}</h2>
      {children}
    </div>
  )
}
