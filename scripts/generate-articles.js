const contentful = require('contentful-management')

// Initialize the Contentful Management Client
const client = contentful.createClient({
  accessToken: 'CFPAT-rHaL368GHNfeqYDqVVkRIAJcm5PkxNdgfv6-APTRlQc'
})

// Helper function to truncate text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength - 3) + '...'
}

// Add a fallback image URL
const FALLBACK_IMAGE = 'https://picsum.photos/800/600'

// Updated image validation function
async function validateImage(url) {
  try {
    const response = await fetch(url)
    return response.ok
  } catch (error) {
    return false
  }
}

// Sample article data with categories
const articles = [
  {
    title: "The Impact of Artificial Intelligence on Modern Society",
    description: "Exploring the benefits and challenges of AI in today's world.",
    image: "https://picsum.photos/800/600?random=1",
    category: "Featured"
  },
  {
    title: "Sustainable Energy Solutions for a Greener Future",
    description: "Discovering innovative ways to reduce our carbon footprint and promote renewable energy.",
    image: "https://picsum.photos/800/600?random=2",
    category: "Case Study"
  },
  {
    title: "The Rise of E-commerce: Trends and Insights",
    description: "Analyzing the growth of online shopping and its impact on the retail industry.",
    image: "https://images.unsplash.com/photo-1562157873-818477cd6a0b",
    category: "Thought leadership"
  },
  {
    title: "Cybersecurity Threats in the Digital Age",
    description: "Understanding the risks and consequences of cyber attacks in today's digital landscape.",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd1f3c5e9",
    category: "Newsletters"
  },
  {
    title: "The Future of Work: Embracing Automation and AI",
    description: "Examining the role of technology in shaping the modern workforce.",
    image: "https://images.unsplash.com/photo-1573497494435-7e2f4f9ac044",
    category: "Articles"
  },
  {
    title: "Climate Change: Causes, Effects, and Solutions",
    description: "Delving into the science behind climate change and exploring ways to mitigate its impact.",
    image: "https://images.unsplash.com/photo-1568605117036-5a0d2d0d4a94",
    category: "Featured"
  },
  {
    title: "The Benefits of Meditation and Mindfulness",
    description: "Exploring the science behind meditation and its positive effects on mental health.",
    image: "https://images.unsplash.com/photo-1557683316-973cb9d8f6d4",
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
    const space = await client.getSpace('l42vzmtmac9f')
    const environment = await space.getEnvironment('master')

    for (const article of articles) {
      try {
        console.log(`Processing article: ${article.title}`)

        // Validate image URL before proceeding
        const isImageValid = await validateImage(article.image)
        const imageUrl = isImageValid ? article.image : FALLBACK_IMAGE

        // Create the asset with validated image
        const asset = await environment.createAsset({
          fields: {
            title: {
              'en-US': article.title
            },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: `${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`,
                upload: imageUrl
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
        // Continue with next article instead of stopping the entire process
        continue
      }
    }

    console.log('🎉 All articles processed!')
  } catch (error) {
    console.error('Error in main process:', error)
  }
}

uploadArticles() 