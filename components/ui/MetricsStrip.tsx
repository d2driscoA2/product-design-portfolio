'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { display: '21B+', numeric: 21,  suffix: 'B+', unit: 'transactions', label: 'Transactions protected annually', color: '#F47060' },
  { display: '120+', numeric: 120, suffix: '+',  unit: 'countries',    label: 'Countries navigated globally',   color: '#5B9FE8' },
  { display: '47%',  numeric: 47,  suffix: '%',  unit: 'completion',   label: 'Above industry standard',        color: '#F5C200' },
  { display: '85%',  numeric: 85,  suffix: '%',  unit: 'self-service', label: 'Customers live without CS',      color: '#FF00AA' },
] as const

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }

    const start = performance.now()
    let raf: number

    function step(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

function StatCounter({
  numeric,
  suffix,
  unit,
  label,
  color,
  active,
}: {
  numeric: number
  suffix: string
  unit: string
  label: string
  color: string
  active: boolean
}) {
  const count = useCountUp(numeric, 1400, active)

  return (
    <div className="flex flex-col items-center text-center gap-1">
      <dt className="sr-only">{label}</dt>

      {/* Stat category eyebrow */}
      <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white/40 mb-1">
        {unit}
      </p>

      {/* Large number */}
      <dd
        className="font-extrabold leading-none tabular-nums"
        style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color }}
        aria-label={`${numeric}${suffix} ${unit}`}
      >
        {count}{suffix}
      </dd>

      {/* Descriptor */}
      <p className="text-base font-medium text-white/60 mt-2 max-w-[160px] leading-snug">
        {label}
      </p>
    </div>
  )
}

export function MetricsStrip() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      aria-label="Career metrics"
      className="relative overflow-hidden py-16 lg:py-20 px-6"
      style={{
        background: 'linear-gradient(135deg, #1e3bcc, #3B5CE8, #4f6ef5, #3B5CE8, #2040d4)',
        backgroundSize: '300% 300%',
        animation: 'gradient-drift 14s ease infinite',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse 90% 140% at 50% 50%, rgba(255,255,255,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" style={{ background: 'rgba(255,255,255,0.12)' }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px" aria-hidden="true" style={{ background: 'rgba(0,0,0,0.15)' }} />

      <dl className="relative grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 max-w-6xl mx-auto">
        {STATS.map((s) => (
          <StatCounter key={s.unit} {...s} active={active} />
        ))}
      </dl>
    </section>
  )
}
