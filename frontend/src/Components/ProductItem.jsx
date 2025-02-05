import React, { useContext } from 'react'
import { ProductContext } from '../Context/Context'
import { NavLink } from 'react-router-dom'

const ProductItem = ({ product }) => {
    const {currency} = useContext(ProductContext) 
    return (
        <NavLink to={`/product/${product._id}`} className='flex flex-col gap-3 cursor-pointer'>

            <div className="overflow-hidden">
                <img className='hover:scale-110 transition ease-in-out' src={product.image[0]} alt="" onClick={()=>window.scrollTo(0,0)} />
            </div>
            <p className="name text-sm font-medium text-gray-700">{product.name}</p>
            <p className="price text-sm font-semibold -mt-[0.4rem] text-gray-700">{currency + product.price}</p>

        </NavLink>
    )
}

export default ProductItem
