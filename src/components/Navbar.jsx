import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className='flex justify-center w-full h-16 bg-[#1E1E1E]'>
        <div className='flex space-x-12 py-6 text-white'>
        <a href="#">
            Home
        </a>
        <a href="#" className='flex'>
            Services <IoIosArrowDown  className='mt-1 my-4'/>
        </a>
        <a href="#" className='flex'>
            Industries <IoIosArrowDown className='mt-1 my-4' />
        </a>
        <a href="#">
            Career
        </a>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact Us
          </Button>
        
        </div>
        
    </div>
    
  )
}

export default Navbar;