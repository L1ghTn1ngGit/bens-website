import { createContext, useContext, useState, useCallback } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en')
  }, [])

  const t = useCallback((en, ru) => {
    return language === 'en' ? en : ru
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
