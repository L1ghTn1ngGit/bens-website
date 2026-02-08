/**
 * ResponsiveImage Component
 * Serves WebP with JPEG fallback at responsive sizes (sm/md/lg)
 * Uses <picture> + srcSet for browser-native responsive loading
 */

import { memo } from 'react'

function getVariants(src) {
  // src = '/assets/images/gallery/gallery-1.jpg'
  const dot = src.lastIndexOf('.')
  const base = src.slice(0, dot)  // '/assets/images/gallery/gallery-1'
  const ext = src.slice(dot)      // '.jpg'
  
  return {
    sm: { jpg: `${base}-sm${ext}`, webp: `${base}-sm.webp` },
    md: { jpg: `${base}-md${ext}`, webp: `${base}-md.webp` },
    lg: { jpg: `${base}-lg${ext}`, webp: `${base}-lg.webp` },
    original: src,
  }
}

function ResponsiveImage({ src, alt, className, style, loading = 'lazy', sizes, ...props }) {
  const v = getVariants(src)
  
  const defaultSizes = sizes || '(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px'

  return (
    <picture>
      {/* WebP sources */}
      <source
        type="image/webp"
        srcSet={`${v.sm.webp} 400w, ${v.md.webp} 800w, ${v.lg.webp} 1200w`}
        sizes={defaultSizes}
      />
      {/* JPEG fallback sources */}
      <source
        type="image/jpeg"
        srcSet={`${v.sm.jpg} 400w, ${v.md.jpg} 800w, ${v.lg.jpg} 1200w`}
        sizes={defaultSizes}
      />
      {/* Fallback img */}
      <img
        src={v.md.jpg}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        decoding="async"
        {...props}
      />
    </picture>
  )
}

export default memo(ResponsiveImage)
