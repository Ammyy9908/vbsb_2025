import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Main from "@/components/Main";
import BlogCard from "@/components/blog-card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <section className="w-full flex justify-center items-center py-16">
        <div className="w-[90%] md:w-[75%] mx-auto flex flex-wrap justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-4xl md:text-5xl font-bold">
              10,000+
            </h4>
            <p>
              Clients
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-4xl md:text-5xl font-bold">
              10,000+
            </h4>
            <p>
              Clients
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-4xl md:text-5xl font-bold">
              10,000+
            </h4>
            <p>
              Clients
            </p>
          </div>
        </div>
      </section>
      <section className="blogs-container bg-gray-100 py-16">
        <div className="w-[90%] md:w-[75%] mx-auto">
          <div>
            <div>
          <h3 className="text-3xl font-bold">Latest insights,reports and more.</h3>
          </div>
          <div className="tabs-container mt-6">
            <ul className="flex  items-center gap-2">
              <li className="text-lg font-medium px-2 py-2 rounded-full bg-white cursor-pointer hover:bg-purple-600 hover:text-white">Featured</li>
              <li className="text-lg font-medium px-2 py-2 rounded-full bg-white cursor-pointer hover:bg-purple-600 hover:text-white">Articles</li>
              <li className="text-lg font-medium px-2 py-2 rounded-full bg-white cursor-pointer hover:bg-purple-600 hover:text-white">Case Studies</li>
            </ul>
          </div>
          </div>
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
           
          </div>
          <div className="flex justify-center items-center mt-12">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Load More</button>
          </div>
        
        </div>
       
      </section>
      <section className="w-full flex justify-center items-center relative h-[600px]">
        <img src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
            <div className="w-full md:w-[50%]">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                We are a team of experts who are passionate about helping businesses grow.
              </h3>
              <p className="text-white text-lg mt-4">
                We are a team of experts who are passionate about helping businesses grow.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4 w-full font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
       
      </section>
      <section className="w-full flex justify-center items-center py-32 hover:tilt-effect">
        <div className="w-[90%] md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="order-last md:order-first">
            <h3 className="text-sm">Awards and recognitions</h3>
            <h2 className="text-3xl md:text-4xl font-bold">We are proud to
share that our
Firm has been
certified as a
Great Place To
Work®️ for the
third consecutive
year.</h2>
          </div>
          <div className="tilt-effect">
            <img src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
      <section className="w-full flex justify-center items-center relative h-[400px]">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="w-[90%] mx-auto flex flex-col justify-center items-center">
            <div className="w-full md:w-[50%]">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                We are a team of experts who are passionate about helping businesses grow.
              </h3>
              <p className="text-white text-lg mt-4">
                We are a team of experts who are passionate about helping businesses grow.
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full mt-4 w-full font-bold">
                Learn More
              </button>
            </div>
          </div>
        </div>
       
      </section>
      <section className="w-full flex justify-center items-center py-32 hover:tilt-effect">
        <div className="w-[90%] md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
          <div className="order-last md:order-first">
            <h3 className="text-sm">Awards and recognitions</h3>
            <h2 className="text-3xl md:text-4xl font-bold">We are proud to
share that our
Firm has been
certified as a
Great Place To
Work®️ for the
third consecutive
year.</h2>
          </div>
          <div className="tilt-effect">
            <img src="https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
