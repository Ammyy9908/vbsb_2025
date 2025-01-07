import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BookmarkButton from '../BookmarkButton'

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <Link href={`/articles/${article.slug}`} className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600">
              {article.title}
            </h3>
          </Link>
          <BookmarkButton article={article} className="ml-4" />
        </div>
        <Link href={`/articles/${article.slug}`} className="block">
          <p className="text-gray-600">{article.description}</p>
          <div className="mt-4">
            <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ArticleCard 