import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from "axios"
import { BackendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {


  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)


  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])


  useEffect(()=>{
    console.log(JSON.stringify(sizes));

  },[sizes])


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {

      const formData = new FormData();

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestSeller", bestSeller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)
      

      const response = await axios.post(BackendUrl + '/api/product/add', formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setSizes([])
        setBestSeller(false)
       
      }
      else{
        toast.error(response.data.message )
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message + "hello")

    }
  }



  return (
    <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">

        {/* Image Upload Section */}
        <div>
          <p className="mb-2">Upload Image</p>
          <div className="flex gap-2">
            <label htmlFor="image1">
              <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="Upload 1" />
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>
            <label htmlFor="image2">
              <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="Upload 2" />
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>
            <label htmlFor="image3">
              <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="Upload 3" />
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>
            <label htmlFor="image4">
              <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="Upload 4" />
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className="w-full">
          <p className="mb-2">Product name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2"
            type="text"
            placeholder="Type here"
            required
            value={name}
          />
        </div>

        {/* Product Description */}
        <div className="w-full">
          <p className="mb-2">Product description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2"
            placeholder="Write content here"
            required
            value={description}
          ></textarea>
        </div>

        {/* Category and Sub-category */}
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          <div>
            <p className="mb-2">Product category</p>
            <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="mb-2">Sub category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2">
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* Product Price */}
          <div>
            <p className="mb-2">Product Price</p>
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 sm:w-[120px]"
              type="number"
              placeholder="25"
              value={price}
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div>
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
                <p className={` ${sizes.includes(size) ? "bg-pink-200" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>{size}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bestseller Option */}
        <div className="flex gap-2 mt-2">
          <input onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id="bestseller" />
          <label className="cursor-pointer" htmlFor="bestseller">Add to bestseller</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-28 py-3 mt-4 bg-black text-white">
          ADD
        </button>
      </form>
    </div>
  )
}

export default Add

