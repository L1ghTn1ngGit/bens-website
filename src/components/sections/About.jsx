/**
 * About Section Component
 * Displays information about Benjamin
 */

import { SectionHeading } from '../ui'
import { HiAcademicCap, HiMusicNote, HiBriefcase, HiGlobeAlt } from 'react-icons/hi'

function About() {
  // Highlights/achievements
  const highlights = [
    {
      icon: HiAcademicCap,
      title: 'Honor Roll Student',
      description: 'Junior at Tottenville High School, Staten Island',
    },
    {
      icon: HiGlobeAlt,
      title: 'UN Youth Participant',
      description: 'Active in international conferences and events',
    },
    {
      icon: HiBriefcase,
      title: '4+ Years Experience',
      description: 'Helping students from Pre-K through High School',
    },
    {
      icon: HiMusicNote,
      title: 'Music Instructor',
      description: 'Clarinet and Bass Clarinet lessons',
    },
  ]

  return (
    <section id="about" className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading 
          title="About Me"
          subtitle="Get to know the person behind Benjamin's Tutoring Services"
        />
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image - Cockpit thumbs up */}
              <div className="col-span-2 h-64 md:h-80 overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/about-1.jpg" 
                  alt="Benjamin in the cockpit"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Secondary Images */}
              <div className="h-48 overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/about-2.jpg" 
                  alt="Benjamin with music friends"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="h-48 overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/about-3.jpg" 
                  alt="Benjamin at UN conference"
                  className="w-full h-full object-cover object-right"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hi, I'm Benjamin Dron
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm an honor roll junior at Tottenville High School in Staten Island 
              and a dedicated tutor with over 4 years of experience. Beyond academics, 
              I'm actively involved in international events as a UN Youth Participant 
              and passionate about music and aviation.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              My tutoring approach is personalized and patient. I believe every 
              student learns differently, and I adapt my teaching methods to 
              match each student's unique learning style. Whether it's mastering 
              algebra, preparing for the SHSAT, or learning clarinet, I'm here 
              to guide you every step of the way.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* LinkedIn Link */}
            <a 
              href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 text-primary-600 hover:text-primary-700 font-medium"
            >
              View my LinkedIn Profile
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
