import React, { useState, useEffect } from 'react'

function BookmarkButton({ articleId, className = '' }) {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    // Check if article is bookmarked on component mount
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    setIsBookmarked(bookmarks.includes(articleId))
  }, [articleId])

  const handleBookmark = (e) => {
    e.preventDefault() // Prevent any parent link clicks
    
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(bookmarkId => bookmarkId !== articleId)
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
      setIsBookmarked(false)
    } else {
      // Add to bookmarks
      bookmarks.push(articleId)
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
      setIsBookmarked(true)
    }
  }

  return (
    <button 
      className={`w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors ${className}`}
      aria-label={isBookmarked ? "Remove bookmark" : "Bookmark article"}
      onClick={handleBookmark}
    >
      <svg 
        className={`w-5 h-5 ${isBookmarked ? 'text-purple-600' : 'text-gray-600'}`}
        fill={isBookmarked ? "currentColor" : "none"}
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  )
}

export default BookmarkButton 