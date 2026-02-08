/**
 * Experience Carousel Component
 * Transparent auto-scrolling carousel with organization logos
 * Performance optimized with CSS animations
 */

import { memo } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const experiences = [
  {
    name: 'United Nations',
    role: { en: 'Youth Delegate', fr: 'Délégué Jeunesse', ru: 'Молодёжный Делегат', uk: 'Делегат молоді' },
    logo: '/assets/images/experiences/un-logo.png',
  },
  {
    name: 'CIEE',
    role: { en: 'Global Ambassador', fr: 'Ambassadeur Global', ru: 'Глобальный Посол', uk: 'Глобальний Посол' },
    logo: '/assets/images/experiences/CIEE_Logo.png',
  },
  {
    name: 'FAA',
    role: { en: 'Student Pilot', fr: 'Éлève Pilote', ru: 'Студент-Пилот', uk: 'Студент-пілот' },
    logo: '/assets/images/experiences/Seal_of_the_United_States_Federal_Aviation_Administration.svg',
  },
  {
    name: 'Civil Air Patrol',
    role: { en: 'Cadet', fr: 'Cadet', ru: 'Кадет', uk: 'Кадет' },
    logo: '/assets/images/experiences/Civil_Air_Patrol_2022_logo.svg',
  },
  {
    name: 'CIEE Alumni',
    role: { en: 'Toulouse Program', fr: 'Programme Toulouse', ru: 'Программа Тулузы', uk: 'Програма Тулузи' },
    logo: '/assets/images/experiences/CIEE_Logo.png',
  },
]

function ExperienceCarousel() {
  const { language } = useLanguage()

  // Infinite scroll animation, slower, seamless, no hover stop, responsive
  return (
    <div className="w-full py-6 overflow-hidden relative" style={{ 
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.6)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
    }}>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-80 z-10 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(to right, rgba(237, 241, 247, 1) 0%, rgba(237, 241, 247, 0.98) 25%, rgba(237, 241, 247, 0.9) 50%, rgba(237, 241, 247, 0.6) 75%, rgba(237, 241, 247, 0) 100%)'
        }} 
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 z-10 pointer-events-none" 
        style={{ 
          background: 'linear-gradient(to left, rgba(237, 241, 247, 1) 0%, rgba(237, 241, 247, 0.98) 25%, rgba(237, 241, 247, 0.9) 50%, rgba(237, 241, 247, 0.6) 75%, rgba(237, 241, 247, 0) 100%)'
        }} 
      />

      {/* Infinite scroll track */}
      <div
        className="experience-carousel-track flex items-center gap-8 md:gap-16"
        style={{
          display: 'inline-flex',
          animation: 'carouselScroll 32s linear infinite',
          minWidth: '100%',
        }}
        // No hover pause
      >
        {[...experiences, ...experiences].map((exp, index) => (
          <div
            key={`exp-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-3"
            style={{ width: '140px', maxWidth: '18vw' }}
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center p-2 overflow-hidden"
              style={{ background: 'transparent', border: 'none' }}
            >
              <img
                src={exp.logo}
                alt={exp.name}
                className="w-full h-full"
                loading="lazy"
                style={{
                  filter: 'drop-shadow(0 2px 8px rgba(0, 94, 184, 0.15))',
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold mb-0.5" style={{ color: '#1a2332' }}>{exp.name}</p>
              <p className="text-[10px]" style={{ color: '#6b7280' }}>{exp.role[language]}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Add keyframes for carouselScroll in global CSS */}
    </div>
  )
}

export default memo(ExperienceCarousel)
