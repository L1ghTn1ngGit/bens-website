/**
 * InteractiveBlobs Component
 * Soft blue blobs with passive drift + mouse repulsion on light background
 * Performance optimized: skips entirely on low-end devices, reduced count on medium tier
 */

import { useEffect, useRef } from 'react'

// Detect device performance tier
const getOptimalBlobCount = (requestedCount) => {
  const cores = navigator.hardwareConcurrency || 4
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobile = window.innerWidth < 768
  const perfTier = window.__perfTier || 'high'
  
  if (prefersReducedMotion || perfTier === 'low') return 0 // completely skip on low
  if (perfTier === 'medium') return Math.floor(requestedCount * 0.2)
  if (isMobile) return Math.floor(requestedCount * 0.25)
  if (cores <= 2) return Math.floor(requestedCount * 0.25)
  if (cores <= 4) return Math.floor(requestedCount * 0.4)
  return requestedCount
}

// Throttle helper
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

function InteractiveBlobs({ count = 40, colors, className = '' }) {
  const containerRef = useRef(null)
  const blobsRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef(null)
  const timeRef = useRef(0)
  const isVisibleRef = useRef(true)
  const isPausedRef = useRef(false)

  // Soft blue palette for light background
  const defaultColors = [
    'rgba(26, 79, 216, 0.18)',    // blue
    'rgba(59, 130, 246, 0.15)',   // lighter blue
    'rgba(96, 165, 250, 0.15)',   // sky blue
    'rgba(99, 102, 241, 0.13)',   // indigo
    'rgba(129, 140, 248, 0.13)', // light indigo
    'rgba(26, 79, 216, 0.13)',    // blue subtle
    'rgba(147, 197, 253, 0.20)', // pale blue
    'rgba(59, 130, 246, 0.10)',   // whisper blue
    'rgba(79, 70, 229, 0.10)',    // violet hint
    'rgba(96, 165, 250, 0.18)',   // sky
  ]
  const palette = colors || defaultColors

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Get optimized blob count based on device capabilities
    const optimalCount = getOptimalBlobCount(count)
    if (optimalCount === 0) return // Skip entirely on low-end devices

    const perfTier = window.__perfTier || 'high'
    const rect = container.getBoundingClientRect()
    const fullH = Math.max(document.documentElement.scrollHeight, rect.height)

    // Initialize blobs distributed across entire page height
    blobsRef.current = Array.from({ length: optimalCount }, (_, i) => {
      const size = 180 + Math.random() * 220
      const x = Math.random() * rect.width
      const y = Math.random() * fullH
      return {
        x,
        y,
        originX: x,
        originY: y,
        vx: 0,
        vy: 0,
        size,
        color: palette[i % palette.length],
        speed: 0.3 + Math.random() * 0.4,
        el: null,
        // Passive drift parameters
        driftFreqX: 0.0003 + Math.random() * 0.0006,
        driftFreqY: 0.0002 + Math.random() * 0.0005,
        driftAmpX: 15 + Math.random() * 35,
        driftAmpY: 10 + Math.random() * 30,
        driftPhase: Math.random() * Math.PI * 2,
      }
    })

    // Create DOM elements — use simpler rendering on medium tier
    blobsRef.current.forEach((blob) => {
      const el = document.createElement('div')
      const r1 = 40 + Math.random() * 20
      const r2 = 40 + Math.random() * 20
      const r3 = 40 + Math.random() * 20
      const r4 = 40 + Math.random() * 20
      // On medium tier: no filter:blur (very expensive without GPU), use larger/softer gradients instead
      const useBlur = perfTier === 'high'
      const blur = useBlur ? (4 + Math.random() * 8) : 0
      const gradientStop = useBlur ? '70%' : '55%' // Softer edge when no blur
      el.style.cssText = `
        position: absolute;
        width: ${blob.size}px;
        height: ${blob.size}px;
        border-radius: ${r1}% ${r2}% ${r3}% ${r4}%;
        background: radial-gradient(ellipse at 30% 30%, ${blob.color}, transparent ${gradientStop});
        left: ${blob.x - blob.size / 2}px;
        top: ${blob.y - blob.size / 2}px;
        pointer-events: none;
        will-change: transform;
        ${blur > 0 ? `filter: blur(${blur}px);` : ''}
      `
      container.appendChild(el)
      blob.el = el
    })

    // Mouse tracking - throttled for performance
    const handleMouseMove = throttle((e) => {
      const r = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top + window.scrollY }
    }, 32) // ~30fps for mouse tracking

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)

    // IntersectionObserver to pause animations when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting
      },
      { threshold: 0 }
    )
    observer.observe(container)

    // Detect reduced motion preference
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleReducedMotionChange = (e) => { isPausedRef.current = e.matches }
    isPausedRef.current = reducedMotionQuery.matches
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange)

    // Physics constants
    const repelRadius = 200
    const repelStrength = 5
    const returnStrength = 0.015
    const damping = 0.94

    const animate = (timestamp) => {
      // Skip animation if paused or not visible
      if (isPausedRef.current || !isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(animate)
        return
      }

      timeRef.current = timestamp || 0
      const t = timeRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      blobsRef.current.forEach(blob => {
        // Passive sinusoidal drift
        const driftX = Math.sin(t * blob.driftFreqX + blob.driftPhase) * blob.driftAmpX
        const driftY = Math.cos(t * blob.driftFreqY + blob.driftPhase * 1.3) * blob.driftAmpY
        const targetX = blob.originX + driftX
        const targetY = blob.originY + driftY

        // Mouse repulsion
        const dx = blob.x - mx
        const dy = blob.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * repelStrength
          blob.vx += (dx / dist) * force
          blob.vy += (dy / dist) * force
        }

        // Spring toward drifting target
        blob.vx += (targetX - blob.x) * returnStrength
        blob.vy += (targetY - blob.y) * returnStrength

        blob.vx *= damping
        blob.vy *= damping

        blob.x += blob.vx * blob.speed
        blob.y += blob.vy * blob.speed

        if (blob.el) {
          blob.el.style.transform = `translate(${blob.x - blob.originX}px, ${blob.y - blob.originY}px)`
        }
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange)
      cancelAnimationFrame(animFrameRef.current)
      blobsRef.current.forEach(b => {
        if (b.el && b.el.parentNode) b.el.parentNode.removeChild(b.el)
      })
    }
  }, [count]) // Only re-run if count prop changes

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}

export default InteractiveBlobs
