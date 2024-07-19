import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <>
      <nav className='flex gap-6 text-green-900 bg-green-200  cursor-pointer justify-end font-bold p-3 font-sans h-[80px]'>
    <span className='text-3xl mr-[470px] text-orange-600 hover:text-green-600 '>EcoWorld</span>
    <div className='hover:text-purple-600 text-[18px] hover:underline underline-offset-2'><Link to="/">Home</Link></div> 
    <div className='hover:text-purple-600 text-[18px] hover:underline underline-offset-2'><Link to="/gallery">Gallery</Link></div>
    <div className='hover:text-purple-600 text-[18px] hover:underline underline-offset-2'><Link to="/contact">Join Us</Link></div> 
    <button className='bg-green-600 text-white text-sm p-2 w-[-80px] h-[40px] rounded-lg hover:bg-green-800 cursor-pointer border-gray-950 border-2'><Link to="/login">LogIn</Link></button>
    <button className='bg-green-600 text-white text-sm p-2 w-[-80px] h-[40px] rounded-lg cursor-pointer hover:bg-green-800  border-gray-950 border-2 mr-3'><Link to="/signup">SignUp</Link></button>
    </nav>
    <hr className='bg-black w-auto h-1'/>
    </>
  )
}

export default header