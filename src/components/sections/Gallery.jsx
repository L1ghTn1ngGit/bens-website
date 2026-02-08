/**
 * Gallery Section Component
 * Displays photos of Benjamin Dron in action
 * Performance optimized: lazy loading, React.memo, responsive aspect ratios
 */

import { useState, memo, useMemo, useCallback } from 'react'
import { SectionHeading } from '../ui'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function Gallery() {
  // State for lightbox
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Gallery images - organized by Benjamin's activities (memoized)
  const images = useMemo(() => [
    { src: '/assets/images/gallery-1-md.jpg', srcSet: '/assets/images/gallery-1-sm.jpg 400w, /assets/images/gallery-1-md.jpg 800w, /assets/images/gallery-1-lg.jpg 1200w', alt: 'Benjamin at the United Nations', category: 'UN' },
    { src: '/assets/images/gallery-2-md.jpg', srcSet: '/assets/images/gallery-2-sm.jpg 400w, /assets/images/gallery-2-md.jpg 800w, /assets/images/gallery-2-lg.jpg 1200w', alt: 'UN General Assembly', category: 'UN' },
    { src: '/assets/images/gallery-3-md.jpg', srcSet: '/assets/images/gallery-3-sm.jpg 400w, /assets/images/gallery-3-md.jpg 800w, /assets/images/gallery-3-lg.jpg 1200w', alt: 'Youth Participant at DESA', category: 'UN' },
    { src: '/assets/images/gallery-4-md.jpg', srcSet: '/assets/images/gallery-4-sm.jpg 400w, /assets/images/gallery-4-md.jpg 800w, /assets/images/gallery-4-lg.jpg 1200w', alt: 'Music with clarinet', category: 'Music' },
    { src: '/assets/images/gallery-5-md.jpg', srcSet: '/assets/images/gallery-5-sm.jpg 400w, /assets/images/gallery-5-md.jpg 800w, /assets/images/gallery-5-lg.jpg 1200w', alt: 'Band friends', category: 'Music' },
    { src: '/assets/images/gallery-6-md.jpg', srcSet: '/assets/images/gallery-6-sm.jpg 400w, /assets/images/gallery-6-md.jpg 800w, /assets/images/gallery-6-lg.jpg 1200w', alt: 'Aviation experience', category: 'Aviation' },
    { src: '/assets/images/gallery-7-md.jpg', srcSet: '/assets/images/gallery-7-sm.jpg 400w, /assets/images/gallery-7-md.jpg 800w, /assets/images/gallery-7-lg.jpg 1200w', alt: 'Cockpit view', category: 'Aviation' },
    { src: '/assets/images/gallery-8-md.jpg', srcSet: '/assets/images/gallery-8-sm.jpg 400w, /assets/images/gallery-8-md.jpg 800w, /assets/images/gallery-8-lg.jpg 1200w', alt: 'Professional portrait', category: 'Professional' },
  ], [])

  const openLightbox = useCallback((index) => setSelectedIndex(index), [])
  const closeLightbox = useCallback(() => setSelectedIndex(null), [])
  
  const goToPrev = useCallback((e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])
  
  const goToNext = useCallback((e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  return (
    <section id="gallery" className="section bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: 'min(95%, 112rem)' }}>
        
        {/* Section Heading */}
        <SectionHeading 
          title="Gallery"
          subtitle="A glimpse into my activities, achievements, and passions"
        />
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden cursor-pointer group gallery-card"
            >
              <img 
                src={image.src}
                srcSet={image.srcSet}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                alt={image.alt}
                loading="lazy"
                decoding="async"
                srcSet={`${image.src.replace('.jpg', '-sm.jpg')} 400w, ${image.src.replace('.jpg', '-md.jpg')} 800w, ${image.src.replace('.jpg', '-lg.jpg')} 1200w`}
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                className="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                style={{ contentVisibility: 'auto' }}
              />
              {/* Overlay with category */}
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-colors duration-300 flex items-end justify-start p-3">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <HiX className="w-8 h-8" />
            </button>
            
            {/* Previous Button */}
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full"
              onClick={goToPrev}
              aria-label="Previous"
            >
              <HiChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            {/* Next Button */}
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full"
              onClick={goToNext}
              aria-label="Next"
            >
              <HiChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            
            {/* Image */}
            <img 
              src={images[selectedIndex].src.replace('-md.jpg', '-lg.jpg')}
              srcSet={images[selectedIndex].srcSet}
              sizes="90vw"
              alt={images[selectedIndex].alt}
              loading="eager"
              className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium">{images[selectedIndex].alt}</p>
              <p className="text-sm text-gray-400">{selectedIndex + 1} / {images.length}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default memo(Gallery)
