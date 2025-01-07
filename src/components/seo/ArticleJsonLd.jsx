export default function ArticleJsonLd({ article }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "description": article.description,
          "image": article.image,
          "datePublished": article.date,
          "author": {
            "@type": "Organization",
            "name": "VBSB"
          }
        })
      }}
    />
  )
} 