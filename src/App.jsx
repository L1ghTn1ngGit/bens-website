import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import InteractiveBlobs from './components/ui/InteractiveBlobs'
import FloatingDecorations from './components/ui/FloatingDecorations'
import PerformanceMonitor from './components/ui/PerformanceMonitor'
import CustomScrollbar from './components/ui/CustomScrollbar'
import EasterEgg from './components/ui/EasterEgg'
import ExperienceCarousel from './components/ui/ExperienceCarousel'

function App() {
  // Ensure page starts at top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#edf1f7' }}>
      {/* Performance auto-optimizer */}
      <PerformanceMonitor />
      
      {/* Custom scrollbar */}
      <CustomScrollbar />
      
      {/* Secret Easter egg */}
      <EasterEgg />
      
      {/* Soft blue animated blob background */}
      <InteractiveBlobs count={25} />
      
      {/* Floating study material decorations on sides */}
      <FloatingDecorations />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <ExperienceCarousel />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )
}

export default App
