import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

function MobileNav() {
  const router = useRouter()

  const isActive = (path) => router.pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden z-30">
      {/* Glassmorphism effect container */}
      <div className="backdrop-blur-md bg-white/70 border-t border-gray-200 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {/* Home */}
            <Link 
              href="/" 
              className={`flex flex-col items-center ${
                isActive('/') ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              <span className="text-xs mt-1">Home</span>
            </Link>

            {/* Search */}
            <Link 
              href="/articles" 
              className={`flex flex-col items-center ${
                isActive('/articles') ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
             <FaPencilAlt/>
              <span className="text-xs mt-1">Articles</span>
            </Link>

            {/* Bookmarks */}
            <Link 
              href="/contact" 
              className={`flex flex-col items-center ${
                isActive('/contact') ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <FaPhoneAlt/>
              <span className="text-xs mt-1">Contact</span>
            </Link>

            {/* Profile */}
            <Link 
              href="/about" 
              className={`flex flex-col items-center ${
                isActive('/about') ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <FaUser/>
              <span className="text-xs mt-1">About</span>
            </Link>

            {/* Jobs */}
            <Link 
              href="/careers" 
              className={`flex flex-col items-center ${
                isActive('/careers') ? 'text-purple-600' : 'text-gray-600'
              }`}
            >
              <IoBriefcaseOutline/>
              <span className="text-xs mt-1">Jobs</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Safe area spacing for iOS devices */}
      <div className="h-safe-area bg-white/70 backdrop-blur-md" />
    </nav>
  )
}

export default MobileNav 