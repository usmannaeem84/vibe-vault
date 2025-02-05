import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 mt-16' >
      <p className='text-xl font-medium sm:text-2xl'>Subscribe now & get 20% off</p>
      <p className='text-sm sm:text-base text-center  text-gray-400' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <div className="input w-full sm:w-1/2 flex items-center justify-between border my-2" >
        <input className='text-sm sm:text-base outline-none w-[80%] text-gray-500 pl-4' type="text" placeholder='Enter your email'/>
        <button className='text-gray-300 bg-black px-5 py-3 text-sm sm:text-base'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default NewsLetter
