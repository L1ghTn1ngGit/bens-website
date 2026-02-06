/**
 * Skills Section Component
 * Card carousel showcasing Benjamin's tutoring skills - SVG icons only
 * Performance optimized with React.memo
 */

import { useState, useEffect, useRef, memo } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

/* SVG Icon components */
const MathIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

const WritingIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)

const ScienceIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TargetIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const MusicIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
)

const skills = [
  {
    id: 1,
    title: 'Mathematics',
    Icon: MathIcon,
    description: 'From basic arithmetic to algebra, geometry, and pre-calculus. Building strong foundations for academic success.',
    color: 'rgba(37, 99, 235, 0.08)',
    iconColor: '#2563EB',
  },
  {
    id: 2,
    title: 'English & ELA',
    Icon: WritingIcon,
    description: 'Reading comprehension, writing skills, grammar, and vocabulary development for all grade levels.',
    color: 'rgba(99, 102, 241, 0.08)',
    iconColor: '#6366F1',
  },
  {
    id: 3,
    title: 'Science',
    Icon: ScienceIcon,
    description: 'General science, biology, chemistry fundamentals. Making complex concepts easy to understand.',
    color: 'rgba(16, 185, 129, 0.08)',
    iconColor: '#10B981',
  },
  {
    id: 4,
    title: 'History & Social Studies',
    Icon: GlobeIcon,
    description: 'US History, World History, and Social Studies. Engaging lessons that bring history to life.',
    color: 'rgba(245, 158, 11, 0.08)',
    iconColor: '#F59E0B',
  },
  {
    id: 5,
    title: 'Test Preparation',
    Icon: TargetIcon,
    description: 'SHSAT prep, Regents exams, and standardized test strategies to boost your scores.',
    color: 'rgba(239, 68, 68, 0.08)',
    iconColor: '#EF4444',
  },
  {
    id: 6,
    title: 'Music Lessons',
    Icon: MusicIcon,
    description: 'Clarinet and Bass Clarinet instruction for beginner and intermediate students.',
    color: 'rgba(168, 85, 247, 0.08)',
    iconColor: '#A855F7',
  },
]

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const trackRef = useRef(null)
  const containerRef = useRef(null)
  
  // Number of visible cards (responsive)
  const getVisibleCards = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }
  
  const [visibleCards, setVisibleCards] = useState(3)
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const maxIndex = Math.max(0, skills.length - visibleCards)
  
  // Auto-scroll
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])
  
  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1))
  }
  
  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1))
  }
  
  const goToSlide = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="frost-box" style={{ width: '78vw', maxWidth: '78vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">Skills & Subjects</h2>
          <p className="section-subtitle">
            Comprehensive tutoring across multiple subjects, tailored to each student's needs
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative px-8 md:px-12" ref={containerRef}>
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="carousel-btn carousel-btn--prev"
            aria-label="Previous"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={goToNext}
            className="carousel-btn carousel-btn--next"
            aria-label="Next"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
          
          {/* Cards Track */}
          <div className="overflow-hidden">
            <div 
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {skills.map((skill, index) => (
                <div 
                  key={skill.id}
                  className="skill-card"
                  style={{ 
                    width: `calc(${100 / visibleCards}% - 1rem)`,
                    opacity: index >= currentIndex && index < currentIndex + visibleCards ? 1 : 0.5,
                  }}
                >
                  <div className="skill-icon" style={{ background: skill.color }}>
                    <span style={{ color: skill.iconColor }}><skill.Icon /></span>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#1a2332' }}>{skill.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2" style={{ marginTop: '5.5rem', opacity: 0.85 }}>
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8' : ''
                }`}
                style={{ background: index === currentIndex ? '#2563EB' : 'rgba(37, 99, 235, 0.2)' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Skills)
