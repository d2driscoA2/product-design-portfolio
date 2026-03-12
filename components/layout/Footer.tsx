import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/work',    label: 'Work'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-brand-charcoal border-t-2 border-brand-tan/40"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand column */}
          <div className="flex flex-col gap-4 max-w-xs">
            {/* Logo mark only — wordmark re-rendered in footer colors */}
            <div className="flex items-center gap-3">
              <Logo variant="mark" size={36} />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[1.05rem] font-bold tracking-tight text-brand-offwhite"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Displayed<span className="text-brand-blue-light">UX</span>
                </span>
                <span
                  className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-brand-offwhite/50 mt-0.5"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Strategic Product Design
                </span>
              </div>
            </div>
            <p className="text-small text-brand-offwhite/70 leading-relaxed">
              18+ years designing products where mistakes have consequences.
            </p>
            <p className="text-label text-brand-offwhite/40 tracking-wide uppercase">
              © {year} Danny Driscoll
            </p>
          </div>

          {/* Links column */}
          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <p
              className="text-label font-semibold tracking-widest uppercase text-brand-offwhite/40 mb-1"
            >
              Navigation
            </p>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={[
                  'text-small font-medium text-brand-offwhite/80 w-fit',
                  'hover:text-brand-blue-light transition-colors duration-150',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-light',
                  'underline-offset-4 hover:underline',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Contact column */}
          <div className="flex flex-col gap-3">
            <p
              className="text-label font-semibold tracking-widest uppercase text-brand-offwhite/40 mb-1"
            >
              Contact
            </p>
            <a
              href="mailto:d2drisco@icloud.com"
              className={[
                'text-small font-medium text-brand-offwhite/80 w-fit',
                'hover:text-brand-blue-light transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-light',
                'underline-offset-4 hover:underline',
              ].join(' ')}
            >
              d2drisco@icloud.com
            </a>
            <a
              href="https://linkedin.com/in/dandriscoll"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'inline-flex items-center gap-1.5 text-small font-medium text-brand-offwhite/80 w-fit',
                'hover:text-brand-blue-light transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-light',
                'underline-offset-4 hover:underline',
              ].join(' ')}
            >
              LinkedIn
              <svg
                width="11" height="11" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" focusable="false"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
