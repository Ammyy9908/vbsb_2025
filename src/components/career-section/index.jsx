import React from 'react'
import Link from 'next/link'

function CareerSection() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div className="bg-purple-800 px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-xl ml-auto mr-8">
            {/* Tag */}
            <span className="inline-block px-4 py-1 bg-purple-300 text-purple-900 rounded-full text-sm font-medium mb-4 md:mb-8">
              CAREERS
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              The Grant
              <br />
              Thornton
              <br />
              difference
            </h2>

            {/* Description */}
            <p className="text-purple-100 text-lg mb-4 md:mb-8">
              A unique combination of culture and opportunities, Grant Thornton is a place where 
              you can grow. Wherever you are in your career, we help you to make a difference every day.
            </p>

            {/* Button */}
            <Link 
              href="/careers" 
              className="inline-block px-6 py-3 border border-white text-white 
                       hover:bg-white hover:text-purple-800 transition-colors duration-300"
            >
              Discover more than you expected
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-xl ml-8">
            <span className="text-sm text-gray-600 mb-2 md:mb-4 block">
              LearninGT by Grant Thornton Bharat
            </span>

            <h2 className="text-3xl font-bold mb-4 md:mb-6">
              Will | Knowledge | Action
            </h2>

            <p className="text-gray-600 mb-4 md:mb-8">
              LearninGT is an exceptional upskilling service offered by Grant Thornton in India. 
              With a strong focus on delivering tangible results, our academy provides a comprehensive 
              range of training programs designed to empower professionals and students alike.
            </p>

            <Link 
              href="/courses" 
              className="inline-block px-6 py-3 bg-red-600 text-white 
                       hover:bg-red-700 transition-colors duration-300"
            >
              Know all about latest courses here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerSection 