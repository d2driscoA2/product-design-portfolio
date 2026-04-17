interface AvatarProps {
  size: number
}

/**
 * Danny Driscoll avatar — displays headshot-dark.png (bull's-eye background)
 * at full natural proportions inside a circular mask.
 * object-fit: contain keeps the full ring design visible; no transforms.
 */
export function Avatar({ size }: AvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/headshots/headshot-dark.png"
        alt="Danny Driscoll"
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </div>
  )
}
