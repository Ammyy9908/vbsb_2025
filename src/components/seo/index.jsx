import Head from 'next/head'

export default function SEO({ 
  title = 'VBSB - Leading Business Solutions',
  description = 'VBSB provides expert business solutions, consulting services, and industry insights to help organizations thrive in today\'s competitive landscape.',
  image = 'https://your-domain.com/og-image.jpg', // Add your default OG image
  type = 'website',
  children 
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vbsb.vercel.app'

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {children}
    </Head>
  )
} 