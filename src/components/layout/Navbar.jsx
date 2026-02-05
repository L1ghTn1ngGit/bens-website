/**
 * Navbar Component
 * Main navigation bar with responsive mobile menu
 */

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from '../ui/Button'

function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">
              Benjamin's Tutoring
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="text-sm"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-500"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-primary-500 font-medium py-2 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
                className="w-full text-center"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
