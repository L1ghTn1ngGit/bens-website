/**
 * Hero Section Component
 * Light blue theme — crossfade carousel with Media photos
 */

import { useState, useEffect } from 'react'
import Button from '../ui/Button'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const heroImages = [
  { src: '/assets/images/2_4_1_78B891D3-FBBA-44CC-93F0-CEFFC024ACB8.jpg.6ZC2PJqbUS.jpg', alt: 'Benjamin Dron', label: 'Benjamin Dron' },
  { src: '/assets/images/ben-un-2.jpg', alt: 'Benjamin at the UN', label: 'UN Delegate' },
  { src: '/assets/images/6_1_1_C870747F-2746-4FD3-90CE-0EA192B1B7A2.jpg.bOZQ2ss4-c.jpg', alt: 'Benjamin aviation experience', label: 'Aviation' },
  { src: '/assets/images/ben-activity-1.jpg', alt: 'Benjamin in activities', label: 'Leadership' },
]

function Hero() {
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentImg])

  const nextSlide = () => {
    setCurrentImg(prev => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentImg(prev => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section 
      id="home" 
      className="flex items-center relative overflow-hidden pt-16 pb-8"
    >
      <div className="max-w-full w-full px-2 sm:px-6 lg:px-12 py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center justify-center max-w-7xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1 text-left">
            <span className="eyebrow animate-fade-in-up">
              4+ Years Experience
            </span>
            
            <h1 className="font-bold mb-4 leading-tight animate-fade-in-up delay-100" style={{ color: '#1a2332', fontSize: '3.9375rem' }}>
              Learn with
              <span className="block" style={{ color: '#2563EB' }}>Benjamin</span>
            </h1>
            
            <p className="text-base mb-6 max-w-lg leading-relaxed animate-fade-in-up delay-200" style={{ color: '#4b5563' }}>
              Academic tutoring in Math, ELA, Science, History, and test prep. 
              Plus music lessons in Clarinet & Bass Clarinet for all ages.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300">
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
              >
                Start Learning
                <HiArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                href="#services"
                variant="secondary"
              >
                View Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-5 mt-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2.5" style={{ color: '#4b5563' }}>
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#2563EB', width: '1.125rem', height: '1.125rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm font-medium">Staten Island & Brooklyn</span>
              </div>
              <div className="flex items-center gap-2.5" style={{ color: '#4b5563' }}>
                <span className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#2563EB', width: '1.125rem', height: '1.125rem' }}>
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </span>
                <span className="text-sm font-medium">Pre-K to High School</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Crossfade Image Carousel */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-right delay-200">
            <div className="relative w-full max-w-2xl">
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[28rem] md:h-[36rem]" style={{ border: '3px solid rgba(37, 99, 235, 0.2)' }}>
                {/* Stacked images with crossfade */}
                {heroImages.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: idx === currentImg ? 1 : 0 }}
                  >
                    <div className="carousel-label">
                      {image.label}
                    </div>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      style={idx === 0 || idx === 1 ? { objectPosition: 'center 35%' } : {}}
                    />
                  </div>
                ))}
                
                <button 
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-all z-20"
                  style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#2563EB', border: '1px solid rgba(37, 99, 235, 0.2)' }}
                >
                  <HiChevronLeft className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-all z-20"
                  style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#2563EB', border: '1px solid rgba(37, 99, 235, 0.2)' }}
                >
                  <HiChevronRight className="w-4 h-4" />
                </button>
                
              </div>
              
              {/* Dot navigation — outside below photo */}
              <div className="flex justify-center gap-2 mt-3 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImg(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImg ? 'w-8' : 'w-2'
                    }`}
                    style={{ background: idx === currentImg ? '#2563EB' : 'rgba(37, 99, 235, 0.35)' }}
                  />
                ))}
              </div>
              
              {/* Floating Info Cards */}
              <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl shadow-lg animate-float z-20" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(37, 99, 235, 0.15)', backdropFilter: 'blur(12px)' }}>
                <p className="text-sm font-medium" style={{ color: '#6b7280' }}>Tottenville High School</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold" style={{ color: '#1a2332' }}>Honor Roll</p>
                  <svg className="w-4 h-4" fill="#2563EB" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full shadow-lg animate-float-delayed z-20" style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}>
                <p className="text-xs font-bold" style={{ color: '#ffffff' }}>5+ Subjects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
