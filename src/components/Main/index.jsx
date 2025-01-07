import React from 'react'

function Main() {
    return (
        <div className="w-full relative pt-32 h-[600px] md:h-[600px]">
            <div className="hero-background w-full h-full  absolute top-0 left-0">
                <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover' />
            </div>
            <div className="hero-content w-[95%] md:w-[70%] mx-auto z-10 relative text-white h-full flex flex-col justify-between items-center">
                <div className="hero-content-top">
                        <h2 className='text-3xl md:text-6xl lg:text-7xl font-bold'>Unlocking
                            opportunities:
                            India investment
                            roadmap</h2>
                        <p className='text-lg md:text-xl lg:text-2xl font-medium'>We are a team of experienced professionals who are dedicated to providing you with the best possible service. We are a team of experienced professionals who are dedicated to providing you with the best possible service.

                        </p>
                        
                            <button className='bg-white text-black px-4 py-2 rounded-md mt-3'>
                                Read More
                            </button>
                       
                </div>
                {/* <div className='w-full flex justify-between items-center'>
                    <ul className='flex justify-between items-center w-full'>
                        <li><p>Unlocking opportunities:
                        India investment roadmap</p></li>
                        <li><p>Unlocking opportunities:
                        India investment roadmap</p></li>
                        <li><p>Unlocking opportunities:
                        India investment roadmap</p></li>
                    </ul>
                </div> */}
               
            </div>
           
           
        </div>
    )
}

export default Main