import { ImageResponse } from 'next/og'

export const alt = 'Danny Driscoll | DisplayedUX — Strategic Product Design'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Decorative bull's-eye top-right */}
        <svg
          width="420"
          height="420"
          viewBox="0 0 48 48"
          fill="none"
          style={{ position: 'absolute', top: '-100px', right: '-100px', opacity: 0.22 }}
        >
          <circle cx="24" cy="24" r="24" fill="#3B5CE8" />
          <circle cx="24" cy="24" r="17" fill="#F47060" />
          <circle cx="24" cy="24" r="11" fill="#FF00AA" />
          <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
        </svg>

        {/* Decorative bull's-eye bottom-left */}
        <svg
          width="240"
          height="240"
          viewBox="0 0 48 48"
          fill="none"
          style={{ position: 'absolute', bottom: '-60px', left: '-40px', opacity: 0.14 }}
        >
          <circle cx="24" cy="24" r="24" fill="#3B5CE8" />
          <circle cx="24" cy="24" r="17" fill="#F47060" />
          <circle cx="24" cy="24" r="11" fill="#FF00AA" />
          <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
        </svg>

        {/* Top: logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="#3B5CE8" />
            <circle cx="24" cy="24" r="17" fill="#F47060" />
            <circle cx="24" cy="24" r="11" fill="#FF00AA" />
            <circle cx="24" cy="24" r="5.5" fill="#F5C200" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', display: 'flex' }}>
              Displayed<span style={{ color: '#3B5CE8' }}>UX</span>
            </div>
            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#606060' }}>
              Strategic Product Design
            </div>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 1 }}>
          <div style={{ fontSize: '52px', fontWeight: 800, color: '#F5F5F5', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px' }}>
            Designing products where{' '}
            <span style={{ color: '#F47060' }}>mistakes have consequences.</span>
          </div>
          <div style={{ fontSize: '22px', color: '#9CA3AF', fontWeight: 500, letterSpacing: '-0.01em' }}>
            18+ years · TeleSign · Netflix · Appily.com
          </div>
        </div>

        {/* Bottom: name + URL */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em' }}>
              Danny Driscoll
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#606060', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Principal Product Designer
            </div>
          </div>
          <div style={{ fontSize: '14px', color: '#3B5CE8', fontWeight: 600, letterSpacing: '0.02em' }}>
            displayedux.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
