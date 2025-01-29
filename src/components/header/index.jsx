import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Link from 'next/link';



function NavLink({path, label}) {
    return (
        <li className='text-lg font-medium text-[#4F2D7F] cursor-pointer'>
            <Link href={path} className='inline-block py-2 px-4 rounded-lg bg-white bg-opacity-50 backdrop-blur-sm hover:bg-purple-600 hover:text-white transition-colors duration-200'>{label}</Link>
        </li>
    )
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='md:block hidden w-full'>
   <div className='bg-white w-full py-6 sticky top-0 z-50 shadow-md bg-opacity-50 backdrop-blur-sm'>
     <div className='flex justify-between items-center w-[85%] mx-auto'>
        <Link href="/" className='text-lg font-bold'>
            <span>VBSB</span>
        </Link>
        <button className='md:hidden text-black font-bold text-xl' onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <MdClose /> : <MdOutlineMenu />}</button>
        <nav className='hidden md:flex justify-center items-center'>
            <ul className='flex gap-4 items-center'>
                <NavLink path="/" label="Home"/>
                <NavLink path="/about" label="About"/>
                <NavLink path="/contact" label="Contact"/>
                <NavLink path="/careers" label="Careers"/>
                <NavLink path="/services" label="Services"/>
            </ul>
        </nav>
       
    </div>
   </div>
  
   </div>
  )
}

export default Header