/**
 * PerformanceMonitor Component
 * Monitors FPS in real-time and auto-degrades visual effects when performance drops.
 * 
 * Tiers:
 *   HIGH   (>45 fps) — all effects enabled
 *   MEDIUM (25-45 fps) — reduce blobs, disable parallax, simplify decorations
 *   LOW    (<25 fps) — disable blobs, decorations, backdrop-filter, hover animations
 * 
 * Applies CSS classes to <html> so all components can react via CSS.
 * Also exposes a global window.__perfTier for JS components to read.
 */

import { useEffect, useRef } from 'react'

// Performance tiers
const TIER_HIGH = 'perf-high'
const TIER_MEDIUM = 'perf-medium'
const TIER_LOW = 'perf-low'

function PerformanceMonitor() {
  const fpsHistory = useRef([])
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())
  const currentTier = useRef(TIER_HIGH)
  const rafRef = useRef(null)
  const stabilityCounter = useRef(0) // prevent rapid tier switching

  useEffect(() => {
    const html = document.documentElement

    // Set initial tier
    html.classList.add(TIER_HIGH)
    window.__perfTier = 'high'

    // Quick initial check — if device seems low-end, start at medium
    const cores = navigator.hardwareConcurrency || 4
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setTier(TIER_LOW)
    } else if (cores <= 2) {
      setTier(TIER_MEDIUM)
    }

    function setTier(newTier) {
      if (currentTier.current === newTier) return

      html.classList.remove(TIER_HIGH, TIER_MEDIUM, TIER_LOW)
      html.classList.add(newTier)
      currentTier.current = newTier

      // Expose globally for JS components
      window.__perfTier = newTier.replace('perf-', '')
    }

    function measureFps(now) {
      frameCount.current++

      const elapsed = now - lastTime.current
      if (elapsed >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / elapsed)
        frameCount.current = 0
        lastTime.current = now

        // Keep rolling window of last 5 seconds
        fpsHistory.current.push(fps)
        if (fpsHistory.current.length > 5) fpsHistory.current.shift()

        // Average FPS over window
        const avgFps = fpsHistory.current.reduce((a, b) => a + b, 0) / fpsHistory.current.length

        // Only change tier after stable readings (3 consecutive same-direction readings)
        const desiredTier = avgFps > 45 ? TIER_HIGH
          : avgFps > 25 ? TIER_MEDIUM
          : TIER_LOW

        if (desiredTier !== currentTier.current) {
          stabilityCounter.current++
          if (stabilityCounter.current >= 3) {
            // Only downgrade freely; upgrading requires 5 stable readings
            const isUpgrade = (desiredTier === TIER_HIGH && currentTier.current !== TIER_HIGH) ||
              (desiredTier === TIER_MEDIUM && currentTier.current === TIER_LOW)
            
            if (!isUpgrade || stabilityCounter.current >= 5) {
              setTier(desiredTier)
              stabilityCounter.current = 0
            }
          }
        } else {
          stabilityCounter.current = 0
        }
      }

      rafRef.current = requestAnimationFrame(measureFps)
    }

    // Start measuring after initial paint settles
    const startTimeout = setTimeout(() => {
      rafRef.current = requestAnimationFrame(measureFps)
    }, 2000)

    return () => {
      clearTimeout(startTimeout)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      html.classList.remove(TIER_HIGH, TIER_MEDIUM, TIER_LOW)
    }
  }, [])

  // Invisible — no DOM output
  return null
}

export default PerformanceMonitor
