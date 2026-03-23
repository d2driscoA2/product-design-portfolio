'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

type PhoneResult = {
  score: number
  recommendation: string | null
  phone_type: string | null
  carrier: string | null
} | null

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const ChevronSVG = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ContactFormInner() {
  const searchParams     = useSearchParams()
  const isResumeRequest  = searchParams.get('resume') === 'true'
  const formRef          = useRef<HTMLDivElement>(null)

  const [fields, setFields] = useState({
    firstName: '', lastName: '', email: '', company: '',
    phone: '', role: '', jdLink: '', message: '',
  })
  const [phoneResult,     setPhoneResult]     = useState<PhoneResult>(null)
  const [phoneLoading,    setPhoneLoading]    = useState(false)
  const [resumeHighlight, setResumeHighlight] = useState(false)
  const [status,          setStatus]          = useState<FormStatus>('idle')

  useEffect(() => {
    if (!isResumeRequest || !formRef.current) return
    const t = setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setResumeHighlight(true)
      setTimeout(() => setResumeHighlight(false), 2000)
    }, 400)
    return () => clearTimeout(t)
  }, [isResumeRequest])

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields(p => ({ ...p, [e.target.name]: e.target.value }))

  const handlePhoneBlur = async () => {
    const phone = fields.phone.trim()
    if (phone.replace(/\D/g, '').length < 7) return
    setPhoneLoading(true)
    setPhoneResult(null)
    try {
      const res  = await fetch('/api/telesign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      const data = await res.json()
      if (!data.error) setPhoneResult(data)
    } catch { /* silent fail */ }
    finally { setPhoneLoading(false) }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const formData = new URLSearchParams()
      formData.append('form-name', 'contact')
      formData.append('firstName', fields.firstName)
      formData.append('lastName', fields.lastName)
      formData.append('email', fields.email)
      formData.append('company', fields.company)
      formData.append('phone', fields.phone)
      formData.append('role', fields.role)
      formData.append('jdLink', fields.jdLink)
      formData.append('message', fields.message)
      if (phoneResult) {
        formData.append('phoneScore', String(phoneResult.score))
        formData.append('phoneType', phoneResult.phone_type ?? '')
        formData.append('phoneCarrier', phoneResult.carrier ?? '')
      }
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const badge = (() => {
    if (phoneLoading)  return { cls: 'phone-badge phone-badge-loading', label: 'Verifying number...' }
    if (!phoneResult)  return null
    const s = phoneResult.score
    const detail = [phoneResult.phone_type, phoneResult.carrier].filter(Boolean).join(' · ')
    const suffix = detail ? ` · ${detail}` : ''
    if (s <= 399) return { cls: 'phone-badge phone-badge-valid', label: `Valid number confirmed · Score ${s}/1000${suffix}` }
    if (s <= 599) return { cls: 'phone-badge phone-badge-warn',  label: `VOIP or prepaid detected · Score ${s}/1000${suffix}` }
    return             { cls: 'phone-badge phone-badge-risk',    label: `High risk score detected · Score ${s}/1000${suffix}` }
  })()

  if (status === 'error') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '36px', marginBottom: '16px', color: '#F47060' }}>!</div>
        <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
          Something went wrong
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
          Please email me directly at{' '}
          <a href="mailto:d2drisco@icloud.com" style={{ color: '#3B5CE8', textDecoration: 'underline' }}>
            d2drisco@icloud.com
          </a>
        </p>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '36px', marginBottom: '16px', color: '#15803d' }}>✓</div>
        <h2 style={{ fontSize: '22px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '12px' }}>
          Message sent
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
          {fields.email
            ? `I will reply to ${fields.email} within 24 hours.`
            : 'I will reply within 24 hours.'}
        </p>
      </div>
    )
  }

  return (
    <div ref={formRef}>
      {/* Résumé flag */}
      <div style={{
        background: resumeHighlight ? 'rgba(59, 92, 232, 0.08)' : 'var(--color-bg-secondary)',
        borderLeft: '3px solid #3B5CE8',
        borderRadius: '0 8px 8px 0',
        padding: '16px 20px',
        marginBottom: '28px',
        transition: 'background 0.5s ease',
      }}>
        <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '4px' }}>
          Requesting my résumé?
        </p>
        <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
          Fill in the fields below. Sharing a job description lets me send you the most relevant version.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate data-netlify="true" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        {/* Name */}
        <div className="form-row-2">
          <div>
            <label className="form-label">First name <span style={{ color: '#F47060' }}>*</span></label>
            <input className="form-input" type="text" name="firstName" value={fields.firstName} onChange={set} placeholder="Alex" required />
          </div>
          <div>
            <label className="form-label">Last name <span style={{ color: '#F47060' }}>*</span></label>
            <input className="form-input" type="text" name="lastName" value={fields.lastName} onChange={set} placeholder="Chen" required />
          </div>
        </div>

        {/* Email + Company */}
        <div className="form-row-2">
          <div>
            <label className="form-label">Email <span style={{ color: '#F47060' }}>*</span></label>
            <input className="form-input" type="email" name="email" value={fields.email} onChange={set} placeholder="alex@company.com" required />
          </div>
          <div>
            <label className="form-label">Company</label>
            <input className="form-input" type="text" name="company" value={fields.company} onChange={set} placeholder="Acme Inc." />
          </div>
        </div>

        {/* Phone intelligence section */}
        <div className="form-section-divider">
          <span className="form-section-label">Phone verification</span>
          <span className="form-section-line" />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="form-label">
            Mobile number
            <span className="form-label-note"> · used to verify your contact details</span>
          </label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={set}
            onBlur={handlePhoneBlur}
            placeholder="+1 (555) 000-0000"
          />
          {badge && <div className={badge.cls}>{badge.label}</div>}
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '8px', lineHeight: '1.5' }}>
            Verification powered by{' '}
            <a
              href="https://www.telesign.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#3B5CE8',
                textDecoration: 'underline',
                textDecorationThickness: '1px',
                textUnderlineOffset: '3px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
              }}
            >
              TeleSign <ChevronSVG />
            </a>
            {' '}· your number is never stored or shared
          </p>
        </div>

        {/* Message section */}
        <div className="form-section-divider">
          <span className="form-section-label">Your message</span>
          <span className="form-section-line" />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="form-label">Role or context</label>
          <input
            className="form-input"
            type="text"
            name="role"
            value={fields.role}
            onChange={set}
            placeholder="e.g. Principal Designer, B2B SaaS, Series B"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label className="form-label">
            Job description link
            <span className="form-label-note"> · optional, helps me tailor my response</span>
          </label>
          <input
            className="form-input"
            type="url"
            name="jdLink"
            value={fields.jdLink}
            onChange={set}
            placeholder="https://jobs.yourcompany.com/..."
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label className="form-label">Message <span style={{ color: '#F47060' }}>*</span></label>
          <textarea
            className="form-input"
            name="message"
            value={fields.message}
            onChange={set}
            placeholder="Tell me about the role, the team, or what you are working on."
            required
          />
        </div>

        {/* Submit row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', maxWidth: '300px', lineHeight: '1.5' }}>
            I reply within 24 hours. Your information is never shared with third parties.
          </p>
          <button
            type="submit"
            disabled={status === 'submitting'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              background: '#3B5CE8',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'inherit',
              cursor: status === 'submitting' ? 'wait' : 'pointer',
              opacity: status === 'submitting' ? 0.7 : 1,
              transition: 'opacity 150ms',
            }}
          >
            {status === 'submitting' ? 'Sending...' : (
              <>Send message <ChevronSVG /></>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
    <form name="contact" data-netlify="true" hidden>
      <input type="text" name="firstName" />
      <input type="text" name="lastName" />
      <input type="email" name="email" />
      <input type="text" name="company" />
      <input type="tel" name="phone" />
      <input type="text" name="role" />
      <input type="url" name="jdLink" />
      <textarea name="message"></textarea>
      <input type="text" name="phoneScore" />
      <input type="text" name="phoneType" />
      <input type="text" name="phoneCarrier" />
    </form>
    <main style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '96px', paddingBottom: '96px', position: 'relative', overflow: 'hidden' }}>
      {/* Floating bull's-eyes — full page */}
      <svg aria-hidden="true" width="320" height="320" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none" style={{ position: 'absolute', top: '-60px', right: '-60px', zIndex: 0, animation: 'float-a 9s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <svg aria-hidden="true" width="200" height="200" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none" style={{ position: 'absolute', top: '30%', left: '-60px', zIndex: 0, animation: 'float-b 11s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <svg aria-hidden="true" width="160" height="160" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none" style={{ position: 'absolute', top: '10%', left: '20%', zIndex: 0, animation: 'float-c 13s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <svg aria-hidden="true" width="240" height="240" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none" style={{ position: 'absolute', bottom: '10%', right: '-40px', zIndex: 0, animation: 'float-d 10s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <svg aria-hidden="true" width="140" height="140" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float pointer-events-none" style={{ position: 'absolute', bottom: '5%', left: '30%', zIndex: 0, animation: 'float-e 12s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <svg aria-hidden="true" width="180" height="180" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="bullseye-float-alt pointer-events-none" style={{ position: 'absolute', top: '55%', right: '15%', zIndex: 0, animation: 'float-f 8s ease-in-out infinite' }}><circle cx="24" cy="24" r="24" fill="#3B5CE8" /><circle cx="24" cy="24" r="17" fill="#F47060" /><circle cx="24" cy="24" r="11" fill="#FF00AA" /><circle cx="24" cy="24" r="5.5" fill="#F5C200" /></svg>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 32px' }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <span style={{ width: '32px', height: '1px', background: '#F47060', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--color-text-secondary)' }}>
            Get in touch
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'var(--font-jakarta, inherit)',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          Open to the<br />
          <span style={{ color: '#3B5CE8' }}>right opportunity.</span>
        </h1>

        <p style={{ fontSize: '17px', color: 'var(--color-text-secondary)', lineHeight: '1.65', maxWidth: '500px', marginBottom: '64px' }}>
          I am open to senior and principal product design roles. Share a job description and I will respond within 24 hours.
        </p>

        {/* Two-column layout */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="contact-grid">

          {/* Left: contact info */}
          <div>
            {/* Availability badge */}
            <div style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '16px 18px',
              marginBottom: '32px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Open to opportunities</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', paddingLeft: '16px' }}>
                Ann Arbor, MI · Open to remote
              </p>
            </div>

            {/* Direct contact */}
            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
                Direct contact
              </p>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>Email</p>
                <a
                  href="mailto:d2drisco@icloud.com"
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
                  d2drisco@icloud.com <ChevronSVG />
                </a>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/dandriscoll/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#3B5CE8',
                    fontSize: '13px',
                    textDecoration: 'underline',
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '3px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  linkedin.com/in/dandriscoll <ChevronSVG />
                </a>
              </div>
            </div>

            {/* Response time */}
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--color-text-secondary)', marginBottom: '10px' }}>
                Response time
              </p>
              <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                I reply to all messages within 24 hours. For urgent inquiries, email directly.
              </p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="contact-form-card">
            <Suspense fallback={null}>
              <ContactFormInner />
            </Suspense>
          </div>

          </div>
        </div>
      </div>
    </main>
    </>
  )
}

// Netlify form detection — this comment intentionally left at end of file
