import { useState, useEffect } from 'react'
import { getServices } from '@/services/contentful'
import ArticleCard from '@/components/article-card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SEO from '@/components/seo'
import TabNavigation from '@/components/tab-navigation'
import MobileNav from '@/components/mobile-nav'

const ARTICLES_PER_PAGE = 9

function ServicesPageSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Image Skeleton */}
          <div className="relative h-[240px] w-full bg-gray-200 animate-pulse">
            <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full" />
          </div>

          {/* Content Skeleton */}
          <div className="p-6">
            <div className="w-20 h-6 bg-gray-200 rounded-full mb-4 animate-pulse" />
            <div className="space-y-2 mb-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('Taxation and Compliances')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const fetchInitialServices = async () => {
      try {
        setLoading(true)
        const fetchedServices = await getServices()
        if (!fetchedServices || fetchedServices.length === 0) {
          setError('No services found')
          return
        }
        setServices(fetchedServices.slice(0, ARTICLES_PER_PAGE))
        setHasMore(fetchedServices.length > ARTICLES_PER_PAGE)
      } catch (err) {
        setError(err.message || 'Error loading services')
      } finally {
        setLoading(false)
      }
    }

    fetchInitialServices()
  }, [])

  const loadMore = async () => {
    try {
      setLoadingMore(true)
      const fetchedServices = await getServices()
      const nextServices = fetchedServices.slice(
        page * ARTICLES_PER_PAGE,
        (page + 1) * ARTICLES_PER_PAGE
      )
      
      if (nextServices.length === 0) {
        setHasMore(false)
        return
      }

      setServices(prev => [...prev, ...nextServices])
      setPage(prev => prev + 1)
      setHasMore(fetchedServices.length > (page + 1) * ARTICLES_PER_PAGE)
    } catch (err) {
      console.error('Error loading more services:', err)
    } finally {
      setLoadingMore(false)
    }
  }

  // Filter articles based on active tab
  const filteredServices = services.filter(service => {
    if (activeTab === 'Taxation and Compliances (Head)') return true
    return service.category === activeTab
  })

  return (
    <>
      <SEO 
        title="Services | VBSB"
        description="Explore our latest services, insights, and industry updates."
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h1>
              <p className="text-lg text-gray-600">
                Explore our latest services, industry insights, and expert analysis.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Articles Grid */}
            {loading ? (
              <ServicesPageSkeleton />
            ) : error ? (
              <div className="text-center text-gray-600 py-12">{error}</div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ArticleCard key={service.id} {...service} />
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={loadMore}
                      disabled={loadingMore}
                      className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 
                               transition-colors duration-300 disabled:opacity-50"
                    >
                      {loadingMore ? 'Loading...' : 'Load More'}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </main>
        <MobileNav />
        <Footer />

       
      </div>
    </>
  )
} 