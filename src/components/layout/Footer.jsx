/**
 * Footer Component
 * Light blue theme
 * Performance optimized with React.memo
 */

import { memo } from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'rgba(248, 250, 252, 0.95)', borderTop: '1px solid rgba(37, 99, 235, 0.08)' }}>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#1a2332' }}>
              Benjamin's Tutoring
            </h3>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#6b7280' }}>
              Professional academic tutoring and music lessons for students of all ages.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{ background: 'rgba(37, 99, 235, 0.06)', color: '#2563EB', border: '1px solid rgba(37, 99, 235, 0.1)' }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: '#1a2332' }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Me', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
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
            <h4 className="font-semibold mb-4" style={{ color: '#1a2332' }}>Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(37, 99, 235, 0.08)' }}>
                  <HiMail className="w-4 h-4" style={{ color: '#2563EB' }} />
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(99, 102, 241, 0.08)' }}>
                  <HiLocationMarker className="w-4 h-4" style={{ color: '#6366F1' }} />
                </div>
                <span className="text-sm" style={{ color: '#6b7280' }}>
                  Staten Island & Brooklyn, NY<br />
                  Remote Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 text-center" style={{ borderTop: '1px solid rgba(37, 99, 235, 0.06)' }}>
          <p className="text-sm" style={{ color: '#9ca3af' }}>&copy; {currentYear} Benjamin's Tutoring Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
