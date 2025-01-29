import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ArticleCard from '../article-card'
import TabNavigation from '../tab-navigation'
import { getServices } from '@/services/contentful'

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
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('Taxation and Compliances')
  const [fetchedData, setFetchedData] = useState(false)

  useEffect(() => {
    if (!fetchedData) {
      const fetchArticles = async () => {
        try {
          setLoading(true)
          const fetchedServices = await getServices()
          if (!fetchedServices || fetchedServices.length === 0) {
            setError('No services found')
            return
          }
          
          setTimeout(() => {
            setServices(fetchedServices)
            setLoading(false)
          }, 1000)
        } catch (err) {
          setError(err.message || 'Error loading services')
          setLoading(false)
        } finally {
          setFetchedData(true)
        }
      }

      fetchArticles()
    }
  }, [fetchedData])

  console.log(services)

  const filteredServices = services.filter(service => {
    if (activeTab === 'Taxation and Compliances') return true
    return service.category === activeTab
  })

  if (error) {
    return (
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center text-gray-600">
            {error}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Services</h2>
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
            filteredServices.map((service) => (
              <ArticleCard
                key={service.id}
                {...service}
              />
            ))
          )}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-right">
          <Link 
            href="/services"
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