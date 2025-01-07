import React from 'react'
import Image from 'next/image'

function BlogCard() {
  return (
    <div className='bg-white  shadow-md overflow-hidden'>
        <div className="card-thumb w-full h-[320px] group cursor-pointer overflow-hidden">
            <img 
                src="https://images.unsplash.com/photo-1621460249485-4e4f92c9de5d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Blog Image" 
                className='w-full h-full object-cover group-hover:scale-105 transition-all duration-300'
            />
        </div>
        <div className="card-content py-6 px-3 rounded-y-lg">
            <div className="card-content-top">
            <p className='text-sm text-gray-500 text-uppercase font-medium'>Article</p>
            <h3 className='text-2xl font-bold'>Article Title</h3>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className="card-content-bottom">
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default BlogCard