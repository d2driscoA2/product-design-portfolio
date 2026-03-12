'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

/**
 * Hero with headline visible on paint.
 * Subheadline + CTAs fade up on mount (150ms delay).
 * prefers-reduced-motion: global CSS kill-switch zeroes the transition,
 * so both states land at opacity-100/translate-y-0 instantly.
 */
export function HeroSection() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden bg-white pt-24 pb-12 lg:pt-32 lg:pb-16 px-6"
    >
      {/* Decorative bull's-eye — behind all content */}
      <div
        className="pointer-events-none absolute right-[-140px] top-1/2 -translate-y-1/2 md:right-[-190px] lg:right-[-260px]"
        aria-hidden="true"
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[520px] lg:h-[520px]"
          style={{ opacity: 0.12, animation: 'spin-slow 60s linear infinite' }}
        >
          <circle cx="24" cy="24" r="24" fill="#3B5CE8" />
          <circle cx="24" cy="24" r="17" fill="#F47060" />
          <circle cx="24" cy="24" r="11" fill="#FF00AA" />
          <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Eyebrow */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="w-8 h-px bg-brand-coral" aria-hidden="true" />
          <p className="text-label font-semibold tracking-widest uppercase text-brand-charcoal/50">
            Danny Driscoll · Principal Product Designer
          </p>
        </div>

        {/* Headline — visible on paint, no animation */}
        <h1
          id="hero-headline"
          className="text-display font-extrabold leading-[1.06] tracking-tight text-brand-charcoal max-w-4xl mb-8"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Designing products where{' '}
          <span className="text-brand-blue-royal">
            mistakes have consequences
          </span>
        </h1>

        {/* Subheadline + CTAs — fade up on mount */}
        <div
          className={[
            'transition-all duration-700 ease-out motion-reduce:transition-none',
            revealed
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5',
          ].join(' ')}
        >
          <p className="text-lead text-brand-charcoal/60 font-medium mb-10 max-w-xl">
            18+ years. TeleSign&nbsp;·&nbsp;Netflix&nbsp;·&nbsp;Cappex
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className={[
                'inline-flex items-center justify-center h-12 px-8 rounded-lg',
                'bg-brand-blue-royal text-white text-small font-bold tracking-wide',
                'hover:bg-[#2d4dd4] transition-colors duration-150 motion-reduce:transition-none',
                'shadow-[0_4px_14px_0_rgb(59_92_232_/_0.25)]',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
              ].join(' ')}
            >
              View work
            </Link>
            <Link
              href="/about"
              className={[
                'inline-flex items-center justify-center h-12 px-8 rounded-lg',
                'border-2 border-brand-charcoal/20 text-brand-charcoal text-small font-bold tracking-wide',
                'hover:border-brand-charcoal/40 transition-colors duration-150 motion-reduce:transition-none',
                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-royal',
              ].join(' ')}
            >
              Read my story
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
