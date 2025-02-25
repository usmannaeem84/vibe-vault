import React from 'react'

const Title = (props) => {
  return (
    <div  className='flex  items-center flex-col gap-1'>

    <div className="latestText  flex gap-3 items-center">
        <p className='text-3xl  sm:text-4xl font-medium text-yellow-500 '>{props.titleOne}</p>
        <p  className='text-3xl  sm:text-4xl font-medium' >{props.titleTwo}</p>
        <p className='w-9 sm:w-11 h-[2px] bg-black'></p>
    </div>
    <p className='text-gray-600  my-4 text-sm sm:text-base text-center sm:my-5'>Fresh styles, premium quality, and trending designs—shop now and elevate your wardrobe! </p>
</div>
  )
}

export default Title
