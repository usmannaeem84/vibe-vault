import React, { useContext, useEffect, useState } from 'react';
import TotalAmount from '../Components/TotalAmount';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { ProductContext } from '../Context/Context';
import axios from 'axios';


const PlaceOrder = () => {
  const { navigate, clearCart, cartItems, setCartItems, BackendUrl, token, getTotalAmount, deliveryFee, products } = useContext(ProductContext);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',


  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(prev => ({ ...prev, [name]: value }))
  }


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Gather data from the cart
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      // Create the orderData object
      let orderData = {

        address: formData,
        items: orderItems,
        amount: getTotalAmount() + deliveryFee,
        paymentMethod: method,


      };

      switch (method) {

        case "COD":
          const response = await axios.post(BackendUrl + "/api/order/place", orderData, { headers: { token } })
          console.log(response.data);
          if (response.data.success) {
            setCartItems({})
            navigate("/my-order")
          } else {
            toast.error(response.data.message)
          }
          break;
        case 'STRIPE':
          const responseStripe = await axios.post(BackendUrl + '/api/order/stripe', orderData,{headers:{token}});
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;

            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);

          }
          break;

        default:
          break;

      }



    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error(error.message)
    }
  };




  const [method, setMethod] = useState("COD")

  return (


    <form onSubmit={onSubmitHandler} className="flex flex-col lg:flex-row justify-between gap-8 p-8">

      {/* Left side - Delivery Information */}
      <div className="left w-full sm:w-[40%]">
        <div className="text-xl sm:text-2xl font-medium">
          <div className="flex flex-col gap-1 mb-8">
            <div className="flex gap-2 items-center">
              <p className="text-xl sm:text-2xl permanent font-medium text-yellow-500">DELIVERY</p>
              <p className="text-xl sm:text-2xl permanent font-medium">INFORMATION</p>
              <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        {/* Delivery Form */}

        <div className=" flex gap-4 flex-col">

          <div className='flex gap-3'>
            <input onChange={onChangeHandler} required name='firstName' value={formData.firstName} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='First Name' />
            <input onChange={onChangeHandler} required name='lastName' value={formData.lastName} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Last Name' />
          </div>
          <input onChange={onChangeHandler} required name='email' value={formData.email} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="email" placeholder='Email address' />
          <input onChange={onChangeHandler} required name='street' value={formData.street} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Street' />
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} required name='city' value={formData.city} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='City' />
            <input onChange={onChangeHandler} required name='state' value={formData.state} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input onChange={onChangeHandler} required name='zipCode' value={formData.zipCode} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number" placeholder='ZipCode' />
            <input onChange={onChangeHandler} required name='country' value={formData.country} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Country' />
          </div>
          <input onChange={onChangeHandler} required name='phone' value={formData.phone} className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number" placeholder='Phone' />

        </div>



      </div>

      {/* Right side - Cart Totals and Payment Method */}
      <div className="right w-full sm:w-[45%]">
        <TotalAmount />

        {/* Payment Method */}
        <div className="method mt-12 flex flex-col ">

          <div className="flex flex-col gap-1 mb-8">
            <div className="flex gap-2 items-center">
              <p className="text-lg sm:text-xl font-medium permanent text-gray-500">PAYMENT</p>
              <p className="text-lg sm:text-xl permanent font-medium">METHOD</p>
              <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
            </div>
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">

            <div onClick={() => setMethod("STRIPE")} className="payM flex gap-5 w-full sm:w-[60%] items-center px-3 py-2 border border-gray-200">
              <div className={`circle border ${method === "STRIPE" ? "bg-green-400" : ""}  w-3 h-3 rounded-full`}></div>
              <img className="h-6" src={assets.stripe_logo} alt="Stripe" />
            </div>

           

            <div onClick={() => setMethod("COD")} className="flex gap-5 w-full  sm:w-[85%]  items-center px-3 py-2 border border-gray-200">

              <div className={`circle border ${method === "COD" ? "bg-green-400" : ""} w-3 h-3 rounded-full`}></div>
              <p className='text-base text-gray-700'>CASH ON DELIVERY</p>
            </div>

          </div>
          <button type='submit' className="mt-8 w-full sm:w-40 bg-yellow-600  text-white py-2 px-5 text-sm sm:text-base font-semibold">PLACE ORDER</button>
        </div>


      </div>
    </form>
  );
};

export default PlaceOrder;