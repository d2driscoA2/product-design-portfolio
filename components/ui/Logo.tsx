interface LogoProps {
  /** Show just the mark, or mark + wordmark, or footer variant */
  variant?: 'mark' | 'full' | 'footer'
  /** Size of the circular mark in px */
  size?: number
  className?: string
}

export function Logo({ variant = 'full', size = 40, className = '' }: LogoProps) {
  const isFooter = variant === 'footer'

  return (
    <a
      href="/"
      aria-label="DisplayedUX, Strategic Product Design. Go to homepage."
      className={`inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B5CE8] rounded-sm ${className}`}
    >
      {/* Concentric circles mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {isFooter ? (
          <>
            <circle cx="26" cy="26" r="24" fill="#3B5CE8" stroke="white" strokeWidth="2" />
            <circle cx="26" cy="26" r="17" fill="#F47060" />
            <circle cx="26" cy="26" r="11" fill="#FF00AA" />
            <circle cx="26" cy="26" r="5.5" fill="#F5C200" />
          </>
        ) : (
          <>
            <circle cx="26" cy="26" r="24" fill="#3B5CE8" stroke="white" strokeWidth="2" />
            <circle cx="26" cy="26" r="17" fill="#F47060" />
            <circle cx="26" cy="26" r="11" fill="#FF00AA" />
            <circle cx="26" cy="26" r="5.5" fill="#F5C200" />
          </>
        )}
      </svg>

      {(variant === 'full' || variant === 'footer') && (
        <div className="flex flex-col leading-none">
          <span
            className="text-[1.05rem] font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: isFooter ? '#FFFFFF' : 'var(--color-text-primary)' }}
          >
            Displayed<span style={{ color: isFooter ? '#F5C200' : '#F47060' }}>UX</span>
          </span>
          <span
            className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase mt-0.5"
            style={{ fontFamily: 'var(--font-sans)', color: isFooter ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)' }}
          >
            Strategic Product Design
          </span>
        </div>
      )}
    </a>
  )
}
