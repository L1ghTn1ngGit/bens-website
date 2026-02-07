/**
 * CustomScrollbar Component
 * Floating pill scrollbar that replaces browser default.
 * - Invisible track
 * - Floating rounded pill that matches site color
 * - Pill fades in/out on hover or scroll
 * - Up/down arrow buttons always visible
 */

import { useEffect, useRef, useState, useCallback, memo } from 'react'
import { HiChevronUp, HiChevronDown } from 'react-icons/hi'

function CustomScrollbar() {
  const pillRef = useRef(null)
  const trackRef = useRef(null)
  const [showPill, setShowPill] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const hideTimeout = useRef(null)
  const dragStart = useRef({ y: 0, scrollTop: 0 })

  const SCROLL_STEP = 200
  const PILL_COLOR = '#005EB8' // darker blue matching site

  const updatePill = useCallback(() => {
    if (!pillRef.current || !trackRef.current) return
    const docHeight = document.documentElement.scrollHeight
    const viewHeight = window.innerHeight
    const scrollTop = window.scrollY
    
    if (docHeight <= viewHeight) {
      pillRef.current.style.display = 'none'
      return
    }
    
    pillRef.current.style.display = 'block'
    const trackHeight = trackRef.current.clientHeight
    const pillHeight = Math.max(40, (viewHeight / docHeight) * trackHeight)
    const maxScroll = docHeight - viewHeight
    const scrollPct = scrollTop / maxScroll
    const pillTop = scrollPct * (trackHeight - pillHeight)
    
    pillRef.current.style.height = `${pillHeight}px`
    pillRef.current.style.transform = `translateY(${pillTop}px)`
  }, [])

  // Show pill and auto-hide after timeout
  const flashPill = useCallback(() => {
    setShowPill(true)
    if (hideTimeout.current) clearTimeout(hideTimeout.current)
    hideTimeout.current = setTimeout(() => {
      if (!isHovering && !isDragging) {
        setShowPill(false)
      }
    }, 1200)
  }, [isHovering, isDragging])

  useEffect(() => {
    const onScroll = () => {
      updatePill()
      flashPill()
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updatePill, { passive: true })
    updatePill()
    
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updatePill)
      if (hideTimeout.current) clearTimeout(hideTimeout.current)
    }
  }, [updatePill, flashPill])

  // Drag handling
  const onPillMouseDown = useCallback((e) => {
    e.preventDefault()
    setIsDragging(true)
    dragStart.current = { y: e.clientY, scrollTop: window.scrollY }

    const onMouseMove = (e) => {
      const trackHeight = trackRef.current?.clientHeight || 1
      const docHeight = document.documentElement.scrollHeight
      const viewHeight = window.innerHeight
      const maxScroll = docHeight - viewHeight
      const dy = e.clientY - dragStart.current.y
      const scrollDelta = (dy / trackHeight) * docHeight
      window.scrollTo(0, Math.max(0, Math.min(maxScroll, dragStart.current.scrollTop + scrollDelta)))
    }

    const onMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [])

  // Track click to jump
  const onTrackClick = useCallback((e) => {
    if (e.target === pillRef.current) return
    const trackRect = trackRef.current.getBoundingClientRect()
    const clickPct = (e.clientY - trackRect.top) / trackRect.height
    const docHeight = document.documentElement.scrollHeight
    const viewHeight = window.innerHeight
    const targetScroll = clickPct * (docHeight - viewHeight)
    window.scrollTo({ top: targetScroll, behavior: 'smooth' })
  }, [])

  const scrollUp = useCallback(() => {
    window.scrollBy({ top: -SCROLL_STEP, behavior: 'smooth' })
  }, [])

  const scrollDown = useCallback(() => {
    window.scrollBy({ top: SCROLL_STEP, behavior: 'smooth' })
  }, [])

  const pillVisible = showPill || isHovering || isDragging

  return (
    <div
      className="fixed right-0 top-0 bottom-0 z-[9999] flex flex-col items-center"
      style={{ width: '18px' }}
      onMouseEnter={() => { setIsHovering(true); setShowPill(true) }}
      onMouseLeave={() => { setIsHovering(false); if (!isDragging) setShowPill(false) }}
    >
      {/* Up arrow */}
      <button
        onClick={scrollUp}
        className="flex items-center justify-center shrink-0 transition-colors duration-200 hover:opacity-80"
        style={{
          width: '18px',
          height: '24px',
          color: PILL_COLOR,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Scroll up"
      >
        <HiChevronUp className="w-4 h-4" />
      </button>

      {/* Track area (invisible) */}
      <div
        ref={trackRef}
        onClick={onTrackClick}
        className="flex-1 relative"
        style={{ width: '18px', cursor: 'pointer' }}
      >
        {/* Pill */}
        <div
          ref={pillRef}
          onMouseDown={onPillMouseDown}
          className="absolute left-1/2 -translate-x-1/2 rounded-full transition-opacity duration-300"
          style={{
            width: '6px',
            background: PILL_COLOR,
            opacity: pillVisible ? 0.7 : 0,
            cursor: isDragging ? 'grabbing' : 'grab',
            minHeight: '40px',
          }}
        />
      </div>

      {/* Down arrow */}
      <button
        onClick={scrollDown}
        className="flex items-center justify-center shrink-0 transition-colors duration-200 hover:opacity-80"
        style={{
          width: '18px',
          height: '24px',
          color: PILL_COLOR,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Scroll down"
      >
        <HiChevronDown className="w-4 h-4" />
      </button>
    </div>
  )
}

export default memo(CustomScrollbar)
