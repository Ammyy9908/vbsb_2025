import { createClient } from 'contentful'

if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    'Please provide required Contentful environment variables. Check README.md for more info.'
  )
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getArticles = async () => {
  try {
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

// Optional: Add a function to fetch a single article
export const getArticle = async (id) => {
  try {
    const response = await client.getEntry(id, {
      include: 2, // Include linked assets
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
      category: 'Article',
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    return null
  }
} 