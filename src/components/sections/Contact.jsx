/**
 * Contact Section Component
 * Light blue theme
 */

import { Button } from '../ui'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiArrowRight } from 'react-icons/hi'

function Contact() {
  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      content: 'bendronedu@gmail.com',
      href: 'mailto:bendronedu@gmail.com',
      color: 'rgba(37, 99, 235, 0.08)',
      iconColor: '#2563EB',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      content: '(929) 669-5022',
      href: 'tel:+19296695022',
      color: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
    },
    {
      icon: HiLocationMarker,
      title: 'Locations',
      content: 'Staten Island, Brooklyn, Remote',
      href: null,
      color: 'rgba(99, 102, 241, 0.08)',
      iconColor: '#6366F1',
    },
    {
      icon: HiClock,
      title: 'Availability',
      content: 'Flexible scheduling',
      href: null,
      color: 'rgba(245, 158, 11, 0.08)',
      iconColor: '#F59E0B',
    },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="frost-box" style={{ width: '78vw', maxWidth: '78vw', marginLeft: '50%', transform: 'translateX(-50%)' }}>
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="eyebrow animate-fade-in-up">Let's Connect</span>
          <h2 className="section-title animate-fade-in-up delay-100">Get In Touch</h2>
          <p className="section-subtitle animate-fade-in-up delay-200">
            Ready to start your learning journey? Reach out today!
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Side - Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-left delay-200">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="p-4 rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(37, 99, 235, 0.08)' }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.color }}>
                    <item.icon className="w-5 h-5" style={{ color: item.iconColor }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5" style={{ color: '#1a2332' }}>{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="transition-colors text-sm"
                        style={{ color: '#6b7280' }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: '#6b7280' }}>{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Side - CTA Card */}
          <div className="p-8 rounded-3xl shadow-lg animate-fade-in-right delay-300" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1a2332' }}>
              Ready to Get Started?
            </h3>
            <p className="mb-5 leading-relaxed text-sm" style={{ color: '#6b7280' }}>
              Fill out our registration form to book tutoring sessions. After submission, 
              I'll contact you by text or email to confirm scheduling.
            </p>
            
            {/* Bilingual Note */}
            <div className="rounded-xl p-4 mb-6" style={{ background: 'rgba(37, 99, 235, 0.03)', border: '1px solid rgba(37, 99, 235, 0.08)' }}>
              <p className="text-sm" style={{ color: '#6b7280' }}>
                <span className="font-semibold" style={{ color: '#2563EB' }}>RU</span> &mdash; <span className="italic">Также доступна поддержка на русском языке.</span>
              </p>
              <p className="text-xs mt-1" style={{ color: '#9ca3af' }}>(Russian language support available)</p>
            </div>
            
            {/* CTA Button */}
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="w-full justify-center"
            >
              Register Now
              <HiArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            {/* Additional Info */}
            <p className="mt-4 text-xs text-center" style={{ color: '#9ca3af' }}>
              Pricing is flexible and based on your situation.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
