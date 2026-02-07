/**
 * FloatingDecorations Component
 * Scattered education-themed SVG icons across the full background
 * with dramatic parallax scroll, glow effects, varied sizes & rotation.
 * Performance optimized: throttled scroll, IntersectionObserver, reduced count on low-end devices
 */

import { useEffect, useMemo, useRef, useState } from 'react'

// Throttle helper for scroll events
const throttle = (func, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

/* ── Outline SVG icons — 24 varieties ── */
const icons = {
  book: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <rect x="6" y="4" width="24" height="28" rx="2" stroke={c} strokeWidth="1.5" />
      <line x1="6" y1="4" x2="6" y2="32" stroke={c} strokeWidth="2.5" />
      <line x1="11" y1="12" x2="25" y2="12" stroke={c} strokeWidth="1" opacity=".5" />
      <line x1="11" y1="17" x2="25" y2="17" stroke={c} strokeWidth="1" opacity=".5" />
      <line x1="11" y1="22" x2="20" y2="22" stroke={c} strokeWidth="1" opacity=".5" />
    </svg>
  ),
  openBook: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 44 32" fill="none">
      <path d="M22,6 Q14,4 4,6 L4,28 Q14,26 22,28" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M22,6 Q30,4 40,6 L40,28 Q30,26 22,28" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="22" y1="6" x2="22" y2="28" stroke={c} strokeWidth="1" opacity=".4" />
      <line x1="8" y1="12" x2="18" y2="11" stroke={c} strokeWidth=".8" opacity=".3" />
      <line x1="8" y1="16" x2="18" y2="15" stroke={c} strokeWidth=".8" opacity=".3" />
      <line x1="26" y1="11" x2="36" y2="12" stroke={c} strokeWidth=".8" opacity=".3" />
      <line x1="26" y1="15" x2="36" y2="16" stroke={c} strokeWidth=".8" opacity=".3" />
    </svg>
  ),
  bookStack: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 36 40" fill="none">
      <rect x="6" y="26" width="24" height="6" rx="1" stroke={c} strokeWidth="1.3" />
      <rect x="4" y="18" width="26" height="6" rx="1" stroke={c} strokeWidth="1.3" transform="rotate(-3 17 21)" />
      <rect x="8" y="10" width="22" height="6" rx="1" stroke={c} strokeWidth="1.3" transform="rotate(2 19 13)" />
      <rect x="5" y="2" width="24" height="6" rx="1" stroke={c} strokeWidth="1.3" transform="rotate(-5 17 5)" />
    </svg>
  ),
  pencil: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 36 44" fill="none">
      <rect x="14" y="3" width="8" height="28" rx="1" stroke={c} strokeWidth="1.5" />
      <polygon points="14,31 18,39 22,31" stroke={c} strokeWidth="1.5" fill="none" />
      <rect x="14" y="3" width="8" height="5" rx="1" stroke={c} strokeWidth="1" opacity=".4" />
    </svg>
  ),
  pen: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 42" fill="none">
      <path d="M14,4 L18,4 L20,32 L16,40 L12,32 Z" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="12" y1="32" x2="20" y2="32" stroke={c} strokeWidth="1" />
      <circle cx="16" cy="8" r="1" stroke={c} strokeWidth=".8" />
    </svg>
  ),
  gradCap: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 40 36" fill="none">
      <polygon points="20,6 2,16 20,26 38,16" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="8" y1="19" x2="8" y2="30" stroke={c} strokeWidth="1.5" />
      <path d="M8,30 Q14,34 20,30" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="34" y1="16" x2="34" y2="28" stroke={c} strokeWidth="1.5" />
      <circle cx="34" cy="30" r="1.5" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  calculator: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 40" fill="none">
      <rect x="4" y="3" width="24" height="34" rx="3" stroke={c} strokeWidth="1.5" />
      <rect x="8" y="7" width="16" height="7" rx="1" stroke={c} strokeWidth="1" />
      <circle cx="11" cy="21" r="2" stroke={c} strokeWidth="1" />
      <circle cx="16" cy="21" r="2" stroke={c} strokeWidth="1" />
      <circle cx="21" cy="21" r="2" stroke={c} strokeWidth="1" />
      <circle cx="11" cy="29" r="2" stroke={c} strokeWidth="1" />
      <circle cx="16" cy="29" r="2" stroke={c} strokeWidth="1" />
      <circle cx="21" cy="29" r="2" stroke={c} strokeWidth="1" />
    </svg>
  ),
  ruler: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 40 16" fill="none">
      <rect x="2" y="2" width="36" height="12" rx="2" stroke={c} strokeWidth="1.5" />
      <line x1="9" y1="2" x2="9" y2="8" stroke={c} strokeWidth="1" />
      <line x1="16" y1="2" x2="16" y2="6" stroke={c} strokeWidth="1" />
      <line x1="23" y1="2" x2="23" y2="8" stroke={c} strokeWidth="1" />
      <line x1="30" y1="2" x2="30" y2="6" stroke={c} strokeWidth="1" />
    </svg>
  ),
  triangleRuler: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 38 38" fill="none">
      <polygon points="4,34 34,34 4,4" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="4" y1="28" x2="10" y2="28" stroke={c} strokeWidth=".8" />
      <line x1="4" y1="22" x2="10" y2="22" stroke={c} strokeWidth=".8" />
      <line x1="4" y1="16" x2="10" y2="16" stroke={c} strokeWidth=".8" />
      <line x1="10" y1="34" x2="10" y2="28" stroke={c} strokeWidth=".8" />
      <line x1="16" y1="34" x2="16" y2="28" stroke={c} strokeWidth=".8" />
      <line x1="22" y1="34" x2="22" y2="28" stroke={c} strokeWidth=".8" />
    </svg>
  ),
  protractor: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 40 24" fill="none">
      <path d="M4,22 A16,16 0 0,1 36,22" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="4" y1="22" x2="36" y2="22" stroke={c} strokeWidth="1.5" />
      <line x1="20" y1="22" x2="20" y2="6" stroke={c} strokeWidth=".8" opacity=".5" />
      <line x1="20" y1="22" x2="10" y2="9" stroke={c} strokeWidth=".8" opacity=".4" />
      <line x1="20" y1="22" x2="30" y2="9" stroke={c} strokeWidth=".8" opacity=".4" />
    </svg>
  ),
  lightbulb: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 40" fill="none">
      <circle cx="16" cy="14" r="10" stroke={c} strokeWidth="1.5" />
      <path d="M12,22 Q12,28 12,29 L20,29 Q20,28 20,22" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="12" y1="32" x2="20" y2="32" stroke={c} strokeWidth="1.5" />
      <line x1="11" y1="7" x2="13" y2="10" stroke={c} strokeWidth="1" opacity=".5" />
      <line x1="21" y1="7" x2="19" y2="10" stroke={c} strokeWidth="1" opacity=".5" />
    </svg>
  ),
  star: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <polygon points="16,3 20,12 30,12 22,19 25,29 16,23 7,29 10,19 2,12 12,12" stroke={c} strokeWidth="1.5" fill="none" />
    </svg>
  ),
  musicNote: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 28 34" fill="none">
      <ellipse cx="9" cy="26" rx="5" ry="4" stroke={c} strokeWidth="1.5" />
      <line x1="14" y1="26" x2="14" y2="5" stroke={c} strokeWidth="1.5" />
      <path d="M14,5 Q20,3 24,8 Q20,10 14,12" stroke={c} strokeWidth="1.5" fill="none" />
    </svg>
  ),
  doubleNote: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 34 34" fill="none">
      <ellipse cx="8" cy="26" rx="5" ry="3.5" stroke={c} strokeWidth="1.5" />
      <ellipse cx="26" cy="22" rx="5" ry="3.5" stroke={c} strokeWidth="1.5" />
      <line x1="13" y1="26" x2="13" y2="5" stroke={c} strokeWidth="1.5" />
      <line x1="31" y1="22" x2="31" y2="3" stroke={c} strokeWidth="1.5" />
      <line x1="13" y1="5" x2="31" y2="3" stroke={c} strokeWidth="2" />
    </svg>
  ),
  trebleClef: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 24 40" fill="none">
      <path d="M14,36 C6,34 4,28 8,24 C12,20 14,14 14,8 C14,4 12,2 10,2 C8,2 6,4 6,8 C6,14 10,20 12,26 C13,30 12,34 8,36" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="4" y1="14" x2="20" y2="14" stroke={c} strokeWidth=".6" opacity=".3" />
      <line x1="4" y1="18" x2="20" y2="18" stroke={c} strokeWidth=".6" opacity=".3" />
      <line x1="4" y1="22" x2="20" y2="22" stroke={c} strokeWidth=".6" opacity=".3" />
      <line x1="4" y1="26" x2="20" y2="26" stroke={c} strokeWidth=".6" opacity=".3" />
    </svg>
  ),
  globe: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 34 34" fill="none">
      <circle cx="17" cy="17" r="14" stroke={c} strokeWidth="1.5" />
      <ellipse cx="17" cy="17" rx="7" ry="14" stroke={c} strokeWidth="1" />
      <line x1="3" y1="12" x2="31" y2="12" stroke={c} strokeWidth="1" />
      <line x1="3" y1="22" x2="31" y2="22" stroke={c} strokeWidth="1" />
    </svg>
  ),
  atom: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="2.5" stroke={c} strokeWidth="1.5" />
      <ellipse cx="18" cy="18" rx="14" ry="5" stroke={c} strokeWidth="1" />
      <ellipse cx="18" cy="18" rx="14" ry="5" stroke={c} strokeWidth="1" transform="rotate(60 18 18)" />
      <ellipse cx="18" cy="18" rx="14" ry="5" stroke={c} strokeWidth="1" transform="rotate(120 18 18)" />
    </svg>
  ),
  flask: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 30 38" fill="none">
      <path d="M11,4 L11,16 L3,32 Q2,35 5,36 L25,36 Q28,35 27,32 L19,16 L19,4" stroke={c} strokeWidth="1.5" fill="none" />
      <line x1="9" y1="4" x2="21" y2="4" stroke={c} strokeWidth="1.5" />
      <line x1="6" y1="26" x2="24" y2="26" stroke={c} strokeWidth="1" opacity=".4" />
    </svg>
  ),
  microscope: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 40" fill="none">
      <circle cx="20" cy="8" r="4" stroke={c} strokeWidth="1.3" />
      <line x1="20" y1="12" x2="20" y2="28" stroke={c} strokeWidth="1.5" />
      <path d="M14,28 L26,28 L26,32 Q20,36 14,32 Z" stroke={c} strokeWidth="1.3" fill="none" />
      <line x1="10" y1="36" x2="30" y2="36" stroke={c} strokeWidth="1.5" />
      <line x1="14" y1="20" x2="26" y2="20" stroke={c} strokeWidth="1" opacity=".5" />
    </svg>
  ),
  abc: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 48 24" fill="none">
      <text x="4" y="18" fontFamily="serif" fontSize="18" fontWeight="bold" stroke={c} strokeWidth="1" fill="none">Aa</text>
    </svg>
  ),
  pi: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <text x="4" y="26" fontFamily="serif" fontSize="28" fontWeight="bold" stroke={c} strokeWidth="1.2" fill="none">π</text>
    </svg>
  ),
  sigma: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
      <text x="4" y="26" fontFamily="serif" fontSize="26" fontWeight="bold" stroke={c} strokeWidth="1.2" fill="none">Σ</text>
    </svg>
  ),
  infinity: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 40 24" fill="none">
      <path d="M20,12 C20,6 26,4 30,8 C34,12 34,16 30,16 C26,16 20,12 20,12 C20,12 14,8 10,8 C6,8 6,16 10,16 C14,16 20,12 20,12Z" stroke={c} strokeWidth="1.5" fill="none" />
    </svg>
  ),
  plusMinus: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 28 34" fill="none">
      <line x1="14" y1="4" x2="14" y2="18" stroke={c} strokeWidth="1.5" />
      <line x1="7" y1="11" x2="21" y2="11" stroke={c} strokeWidth="1.5" />
      <line x1="7" y1="28" x2="21" y2="28" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  diploma: (s, c) => (
    <svg width={s} height={s} viewBox="0 0 40 32" fill="none">
      <rect x="4" y="4" width="32" height="24" rx="2" stroke={c} strokeWidth="1.5" />
      <line x1="12" y1="10" x2="28" y2="10" stroke={c} strokeWidth=".8" opacity=".4" />
      <line x1="12" y1="14" x2="28" y2="14" stroke={c} strokeWidth=".8" opacity=".4" />
      <line x1="12" y1="18" x2="24" y2="18" stroke={c} strokeWidth=".8" opacity=".4" />
      <circle cx="20" cy="24" r="3" stroke={c} strokeWidth="1" />
      <path d="M18,27 L16,32 M22,27 L24,32" stroke={c} strokeWidth="1" />
    </svg>
  ),
}

const iconKeys = Object.keys(icons)

function seededRng(seed) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

function FloatingDecorations() {
  const rafRef = useRef(null)
  const itemRefs = useRef([])
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef(null)

  /* ── Poisson-disk-ish grid: 7×7 grid, 2 per cell, jittered, with min-distance ── */
  const items = useMemo(() => {
    const rand = seededRng(77)
    const placed = []

    // Reduce decoration count on low-end devices
    const cores = navigator.hardwareConcurrency || 4
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.innerWidth < 768
    const perfTier = window.__perfTier || 'high'
    const cellReduction = (perfTier === 'low' || prefersReducedMotion) ? 0.25
      : (perfTier === 'medium' || isMobile || cores <= 2) ? 0.4
      : (cores <= 4) ? 0.6 : 0.85

    const cols = Math.ceil(7 * cellReduction)
    const rows = Math.ceil(7 * cellReduction)
    const perCell = prefersReducedMotion ? 1 : 2
    const cellW = 100 / cols
    const cellH = 100 / rows

    /* depth layers: near (big, sharp, fast parallax) → far (small, blurry, slow) — toned down ~80% */
    const layers = [
      { sizeMin: 40, sizeMax: 68, blurMin: 0, blurMax: 0, opMin: 0.16, opMax: 0.28, pxMin: 0.10, pxMax: 0.25 },   // near
      { sizeMin: 24, sizeMax: 42, blurMin: 0, blurMax: 0.6, opMin: 0.11, opMax: 0.21, pxMin: 0.04, pxMax: 0.12 },  // mid
      { sizeMin: 12, sizeMax: 26, blurMin: 1.5, blurMax: 4, opMin: 0.07, opMax: 0.15, pxMin: 0.01, pxMax: 0.04 },  // far (very blurry)
    ]

    let id = 0
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        for (let n = 0; n < perCell; n++) {
          /* position within cell, padded */
          const x = col * cellW + 1.5 + rand() * (cellW - 3)
          const y = row * cellH + 1.5 + rand() * (cellH - 3)

          /* enforce minimum distance from all previously placed items */
          const minDist = 4.5 // % units
          const tooClose = placed.some(p => {
            const dx = p.x - x, dy = p.y - y
            return Math.sqrt(dx * dx + dy * dy) < minDist
          })
          if (tooClose) continue

          /* pick a depth layer */
          const layerIdx = n === 0 ? Math.floor(rand() * 2) : 1 + Math.floor(rand() * 2) // mix layers
          const L = layers[layerIdx]

          const key = iconKeys[Math.floor(rand() * iconKeys.length)]
          const size = L.sizeMin + Math.floor(rand() * (L.sizeMax - L.sizeMin))
          const rotation = -90 + rand() * 180 // much wider rotation range
          const glowStrength = 4 + rand() * 10
          const glowOpacity = 0.35 + rand() * 0.45

          placed.push({
            id: id++,
            key,
            size,
            x, y,
            rotation,
            opacity: L.opMin + rand() * (L.opMax - L.opMin),
            parallaxSpeed: L.pxMin + rand() * (L.pxMax - L.pxMin),
            floatDuration: 5 + rand() * 12,
            floatDelay: rand() * -10,
            floatX: 4 + rand() * 14,
            floatY: 5 + rand() * 16,
            blur: L.blurMin + rand() * (L.blurMax - L.blurMin),
            glowStrength,
            glowOpacity,
          })
        }
      }
    }
    return placed
  }, [])

  /* ── inject keyframe styles once ── */
  const keyframeCSS = useMemo(() => {
    return items.map(item => {
      const n = `fd-${item.id}`
      const r = item.rotation
      return `@keyframes ${n}{0%,100%{transform:translate(0,0) rotate(${r}deg)}25%{transform:translate(${item.floatX}px,-${item.floatY}px) rotate(${r + 6}deg)}50%{transform:translate(-${item.floatX * 0.4}px,${item.floatY * 0.7}px) rotate(${r - 4}deg)}75%{transform:translate(${item.floatX * 0.7}px,${item.floatY * 0.3}px) rotate(${r + 2}deg)}}`
    }).join('\n')
  }, [items])

  /* ── scroll-driven parallax (rAF) - throttled ── */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0, rootMargin: '100px' }
    )
    observer.observe(container)

    // Throttled scroll handler for better performance
    const onScroll = throttle(() => {
      if (!isVisible) return
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        const sy = window.scrollY
        items.forEach((item, idx) => {
          const el = itemRefs.current[idx]
          if (el) {
            el.style.transform = `translateY(${-(sy * item.parallaxSpeed)}px)`
          }
        })
        rafRef.current = null
      })
    }, 16) // ~60fps max

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [items, isVisible])

  return (
    <>
      <style>{keyframeCSS}</style>
      <div
        ref={containerRef}
        className="pointer-events-none"
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 1, 
          overflow: 'hidden',
          contentVisibility: isVisible ? 'auto' : 'hidden'
        }}
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <div
            key={item.id}
            ref={el => (itemRefs.current[idx] = el)}
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              willChange: 'transform',
            }}
          >
            <div
              style={{
                opacity: item.opacity,
                filter: [
                  `drop-shadow(0 0 ${item.glowStrength}px rgba(74,111,165,${item.glowOpacity}))`,
                  `drop-shadow(0 0 ${item.glowStrength * 0.4}px rgba(120,160,220,${item.glowOpacity * 0.6}))`,
                  item.blur > 0.1 ? `blur(${item.blur}px)` : '',
                ].filter(Boolean).join(' '),
                animation: `fd-${item.id} ${item.floatDuration}s ease-in-out ${item.floatDelay}s infinite`,
              }}
            >
              {icons[item.key](item.size, '#3a5f95')}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FloatingDecorations
