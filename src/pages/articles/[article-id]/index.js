import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getArticle } from '@/services/contentful'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SEO from '@/components/seo'
import ArticleJsonLd from '@/components/seo/ArticleJsonLd'
import BookmarkButton from '../../../components/BookmarkButton'
import MobileNav from '@/components/mobile-nav'

function ArticleDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="mb-8 animate-pulse">
          <div className="h-8 w-24 bg-gray-200 rounded mb-4" />
          <div className="h-12 w-3/4 bg-gray-200 rounded" />
        </div>

        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse mb-8" />

        {/* Content Skeleton */}
        <div className="space-y-4 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>
      </div>
    </div>
  )
}

export default function ArticleDetail() {
  const router = useRouter()
  const { 'article-id': articleId } = router.query
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchArticle() {
      if (!articleId) return

      try {
        setLoading(true)
        const articleData = await getArticle(articleId)
        if (!articleData) {
          setError('Article not found')
          return
        }
        setArticle(articleData)
      } catch (err) {
        setError(err.message || 'Error loading article')
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [articleId])

  if (loading) {
    return <ArticleDetailSkeleton />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link 
            href="/" 
            className="text-red-600 hover:text-red-700 inline-flex items-center gap-2"
          >
            Return Home
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
    )
  }

  if (!article) return null

  return (
    <>
      <SEO 
        title={`${article.title} | VBSB`}
        description={article.description}
        image={article.image}
        type="article"
      >
        <ArticleJsonLd article={article} />
      </SEO>
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* Article Header */}
        <header className="bg-white border-b relative">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-bold">{article.title}</h1>
              <BookmarkButton articleId={article.id} />
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Article Description */}
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {article.description}
                </p>
              </div>

              {/* Back to Articles */}
              <div className="mt-12 border-t pt-8">
                <Link 
                  href="/" 
                  className="text-red-600 hover:text-red-700 inline-flex items-center gap-2"
                >
                  <svg 
                    className="w-4 h-4 rotate-180" 
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
                  Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
        <MobileNav />
      </div>
    </>
  )
}
