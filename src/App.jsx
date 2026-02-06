import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import InteractiveBlobs from './components/ui/InteractiveBlobs'
import FloatingDecorations from './components/ui/FloatingDecorations'

function App() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#edf1f7' }}>
      {/* Soft blue animated blob background */}
      <InteractiveBlobs count={40} />
      
      {/* Floating study material decorations on sides */}
      <FloatingDecorations />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
