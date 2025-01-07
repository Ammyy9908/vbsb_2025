import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ArticleCard from '../article-card'
import TabNavigation from '../tab-navigation'
import { getArticles } from '@/services/contentful'

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Image Skeleton */}
      <div className="relative h-[240px] w-full bg-gray-200 animate-pulse">
        {/* Bookmark Button Skeleton */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Tag Skeleton */}
        <div className="w-20 h-6 bg-gray-200 rounded-full mb-4 animate-pulse" />

        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center space-x-2">
          <div className="w-16 h-3 bg-gray-200 rounded animate-pulse" />
          <div className="w-3 h-3 bg-gray-200 rounded animate-pulse" />
          <div className="w-20 h-3 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

function NewsSection() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('Featured')

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      const fetchedArticles = await getArticles()
      setTimeout(() => {
        setArticles(fetchedArticles)
        setLoading(false)
      }, 3000) // Added 3 seconds delay for skeleton loader
    }

    fetchArticles()
  }, [])

  // Filter articles based on active tab
  const filteredArticles = articles.filter(article => {
    if (activeTab === 'Featured') return true
    return article.category === activeTab
  })

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">News</h2>
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loading ? (
            // Show skeleton cards while loading
            [...Array(9)].map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            // Show actual articles when loaded
            filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
              />
            ))
          )}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-right">
          <Link 
            href="/news" 
            className="text-red-600 hover:text-red-700 inline-flex items-center gap-2"
          >
            View all
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsSection 