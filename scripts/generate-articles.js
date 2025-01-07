const contentful = require('contentful-management')

// Initialize the Contentful Management Client
const client = contentful.createClient({
  accessToken: process.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

// Helper function to truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

// Sample article data with categories
const articles = [
  {
    title: "Navigating market volatility and government support for Indian agriculture",
    description: "India's agricultural sector, the backbone of the nation's economy, contributes ~17% to the GDP and employs over half of the workforce.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d",
    category: "Featured"
  },
  {
    title: "Digital transformation in financial services",
    description: "Exploring the latest technological advancements and regulatory challenges in the financial sector.",
    image: "https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d",
    category: "Case Study"
  },
  {
    title: "ESG Implementation Guide",
    description: "A comprehensive guide to implementing Environmental, Social, and Governance principles in your organization.",
    image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6c",
    category: "Thought leadership"
  },
  {
    title: "Monthly Financial Insights",
    description: "Stay updated with the latest trends and analysis in the financial markets.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    category: "Newsletters"
  },
  {
    title: "Cybersecurity in the Digital Age",
    description: "Protecting your business from the evolving threats of cyber attacks.",
    image: "https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d",
    category: "Articles"
  },
  {
    title: "The Future of Work",
    description: "How automation and AI are reshaping the workforce and the economy.",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d",
    category: "Featured"
  },
  {
    title: "Sustainable Investing",
    description: "Aligning your investments with your values and contributing to a better future.",
    image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6c",
    category: "Articles"
  },
]

async function waitForAssetProcessing(asset, environment) {
  try {
    let currentAsset = asset
    let attempts = 0
    const maxAttempts = 10 // Reduce wait time to 10 seconds

    while (attempts < maxAttempts) {
      try {
        currentAsset = await environment.getAsset(asset.sys.id)
        if (currentAsset.fields.file['en-US'].url) {
          return currentAsset
        }
      } catch (error) {
        console.log('Waiting for asset processing...')
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      attempts++
    }
    
    throw new Error('Asset processing timed out')
  } catch (error) {
    console.error('Error waiting for asset:', error)
    throw error
  }
}

async function uploadArticles() {
  try {
    // Get space and environment
    const space = await client.getSpace('l42vzmtmac9f')
    const environment = await space.getEnvironment('master')

    // Upload each article
    for (const article of articles) {
      try {
        console.log(`Processing article: ${article.title}`)

        // First, create the asset
        const asset = await environment.createAsset({
          fields: {
            title: {
              'en-US': article.title
            },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: `${article.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
                upload: article.image
              }
            }
          }
        })

        // Process the asset
        await asset.processForAllLocales()
        console.log('Asset processing started...')

        // Wait for processing to complete
        const processedAsset = await waitForAssetProcessing(asset, environment)
        console.log('Asset processed successfully')

        // Publish the asset
        const publishedAsset = await processedAsset.publish()
        console.log('Asset published successfully')

        // Create the article entry with category
        const entry = await environment.createEntry('vbsbArtciles', {
          fields: {
            articleTitle: {
              'en-US': article.title
            },
            caption: {
              'en-US': article.description
            },
            category: {
              'en-US': article.category
            },
            media: {
              'en-US': {
                sys: {
                  type: 'Link',
                  linkType: 'Asset',
                  id: publishedAsset.sys.id
                }
              }
            }
          }
        })

        // Publish the entry
        await entry.publish()
        console.log(`✅ Published article: ${article.title}`)
      } catch (error) {
        console.error(`❌ Error with article "${article.title}":`, error.message)
        // Log full error details for debugging
        if (error.details) {
          console.error('Error details:', JSON.stringify(error.details, null, 2))
        }
      }
    }

    console.log('🎉 All articles processed!')
  } catch (error) {
    console.error('Error in main process:', error)
  }
}

uploadArticles() 