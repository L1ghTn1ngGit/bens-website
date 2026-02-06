/**
 * Gallery Section Component
 * Displays photos of Benjamin in action
 * Performance optimized: lazy loading, React.memo, responsive aspect ratios
 */

import { useState, memo } from 'react'
import { SectionHeading } from '../ui'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

function Gallery() {
  // State for lightbox
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Gallery images - organized by Benjamin's activities
  const images = [
    { src: '/assets/images/gallery-1.jpg', alt: 'Benjamin at the United Nations', category: 'UN' },
    { src: '/assets/images/gallery-2.jpg', alt: 'UN General Assembly', category: 'UN' },
    { src: '/assets/images/gallery-3.jpg', alt: 'Youth Participant at DESA', category: 'UN' },
    { src: '/assets/images/gallery-4.jpg', alt: 'Music with clarinet', category: 'Music' },
    { src: '/assets/images/gallery-5.jpg', alt: 'Band friends', category: 'Music' },
    { src: '/assets/images/gallery-6.jpg', alt: 'Aviation experience', category: 'Aviation' },
    { src: '/assets/images/gallery-7.jpg', alt: 'Cockpit view', category: 'Aviation' },
    { src: '/assets/images/gallery-8.jpg', alt: 'Professional portrait', category: 'Professional' },
  ]

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  
  const goToPrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  
  const goToNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="gallery" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading 
          title="Gallery"
          subtitle="A glimpse into my activities, achievements, and passions"
        />
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden cursor-pointer group gallery-card"
            >
              <img 
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 bg-black/50 hover:bg-black/70"
              onClick={goToPrev}
              aria-label="Previous"
            >
              <HiChevronLeft className="w-8 h-8" />
            </button>
            
            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors z-10 p-2 bg-black/50 hover:bg-black/70"
              onClick={goToNext}
              aria-label="Next"
            >
              <HiChevronRight className="w-8 h-8" />
            </button>
            
            {/* Image */}
            <img 
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              loading="eager"
              className="max-w-full max-h-[85vh] object-contain lightbox-image"
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
