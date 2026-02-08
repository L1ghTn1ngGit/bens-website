/**
 * Custom hook to add subtle glow effect when sections enter viewport
 * The glow fades out over 5 seconds
 */

import { useEffect, useRef } from 'react'

export function useSectionGlow() {
  const ref = useRef(null)
  const hasGlowedRef = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only apply glow once when entering viewport for the first time
        if (entry.isIntersecting && !hasGlowedRef.current) {
          element.classList.add('section-entrance-glow')
          hasGlowedRef.current = true
          
          // Remove the class after animation completes to clean up
          setTimeout(() => {
            element.classList.remove('section-entrance-glow')
          }, 5000)
        }
      },
      {
        threshold: 0.15, // Trigger when 15% of section is visible
        rootMargin: '0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}
