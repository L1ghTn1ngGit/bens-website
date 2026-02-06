/**
 * Navbar Component
 * Light blue theme
 */

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from '../ui/Button'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={scrolled ? { background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: 'none', borderBottom: '1px solid rgba(37, 99, 235, 0.1)', boxShadow: '0 8px 40px rgba(37, 99, 235, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)' } : { background: 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold transition-colors duration-300" style={{ color: '#1a2332' }}>
              Benjamin's Tutoring
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium transition-all duration-300 relative group"
                style={{ color: '#4b5563' }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full" style={{ background: '#2563EB' }}></span>
              </a>
            ))}
            
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="text-sm px-5 py-2.5"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: '#1a2332' }}
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
          <div className="md:hidden py-4 rounded-b-2xl" style={{ background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderTop: '1px solid rgba(37, 99, 235, 0.1)', boxShadow: '0 8px 40px rgba(37, 99, 235, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)' }}>
            <div className="flex flex-col space-y-2 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                  style={{ color: '#4b5563' }}
                >
                  {link.name}
                </a>
              ))}
              
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
                className="w-full text-center mt-2"
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
