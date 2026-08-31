export interface StatCardData {
  stat: string
  label: string
  variant?: 'default' | 'charcoal' | 'royal-blue'
  accent?: 'coral' | 'amber' | 'magenta' | 'blue-light' | 'none'
  accentPosition?: 'left' | 'top'
  isFeature?: boolean
}

interface StatCardProps extends StatCardData {
  /** Hero renders larger stat text + horizontal layout on desktop */
  size?: 'hero' | 'default'
  className?: string
}

/* ─── constants ──────────────────────────────────────────────────── */

const BG: Record<NonNullable<StatCardData['variant']>, string> = {
  'default':    'bg-brand-offwhite text-brand-charcoal',
  'charcoal':   'bg-brand-charcoal text-brand-offwhite',
  'royal-blue': 'bg-brand-blue-royal text-white',
}

const LABEL_MUTED: Record<NonNullable<StatCardData['variant']>, string> = {
  'default':    'text-brand-charcoal/60',
  'charcoal':   'text-brand-offwhite/60',
  'royal-blue': 'text-white/70',
}

const ACCENT_HEX: Record<NonNullable<StatCardData['accent']>, string> = {
  coral:         '#FF6F6E',
  amber:         '#F5C200',
  magenta:       '#FF00AA',
  'blue-light':  '#5B9FE8',
  none:          'transparent',
}

/* ─── component ──────────────────────────────────────────────────── */

export function StatCard({
  stat,
  label,
  variant = 'default',
  accent = 'none',
  accentPosition = 'left',
  isFeature = false,
  size = 'default',
  className = '',
}: StatCardProps) {
  const accentColor  = ACCENT_HEX[accent]
  const hasAccent    = accent !== 'none'
  const muted        = LABEL_MUTED[variant]

  /* Inline style for the accent border — avoids dynamic Tailwind class construction */
  const borderStyle: React.CSSProperties = hasAccent
    ? accentPosition === 'top'
      ? { borderTop: `3px solid ${accentColor}` }
      : { borderLeft: `3px solid ${accentColor}` }
    : {}

  const base = [
    'flex flex-col h-full rounded-lg p-6 overflow-hidden',
    BG[variant],
    className,
  ].join(' ')

  /* ── Feature callout variant ──────────────────────────────────── */
  if (isFeature) {
    return (
      <div style={borderStyle} className={base}>
        {/* Eyebrow label matches the card's accent color */}
        <span
          aria-label="Feature highlight"
          className="text-label font-semibold tracking-widest uppercase mb-4 block"
          style={{ color: hasAccent ? accentColor : 'currentColor', opacity: hasAccent ? 1 : 0.5 }}
        >
          Feature
        </span>

        <div className="flex flex-col flex-1 justify-end gap-2">
          <p
            className="text-h2 font-bold leading-snug"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {stat}
          </p>
          <p className={['text-small leading-relaxed', muted].join(' ')}>
            {label}
          </p>
        </div>
      </div>
    )
  }

  /* ── Hero variant ─────────────────────────────────────────────── */
  if (size === 'hero') {
    return (
      <div style={borderStyle} className={base}>
        {/*
          Desktop: stat large-left, label small-right (flex-row)
          Mobile:  stacked (flex-col)
        */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-8 flex-1">
          <p
            className="text-display font-bold leading-none tracking-tight shrink-0"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {stat}
          </p>
          <p
            className={[
              'text-small leading-relaxed lg:text-right lg:max-w-[260px] shrink-0',
              muted,
            ].join(' ')}
          >
            {label}
          </p>
        </div>
      </div>
    )
  }

  /* ── Default variant ─────────────────────────────────────────── */
  return (
    <div style={borderStyle} className={base}>
      <p
        className="text-h1 font-bold leading-none tracking-tight mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {stat}
      </p>
      <p className={['text-small leading-relaxed mt-auto', muted].join(' ')}>
        {label}
      </p>
    </div>
  )
}
