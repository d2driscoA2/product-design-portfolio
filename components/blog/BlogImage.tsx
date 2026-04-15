/* ─────────────────────────────────────────────────────────────────
   BlogImage — plain <img> approach, no Next.js fill mode.
   fill mode requires explicit parent dimensions and has caused
   production rendering failures on this site (see About headshot).
───────────────────────────────────────────────────────────────── */

interface BlogImageProps {
  src: string
  alt: string
  caption?: string
  variant?: 'full' | 'inset' | 'bordered'
  /** Fixed height in px — defaults to 400 */
  height?: number
  className?: string
  /** object-fit — 'cover' for hero screenshots, 'contain' for diagrams */
  objectFit?: 'contain' | 'cover'
  /** object-position — 'top' to anchor tall screenshots to the top edge */
  objectPosition?: string
}

export function BlogImage({
  src,
  alt,
  caption,
  variant = 'full',
  height = 400,
  className = '',
  objectFit = 'contain',
  objectPosition = 'center',
}: BlogImageProps) {
  const wrapperClass = [
    'blog-image-wrap',
    `blog-image-wrap--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  return (
    <figure className={wrapperClass}>
      <div className="blog-image-inner" style={{ height }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit,
            objectPosition,
            display: 'block',
          }}
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="blog-image-caption">{caption}</figcaption>
      )}
    </figure>
  )
}

/**
 * Hero variant — taller, crops from top, eager-loaded.
 */
export function BlogHeroImage({
  src,
  alt,
  caption,
}: Pick<BlogImageProps, 'src' | 'alt' | 'caption'>) {
  return (
    <figure className="blog-image-wrap blog-image-wrap--bordered blog-hero-image">
      <div className="blog-image-inner" style={{ height: 480 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            display: 'block',
          }}
          loading="eager"
        />
      </div>
      {caption && (
        <figcaption className="blog-image-caption">{caption}</figcaption>
      )}
    </figure>
  )
}

/**
 * Card thumbnail — fixed square crop, used in the writing index.
 */
export function BlogCardImage({
  src,
  alt,
  height = 200,
}: Pick<BlogImageProps, 'src' | 'alt' | 'height'>) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height,
        objectFit: 'cover',
        objectPosition: 'top',
        display: 'block',
      }}
      loading="lazy"
    />
  )
}
