import React from 'react'

const Title = (props) => {
  return (
    <div  className='flex  items-center flex-col gap-1'>

    <div className="latestText  flex gap-2 items-center">
        <p className='text-2xl permanent sm:text-3xl font-medium text-gray-500'>{props.titleOne}</p>
        <p  className='text-2xl permanent sm:text-3xl font-medium' >{props.titleTwo}</p>
        <p className='w-9 sm:w-11 h-[2px] bg-black'></p>
    </div>
    <p className='text-gray-600 italic my-4 text-sm sm:text-base text-center sm:my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quam quos magni fugiat voluptatem. Deleniti?</p>
</div>
  )
}

export default Title
