'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV_LINKS = [
  { href: '/work',        label: 'Work'        },
  { href: '/writing',     label: 'Writing'     },
  { href: '/about',       label: 'About'       },
  { href: '/photography', label: 'Photography' },
  { href: '/contact',     label: 'Contact'     },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const drawerRef                 = useRef<HTMLDivElement>(null)
  const hamburgerRef              = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

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
        'fixed top-0 inset-x-0 z-50 bg-[var(--color-nav-bg)] backdrop-blur-md',
        'transition-[border-color,background-color] duration-200',
        scrolled ? 'border-b border-[var(--color-border)]' : 'border-b border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

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
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
                  'hover:text-[var(--color-text-primary)]',
                  isActive(href)
                    ? 'text-[var(--color-text-primary)] after:absolute after:bottom-0 after:inset-x-4 after:h-0.5 after:bg-[#FF6F6E] after:rounded-full'
                    : 'text-[var(--color-text-muted)]',
                ].join(' ')}
              >
                {label}
              </Link>
            ))}

            {/* Theme toggle */}
            <ThemeToggle />

            {/* Resume */}
            <a
              href="/contact?resume=true"
              className={[
                'ml-3 inline-flex items-center gap-1.5 px-4 py-2',
                'text-small font-semibold text-[var(--color-text-primary)]',
                'border border-[var(--color-text-primary)] rounded-md',
                'hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)]',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
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
              'text-[var(--color-text-muted)] transition-colors duration-150',
              'hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2',
              'focus-visible:outline-[#FF6F6E]',
            ].join(' ')}
          >
            <span className={['block w-5 h-0.5 bg-current rounded-full origin-center', 'transition-transform duration-200 motion-reduce:transition-none', menuOpen ? 'translate-y-2 rotate-45' : ''].join(' ')} />
            <span className={['block w-5 h-0.5 bg-current rounded-full', 'transition-opacity duration-200 motion-reduce:transition-none', menuOpen ? 'opacity-0' : 'opacity-100'].join(' ')} />
            <span className={['block w-5 h-0.5 bg-current rounded-full origin-center', 'transition-transform duration-200 motion-reduce:transition-none', menuOpen ? '-translate-y-2 -rotate-45' : ''].join(' ')} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        aria-hidden={!menuOpen}
        className={[
          'md:hidden overflow-hidden bg-[var(--color-bg)] border-t border-[var(--color-border)]',
          'transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
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
                'py-3 px-2 text-body font-semibold border-b border-[var(--color-border)]',
                'transition-colors duration-150',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
                isActive(href)
                  ? 'text-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]',
              ].join(' ')}
            >
              {label}
            </Link>
          ))}
          {/* Theme toggle */}
          <div className="flex items-center justify-between py-3 px-2 border-b border-[var(--color-border)]">
            <span className="text-body font-semibold text-[var(--color-text-muted)]">Appearance</span>
            <ThemeToggle />
          </div>

          <a
            href="/contact?resume=true"
            className={[
              'mt-3 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md',
              'text-body font-semibold text-[var(--color-text-primary)]',
              'border border-[var(--color-text-primary)]',
              'hover:bg-[var(--color-text-primary)] hover:text-[var(--color-bg)]',
              'transition-colors duration-150',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
            ].join(' ')}
          >
            Resume
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}
