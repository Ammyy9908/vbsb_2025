import { useState, useEffect } from 'react'
import { getArticles } from '@/services/contentful'
import ArticleCard from '@/components/article-card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SEO from '@/components/seo'
import TabNavigation from '@/components/tab-navigation'

const ARTICLES_PER_PAGE = 9

function ArticlesPageSkeleton() {
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

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('Featured')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        setLoading(true)
        const fetchedArticles = await getArticles()
        if (!fetchedArticles || fetchedArticles.length === 0) {
          setError('No articles found')
          return
        }
        setArticles(fetchedArticles.slice(0, ARTICLES_PER_PAGE))
        setHasMore(fetchedArticles.length > ARTICLES_PER_PAGE)
      } catch (err) {
        setError(err.message || 'Error loading articles')
      } finally {
        setLoading(false)
      }
    }

    fetchInitialArticles()
  }, [])

  const loadMore = async () => {
    try {
      setLoadingMore(true)
      const fetchedArticles = await getArticles()
      const nextArticles = fetchedArticles.slice(
        page * ARTICLES_PER_PAGE,
        (page + 1) * ARTICLES_PER_PAGE
      )
      
      if (nextArticles.length === 0) {
        setHasMore(false)
        return
      }

      setArticles(prev => [...prev, ...nextArticles])
      setPage(prev => prev + 1)
      setHasMore(fetchedArticles.length > (page + 1) * ARTICLES_PER_PAGE)
    } catch (err) {
      console.error('Error loading more articles:', err)
    } finally {
      setLoadingMore(false)
    }
  }

  // Filter articles based on active tab
  const filteredArticles = articles.filter(article => {
    if (activeTab === 'Featured') return true
    return article.category === activeTab
  })

  return (
    <>
      <SEO 
        title="Articles | VBSB"
        description="Explore our latest articles, insights, and industry updates."
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-7xl">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Articles & Insights
              </h1>
              <p className="text-lg text-gray-600">
                Explore our latest articles, industry insights, and expert analysis.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-8">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Articles Grid */}
            {loading ? (
              <ArticlesPageSkeleton />
            ) : error ? (
              <div className="text-center text-gray-600 py-12">{error}</div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
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

        <Footer />
      </div>
    </>
  )
} 