import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context/Context';
import { assets } from '../assets/assets';
import TotalAmount from '../Components/TotalAmount';


const Cart = () => {
  const { products, cartItems, currency, updateQuantity,navigate } = useContext(ProductContext);
  const [cartData, setCartData] = useState([]);

  let tempArray = [];

  useEffect(() => {

    if (products.length > 0) {
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            tempArray.push({
              _id: itemId,
              size: size,
              quantity: cartItems[itemId][size],
            });
          }
        }
      }
      setCartData(tempArray);
    }

  }, [cartItems,products]);

  return (
    <div className="w-full p-4">
      
      <div className="flex flex-col gap-1 mb-8">
        <div className="flex gap-2 items-center">
          <p className="text-xl sm:text-2xl permanent font-medium text-gray-500">YOUR</p>
          <p className="text-xl sm:text-2xl permanent font-medium">CART</p>
          <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
        </div>
      </div>

      {cartData.map((item) => {
        const productData = products.find((Product) => Product._id === item._id);

        return (
          <div key={item._id + item.size} className="flex justify-between items-center py-4 border-t border-b border-gray-200">
            <div className="flex gap-3 items-start ] w-[70%] sm:w-[35%]">
              <img className="w-20" src={productData.image[0]} alt={productData.name} />
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm sm:text-lg text-gray-600">{productData.name}</p>
                <div className="flex items-center gap-5">
                  <p>{currency + productData.price}</p>
                  <p className="bg-gray-100 px-3 text-sm sm:text-base py-1 border">{item.size}</p>
                </div>
              </div>
            </div>

            <input
              onChange={(e) => e.target.value === '' || e.target.value === "0" ? null : updateQuantity(productData._id, item.size, Number(e.target.value))}
              className="max-w-10 sm:max-w-20 px-2 py-1 border text-center"
              min={1}
              defaultValue={item.quantity}
              type="number"
            />

            <button className="bg-transparent border-none cursor-pointer flex items-center">

              <img className='w-5' onClick={() => updateQuantity(productData._id, item.size, 0)} src={assets.bin_icon} alt="" />
            </button>
          </div>
        );
      })}


      <div className='flex justify-end my-20' >

        <div className='w-full sm:w-[450px]'>
          <TotalAmount></TotalAmount>
          <button onClick={()=>navigate("/place-order")} className='bg-black active:bg-gray-700 text-white text-sm my-5 px-5 py-3'>PROCEED TO CHECKOUT</button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
