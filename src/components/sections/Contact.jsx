/**
 * Contact Section Component
 * Light blue theme
 * Performance optimized with React.memo
 */

import { memo } from 'react'
import { Button } from '../ui'
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiArrowRight } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

function Contact() {
  const { language } = useLanguage()
  const c = translations.contact

  const contactInfo = [
    {
      icon: HiMail,
      title: c.email[language],
      content: 'bendronedu@gmail.com',
      href: 'mailto:bendronedu@gmail.com',
      color: 'rgba(0, 94, 184, 0.08)',
      iconColor: '#005EB8',
    },
    {
      icon: HiPhone,
      title: c.phone[language],
      content: '(929) 669-5022',
      href: 'tel:+19296695022',
      color: 'rgba(16, 185, 129, 0.08)',
      iconColor: '#10B981',
    },
    {
      icon: HiLocationMarker,
      title: c.locations[language],
      content: c.locationsContent[language],
      href: null,
      color: 'rgba(0, 116, 224, 0.08)',
      iconColor: '#0074E0',
    },
    {
      icon: HiClock,
      title: c.availability[language],
      content: c.availabilityContent[language],
      href: null,
      color: 'rgba(245, 158, 11, 0.08)',
      iconColor: '#F59E0B',
    },
  ]

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="frost-box frost-box-responsive">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <span className="eyebrow animate-fade-in-up">{c.eyebrow[language]}</span>
          <h2 className="section-title animate-fade-in-up delay-100">{c.title[language]}</h2>
          <p className="section-subtitle animate-fade-in-up delay-200">
            {c.subtitle[language]}
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-start">
          
          {/* Left Side - Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-left delay-200">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="p-4 rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                style={{ background: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(0, 94, 184, 0.08)' }}
              >
                <div className="flex items-start space-x-4 min-w-0">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: item.color }}>
                    <item.icon className="w-5 h-5" style={{ color: item.iconColor }} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm mb-0.5" style={{ color: '#1a2332' }}>{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="transition-colors text-sm break-all leading-snug"
                        style={{ color: '#6b7280' }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm break-words leading-snug" style={{ color: '#6b7280' }}>{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Side - CTA Card */}
          <div className="p-8 rounded-3xl shadow-lg animate-fade-in-right delay-300" style={{ background: 'rgba(255, 255, 255, 0.8)', border: '1px solid rgba(0, 94, 184, 0.1)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1a2332' }}>
              {c.readyTitle[language]}
            </h3>
            <p className="mb-5 leading-relaxed text-sm" style={{ color: '#6b7280' }}>
              {c.readyDesc[language]}
            </p>
            
            {/* Language Support */}
            <div className="rounded-xl p-4 mb-6 flex flex-wrap gap-2" style={{ background: 'rgba(0, 94, 184, 0.03)', border: '1px solid rgba(0, 94, 184, 0.08)' }}>
              {['en', 'ru', 'uk'].filter(l => l !== language).map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1"
                  style={{ background: 'rgba(0, 94, 184, 0.08)', color: '#005EB8' }}
                >
                  <span>{l === 'en' ? '🇺🇸' : l === 'ru' ? '🇷🇺' : '🇺🇦'}</span>
                  {c.langSupport[l][language]} — {c.langAvailable[language]}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="w-full justify-center"
            >
              {c.registerNow[language]}
              <HiArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            {/* Additional Info */}
            <p className="mt-4 text-xs text-center" style={{ color: '#9ca3af' }}>
              {c.pricing[language]}
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Contact)
