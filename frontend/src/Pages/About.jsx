import React from 'react'
import { assets } from '../assets/assets'
import NewsLetter from "../Components/NewsLetter"

const About = () => {
  return (
    <div className="main flex flex-col  gap-3 py-4">

      <div className="flex flex-col gap-1 mb-8 items-center">
        <div className="flex gap-2 items-center">
          <p className="text-2xl sm:text-3xl font-medium permanent text-gray-500">ABOUT</p>
          <p className="text-2xl sm:text-3xl font-medium permanent">US</p>
          <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
        </div>
      </div>

      <div className='flex sm:flex-row sm:gap-0 gap-6 flex-col  justify-center '>

        <div className="left w-full sm:w-[45%]">
        <img className='w-full sm:w-[90%] h-auto' src={assets.about_img} alt="" />
        </div>

        <div className="right flex flex-col w-full sm:w-[65%] items-start gap-8 sm:text-xl  text-gray-500 text-base">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <p className='font-semibold'>Misson</p>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>
<NewsLetter></NewsLetter>
    </div>
  )
}

export default About
