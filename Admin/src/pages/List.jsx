import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BackendUrl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../Context';



const List = ({ token }) => {
const navigate = useNavigate()
  const [list, setList] = useState([])

  const {updateID,setUpdateID} = useContext(ProductContext)

  const FetchingList = async () => {

    try {

      const response = await axios.get(BackendUrl + '/api/product/list')

      if (response.data.success) {
        setList(response.data.products)

      }

    } catch (error) {
      console.log(error);
      toast.error(error)
    }

  }

  useEffect(() => {
    FetchingList()
  }, [token])

  const removeProduct = async (id) => {

    try {
      const response = await axios.post(BackendUrl + "/api/product/remove", { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.success)
        await FetchingList()
      } else {
        toast.error(response.data.message)
        console.log("error");

      }



    } catch (error) {
      toast.error(error)
      console.log(error);


    }


  }



  return (
    <div>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b className="text-center">Action</b>
        </div>
        {list.map((product) => (
          <div key={product._id} className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm">
            <img className="w-12" src={product.image[0]} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
            
            <div className="flex items-center gap-8 justify-end md:justify-center">
              <button 
                onClick={() => updateProduct(product._id)}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-sm"
              >
                Update
              </button>
              <p 
                onClick={() => removeProduct(product._id)} 
                className="cursor-pointer text-lg hover:text-red-600"
              >
                X
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default List;
