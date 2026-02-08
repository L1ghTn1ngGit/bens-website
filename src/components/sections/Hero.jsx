/**
 * Hero Section Component
 * Light blue theme � crossfade carousel with Media photos
 * Performance optimized: lazy loading, React.memo, responsive images
 */

import { useState, useEffect, memo, useCallback, useMemo } from 'react'
import Button from '../ui/Button'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

const heroImages = [
  { src: '/assets/images/ben-un-2-md.jpg', alt: 'Benjamin at the UN', labelKey: 'benjaminDron', base: '/assets/images/ben-un-2', pos: 'center 55%' },
  { src: '/assets/images/ben-un-main-md.jpg', alt: 'Benjamin Dron at the UN', labelKey: 'unYouthDelegate', base: '/assets/images/ben-un-main', pos: 'center 30%' },
  { src: '/assets/images/ben-activity-3-md.jpg', alt: 'Benjamin aviation experience', labelKey: 'aviation', base: '/assets/images/ben-activity-3', pos: 'center center' },
  { src: '/assets/images/ben-activity-1-md.jpg', alt: 'Benjamin in activities', labelKey: 'un', base: '/assets/images/ben-activity-1', pos: 'center center' },
  { src: '/assets/images/ben-band-md.jpg', alt: 'Benjamin in band', labelKey: 'band', base: '/assets/images/ben-band', pos: 'center 30%' },
]

function Hero() {
  const [currentImg, setCurrentImg] = useState(0)
  const { language } = useLanguage()
  const h = translations.hero

  const nextSlide = useCallback(() => {
    setCurrentImg(prev => (prev + 1) % heroImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentImg(prev => (prev - 1 + heroImages.length) % heroImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section 
      id="home" 
      className="flex items-center relative overflow-hidden pt-16 pb-8"
    >
      <div className="max-w-full w-full px-3 sm:px-6 lg:px-12 py-6 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 items-start justify-center mx-auto" style={{ maxWidth: 'min(95%, 96rem)' }}>
          
          {/* Left Side - Text Content */}
          <div className="order-2 sm:order-1 text-left px-1 sm:px-0 flex flex-col justify-center h-full">
            <span className="eyebrow animate-fade-in-up">
              {h.eyebrow[language]}
            </span>
            
            <h1 className="font-bold mb-4 leading-tight animate-fade-in-up delay-100" style={{ color: '#1a2332', fontSize: 'clamp(2rem, 6vw, 3.9375rem)' }}>
              {h.titleLine1[language]}
              <span className="block hero-text-glow" style={{ color: '#005EB8' }}>{h.titleLine2[language]}</span>
            </h1>
            
            <p className="mb-6 leading-relaxed animate-fade-in-up delay-200" style={{ color: '#4b5563', fontSize: 'clamp(0.9375rem, 1.2vw, 1.125rem)', maxWidth: 'min(100%, clamp(28rem, 40vw, 48rem))' }}>
              {h.description[language]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
              >
                {h.startLearning[language]}
                <HiArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                href="#services"
                variant="secondary"
              >
                {h.viewServices[language]}
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5 mt-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2.5" style={{ color: '#4b5563' }}>
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 94, 184, 0.1)', border: '1px solid rgba(0, 94, 184, 0.2)' }}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#005EB8', width: '1.125rem', height: '1.125rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">{h.location[language]}</span>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: '#4b5563' }}>
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(0, 94, 184, 0.1)', border: '1px solid rgba(0, 94, 184, 0.2)' }}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#005EB8', width: '1.125rem', height: '1.125rem' }}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </span>
                <span className="text-sm font-medium">{h.grades[language]}</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Crossfade Image Carousel */}
          <div className="order-1 sm:order-2 flex justify-center animate-fade-in-right delay-200">
            <div className="relative w-full mx-auto hero-carousel-wrap">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hero-carousel hero-carousel-glow" style={{ border: '5px solid rgba(0, 94, 184, 0.25)' }}>
                {/* 5+ Subjects Badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg animate-float-delayed z-20" style={{ background: 'linear-gradient(135deg, #005EB8, #0074E0)' }}>
                  <p className="text-[10px] sm:text-xs font-bold" style={{ color: '#ffffff' }}>{h.subjects[language]}</p>
                </div>
                
                {/* Stacked images with crossfade */}
                {heroImages.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: idx === currentImg ? 1 : 0 }}
                  >
                    <div className="carousel-label">
                      {h.carouselLabels[image.labelKey][language]}
                    </div>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      srcSet={`${image.base}-sm.jpg 400w, ${image.base}-md.jpg 800w, ${image.base}-lg.jpg 1200w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: image.pos,
                        contentVisibility: 'auto'
                      }}
                    />
                  </div>
                ))}
                
                <button 
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-all z-20"
                  style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#005EB8', border: '1px solid rgba(0, 94, 184, 0.2)' }}
                >
                  <HiChevronLeft className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-all z-20"
                  style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#005EB8', border: '1px solid rgba(0, 94, 184, 0.2)' }}
                >
                  <HiChevronRight className="w-4 h-4" />
                </button>
                
              </div>
              
              {/* Dot navigation � outside below photo */}
              <div className="flex justify-center gap-2 mt-3 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImg ? 'w-8' : 'w-2'
                    }`}
                    style={{ background: idx === currentImg ? '#005EB8' : 'rgba(0, 94, 184, 0.35)' }}
                  />
                ))}
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:-left-4 px-2 py-1.5 sm:px-4 sm:py-3 rounded-xl shadow-lg animate-float z-20" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 94, 184, 0.15)', backdropFilter: 'blur(12px)' }}>
                <p className="text-[10px] sm:text-sm font-medium" style={{ color: '#6b7280' }}>{h.school[language]}</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-[10px] sm:text-sm font-bold" style={{ color: '#1a2332' }}>{h.honor[language]}</p>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="#005EB8" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
