import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/work',        label: 'Work'        },
  { href: '/about',       label: 'About'       },
  { href: '/photography', label: 'Photography' },
  { href: '/contact',     label: 'Contact'     },
  { href: '/privacy',     label: 'Privacy Policy' },
]

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#3B5CE8]"
      style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-3">
            <Logo variant="footer" size={36} />
            <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
              18+ years designing products where mistakes have consequences.
            </p>
            <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 Danny Driscoll
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Navigation
            </p>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm w-fit transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Contact
            </p>
            <a
              href="mailto:d2drisco@icloud.com"
              className="inline-flex items-center gap-1 text-sm w-fit transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
            >
              d2drisco@icloud.com
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="https://linkedin.com/in/dandriscoll"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm w-fit transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationThickness: '1px' }}
            >
              LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
