import React from 'react'
import { TfiMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='flex  items-center h-24 justify-between text-white max-w-[1240px] mx-auto px-4' >

        <h1 className='w-full text-3xl font-bold text-[#00df9a]'  >error</h1>
        <ul className='flex'>
             <li className='p-4'>Home </li>
             <li className='p-4'>Company</li>
             <li className='p-4'>Resourse</li>
             <li className='p-4'>About</li>
             <li className='p-4'>Home</li>
             <li className='p-4'>Contact</li>
             <TfiMenu />
        </ul>
    </div>
  )
}

export default Navbar