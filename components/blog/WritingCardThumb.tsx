/* ─────────────────────────────────────────────────────────────────
   WritingCardThumb — on-brand thumbnail for /writing index cards.

   Two variants:
   - 'featured': large 2-column card left panel (280px+ tall).
     Shows rings + eyebrow rule + category pill + 2-line title.
   - 'card': small grid card header (160px tall).
     Shows rings + category pill only (title lives in card body).

   Same design language as WritingHero: #3B5CE8 background,
   concentric bull's-eye rings top-right, frosted category pill.
   No image files required.
───────────────────────────────────────────────────────────────── */

import type { BlogPost } from '@/lib/blog-posts'

interface WritingCardThumbProps {
  post: BlogPost
  variant?: 'featured' | 'card'
}

const TAG_BG: Record<BlogPost['tagColor'], string> = {
  blue:      'rgba(255,255,255,0.12)',
  coral:     'rgba(244,112,96,0.28)',
  amber:     'rgba(245,194,0,0.22)',
  magenta:   'rgba(255,0,170,0.22)',
  lightBlue: 'rgba(109,163,248,0.22)',
}

const TAG_BORDER: Record<BlogPost['tagColor'], string> = {
  blue:      'rgba(255,255,255,0.22)',
  coral:     'rgba(244,112,96,0.50)',
  amber:     'rgba(245,194,0,0.40)',
  magenta:   'rgba(255,0,170,0.40)',
  lightBlue: 'rgba(109,163,248,0.40)',
}

export function WritingCardThumb({ post, variant = 'card' }: WritingCardThumbProps) {
  const isFeatured = variant === 'featured'

  return (
    <div
      aria-hidden="true"
      style={{
        position:       'relative',
        width:          '100%',
        height:         '100%',
        minHeight:      isFeatured ? 280 : 160,
        background:     '#3B5CE8',
        overflow:       'hidden',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        padding:        isFeatured ? '28px 32px' : '16px 20px',
      }}
    >
      {/* ── Bull's-eye rings — top-right ──────────────────────── */}
      {isFeatured ? (
        <>
          <span style={{
            position: 'absolute', top: '-70px', right: '-70px',
            width: '300px', height: '300px', borderRadius: '50%',
            border: '42px solid rgba(255,255,255,0.045)', pointerEvents: 'none',
          }} />
          <span style={{
            position: 'absolute', top: '-10px', right: '68px',
            width: '160px', height: '160px', borderRadius: '50%',
            border: '24px solid rgba(255,255,255,0.030)', pointerEvents: 'none',
          }} />
          <span style={{
            position: 'absolute', top: '46px', right: '124px',
            width: '58px', height: '58px', borderRadius: '50%',
            border: '12px solid rgba(255,255,255,0.038)', pointerEvents: 'none',
          }} />
        </>
      ) : (
        <>
          <span style={{
            position: 'absolute', top: '-50px', right: '-50px',
            width: '200px', height: '200px', borderRadius: '50%',
            border: '28px solid rgba(255,255,255,0.045)', pointerEvents: 'none',
          }} />
          <span style={{
            position: 'absolute', top: '0px', right: '52px',
            width: '104px', height: '104px', borderRadius: '50%',
            border: '16px solid rgba(255,255,255,0.030)', pointerEvents: 'none',
          }} />
          <span style={{
            position: 'absolute', top: '38px', right: '90px',
            width: '38px', height: '38px', borderRadius: '50%',
            border: '8px solid rgba(255,255,255,0.038)', pointerEvents: 'none',
          }} />
        </>
      )}

      {/* ── Top content ───────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {isFeatured && (
          /* Eyebrow rule — featured only */
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'rgba(255,255,255,0.35)', flexShrink: 0,
            }} />
            <span style={{
              display:       'inline-flex',
              alignItems:    'center',
              fontSize:      '0.625rem',
              fontWeight:    700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
              color:         'rgba(255,255,255,0.75)',
              fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
              background:    TAG_BG[post.tagColor],
              border:        `1px solid ${TAG_BORDER[post.tagColor]}`,
              borderRadius:  '4px',
              padding:       '3px 8px',
            }}>
              {post.tag}
            </span>
          </div>
        )}

        {/* Category pill — card variant only (featured uses eyebrow row above) */}
        {!isFeatured && (
          <span style={{
            display:       'inline-flex',
            alignItems:    'center',
            fontSize:      '0.5625rem',
            fontWeight:    700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color:         'rgba(255,255,255,0.75)',
            fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
            background:    TAG_BG[post.tagColor],
            border:        `1px solid ${TAG_BORDER[post.tagColor]}`,
            borderRadius:  '4px',
            padding:       '2px 7px',
          }}>
            {post.tag}
          </span>
        )}

        {/* Title — featured only */}
        {isFeatured && (
          <p style={{
            fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
            fontSize:      'clamp(1rem, 1.8vw, 1.25rem)',
            fontWeight:    800,
            lineHeight:    1.2,
            letterSpacing: '-0.02em',
            color:         '#FFFFFF',
            margin:        0,
            maxWidth:      '360px',
            /* Two-line clamp */
            display:       '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow:      'hidden',
          }}>
            {post.title}
          </p>
        )}
      </div>

      {/* ── Bottom metadata — featured only ───────────────────── */}
      {isFeatured && (
        <div style={{
          position:   'relative',
          zIndex:     1,
          display:    'flex',
          gap:        '16px',
          paddingTop: '14px',
          borderTop:  '0.5px solid rgba(255,255,255,0.18)',
          flexWrap:   'wrap',
        }}>
          <span style={{
            fontSize:   '0.6875rem',
            color:      'rgba(255,255,255,0.45)',
            fontFamily: 'var(--font-sans), "Inter", sans-serif',
          }}>
            {post.date}
          </span>
          <span style={{
            fontSize:   '0.6875rem',
            color:      'rgba(255,255,255,0.38)',
            fontFamily: 'var(--font-sans), "Inter", sans-serif',
          }}>
            {post.readTime} min read
          </span>
        </div>
      )}
    </div>
  )
}
