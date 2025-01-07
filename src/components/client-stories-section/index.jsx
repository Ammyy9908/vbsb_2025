import React from 'react'
import Link from 'next/link'

function ClientStoriesSection() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Tag */}
          <span className="inline-block px-4 py-1 bg-purple-400 text-purple-900 rounded-full text-sm font-medium mb-8">
            Case study
          </span>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-12">
            Access our client
            <br />
            stories
          </h2>

          {/* Button */}
          <Link 
            href="/case-studies" 
            className="inline-block px-8 py-3 bg-red-600 text-white font-medium 
                     hover:bg-red-700 transition-colors duration-300"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClientStoriesSection 