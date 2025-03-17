import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer flex flex-col   justify-between items-center mt-32 '>
      <div  className='footer flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center'>

      <div className="Flogo flex w-full sm:w-[40%]  flex-col justify-between gap-2 ">
     <NavLink to="/">
      <h1 className="logo-font lg:w-[50%]  w-[50%]   drop-shadow-[0_2px_4px_rgba(234,179,8,0.3)] animate-gradient bg-gradient-to-r from-amber-300 via-amber-600 to-yellow-700 bg-[length:200%] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter hover:skew-y-1 transition-transform duration-300 cursor-pointer">
        VibeVault.
      </h1>
    </NavLink>
        <p className='text-gray-500 text-sm'>Step into style with Vibe Vault, where fashion meets attitude. From trendy streetwear to timeless classics, we bring you the latest in premium quality apparel. Elevate your wardrobe with bold designs, comfortable fits, and statement pieces that match your vibe.</p>
      </div>
      <div className="Fdetails w-full sm:w-[60%] flex justify-around flex-col sm:flex-row ">

        <div className="Fmenu flex flex-col gap-1 py-5 sm:py-0">
            <h1 className='text-xl mb-3'>COMPANY</h1>
            <p className='text-sm text-gray-500'>Home</p>
            <p className='text-sm text-gray-500'>About us</p>
            <p className='text-sm text-gray-500'>Delivery</p>
            <p className='text-sm text-gray-500'>Privacy policy</p>
        </div>

        <div className="Fmenu  flex flex-col gap-1">
            <h1 className='text-xl mb-3'>GET IN TOUCH</h1>
            <p className='text-sm text-gray-500'>+1-000-000-0000</p>
            <p className='text-sm text-gray-500'>usman.naeem12257@gmail.com</p>
            <p className='text-sm text-gray-500'>LinkedIn</p>
    
        </div>

      </div>

      </div>
      < hr className='bg-gray-300 h-[1.1px] w-full my-8'/ >
    <p className='text-gray-500 mb-5'> Copyright 2024@ Usman - All Right Reserved.</p>
    </div>
  )
}

export default Footer
