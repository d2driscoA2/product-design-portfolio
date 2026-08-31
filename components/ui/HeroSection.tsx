'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HERO_STATS = [
  { company: 'At TeleSign', value: '85%',  label: 'Customers live without CS support', color: '#FF6F6E' },
  { company: 'At TeleSign', value: '48%',  label: 'Faster enterprise onboarding',      color: '#4063FB' },
  { company: 'At Appily.com', value: '47%',  label: 'Completion vs 20–35% standard',     color: '#F5C200' },
  { company: 'At Appily.com', value: '600%', label: 'User growth in two years',           color: '#FF00AA' },
] as const

export function HeroSection() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden bg-[var(--color-bg)] pt-36 pb-10 lg:pt-48 lg:pb-14 px-6"
    >
      {/* Decorative bull's-eye — z-0, behind everything */}
      <div
        className="pointer-events-none absolute right-[-140px] top-1/2 -translate-y-1/2 md:right-[-190px] lg:right-[-260px] z-0"
        aria-hidden="true"
      >
        <svg
          width="280"
          height="280"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[520px] lg:h-[520px]"
          style={{ opacity: 0.06, animation: 'spin-slow 60s linear infinite' }}
        >
          <circle cx="24" cy="24" r="24" fill="#4063FB" />
          <circle cx="24" cy="24" r="17" fill="#FF6F6E" />
          <circle cx="24" cy="24" r="11" fill="#FF00AA" />
          <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
        </svg>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl">
        <div className="flex items-start gap-12">

          {/* Left: all text content */}
          <div className="flex-1 min-w-0">

            {/* Eyebrow */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="w-8 h-px bg-brand-coral" aria-hidden="true" />
              <p className="text-[0.65rem] font-bold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                Danny Driscoll · Principal Product Designer
              </p>
            </div>

            {/* Headline — visible on paint */}
            <h1
              id="hero-headline"
              className="text-display font-extrabold leading-[1.06] tracking-tight text-[var(--color-text-primary)] mb-10"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Designing products where{' '}
              <span className="text-[#FF6F6E]">
                mistakes have consequences
              </span>
            </h1>

            {/* Subheadline + CTAs — fade up on mount */}
            <div
              className={[
                'transition-all duration-700 ease-out motion-reduce:transition-none',
                revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5',
              ].join(' ')}
            >
              <p className="text-lead font-medium mb-12 max-w-xl" style={{ color: 'var(--color-text-muted)' }}>
                18+ years. TeleSign&nbsp;·&nbsp;Netflix&nbsp;·&nbsp;Appily.com
              </p>

              <div className="flex flex-wrap gap-4 mb-20">
                <Link
                  href="/work"
                  className={[
                    'inline-flex items-center justify-center h-12 px-8 rounded-lg',
                    'bg-[#FF6F6E] text-white text-small font-bold tracking-wide',
                    'hover:bg-[#e05a4a] transition-colors duration-150 motion-reduce:transition-none',
                    'shadow-[0_4px_14px_0_rgb(244_112_96_/_0.30)]',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
                  ].join(' ')}
                >
                  View work
                </Link>
                <Link
                  href="/about"
                  className={[
                    'inline-flex items-center justify-center h-12 px-8 rounded-lg',
                    'border border-[#333333] text-[#9CA3AF] text-small font-bold tracking-wide',
                    'hover:border-[#555555] hover:text-[#F5F5F5] transition-colors duration-150 motion-reduce:transition-none',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F6E]',
                  ].join(' ')}
                >
                  Read my story
                </Link>
              </div>

              {/* Inline stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[var(--color-border)]">
                {HERO_STATS.map(({ company, value, label, color }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>
                      {company}
                    </span>
                    <span
                      className="text-2xl font-extrabold leading-none"
                      style={{ fontFamily: 'var(--font-display)', color }}
                    >
                      {value}
                    </span>
                    <span className="text-xs font-medium leading-snug" style={{ color: 'var(--color-text-muted)' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: portrait circle — tablet + desktop, aligned with headline */}
          <div
            className="pointer-events-none hidden md:block flex-shrink-0 self-start z-10"
            aria-hidden="true"
            style={{ paddingTop: '4.5rem' }}
          >
            <div
              className="relative w-[160px] h-[160px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden"
              style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              <Image
                src="/images/headshots/headshot-dark.png"
                alt=""
                fill
                className="object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center top', transform: 'scale(1.35)', transformOrigin: 'center center', filter: 'saturate(0.85)' }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
