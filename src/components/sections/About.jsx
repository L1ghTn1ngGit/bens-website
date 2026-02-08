/**
 * About Section Component
 * Light blue theme — bilingual info about Benjamin Dron with Media images
 * Performance optimized: lazy loading, React.memo
 */

import { memo } from 'react'
import { HiAcademicCap, HiMusicNote, HiBriefcase, HiExternalLink } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'
import { useSectionGlow } from '../../hooks/useSectionGlow'

function About() {
  const { language } = useLanguage()
  const a = translations.about
  const glowRef = useSectionGlow()

  const highlights = [
    {
      icon: HiAcademicCap,
      title: a.highlights.honorRoll[language],
      description: a.highlights.honorDesc[language],
      color: 'rgba(0, 94, 184, 0.08)',
      iconColor: '#005EB8',
    },
    {
      icon: HiBriefcase,
      title: a.highlights.experience[language],
      description: a.highlights.expDesc[language],
      color: 'rgba(0, 116, 224, 0.08)',
      iconColor: '#0074E0',
    },
    {
      icon: HiMusicNote,
      title: a.highlights.music[language],
      description: a.highlights.musicDesc[language],
      color: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
    },
  ]

  return (
    <section id="about" className="section relative overflow-hidden" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
      <div className="container-custom relative z-10">
        <div ref={glowRef} className="frost-box frost-box-responsive">
        
        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="eyebrow animate-fade-in-up">{a.eyebrow[language]}</span>
          <h2 className="section-title animate-fade-in-up delay-100">
            {a.title[language]}
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Side - Image */}
          <div className="relative animate-fade-in-left delay-200 self-stretch flex items-center">
            <div className="relative w-full h-full">
              <div className="rounded-3xl overflow-hidden shadow-xl h-full" style={{ border: '4px solid rgba(0, 94, 184, 0.15)' }}>
                <img 
                  src="/assets/images/ben-un-3-md.jpg" 
                  alt="Benjamin Dron at the United Nations"
                  loading="lazy"
                  decoding="async"
                  srcSet="/assets/images/ben-un-3-sm.jpg 400w, /assets/images/ben-un-3-md.jpg 800w, /assets/images/ben-un-3-lg.jpg 1200w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  className="w-full h-full object-cover about-image"
                  style={{ minHeight: '20rem', contentVisibility: 'auto', objectPosition: 'center 35%' }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(0, 94, 184, 0.12)', backdropFilter: 'blur(12px)' }}>
                <p className="text-3xl font-bold" style={{ color: '#005EB8' }}>4+</p>
                <p className="text-sm" style={{ color: '#6b7280' }}>{a.yearsTutoring[language]}</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="animate-fade-in-right delay-300">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a2332' }}>
              {a.name[language]}
            </h3>
            
            <p className="mb-6 leading-relaxed" style={{ color: '#4b5563' }}>
              {a.bio[language]}
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 94, 184, 0.08)' }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#005EB8' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <p style={{ color: '#4b5563' }}>
                  <span className="font-semibold" style={{ color: '#1a2332' }}>{a.academicTutoring[language]}</span> {a.academicDesc[language]}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(0, 94, 184, 0.08)' }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#005EB8' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </span>
                <p style={{ color: '#4b5563' }}>
                  <span className="font-semibold" style={{ color: '#1a2332' }}>{a.musicLessons[language]}</span> {a.musicDesc[language]}
                </p>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px my-6" style={{ background: 'rgba(0, 94, 184, 0.1)' }}></div>
            
            {/* Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-2 sm:p-3 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(0, 94, 184, 0.08)' }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mx-auto mb-1.5 sm:mb-2" style={{ background: item.color }}>
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: item.iconColor }} />
                  </div>
                  <h4 className="font-semibold text-[10px] sm:text-xs" style={{ color: '#1a2332' }}>{item.title}</h4>
                  <p className="text-[10px] sm:text-xs mt-0.5" style={{ color: '#9ca3af' }}>{item.description}</p>
                </div>
              ))}
            </div>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium transition-colors duration-300"
              style={{ color: '#005EB8' }}
            >
              <HiExternalLink className="w-5 h-5 mr-2" />
              {a.viewLinkedIn[language]}
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
