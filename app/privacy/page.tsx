import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | DisplayedUX',
  description: 'How displayedux.com handles your data.',
}

export default function PrivacyPage() {
  return (
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '96px', paddingBottom: '96px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 32px' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: '#F47060', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>
            Legal
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-jakarta, inherit)',
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '12px',
        }}>
          Privacy Policy
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '48px' }}>
          Last updated: April 2026
        </p>

        {/* Sections */}
        {[
          {
            heading: 'What data we collect',
            body: 'When you use the contact form on displayedux.com, we collect your first name, last name, email address, phone number, company name, role or context, job description link, and message text.',
          },
          {
            heading: 'How it is stored',
            body: 'Form submissions are stored in the Netlify Forms dashboard. No data is transferred to an external CRM or mailing list.',
          },
          {
            heading: 'Why we collect it',
            body: 'We collect this information solely to respond to project and employment inquiries. We do not use it for marketing, and we do not sell it to third parties.',
          },
          {
            heading: 'Third-party services',
            body: 'Phone numbers entered in the contact form are sent to TeleSign\'s Phone ID API for validation scoring. TeleSign processes this data per their own privacy policy. No other third-party data processors receive your information.',
          },
          {
            heading: 'Cookies',
            body: 'This site does not use cookies or tracking scripts.',
          },
          {
            heading: 'Your rights',
            body: 'If you are in the EU or California, you have the right to request access to or deletion of your data. Email d2drisco@icloud.com to make a request. We will respond within 30 days.',
          },
          {
            heading: 'Contact',
            body: 'Questions about this policy: d2drisco@icloud.com',
          },
        ].map(({ heading, body }) => (
          <div key={heading} style={{ marginBottom: '36px' }}>
            <h2 style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: '10px',
              letterSpacing: '-0.01em',
            }}>
              {heading}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              {body}
            </p>
          </div>
        ))}

        {/* Back link */}
        <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--color-border)' }}>
          <Link
            href="/"
            style={{
              color: '#3B5CE8',
              fontSize: '14px',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ← Back to displayedux.com
          </Link>
        </div>

      </div>
    </main>
  )
}
