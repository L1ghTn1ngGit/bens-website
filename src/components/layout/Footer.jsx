/**
 * Footer Component
 * Website footer with contact info and links
 */

import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">
              Benjamin's Tutoring Services
            </h3>
            <p className="text-gray-400 mb-4">
              Professional academic tutoring and music lessons for students of all ages.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/benjamin-dron-1907a53a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <HiMail className="w-5 h-5 text-primary-400" />
                <a 
                  href="mailto:bendronedu@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  bendronedu@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-primary-400" />
                <a 
                  href="tel:+19296695022"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  (929) 669-5022
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-gray-400">
                  Staten Island, NY (10314)<br />
                  Brooklyn, NY (11229)<br />
                  Remote Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Benjamin's Tutoring Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
