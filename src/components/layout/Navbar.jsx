/**
 * Navbar Component
 * Light blue theme
 * Performance optimized with throttled scroll and React.memo
 */

import { useState, useEffect, useRef, memo } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Button from '../ui/Button'
import { useLanguage } from '../../context/LanguageContext'
import translations from '../../translations'

// Throttle helper
const throttle = (func, delay) => {
  let lastCall = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      func(...args)
    }
  }
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [langOpen, setLangOpen] = useState(false)
  const [spinning, setSpinning] = useState(false)
  const { language, selectLanguage, LANGUAGES, LANGUAGE_LABELS } = useLanguage()
  const nav = translations.nav
  const langRef = useRef(null)
  const langMobileRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langRef.current && !langRef.current.contains(e.target) &&
        langMobileRef.current && !langMobileRef.current.contains(e.target)
      ) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLangSelect = (lang) => {
    if (lang !== language) {
      setSpinning(true)
      selectLanguage(lang)
      setTimeout(() => setSpinning(false), 500)
    }
    setLangOpen(false)
  }

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50)
    }, 100)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section detection
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'services', 'contact']
    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const navLinks = [
    { name: nav.home[language], href: '#home' },
    { name: nav.about[language], href: '#about' },
    { name: nav.skills[language], href: '#skills' },
    { name: nav.services[language], href: '#services' },
    { name: nav.contact[language], href: '#contact' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      style={scrolled ? { background: 'rgba(255, 255, 255, 0.72)', backdropFilter: 'blur(28px) saturate(1.3)', WebkitBackdropFilter: 'blur(28px) saturate(1.3)', border: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 8px 40px rgba(0, 94, 184, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9)' } : { background: 'transparent' }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12" style={{ maxWidth: 'min(95%, 100rem)' }}>
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-lg sm:text-xl font-bold transition-colors duration-300" style={{ color: '#1a2332' }}>
              {nav.brand[language]}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-all duration-400 relative group ${isActive ? 'nav-link-active' : ''}`}
                  style={{ color: isActive ? '#005EB8' : '#4b5563' }}
                >
                  {link.name}
                  <span className={`nav-underline absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} style={{ background: '#005EB8' }}></span>
                </a>
              )
            })}
            
            {/* Language Picker (Desktop) */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${spinning ? 'globe-spin' : ''}`}
                style={{ 
                  background: 'rgba(0, 94, 184, 0.08)', 
                  border: '1px solid rgba(0, 94, 184, 0.15)',
                  color: '#005EB8'
                }}
                aria-label="Choose language"
                title="Choose language"
              >
                <svg className="w-4.5 h-4.5" style={{ width: '1.125rem', height: '1.125rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center" style={{ background: '#005EB8', color: '#fff', lineHeight: 1 }}>
                  {LANGUAGE_LABELS[language]}
                </span>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 mt-2 flex items-center gap-1 rounded-full px-1.5 py-1 shadow-lg animate-lang-dropdown"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,94,184,0.13)' }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { handleLangSelect(l) }}
                      className="text-xs font-semibold rounded-full px-2.5 py-1 transition-all duration-200"
                      style={l === language
                        ? { background: '#005EB8', color: '#fff' }
                        : { background: 'transparent', color: '#4b5563' }
                      }
                    >
                      {LANGUAGE_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Button 
              href="https://forms.gle/njc1mkTmSNtNuCa99"
              variant="primary"
              className="text-sm px-5 py-2.5"
            >
              {nav.getStarted[language]}
            </Button>
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative" ref={langMobileRef}>
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${spinning ? 'globe-spin' : ''}`}
                style={{ 
                  background: 'rgba(0, 94, 184, 0.08)', 
                  border: '1px solid rgba(0, 94, 184, 0.15)',
                  color: '#005EB8'
                }}
                aria-label="Choose language"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 text-[8px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center" style={{ background: '#005EB8', color: '#fff', lineHeight: 1 }}>
                  {LANGUAGE_LABELS[language]}
                </span>
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 mt-2 flex items-center gap-1 rounded-full px-1.5 py-1 shadow-lg animate-lang-dropdown"
                  style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', border: '1px solid rgba(0,94,184,0.13)' }}
                >
                  {LANGUAGES.map((l) => (
                    <button
                      key={l}
                      onClick={() => { handleLangSelect(l) }}
                      className="text-xs font-semibold rounded-full px-2.5 py-1 transition-all duration-200"
                      style={l === language
                        ? { background: '#005EB8', color: '#fff' }
                        : { background: 'transparent', color: '#4b5563' }
                      }
                    >
                      {LANGUAGE_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors"
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
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 rounded-b-2xl" style={{ background: 'rgba(255, 255, 255, 0.72)', backdropFilter: 'blur(28px) saturate(1.3)', WebkitBackdropFilter: 'blur(28px) saturate(1.3)', borderTop: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 8px 40px rgba(0, 94, 184, 0.07), inset 0 1px 0 rgba(255, 255, 255, 0.9)' }}>
            <div className="flex flex-col space-y-2 px-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium py-3 px-4 rounded-lg transition-colors duration-300 ${isActive ? 'nav-link-active' : ''}`}
                    style={{ color: isActive ? '#005EB8' : '#4b5563', background: isActive ? 'rgba(0, 94, 184, 0.06)' : 'transparent' }}
                  >
                    {link.name}
                  </a>
                )
              })}
              
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
                className="w-full text-center mt-2"
              >
                {nav.getStarted[language]}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default memo(Navbar)
