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

function Services() {
  const services = [
    {
      icon: HiCalculator,
      title: 'Math Tutoring',
      description: 'From basic arithmetic to algebra and geometry. Building strong foundations for success.',
      subjects: ['Arithmetic', 'Pre-Algebra', 'Algebra', 'Geometry'],
      color: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
    },
    {
      icon: HiBookOpen,
      title: 'ELA / English',
      description: 'Reading comprehension, writing skills, grammar, and vocabulary for all grade levels.',
      subjects: ['Reading', 'Writing', 'Grammar', 'Vocabulary'],
      color: 'rgba(99, 102, 241, 0.08)',
      iconColor: '#6366F1',
    },
    {
      icon: HiBeaker,
      title: 'Science',
      description: 'Making science concepts clear and engaging with hands-on learning approaches.',
      subjects: ['Life Science', 'Physical Science', 'Earth Science'],
      color: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
    },
    {
      icon: HiGlobe,
      title: 'History & Social Studies',
      description: 'Understanding historical events and social concepts through engaging lessons.',
      subjects: ['US History', 'World History', 'Geography'],
      color: 'rgba(245, 158, 11, 0.08)',
      iconColor: '#F59E0B',
    },
    {
      icon: HiClipboardCheck,
      title: 'Test Preparation',
      description: 'Comprehensive prep for standardized tests with proven strategies.',
      subjects: ['SHSAT Prep', 'Regents Prep', 'Exams'],
      color: 'rgba(239, 68, 68, 0.08)',
      iconColor: '#EF4444',
    },
    {
      icon: HiMusicNote,
      title: 'Music Lessons',
      description: 'Learn clarinet or bass clarinet with patient, step-by-step instruction.',
      subjects: ['Clarinet', 'Bass Clarinet', 'Music Theory'],
      color: 'rgba(168, 85, 247, 0.08)',
      iconColor: '#A855F7',
    },
  ]

  return (
    <section id="services" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="frost-box" style={{ width: '78vw', maxWidth: '78vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="eyebrow animate-fade-in-up">What I Offer</span>
          <h2 className="section-title animate-fade-in-up delay-100">My Services</h2>
          <p className="section-subtitle animate-fade-in-up delay-200">
            Comprehensive tutoring services tailored to help students succeed
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    style={{ background: 'rgba(37, 99, 235, 0.06)', color: '#4b5563', border: '1px solid rgba(37, 99, 235, 0.1)' }}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Grade Levels + CTA */}
        <div className="mt-16 text-center animate-fade-in-up delay-500">
          <div className="inline-block p-8 rounded-3xl shadow-lg" style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#1a2332' }}>
              Students of All Levels Welcome
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Pre-K', 'Elementary', 'Middle School', 'High School'].map((level) => (
                <span 
                  key={level}
                  className="px-5 py-2 font-semibold rounded-full text-sm"
                  style={{ background: 'rgba(37, 99, 235, 0.08)', color: '#2563EB', border: '1px solid rgba(37, 99, 235, 0.15)' }}
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
              Book a Session
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
