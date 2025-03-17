import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/Context'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import RelatedProd from '../Components/RelatedProd'



const Product = () => {

  const { productId } = useParams()
  const { products, currency,AddCart } = useContext(ProductContext)
  const [image, setImage] = useState('')
  const [productData, setProductData] = useState(false)
  const [size, setSize] = useState("")

  const fetchData = async () => {

    products.map((item) => {

      if (item._id === productId) {

        setProductData(item)
        setImage(item.image[0])
        return null
      }

    })

  }

  useEffect(() => {

    fetchData()

  }, [productId, products])

  return productData ? (

    <div className='flex flex-col gap-12 justify-center pt-10  border-t-2 transition-opacity ease-in duration-500 opacity-100  '>
    <div className='flex justify-center flex-col sm:flex-row sm:gap-0 gap-6 '>

  {/* images */}

      <div className="left flex flex-col-reverse sm:flex-row flex-1 gap-2 w-full sm:w-1/2">
        <div className="smallImages  flex  overflow-x-auto  sm:flex-col justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {productData.image.map((image) => (
            <img onClick={() => setImage(image)} className='w-[24%] cursor-pointer sm:mb-3 sm:w-full flex-shrink-0' src={image} alt="" />
          ))}

        </div>

        <div className="bigImages w-full sm:w-[70%]">
          <img className='w-full h-auto' src={image} alt="" />
        </div>

      </div>
      <div className="right flex-1">

{/* products details */}

        <p className='text-2xl font-medium'>{productData.name}</p>

        <div className="stars flex gap-1 my-4">

          <img className='w-3' src={assets.star_icon} alt="" />
          <img className='w-3' src={assets.star_icon} alt="" />
          <img className='w-3' src={assets.star_icon} alt="" />
          <img className='w-3' src={assets.star_icon} alt="" />
          <img className='w-3' src={assets.star_dull_icon} alt="" />

        </div>

        <div className="price text-2xl font-semibold">{currency + productData.price}</div>
        <p className='my-4 text-lg text-gray-500'>{productData.description}</p>


        <div className="size">
          <p className='text-lg'>Select size</p>
          <div className="sizes flex gap-4 items-center my-3">

            {
              productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={` bg-gray-200 border-0 py-2 border-2 ${size === item ? "border-yellow-600" : ""} px-4`} >{item}</button>
              ))
            }

          </div>
        </div>
       
          <button onClick={()=>AddCart(productData._id ,size)} className='bg-yellow-600  active:bg-yellow-700 text-white text-base my-6 px-5 py-3'>ADD TO CART</button>
        
        <hr className='h-[1.1px] bg-gray-500 my-4' />
        <p className='text-sm text-gray-500'>100% Original product.</p>
        <p className='text-sm text-gray-500'>Cash on delivery is available on this produc</p>
        <p className='text-sm text-gray-500'>Easy return and exchange policy within 7 days.</p>
      </div>


    
    </div>

    {/*  deciption */}

      <div className="desc mt-8">

<div className="text flex items-center  ">
  <b className='border-gray-300 border  p-3 '>Description</b>
  <p className='border-gray-300 border  p-3 '>Reviews (122)</p>
</div>
<div className="decInfo border border-gray-300 p-5">

<p className='text-gray-500 text-base my-2'>Step up your fashion game with Vibe Vault’s premium apparel, where comfort meets trendsetting style. Designed for those who love to stand out, our clothing blends high-quality fabrics, perfect fits, and timeless designs to keep you looking fresh no matter the occasion. Whether you're dressing up for a night out or keeping it casual, our versatile pieces adapt to your vibe effortlessly.</p>

<p className='text-gray-500 text-base my-2'>Upgrade your wardrobe with Vibe Vault’s premium collection—crafted for comfort, designed for style. Whether you're going for a laid-back casual look or a bold statement outfit, our high-quality fabrics and perfect fits ensure you stay ahead in fashion. Elevate your vibe, embrace the trend, and make every outfit count!</p>


</div>
      </div>

{/* related products */}


<RelatedProd category={productData.category} subCategory={productData.subCategory} ></RelatedProd>


    </div>





  ) : <div className='opacity-0' ></div>

}

export default Product
