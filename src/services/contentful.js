import { createClient } from 'contentful'

// Move the client creation into a function to handle SSR/SSG scenarios
const getContentfulClient = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // Server-side: Throw error only if env vars are missing in production
    if (process.env.NODE_ENV === 'production' && 
        (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN)) {
      console.error('Missing Contentful environment variables')
      return null
    }
  }

  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  })
}

export const getArticles = async () => {
  try {
    const client = getContentfulClient()
    
    if (!client) {
      console.error('Contentful client not initialized')
      return []
    }

    const response = await client.getEntries({
      content_type: 'vbsbArtciles',
      include: 2,
    })

    return response.items.map(item => ({
      id: item.sys.id,
      title: item.fields.articleTitle,
      description: item.fields.caption,
      image: item.fields.media?.fields?.file?.url 
        ? `https:${item.fields.media.fields.file.url}`
        : '/fallback-image.jpg',
      readTime: '4',
      date: new Date(item.sys.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).toUpperCase(),
      category: item.fields.category || 'Article',
    }))
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}

export const getArticle = async (id) => {
  try {
    const client = getContentfulClient()
    
    if (!client) {
      console.error('Contentful client not initialized')
      return null
    }

    const response = await client.getEntry(id, {
      include: 2,
    })

    return {
      id: response.sys.id,
      title: response.fields.articleTitle,
      description: response.fields.caption,
      image: response.fields.media?.fields?.file?.url 
        ? `https:${response.fields.media.fields.file.url}`
        : '/fallback-image.jpg',
      readTime: '4',
      date: new Date(response.sys.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).toUpperCase(),
      category: response.fields.category || 'Article',
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
} 