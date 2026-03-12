interface LogoProps {
  /** Show just the mark, or mark + wordmark */
  variant?: 'mark' | 'full'
  /** Size of the circular mark in px */
  size?: number
  className?: string
}

export function Logo({ variant = 'full', size = 40, className = '' }: LogoProps) {
  return (
    <a
      href="/"
      aria-label="DisplayedUX, Strategic Product Design. Go to homepage."
      className={`inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B5CE8] rounded-sm ${className}`}
    >
      {/* Concentric circles mark — matches branding screenshots */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Royal blue outer ring */}
        <circle cx="24" cy="24" r="24" fill="#3B5CE8" />
        {/* Coral second ring */}
        <circle cx="24" cy="24" r="17" fill="#F47060" />
        {/* Magenta third ring */}
        <circle cx="24" cy="24" r="11" fill="#FF00AA" />
        {/* Amber center */}
        <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span
            className="text-[1.05rem] font-bold tracking-tight text-[#606060]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Displayed<span className="text-[#3B5CE8]">UX</span>
          </span>
          <span
            className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-[#606060]/60 mt-0.5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Strategic Product Design
          </span>
        </div>
      )}
    </a>
  )
}
