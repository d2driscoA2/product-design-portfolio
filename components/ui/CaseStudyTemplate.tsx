'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BentoGrid, { BentoStat } from './BentoGrid';
import YouTubeEmbed from '@/components/YouTubeEmbed';

export interface VideoEmbed {
  videoId: string;
  startSeconds?: number;
  title?: string;
}

export interface ProcessSection {
  type: 'insight' | 'decision' | 'iteration' | 'outcome' | 'reflection';
  heading: string;
  body: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  images?: string[];
  quote?: string;
  outcomeTiers?: { label: string; value: string; context: string; isPrimary?: boolean }[];
  video?: VideoEmbed;
  videos?: VideoEmbed[];
}

export interface CaseStudyData {
  slug: string;
  client: string;
  title: string;
  headline: string;
  role: string;
  timeline: string;
  accentColor: string;
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition?: string;
  overview: string;
  bentoStats: BentoStat[];
  sections: ProcessSection[];
  heroVideo?: VideoEmbed;
  nextCase: { slug: string; client: string; title: string; accentColor: string };
  prevCase?: { slug: string; client: string; title: string; accentColor: string };
}

const LABELS: Record<ProcessSection['type'], string> = {
  insight: 'THE INSIGHT',
  decision: 'THE DECISION',
  iteration: 'THE PROCESS',
  outcome: 'THE OUTCOME',
  reflection: 'REFLECTION',
};

function isLightColor(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6;
}

export default function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const { accentColor } = data;
  const light = isLightColor(accentColor);

  // Build flat image list for lightbox navigation (memoised for stable reference)
  const allImages = useMemo(() => {
    const imgs: { src: string; alt: string }[] = [];
    data.sections.forEach((section) => {
      if (section.image) {
        imgs.push({ src: section.image, alt: section.imageAlt || section.heading });
      }
      if (section.images) {
        section.images.forEach((img, idx) => {
          imgs.push({ src: img, alt: `${section.heading} image ${idx + 1}` });
        });
      }
    });
    return imgs;
  }, [data.sections]);

  const srcToIndex = useMemo(() => new Map(allImages.map((img, i) => [img.src, i])), [allImages]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex(i => i !== null ? Math.min(i + 1, allImages.length - 1) : null);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => i !== null ? Math.max(i - 1, 0) : null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, allImages]);
  const heroText = light ? '#1A1A1A' : '#fff';
  const heroSubtext = light ? 'rgba(0,0,0,0.58)' : 'rgba(255,255,255,0.72)';
  const ringColor = light ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.07)';
  const heroStat1 = data.bentoStats[0];
  const heroStat2 = data.bentoStats[1];

  return (
    <main style={{ background: 'var(--color-bg, #fff)', color: 'var(--color-text-primary, #1A1A1A)', minHeight: '100vh' }}>

      <style>{`
        .hero-image-container {
          line-height: 0;
          background: #f8f8f8;
          height: 380px;
          overflow: hidden;
        }
        .hero-image-img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .outcome-tiers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        .outcome-tier-value {
          hyphens: none;
          overflow-wrap: normal;
          word-break: normal;
        }
        @media (max-width: 479px) {
          .hero-image-container {
            height: auto;
            min-height: 200px;
          }
          .hero-image-img {
            object-fit: contain;
            height: auto !important;
          }
          .outcome-tiers-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <nav style={{ maxWidth: 900, margin: '0 auto', padding: '1.25rem 2rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary, #606060)' }}>
        <Link href="/" style={{ color: 'var(--color-text-secondary, #606060)', textDecoration: 'none' }}>Home</Link>
        <span>/</span>
        <Link href="/#work" style={{ color: 'var(--color-text-secondary, #606060)', textDecoration: 'none' }}>Work</Link>
        <span>/</span>
        <span>{data.title}</span>
      </nav>

      {/* Hero */}
      <section style={{ background: accentColor, position: 'relative', overflow: 'hidden', marginTop: '1.5rem' }}>

        {/* Decorative bull's-eye rings */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 420, height: 420, borderRadius: '50%', border: `52px solid ${ringColor}`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 10, right: 10, width: 240, height: 240, borderRadius: '50%', border: `36px solid ${ringColor}`, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 90, right: 90, width: 100, height: 100, borderRadius: '50%', border: `20px solid ${ringColor}`, pointerEvents: 'none' }} />

        {/* Two-column layout — wraps to stacked on mobile via flex-wrap */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>

          {/* Left: text */}
          <div style={{ flex: '1 1 300px', padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)', position: 'relative', zIndex: 2 }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '2px', borderRadius: 1, background: heroText, opacity: 0.45, flexShrink: 0 }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: heroSubtext }}>{data.client}</span>
            </div>

            <h1 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.65rem, 3.5vw, 2.6rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', color: heroText, margin: '0 0 1rem', maxWidth: 520 }}>
              {data.headline}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: heroSubtext, marginBottom: '2.25rem' }}>
              <span>{data.role}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: heroSubtext }} />
              <span>{data.timeline}</span>
            </div>

            {heroStat1 && heroStat2 && (
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, color: heroText, lineHeight: 1 }}>
                    {heroStat1.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: heroSubtext, marginTop: '0.375rem', maxWidth: 180, lineHeight: 1.45 }}>
                    {heroStat1.label}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)', fontWeight: 700, color: heroText, lineHeight: 1 }}>
                    {heroStat2.value}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: heroSubtext, marginTop: '0.375rem', maxWidth: 180, lineHeight: 1.45 }}>
                    {heroStat2.label}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right: browser frame + screenshot */}
          <div style={{ flex: '1 1 340px', padding: 'clamp(1.5rem, 3vw, 2.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ width: '100%', maxWidth: 560, borderRadius: 10, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.28)', transform: 'rotate(-1.5deg)', background: '#fff' }}>
              <div style={{ height: 36, background: '#F0F0F0', borderBottom: '1px solid #E0E0E0', display: 'flex', alignItems: 'center', padding: '0 14px', gap: 6, flexShrink: 0 }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57', flexShrink: 0 }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FFBD2E', flexShrink: 0 }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840', flexShrink: 0 }} />
                <div style={{ flex: 1, height: 20, background: '#E8E8E8', borderRadius: 4, margin: '0 8px' }} />
              </div>
              <div className="hero-image-container">
                <Image
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  width={1200}
                  height={750}
                  priority
                  unoptimized
                  className="hero-image-img"
                  style={{ objectPosition: data.heroImagePosition ?? 'top center' }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Overview */}
      <section style={{ padding: '3.5rem 0 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '2px', borderRadius: 1, background: accentColor, flexShrink: 0 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #606060)' }}>OVERVIEW</span>
          </div>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--color-text-primary, #1A1A1A)', maxWidth: 680 }}>{data.overview}</p>
        </div>
      </section>

      {/* Bento stats */}
      <section style={{ padding: '0 0 4rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
          <BentoGrid stats={data.bentoStats} accentColor={accentColor} />
        </div>
      </section>

      {/* Hero video */}
      {data.heroVideo && (
        <section style={{ padding: '0 0 4rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
            <YouTubeEmbed
              videoId={data.heroVideo.videoId}
              startSeconds={data.heroVideo.startSeconds}
              title={data.heroVideo.title}
            />
          </div>
        </section>
      )}

      {/* Case study sections */}
      {data.sections.map((section, i) => (
        <section key={i} style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border, #E5E7EB)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.875rem' }}>
              <span style={{ display: 'block', width: '2rem', height: '2px', borderRadius: 1, background: accentColor, flexShrink: 0 }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #606060)' }}>{LABELS[section.type]}</span>
            </div>
            <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.35rem, 2.5vw, 1.875rem)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', margin: '0 0 1.5rem' }}>{section.heading}</h2>
            {section.quote && (
              <blockquote style={{ borderLeft: `4px solid ${accentColor}`, padding: '0.25rem 0 0.25rem 1.5rem', margin: '0 0 2rem', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.55 }}>
                {section.quote}
              </blockquote>
            )}
            {section.outcomeTiers && (
              <div className="outcome-tiers-grid">
                {section.outcomeTiers.map((tier, ti) => (
                  <div key={ti} style={{ padding: '1.5rem', border: tier.isPrimary ? '1.5px solid ' + accentColor : '1px solid var(--color-border, #E5E7EB)', borderRadius: 8 }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.isPrimary ? accentColor : 'var(--color-text-secondary, #606060)', marginBottom: '0.75rem' }}>{tier.label}</div>
                    <div className="outcome-tier-value" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: tier.isPrimary ? accentColor : 'var(--color-text-primary, #1A1A1A)', lineHeight: 1, marginBottom: '0.75rem' }}>{tier.value}</div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary, #606060)', lineHeight: 1.6, margin: 0 }}>{tier.context}</p>
                  </div>
                ))}
              </div>
            )}
            <div>
              {section.body.split('\n\n').map((para, j) => (
                <p key={j} style={{ fontSize: '1rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{para}</p>
              ))}
            </div>
            {section.image && (
              <figure
                style={{ margin: '2.5rem 0 0', borderRadius: 10, overflow: 'hidden', background: 'var(--color-bg-secondary, #F2F2F2)', cursor: 'zoom-in', transition: 'opacity 0.15s' }}
                onClick={() => { const idx = srcToIndex.get(section.image!); if (idx !== undefined) setLightboxIndex(idx); }}
                title="Click to enlarge"
              >
                <Image src={section.image} alt={section.imageAlt || section.heading} width={1200} height={700} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
              </figure>
            )}
            {section.image && section.imageCaption && (
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary, #606060)', marginTop: '0.75rem', lineHeight: 1.5, fontStyle: 'italic' }}>{section.imageCaption}</p>
            )}
            {section.images && section.images.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(section.images.length, 3)}, 1fr)`, gap: '1rem', marginTop: '2.5rem' }}>
                {section.images.map((img, idx) => (
                  <figure
                    key={idx}
                    style={{ margin: 0, borderRadius: 10, overflow: 'hidden', background: 'var(--color-bg-secondary, #F2F2F2)', cursor: 'zoom-in', transition: 'opacity 0.15s' }}
                    onClick={() => { const i = srcToIndex.get(img); if (i !== undefined) setLightboxIndex(i); }}
                    title="Click to enlarge"
                  >
                    <Image src={img} alt={`${section.heading} image ${idx + 1}`} width={800} height={500} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                  </figure>
                ))}
              </div>
            )}
            {section.video && (
              <div style={{ marginTop: '2.5rem' }}>
                <YouTubeEmbed
                  videoId={section.video.videoId}
                  startSeconds={section.video.startSeconds}
                  title={section.video.title}
                />
              </div>
            )}
            {section.videos && section.videos.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(section.videos.length, 2)}, 1fr)`, gap: '1rem', marginTop: '2.5rem' }}>
                {section.videos.map((v, idx) => (
                  <YouTubeEmbed
                    key={idx}
                    videoId={v.videoId}
                    startSeconds={v.startSeconds}
                    title={v.title}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Lightbox overlay */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close */}
          <button
            aria-label="Close lightbox"
            onClick={() => setLightboxIndex(null)}
            style={{ position: 'absolute', top: 16, right: 16, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}
          >✕</button>

          {/* Counter */}
          <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            {lightboxIndex + 1} / {allImages.length}
          </div>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}
            >‹</button>
          )}

          {/* Next */}
          {lightboxIndex < allImages.length - 1 && (
            <button
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: '1.4rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 }}
            >›</button>
          )}

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '90vw', height: '85vh', maxWidth: 1200 }}
          >
            <Image
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              fill
              unoptimized
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* Case navigation */}
      <nav style={{ borderTop: '1px solid var(--color-border, #E5E7EB)', padding: '3rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
          {data.prevCase ? (
            <Link href={`/work/${data.prevCase.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textDecoration: 'none', maxWidth: 320 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #606060)' }}>← Previous</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: data.prevCase.accentColor }}>{data.prevCase.client}</span>
              <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary, #1A1A1A)', lineHeight: 1.3, textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationThickness: '1px' }}>{data.prevCase.title}</span>
            </Link>
          ) : <span />}
          <Link href={`/work/${data.nextCase.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textDecoration: 'none', maxWidth: 320, textAlign: 'right', marginLeft: 'auto' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-secondary, #606060)' }}>Next →</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: data.nextCase.accentColor }}>{data.nextCase.client}</span>
            <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary, #1A1A1A)', lineHeight: 1.3, textDecoration: 'underline', textUnderlineOffset: '3px', textDecorationThickness: '1px' }}>{data.nextCase.title}</span>
          </Link>
        </div>
      </nav>

    </main>
  );
}
