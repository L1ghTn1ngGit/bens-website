/**
 * Services Section Component
 * Warm ink wash theme with service cards
 * Performance optimized with React.memo
 */

import { memo } from 'react'
import { 
  HiCalculator, 
  HiBookOpen, 
  HiBeaker, 
  HiGlobe, 
  HiMusicNote,
  HiClipboardCheck,
  HiArrowRight
} from 'react-icons/hi'
import Button from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

function Services() {
  const { language } = useLanguage()
  const sv = translations.services

  const icons = [HiCalculator, HiBookOpen, HiBeaker, HiGlobe, HiClipboardCheck, HiMusicNote]
  const colors = [
    { bg: 'rgba(26, 79, 216, 0.08)', icon: '#1a4fd8' },
    { bg: 'rgba(99, 102, 241, 0.08)', icon: '#6366F1' },
    { bg: 'rgba(16, 185, 129, 0.08)', icon: '#10B981' },
    { bg: 'rgba(245, 158, 11, 0.08)', icon: '#F59E0B' },
    { bg: 'rgba(239, 68, 68, 0.08)', icon: '#EF4444' },
    { bg: 'rgba(168, 85, 247, 0.08)', icon: '#A855F7' },
  ]

  const services = sv.items.map((item, i) => ({
    icon: icons[i],
    title: item[language].title,
    description: item[language].description,
    subjects: item[language].subjects,
    color: colors[i].bg,
    iconColor: colors[i].icon,
  }))

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="frost-box frost-box-responsive">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="eyebrow animate-fade-in-up">{sv.eyebrow[language]}</span>
          <h2 className="section-title animate-fade-in-up delay-100">{sv.title[language]}</h2>
          <p className="section-subtitle animate-fade-in-up delay-200">
            {sv.subtitle[language]}
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card h-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: service.color }}>
                <service.icon className="w-6 h-6" style={{ color: service.iconColor }} />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a2332' }}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
                {service.description}
              </p>
              
              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2">
                {service.subjects.map((subject, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-full font-medium"
                    style={{ background: 'rgba(26, 79, 216, 0.06)', color: '#4b5563', border: '1px solid rgba(26, 79, 216, 0.1)' }}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Grade Levels + CTA */}
        <div className="mt-10 sm:mt-16 text-center animate-fade-in-up delay-500">
          <div className="inline-block p-5 sm:p-8 rounded-3xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(26, 79, 216, 0.1)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1a2332' }}>
              {sv.allLevels[language]}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {sv.levels[language].map((level) => (
                <span 
                  key={level}
                  className="px-5 py-2 font-semibold rounded-full text-sm"
                  style={{ background: 'rgba(26, 79, 216, 0.08)', color: '#1a4fd8', border: '1px solid rgba(26, 79, 216, 0.15)' }}
                >
                  {level}
                </span>
              ))}
            </div>
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99" 
              variant="primary"
              className="mt-2"
            >
              {sv.bookSession[language]}
              <HiArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Services)
