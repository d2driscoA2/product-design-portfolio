/* ─────────────────────────────────────────────────────────────────
   WritingHero — on-brand hero for /writing/[slug] pages.

   Design: Color Field
   - Royal Blue #3B5CE8 background
   - Concentric bull's-eye rings at top-right, ultra-low opacity
   - Eyebrow: horizontal rule + category label in small caps
   - Title: Plus Jakarta Sans 800, white
   - Bottom metadata: author · date · read time, 0.5px rule above
   - No image files required — renders as a live CSS component
───────────────────────────────────────────────────────────────── */

import type { BlogPost } from '@/lib/blog-posts'

interface WritingHeroProps {
  post: BlogPost
}

/** Tag pill background on the royal-blue field */
const TAG_BG: Record<BlogPost['tagColor'], string> = {
  blue:    'rgba(255,255,255,0.12)',
  coral:   'rgba(244,112,96,0.28)',
  amber:   'rgba(245,194,0,0.22)',
  magenta: 'rgba(255,0,170,0.22)',
}

/** Tag pill border on the royal-blue field */
const TAG_BORDER: Record<BlogPost['tagColor'], string> = {
  blue:    'rgba(255,255,255,0.22)',
  coral:   'rgba(244,112,96,0.50)',
  amber:   'rgba(245,194,0,0.40)',
  magenta: 'rgba(255,0,170,0.40)',
}

export function WritingHero({ post }: WritingHeroProps) {
  return (
    <div
      role="img"
      aria-label={`Hero for: ${post.title}`}
      style={{
        position:       'relative',
        width:          '100%',
        height:         'clamp(260px, 38vw, 420px)',
        background:     '#3B5CE8',
        borderRadius:   '12px',
        overflow:       'hidden',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        padding:        'clamp(28px, 5vw, 52px) clamp(24px, 6vw, 60px)',
      }}
    >

      {/* ── Decorative bull's-eye rings — top-right ─────────── */}
      <span
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           '-90px',
          right:         '-90px',
          width:         '380px',
          height:        '380px',
          borderRadius:  '50%',
          border:        '52px solid rgba(255,255,255,0.045)',
          pointerEvents: 'none',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           '-20px',
          right:         '80px',
          width:         '200px',
          height:        '200px',
          borderRadius:  '50%',
          border:        '30px solid rgba(255,255,255,0.030)',
          pointerEvents: 'none',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position:      'absolute',
          top:           '50px',
          right:         '155px',
          width:         '72px',
          height:        '72px',
          borderRadius:  '50%',
          border:        '16px solid rgba(255,255,255,0.038)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Top: eyebrow + title ─────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <div style={{
          display:       'flex',
          alignItems:    'center',
          gap:           '10px',
          marginBottom:  '18px',
        }}>
          <span style={{
            display:    'block',
            width:      '28px',
            height:     '1.5px',
            background: 'rgba(255,255,255,0.35)',
            flexShrink: 0,
          }} />
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            fontSize:      '0.6875rem',
            fontWeight:    700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color:         'rgba(255,255,255,0.75)',
            fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
            background:    TAG_BG[post.tagColor],
            border:        `1px solid ${TAG_BORDER[post.tagColor]}`,
            borderRadius:  '4px',
            padding:       '3px 10px',
          }}>
            {post.tag}
          </span>
        </div>

        {/* Title */}
        <p style={{
          fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
          fontSize:      'clamp(1.25rem, 3.2vw, 2.125rem)',
          fontWeight:    800,
          lineHeight:    1.15,
          letterSpacing: '-0.025em',
          color:         '#FFFFFF',
          margin:        0,
          maxWidth:      '680px',
        }}>
          {post.title}
        </p>
      </div>

      {/* ── Bottom: metadata ─────────────────────────────────── */}
      <div style={{
        position:   'relative',
        zIndex:     1,
        display:    'flex',
        alignItems: 'center',
        gap:        '20px',
        paddingTop: '16px',
        borderTop:  '0.5px solid rgba(255,255,255,0.18)',
        flexWrap:   'wrap',
      }}>
        <span style={{
          fontSize:   '0.75rem',
          color:      'rgba(255,255,255,0.55)',
          fontFamily: 'var(--font-sans), "Inter", sans-serif',
        }}>
          Danny Driscoll
        </span>
        <span style={{
          fontSize:   '0.75rem',
          color:      'rgba(255,255,255,0.38)',
          fontFamily: 'var(--font-sans), "Inter", sans-serif',
        }}>
          {post.date}
        </span>
        <span style={{
          fontSize:   '0.75rem',
          color:      'rgba(255,255,255,0.38)',
          fontFamily: 'var(--font-sans), "Inter", sans-serif',
        }}>
          {post.readTime} min read
        </span>
      </div>

    </div>
  )
}
