/**
 * InteractiveBlobs Component
 * Soft blue blobs with passive drift + mouse repulsion on light background
 */

import { useEffect, useRef } from 'react'

function InteractiveBlobs({ count = 40, colors, className = '' }) {
  const containerRef = useRef(null)
  const blobsRef = useRef([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animFrameRef = useRef(null)
  const timeRef = useRef(0)

  // Soft blue palette for light background
  const defaultColors = [
    'rgba(37, 99, 235, 0.18)',    // blue
    'rgba(59, 130, 246, 0.15)',   // lighter blue
    'rgba(96, 165, 250, 0.15)',   // sky blue
    'rgba(99, 102, 241, 0.13)',   // indigo
    'rgba(129, 140, 248, 0.13)', // light indigo
    'rgba(37, 99, 235, 0.13)',    // blue subtle
    'rgba(147, 197, 253, 0.20)', // pale blue
    'rgba(59, 130, 246, 0.10)',   // whisper blue
    'rgba(79, 70, 229, 0.10)',    // violet hint
    'rgba(96, 165, 250, 0.18)',   // sky
  ]
  const palette = colors || defaultColors

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const fullH = Math.max(document.documentElement.scrollHeight, rect.height)

    // Initialize blobs distributed across entire page height
    blobsRef.current = Array.from({ length: count }, (_, i) => {
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

    // Create DOM elements
    blobsRef.current.forEach((blob) => {
      const el = document.createElement('div')
      const blur = 8 + Math.random() * 14
      const r1 = 40 + Math.random() * 20
      const r2 = 40 + Math.random() * 20
      const r3 = 40 + Math.random() * 20
      const r4 = 40 + Math.random() * 20
      el.style.cssText = `
        position: absolute;
        width: ${blob.size}px;
        height: ${blob.size}px;
        border-radius: ${r1}% ${r2}% ${r3}% ${r4}%;
        background: radial-gradient(ellipse at 30% 30%, ${blob.color}, transparent 70%);
        left: ${blob.x - blob.size / 2}px;
        top: ${blob.y - blob.size / 2}px;
        pointer-events: none;
        will-change: transform;
        filter: blur(${blur}px);
      `
      container.appendChild(el)
      blob.el = el
    })

    // Mouse tracking
    const handleMouseMove = (e) => {
      const r = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top + window.scrollY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Physics constants
    const repelRadius = 200
    const repelStrength = 5
    const returnStrength = 0.015
    const damping = 0.94

    const animate = (timestamp) => {
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
      cancelAnimationFrame(animFrameRef.current)
      blobsRef.current.forEach(b => {
        if (b.el && b.el.parentNode) b.el.parentNode.removeChild(b.el)
      })
    }
  }, [count])

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      style={{ zIndex: 0 }}
    />
  )
}

export default InteractiveBlobs
