import React from 'react'
import Link from 'next/link'

const NewsCard = ({ date, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-xl font-bold text-purple-900 hover:text-purple-700 transition-colors">
          <Link href="#">{title}</Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  )
}

function NewsSection() {
  const newsItems = [
    {
      date: "21 NOV 2024",
      title: "Beyond the basket: The rise of evolving consumer preferences, a Grant...",
      description: "Grant Thornton Bharat's latest survey report, titled 'Beyond the Basket: Understanding Consumer Preferences within Omni-Channel Setups,' delves into the evolving preferences of Indian consumers as digital adoption and rising disposable incomes reshape shopping behaviors."
    },
    {
      date: "13 NOV 2024",
      title: "Britain Meets India 2024: UK companies generate INR 5,082 billion in...",
      description: "Grant Thornton Bharat, in collaboration with the Confederation of Indian Industry today unveiled its fourth edition of the 'Britain Meets India 2024', underlining the latest trends in UK..."
    },
    {
      date: "28 OCT 2024",
      title: "85% of Indian buyers are interested in high-end variants, while...",
      description: "85% of Indian buyers are interested in high-end variants, while preference for hybrid jumps to 40%: Grant Thornton Bharat Survey 2024"
    }
  ]

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <NewsCard
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-right">
          <Link 
            href="/news" 
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