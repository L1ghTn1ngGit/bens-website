/**
 * Contact Section Component
 * Contact information and form link
 */

import { SectionHeading, Button, Card } from '../ui'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPencil, HiBookOpen, HiAcademicCap } from 'react-icons/hi'

function Contact() {
  // Contact info items
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      content: 'bendronedu@gmail.com',
      href: 'mailto:bendronedu@gmail.com',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      content: '(929) 669-5022',
      href: 'tel:+19296695022',
    },
    {
      icon: HiLocationMarker,
      title: 'Locations',
      content: 'Staten Island (10314), Brooklyn (11229), Remote',
      href: null,
    },
    {
      icon: HiClock,
      title: 'Availability',
      content: 'Flexible scheduling available',
      href: null,
    },
  ]

  return (
    <section id="contact" className="section bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 relative overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-[10%] text-white/10 animate-float">
          <HiPencil className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-[10%] text-white/10 animate-float-slow">
          <HiBookOpen className="w-20 h-20" />
        </div>
        <div className="absolute top-1/2 right-[5%] text-white/5 animate-drift">
          <HiAcademicCap className="w-24 h-24" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading - White text for dark background */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready to start your learning journey? Fill out the contact form or reach out directly!
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Side - Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-white/20" hoverable={false}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors text-sm"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white/80 text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Right Side - CTA Card */}
          <Card className="bg-white text-center lg:text-left" hoverable={false}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out our registration form to book tutoring sessions with Benjamin's 
              Tutoring Services. After submission, I'll contact you by text or email 
              to confirm scheduling. Pricing is flexible and based on your situation.
            </p>
            
            {/* Bilingual Note */}
            <p className="text-gray-500 text-sm mb-6 italic">
              Также доступна поддержка на русском языке. 
              (Russian language support available)
            </p>
            
            {/* CTA Button */}
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Register Now
            </Button>
            
            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Note:</strong> Tutoring sessions are priced based on situation. 
                Payment details will be discussed after scheduling is confirmed.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
