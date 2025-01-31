import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BookmarkButton from '../BookmarkButton'

function ArticleCard({ id, title, description, image, readTime, date, category }) {
  console.log(id, title, description, image, readTime, date, category)
  return (
    <Link href={`/services/${id}`} className="block group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image Container */}
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title || 'Article thumbnail'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* <BookmarkButton 
            articleId={id} 
            className="absolute top-4 right-4"
          /> */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tag */}
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-900 text-sm font-medium rounded-full mb-4">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Meta Information */}
          {/* <div className="flex items-center text-sm text-gray-500">
            <span>{readTime} min read</span>
            <span className="mx-2">|</span>
            <span>{date}</span>
          </div> */}
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard 