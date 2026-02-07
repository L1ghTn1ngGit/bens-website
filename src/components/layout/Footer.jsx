/**
 * Footer Component
 * Light blue theme
 * Performance optimized with React.memo
 */

import { memo } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { language } = useLanguage()
  const f = translations.footer

  const quickLinks = [
    { name: f.home[language], href: '#home' },
    { name: f.aboutMe[language], href: '#about' },
    { name: f.skillsLink[language], href: '#skills' },
    { name: f.servicesLink[language], href: '#services' },
    { name: f.contactLink[language], href: '#contact' },
  ]

  return (
    <footer style={{ background: 'rgba(248, 250, 252, 0.95)', borderTop: '1px solid rgba(0, 94, 184, 0.08)' }}>
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#1a2332' }}>
              {f.brand[language]}
            </h3>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
              {f.description[language]}
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(0, 94, 184, 0.06)', color: '#005EB8', border: '1px solid rgba(0, 94, 184, 0.1)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#1a2332' }}>{f.quickLinks[language]}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="transition-colors duration-300 text-sm hover:text-blue-600"
                    style={{ color: '#6b7280' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#1a2332' }}>{f.contactInfo[language]}</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 94, 184, 0.08)' }}>
                  <HiMail className="w-4 h-4" style={{ color: '#005EB8' }} />
                </div>
                <a 
                  href="mailto:bendronedu@gmail.com"
                  className="transition-colors text-sm"
                  style={{ color: '#6b7280' }}
                >
                  bendronedu@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(16, 185, 129, 0.08)' }}>
                  <HiPhone className="w-4 h-4" style={{ color: '#10B981' }} />
                </div>
                <a 
                  href="tel:+19296695022"
                  className="transition-colors text-sm"
                  style={{ color: '#6b7280' }}
                >
                  (929) 669-5022
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0, 116, 224, 0.08)' }}>
                  <HiLocationMarker className="w-4 h-4" style={{ color: '#0074E0' }} />
                </div>
                <span className="text-sm" style={{ color: '#6b7280' }}>
                  {f.location[language]}<br />
                  {f.remote[language]}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 text-center" style={{ borderTop: '1px solid rgba(0, 94, 184, 0.06)' }}>
          <p className="text-sm" style={{ color: '#9ca3af' }}>&copy; {currentYear} {f.copyright[language]}</p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
