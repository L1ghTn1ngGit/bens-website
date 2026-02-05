/**
 * Services Section Component
 * Displays all tutoring services offered
 */

import { SectionHeading, Card } from '../ui'
import { 
  HiCalculator, 
  HiBookOpen, 
  HiBeaker, 
  HiGlobe, 
  HiMusicNote,
  HiClipboardCheck 
} from 'react-icons/hi'

function Services() {
  // Services data
  const services = [
    {
      icon: HiCalculator,
      title: 'Math Tutoring',
      description: 'From basic arithmetic to algebra and geometry. Building strong foundations for mathematical success.',
      subjects: ['Arithmetic', 'Pre-Algebra', 'Algebra', 'Geometry'],
      color: 'primary',
    },
    {
      icon: HiBookOpen,
      title: 'ELA / English',
      description: 'Reading comprehension, writing skills, grammar, and vocabulary development for all grade levels.',
      subjects: ['Reading', 'Writing', 'Grammar', 'Vocabulary'],
      color: 'secondary',
    },
    {
      icon: HiBeaker,
      title: 'Science',
      description: 'Making science concepts clear and engaging. From life science to physical science and beyond.',
      subjects: ['Life Science', 'Physical Science', 'Earth Science'],
      color: 'accent',
    },
    {
      icon: HiGlobe,
      title: 'History & Social Studies',
      description: 'Understanding historical events, geography, and social concepts through engaging lessons.',
      subjects: ['US History', 'World History', 'Geography'],
      color: 'primary',
    },
    {
      icon: HiClipboardCheck,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for standardized tests with practice materials and strategies.',
      subjects: ['SHSAT Prep', 'Regents Prep', 'Exams'],
      color: 'secondary',
    },
    {
      icon: HiMusicNote,
      title: 'Music Lessons',
      description: 'Learn clarinet or bass clarinet from beginner to intermediate level with patient instruction.',
      subjects: ['Clarinet', 'Bass Clarinet', 'Music Theory'],
      color: 'accent',
    },
  ]

  // Color variants for icons
  const colorVariants = {
    primary: 'bg-primary-100 text-primary-600',
    secondary: 'bg-secondary-100 text-secondary-600',
    accent: 'bg-accent-100 text-accent-600',
  }

  return (
    <section id="services" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading 
          title="My Services"
          subtitle="Comprehensive tutoring services tailored to help students succeed in academics and music"
        />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              {/* Icon */}
              <div className={`w-14 h-14 ${colorVariants[service.color]} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              {/* Subject Tags */}
              <div className="flex flex-wrap gap-2">
                {service.subjects.map((subject, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Grade Levels */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Students of All Levels Welcome
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Pre-K', 'Elementary', 'Middle School', 'High School'].map((level) => (
                <span 
                  key={level}
                  className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium"
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
