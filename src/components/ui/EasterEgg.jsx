import { useEffect, useState } from 'react'

const SECRET_SEQUENCE = '^&^&ambrose'

export default function EasterEgg() {
  const [active, setActive] = useState(false)
  
  useEffect(() => {
    let buffer = ''
    
    const handleKeyDown = (e) => {
      // Get the character typed
      const char = e.key.length === 1 ? e.key.toLowerCase() : ''
      if (!char) return
      
      // For shift+number, e.key gives us the symbol directly (^, &, etc.)
      // For letters, we want lowercase
      const actualChar = e.key.length === 1 ? e.key : ''
      if (!actualChar) return
      
      buffer += actualChar.toLowerCase() === actualChar ? actualChar : actualChar
      
      // Keep buffer trimmed to sequence length
      if (buffer.length > SECRET_SEQUENCE.length) {
        buffer = buffer.slice(-SECRET_SEQUENCE.length)
      }
      
      // Check for match
      if (buffer === SECRET_SEQUENCE) {
        setActive(true)
        buffer = ''
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  useEffect(() => {
    if (!active) return
    
    // Replace all images with ambrose
    const images = document.querySelectorAll('img')
    const originalSrcs = new Map()
    
    images.forEach(img => {
      originalSrcs.set(img, {
        src: img.src,
        srcset: img.srcset
      })
      img.src = '/assets/images/ambrose.png'
      img.srcset = ''
      img.style.objectFit = 'cover'
    })
    
    // Also handle picture elements
    const sources = document.querySelectorAll('picture source')
    const originalSourceSrcsets = new Map()
    sources.forEach(source => {
      originalSourceSrcsets.set(source, source.srcset)
      source.srcset = '/assets/images/ambrose.png'
    })
    
    // Revert after 5 seconds
    const timer = setTimeout(() => {
      images.forEach(img => {
        const original = originalSrcs.get(img)
        if (original) {
          img.src = original.src
          img.srcset = original.srcset
        }
      })
      sources.forEach(source => {
        const original = originalSourceSrcsets.get(source)
        if (original) {
          source.srcset = original
        }
      })
      setActive(false)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [active])
  
  return null
}
