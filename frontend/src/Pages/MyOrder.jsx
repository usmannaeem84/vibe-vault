import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../Context/Context';
import axios from 'axios';

const MyOrder = () => {
  const { BackendUrl, token, currency } = useContext(ProductContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(BackendUrl + "/api/order/userorders", {}, { headers: { token } });
      if (response.data.success) {
        let allOrdersData = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = new Date(order.date).toDateString(); // Format the date
            allOrdersData.push(item);
          });
        });

        setOrderData(allOrdersData.reverse());
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">
      <div className="flex flex-col gap-1 mb-8">
        <div className="flex gap-2 items-center">
          <p className="text-xl sm:text-2xl font-medium text-gray-500 ">MY</p>
          <p className="text-xl sm:text-2xl font-medium ">ORDERS</p>
          <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Dynamically render each order */}
      {orderData.length > 0 ? (
        orderData.map((item, index) => (
          <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={item.image[0]} // Replace with the appropriate image URL or use a default
                alt={item.name || 'Product Image'}
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-1">
                  Date: <span className="text-gray-400">{item.date}</span>
                </p>
                <p className="mt-1">
                  Payment: <span className="text-gray-400">{item.paymentMethod}</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className="text-sm md:text-base">{item.status}</p>
              </div>
              <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default MyOrder;
