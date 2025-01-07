import React from 'react'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'

const CareersPage = () => {
  return (
    <>
      <Head>
        <title>Careers | VBSB Digital Solutions</title>
        <meta 
          name="description" 
          content="Join VBSB Digital Solutions and be part of a team that's shaping the future of digital transformation."
        />
      </Head>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-bold text-purple-900 sm:text-5xl">
                  The VBSB Digital difference
                </h1>
                <p className="mt-4 text-xl text-gray-600">
                  A unique combination of culture and opportunities, VBSB Digital is a place where you 
                  can grow. Wherever you are in your career, we help you to make a difference every day.
                </p>
                <div className="mt-8">
                  <Link 
                    href="#opportunities"
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
                  >
                    Find out more
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="relative">
                  <svg className="absolute right-0 top-0 -z-10 w-3/4 h-3/4 text-purple-100" viewBox="0 0 200 200">
                    <path fill="currentColor" d="M45,-78.1C58.3,-71.2,69.1,-58.1,76.8,-43.3C84.5,-28.4,89.2,-11.9,88.3,4.3C87.4,20.5,81,36.4,70.8,49.2C60.6,62,46.6,71.8,31.2,76.8C15.8,81.8,-1,82,-16.2,77.5C-31.4,73,-45,63.8,-56.2,51.8C-67.4,39.8,-76.2,25,-79.4,8.5C-82.6,-8,-80.2,-26.1,-71.3,-40.1C-62.4,-54.1,-47,-63.9,-32.3,-70.3C-17.6,-76.7,-3.6,-79.7,10.7,-79.8C25,-79.9,39.7,-77.1,45,-78.1Z" transform="translate(100 100)" />
                  </svg>
                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                      alt="Team collaboration"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Cards Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Life at VBSB Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                    alt="Life at VBSB"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Life at VBSB Digital</h2>
                  <Link 
                    href="/careers/life-at-vbsb"
                    className="mt-4 inline-block text-purple-600 hover:text-purple-700"
                  >
                    Know more
                  </Link>
                </div>
              </div>

              {/* Career Opportunities Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                    alt="Career Opportunities"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900">Career Opportunities</h2>
                  <Link 
                    href="/careers/opportunities"
                    className="mt-4 inline-block text-purple-600 hover:text-purple-700"
                  >
                    Click here to view
                  </Link>
                </div>
              </div>

              {/* Our Culture Card */}
              <div className="bg-purple-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-white">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">OUR CULTURE</h2>
                    <h3 className="text-2xl font-bold">
                      What is it really like to work at VBSB Digital?
                    </h3>
                  </div>
                  <Link 
                    href="/careers/culture"
                    className="mt-4 inline-flex items-center text-white hover:opacity-90"
                  >
                    Learn more
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why join us?</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-purple-600 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

// Benefits data
const benefits = [
  {
    title: "Growth & Development",
    description: "Continuous learning opportunities and career advancement paths tailored to your goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements and policies that support your wellbeing.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Innovation Culture",
    description: "Be part of a team that embraces new ideas and cutting-edge technologies.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Global Opportunities",
    description: "Work with international teams and clients across different markets.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Competitive Benefits",
    description: "Comprehensive benefits package including health, retirement, and more.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Inclusive Workplace",
    description: "A diverse and inclusive environment where everyone can thrive and belong.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default CareersPage
