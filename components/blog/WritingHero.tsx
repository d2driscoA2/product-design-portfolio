/* ─────────────────────────────────────────────────────────────────
   WritingHero — article page hero for /writing/[slug] pages.

   Matches the WritingCardThumb composition exactly so clicking
   through from the index feels like a continuation:
   - Royal blue #3B5CE8 background
   - Brand logo mark (filled concentric circles) bottom-left, low opacity
   - heroImage fades in from the right with a gradient bridge
   - Eyebrow: horizontal rule + category pill, top-left
   - Title: Plus Jakarta Sans 800, white, constrained to left zone
   - Bottom metadata: author · date · read time
───────────────────────────────────────────────────────────────── */

import Image from 'next/image'
import type { BlogPost } from '@/lib/blog-posts'

interface WritingHeroProps {
  post: BlogPost
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

export function WritingHero({ post }: WritingHeroProps) {
  return (
    <div
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

      {/* ── Brand logo mark — bottom-left, same as WritingCardThumb ── */}
      <svg
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{
          position:      'absolute',
          bottom:        '-80px',
          left:          '-80px',
          width:         '340px',
          height:        '340px',
          opacity:       0.14,
          pointerEvents: 'none',
        }}
      >
        <circle cx="26" cy="26" r="24" fill="#3B5CE8" />
        <circle cx="26" cy="26" r="17" fill="#F47060" />
        <circle cx="26" cy="26" r="11" fill="#FF00AA" />
        <circle cx="26" cy="26" r="5.5" fill="#F5C200" />
      </svg>

      {/* ── heroImage — right portion, same gradient composition ── */}
      {post.heroImage && (
        <div style={{
          position: 'absolute',
          top: 0, right: 0, bottom: 0,
          width: '58%',
          overflow: 'hidden',
          borderRadius: '0 12px 12px 0',
        }}>
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt ?? ''}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top left' }}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          {/* Left fade — image dissolves into brand blue */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, #3B5CE8 0%, rgba(59,92,232,0.85) 8%, rgba(59,92,232,0.20) 38%, rgba(59,92,232,0) 65%)',
            pointerEvents: 'none',
          }} />
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(59,92,232,0.55) 0%, rgba(59,92,232,0) 40%)',
            pointerEvents: 'none',
          }} />
          {/* Subtle dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.10)',
            pointerEvents: 'none',
          }} />
        </div>
      )}

      {/* ── Top: eyebrow + title ─────────────────────────────────── */}
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

        {/* Title — constrained to left zone so it doesn't bleed into the image */}
        <h1 style={{
          fontFamily:    'var(--font-display), "Plus Jakarta Sans", sans-serif',
          fontSize:      'clamp(1.25rem, 3.2vw, 2.125rem)',
          fontWeight:    800,
          lineHeight:    1.15,
          letterSpacing: '-0.025em',
          color:         '#FFFFFF',
          margin:        0,
          maxWidth:      '56%',
        }}>
          {post.title}
        </h1>
      </div>

      {/* ── Bottom: metadata ─────────────────────────────────────── */}
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
