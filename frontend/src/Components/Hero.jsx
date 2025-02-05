import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='mt-4 border flex flex-col sm:flex-row border-gray-400' >

      <div className="heroRight w-full sm:w-1/2 text-left py-10 sm:py-0 flex flex-col items-center justify-center ">
<div className='text-[#414141]' >

<div className="bSell flex gap-3 items-center ">
    <p className='bg-[#414141] w-8 md:w-11 h-[2px] '></p>
    <p className='font-semibold text-base md:text-lg permanent' >OUR BESTSELLERS</p>
</div>

<div className="Lattext text-3xl my-3 lg:text-6xl prata">Latest Arrivals</div>
<div className="flex gap-3 items-center ">
    <p className='font-semibold text-base md:text-lg permanent' >SHOP NOW</p>
    <p className='bg-[#414141] w-8 md:w-11 h-[2px] '></p>
</div>
      </div>

</div>

      
       <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />
     

    </div>
  )
}

export default Hero
