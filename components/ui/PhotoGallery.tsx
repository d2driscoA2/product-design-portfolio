'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const photoNumbers = ["32","31","30","29","27","26","25","24","23","18","21","19","22","16","20","10","3","11","15","13","7","17","2","6","14","9","5","1","12","8","base","4"];

function getPhotoSrc(n: string): string {
  return n === 'base'
    ? '/images/photography/DannyDriscoll.me-Photography.png'
    : `/images/photography/DannyDriscoll.me-Photography-${n}.png`;
}

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photoNumbers.length) % photoNumbers.length)),
    []
  );

  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photoNumbers.length)),
    []
  );

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        {photoNumbers.map((n, i) => (
          <div
            key={n}
            className="about-photo-bg relative aspect-video rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={getPhotoSrc(n)}
              alt="Photography by Danny Driscoll"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              unoptimized
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={close}
        >
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.55)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {activeIndex + 1} / {photoNumbers.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            style={{
              position: 'absolute',
              top: '14px',
              right: '18px',
              width: '32px',
              height: '32px',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2l8 8M10 2l-8 8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Previous photo"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: '50%',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Next photo"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            style={{
              position: 'relative',
              width: '90vw',
              height: '85vh',
              maxWidth: '1200px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getPhotoSrc(photoNumbers[activeIndex])}
              alt="Photography by Danny Driscoll"
              fill
              className="object-contain"
              unoptimized
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              left: 0,
              right: 0,
              textAlign: 'center',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '11px',
              letterSpacing: '0.05em',
              pointerEvents: 'none',
            }}
          >
            © Danny Driscoll. All rights reserved.
          </div>
        </div>
      )}
    </>
  );
}
