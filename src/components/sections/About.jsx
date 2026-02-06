/**
 * About Section Component
 * Light blue theme — bilingual info about Benjamin with Media images
 * Performance optimized: lazy loading, React.memo
 */

import { memo } from 'react'
import { HiAcademicCap, HiMusicNote, HiBriefcase, HiExternalLink } from 'react-icons/hi'

function About() {
  const highlights = [
    {
      icon: HiAcademicCap,
      title: 'Honor Roll Student',
      titleRu: 'Отличник',
      description: 'Junior at Tottenville High School',
      color: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
    },
    {
      icon: HiBriefcase,
      title: '4+ Years Experience',
      titleRu: '4+ года опыта',
      description: 'Pre-K through High School',
      color: 'rgba(99, 102, 241, 0.08)',
      iconColor: '#6366F1',
    },
    {
      icon: HiMusicNote,
      title: 'Music Instructor',
      titleRu: 'Учитель музыки',
      description: 'Clarinet & Bass Clarinet',
      color: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
    },
  ]

  return (
    <section id="about" className="section relative overflow-hidden" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
      <div className="container-custom relative z-10">
        <div className="frost-box" style={{ width: '78vw', maxWidth: '78vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
        
        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="eyebrow animate-fade-in-up">Get to Know Me</span>
          <h2 className="section-title animate-fade-in-up delay-100">
            About Me
          </h2>
          <p className="animate-fade-in-up delay-100" style={{ color: '#9ca3af' }}>Обо мне</p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          
          {/* Left Side - Image */}
          <div className="relative animate-fade-in-left delay-200 self-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: '4px solid rgba(37, 99, 235, 0.15)' }}>
                <img 
                  src="/assets/images/ben-un-3.jpg" 
                  alt="Benjamin Dron at the United Nations"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover object-center about-image"
                  style={{ aspectRatio: '4/3', contentVisibility: 'auto' }}
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.95)', border: '1px solid rgba(37, 99, 235, 0.12)', backdropFilter: 'blur(12px)' }}>
                <p className="text-3xl font-bold" style={{ color: '#2563EB' }}>4+</p>
                <p className="text-sm" style={{ color: '#6b7280' }}>Years Tutoring</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="animate-fade-in-right delay-300">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1a2332' }}>
              Hi, I'm Benjamin Dron
            </h3>
            
            <p className="mb-6 leading-relaxed" style={{ color: '#4b5563' }}>
              I'm an honor roll junior at Tottenville High School in Staten Island 
              and a passionate tutor with 4+ years of experience helping students from Pre-K through High School.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#2563EB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <p style={{ color: '#4b5563' }}>
                  <span className="font-semibold" style={{ color: '#1a2332' }}>Academic Tutoring:</span> Math, ELA, Science, History (including SHSAT/Regents prep)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#2563EB' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </span>
                <p style={{ color: '#4b5563' }}>
                  <span className="font-semibold" style={{ color: '#1a2332' }}>Music Lessons:</span> Clarinet and Bass Clarinet (beginner & intermediate)
                </p>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px my-6" style={{ background: 'rgba(37, 99, 235, 0.1)' }}></div>
            
            {/* Russian */}
            <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(37, 99, 235, 0.03)', border: '1px solid rgba(37, 99, 235, 0.08)' }}>
              <p className="mb-3 leading-relaxed text-sm italic" style={{ color: '#6b7280' }}>
                <span className="font-semibold not-italic" style={{ color: '#2563EB' }}>RU</span> &mdash; Меня зовут Бенджамин Дрон. Я — ученик с отличной успеваемостью (Honor Roll) 
                в Tottenville High School на Стейтен-Айленде и репетитор с более чем 4-летним опытом.
              </p>
              
              <div className="space-y-1 text-sm">
                <p className="italic" style={{ color: '#9ca3af' }}>
                  <span className="font-medium" style={{ color: '#6b7280' }}>Репетиторство:</span> Математика, английский (ELA), естественные науки, история
                </p>
                <p className="italic" style={{ color: '#9ca3af' }}>
                  <span className="font-medium" style={{ color: '#6b7280' }}>Музыкальные уроки:</span> Кларнет и бас-кларнет
                </p>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(37, 99, 235, 0.08)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2" style={{ background: item.color }}>
                    <item.icon className="w-5 h-5" style={{ color: item.iconColor }} />
                  </div>
                  <h4 className="font-semibold text-xs" style={{ color: '#1a2332' }}>{item.title}</h4>
                  <p className="text-xs mt-0.5" style={{ color: '#9ca3af' }}>{item.titleRu}</p>
                </div>
              ))}
            </div>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium transition-colors duration-300"
              style={{ color: '#2563EB' }}
            >
              <HiExternalLink className="w-5 h-5 mr-2" />
              View LinkedIn Profile
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
