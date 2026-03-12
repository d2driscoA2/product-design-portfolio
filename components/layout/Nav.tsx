'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/work',    label: 'Work'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const drawerRef                 = useRef<HTMLDivElement>(null)
  const hamburgerRef              = useRef<HTMLButtonElement>(null)

  /* Show border on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close drawer on route change */
  useEffect(() => { setMenuOpen(false) }, [pathname])

  /* Trap focus inside open drawer & close on Escape */
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      role="banner"
      className={[
        'fixed top-0 inset-x-0 z-50 bg-brand-offwhite/95 backdrop-blur-md',
        'transition-[border-color,box-shadow] duration-200',
        scrolled ? 'border-b border-brand-tan/60 shadow-card' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                className={[
                  'relative px-4 py-2 text-small font-semibold tracking-wide',
                  'rounded-md transition-colors duration-150',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
                  'hover:text-brand-blue-royal',
                  isActive(href)
                    ? 'text-brand-blue-royal after:absolute after:bottom-0 after:inset-x-4 after:h-0.5 after:bg-brand-blue-royal after:rounded-full'
                    : 'text-brand-charcoal',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}

            {/* Resume — ghost button */}
            <a
              href="/danny-driscoll-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'ml-3 inline-flex items-center gap-1.5 px-4 py-2',
                'text-small font-semibold text-brand-blue-royal',
                'border border-brand-blue-royal rounded-md',
                'hover:bg-brand-blue-royal hover:text-white',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
              ].join(' ')}
            >
              Resume
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" focusable="false"
              >
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMenuOpen(prev => !prev)}
            className={[
              'md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md',
              'text-brand-charcoal transition-colors duration-150',
              'hover:bg-brand-tan/30 focus-visible:outline-2 focus-visible:outline-offset-2',
              'focus-visible:outline-brand-blue-royal',
            ].join(' ')}
          >
            {/* Animated hamburger → X */}
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full origin-center',
                'transition-transform duration-200 motion-reduce:transition-none',
                menuOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full',
                'transition-opacity duration-200 motion-reduce:transition-none',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full origin-center',
                'transition-transform duration-200 motion-reduce:transition-none',
                menuOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        aria-hidden={!menuOpen}
        className={[
          'md:hidden overflow-hidden bg-brand-offwhite border-t border-brand-tan/60',
          'transition-[max-height,opacity] duration-300 ease-in-out',
          'motion-reduce:transition-none',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-6 pb-6 pt-3 gap-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={[
                'py-3 px-2 text-body font-semibold border-b border-brand-tan/40',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
                isActive(href)
                  ? 'text-brand-blue-royal'
                  : 'text-brand-charcoal hover:text-brand-blue-royal',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          <a
            href="/danny-driscoll-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'mt-3 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md',
              'text-body font-semibold text-brand-blue-royal',
              'border border-brand-blue-royal',
              'hover:bg-brand-blue-royal hover:text-white',
              'transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
            ].join(' ')}
          >
            Resume
            <svg
              width="14" height="14" viewBox="0 0 12 12" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" focusable="false"
            >
              <path
                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
