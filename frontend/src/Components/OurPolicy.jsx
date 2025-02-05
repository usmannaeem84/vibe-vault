import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='Policy flex flex-col sm:flex-row justify-between gap-12 sm:gap-0 items-center font-medium my-4 sm:my-20 px-8 sm:px-20'>


      <div className="policy flex flex-col items-center justify-center gap-1">
        <img className='h-14' src={assets.exchange_icon} alt="" />
        <p className='text-md text-black' >Easy Exchange Policy</p>
        <p className='text-md text-gray-400 '>We offer hassle free exchange policy</p>
      </div>

      <div className="policy flex flex-col items-center justify-center gap-1">
        <img className='h-14' src={assets.quality_icon} alt="" />
        <p className='text-md text-black' >7 Days Return Policy</p>
        <p className='text-md text-gray-400 '>We provide 7 days free return policy</p>
      </div>

      <div className="policy flex flex-col items-center justify-center gap-1">
        <img  className='h-12' src={assets.support_img} alt="" />
        <p className='text-md text-black' >Best customer support</p>
        <p className='text-md text-gray-400 '>we provide 24/7 customer support</p>
      </div>

    </div>
  )
}

export default OurPolicy
