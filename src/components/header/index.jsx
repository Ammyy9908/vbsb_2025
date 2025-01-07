import React from 'react'

function NavLink({path, label}) {
    return (
        <li>
            <a href={path}>{label}</a>
        </li>
    )
}

function Header() {
  return (
   <div className='bg-white w-full py-6 sticky top-0 z-50 shadow-md bg-opacity-50 backdrop-blur-sm'>
     <div className='flex justify-between items-center w-[95%] mx-auto'>
        <a href="#" className='text-lg font-bold'>
            <span>VBSB</span>
        </a>
        <nav className='hidden md:block'>
            <ul className='flex gap-4 items-center text-[#4F2D7F] text-lg font-medium'>
                <NavLink path="/" label="Home"/>
                <NavLink path="/about" label="About"/>
                <NavLink path="/contact" label="Contact"/>
                <NavLink path="/careers" label="Careers"/>
                <NavLink path="/blog" label="Blog"/>
            </ul>
        </nav>
        <button className='md:hidden'>Menu</button>
    </div>
   </div>
  )
}

export default Header