import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext()

const LANGUAGES = ['en', 'ru', 'uk']
const LANGUAGE_LABELS = { en: 'EN', ru: 'RU', uk: 'UK' }

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => {
      const idx = LANGUAGES.indexOf(prev)
      return LANGUAGES[(idx + 1) % LANGUAGES.length]
    })
  }, [])

  const t = useCallback((en, ru, uk) => {
    if (language === 'ru') return ru
    if (language === 'uk') return uk
    return en
  }, [language])

  const selectLanguage = useCallback((lang) => {
    if (LANGUAGES.includes(lang)) setLanguage(lang)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, selectLanguage, t, LANGUAGES, LANGUAGE_LABELS }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
