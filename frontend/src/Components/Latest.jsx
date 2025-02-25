import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/Context';
import Title from './Title';
import ProductItem from './ProductItem';

const Latest = () => {

   const {products} = useContext(ProductContext)
const [latestProducts,setLatestProducts]=useState([])


useEffect(()=>{
    setLatestProducts(products.slice(0,10))
},[products])

  return (
   <div className="main flex flex-col items-center justify-center py-8 my-4">

<Title titleOne="LATEST" titleTwo="COLLECTION" ></Title>

<div className="LatestProducts grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  md:grid-cols-4 gap-4 gap-y-7">
    {
        latestProducts.map((product)=>{
          return <ProductItem key={product._id} product={product}></ProductItem>
        })
    }
    </div>

</div>
  )
}

export default Latest
