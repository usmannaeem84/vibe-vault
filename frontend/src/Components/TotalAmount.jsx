import React, { useContext } from 'react'
import { ProductContext } from '../Context/Context'


const totalAmount = () => {
    const {getTotalAmount,deliveryFee,currency} = useContext(ProductContext)
  return (
    <div className='w-full'>

    <div>
      <div className="flex flex-col gap-1 mb-6">
        <div className="flex gap-2 items-center">
          <p className="text-xl sm:text-2xl font-medium permanent text-gray-500">CART</p>
          <p className="text-xl sm:text-2xl permanent font-medium">TOTAL</p>
          <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
        </div>
      </div>
    </div>

<div className=' total  flex flex-col   text-sm sm:text-base mt-2'>
    <div className=" py-2 flex items-center justify-between">
        <p>Subtotal</p>
        <p className=''>{currency}{getTotalAmount()+".00"}</p>
    </div>
    <div className="border-t border-b border-gray-200 py-2 flex items-center justify-between">
        <p>Shipping Fee</p>
        <p className=''>{currency}{deliveryFee+".00"}</p>
    </div>
    <div className=" py-2 flex items-center font-bold justify-between">
        <p>Total</p>
        <p className=''>{currency} { getTotalAmount() > 0 ? getTotalAmount()+deliveryFee+".00": "0.00" }</p>
    </div>
</div>



    </div>
  )
}

export default totalAmount
