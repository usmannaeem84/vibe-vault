import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { BackendUrl } from "../App";
import { useContext } from 'react';

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const currency = "$ ";

  const fetchAllData = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(BackendUrl + "/api/order/list", {}, { headers: { token } });
      if (response.data.success) {
        setOrders(response.data.orders);
        console.log(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [token]);

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(BackendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } });

      if (response.data.success) {
        await fetchAllData();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Error updating status");
    }
  };

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Order Page</h3>

      <div className="space-y-4 md:space-y-6">
        {orders.reverse().map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 md:p-6 border border-gray-200"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <img src={assets.parcel_icon} alt="Parcel Icon" className="w-10 h-10 md:w-12 md:h-12 mb-2 md:mb-0" />
              <div className="flex flex-col items-start md:items-end">
                <span className="text-gray-700 font-medium">Items: {order.items.length}</span>
                <span className="text-gray-700 font-semibold">Total Amount: {currency}{order.amount}</span>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-4">
              <h5 className="font-medium text-gray-800 mb-2">Items Ordered:</h5>
              <div className="space-y-1">
                {order.items.map((item, idx) => (
                  <p key={idx} className="text-gray-600">
                    {item.name} x {item.quantity} {item.size ? `(${item.size})` : ''}
                  </p>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-4">
              <h5 className="font-medium text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </h5>
              <p className="text-gray-600">Street no: {order.address.street}</p>
              <p className="text-gray-600">
                Address: {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipCode}
              </p>
              <p className="text-gray-600">Phone: {order.address.phone}</p>
            </div>

            {/* Order Details */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-700">Method: <span className="font-medium">{order.paymentMethod}</span></p>
                <p className="text-gray-700">
                  Payment: <span className={`font-medium ${order.payment ? 'text-green-500' : 'text-red-500'}`}>
                    {order.payment ? 'Done' : 'Pending'}
                  </span>
                </p>
                <p className="text-gray-700">Date: <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span></p>
              </div>

              {/* Order Status */}
              <div className="mt-4 md:mt-0">
                <select
                  onChange={(event) => statusHandler(event, order._id)}
                  className={`p-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${order.status === 'Delivered' ? 'text-green-500 border-green-500' : ''}`}
                  defaultValue={order.status}
                >
                  <option value="Order Placed">Order Placed</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for Delivery">Out for Delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
