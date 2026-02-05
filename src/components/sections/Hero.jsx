/**
 * Hero Section Component
 * The main landing section at the top of the page
 */

import Button from '../ui/Button'
import { HiArrowRight } from 'react-icons/hi'
import { HiPencil, HiBookOpen, HiAcademicCap, HiCalculator, HiLightBulb, HiStar } from 'react-icons/hi'

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 gradient-soft relative overflow-hidden"
    >
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pencil */}
        <div className="absolute top-20 left-[10%] text-primary-200 animate-float opacity-60">
          <HiPencil className="w-8 h-8 md:w-12 md:h-12" />
        </div>
        {/* Book */}
        <div className="absolute top-32 right-[15%] text-secondary-200 animate-float-slow opacity-50">
          <HiBookOpen className="w-10 h-10 md:w-14 md:h-14" />
        </div>
        {/* Graduation Cap */}
        <div className="absolute top-[40%] left-[5%] text-primary-200 animate-float-delayed opacity-40">
          <HiAcademicCap className="w-12 h-12 md:w-16 md:h-16" />
        </div>
        {/* Calculator */}
        <div className="absolute bottom-32 left-[20%] text-accent-200 animate-drift opacity-50">
          <HiCalculator className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        {/* Lightbulb */}
        <div className="absolute top-[60%] right-[8%] text-secondary-200 animate-float opacity-40">
          <HiLightBulb className="w-10 h-10 md:w-14 md:h-14" />
        </div>
        {/* Star */}
        <div className="absolute bottom-20 right-[25%] text-primary-200 animate-float-slow opacity-50">
          <HiStar className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        {/* Extra Pencil */}
        <div className="absolute top-[75%] left-[35%] text-accent-200 animate-float-delayed opacity-30">
          <HiPencil className="w-6 h-6 md:w-10 md:h-10 rotate-45" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-medium mb-6">
              4+ Years Experience
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Unlock Your
              <span className="text-gradient block">Academic Potential</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Personalized tutoring in Math, Science, ELA, and Music. 
              Helping students from Pre-K through High School achieve their goals.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="https://forms.gle/njc1mkTmSNtNuCa99"
                variant="primary"
              >
                Book a Session
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                href="#services"
                variant="secondary"
              >
                View Services
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">4+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">Pre-K</p>
                <p className="text-sm text-gray-500">to High School</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">5+</p>
                <p className="text-sm text-gray-500">Subjects Covered</p>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image Container - Square Design */}
              <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/profile-1.jpg" 
                  alt="Benjamin Dron - Tutor"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary-500 -z-10"></div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-4 shadow-lg">
                <p className="text-sm font-medium text-gray-600">UN Youth Participant</p>
                <p className="text-lg font-bold text-primary-600">Honor Roll Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
