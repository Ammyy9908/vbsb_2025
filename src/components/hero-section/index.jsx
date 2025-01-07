import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/cyber-security-bg.jpg')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Transition to ISO/IEC
            <span className="block mt-2">27001:2022</span>
          </h1>
          
          <Link 
            href="/know-more" 
            className="inline-block mt-8 px-8 py-3 bg-white text-black font-medium 
                     hover:bg-gray-100 transition-colors duration-300"
          >
            Know more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection 