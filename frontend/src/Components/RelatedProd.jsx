import React, { useContext,useEffect,useState } from 'react'
import { ProductContext } from '../Context/Context'
import ProductItem from './ProductItem'

const RelatedProd = ({ category, subCategory }) => {

    const { products } = useContext(ProductContext)
    const [related, setRelated] = useState([]);

    const FindRelated = () => {
        let prodCopy = products.slice();

        if (products.length > 1) {

            prodCopy = prodCopy.filter((item) => (item.category === category))
            prodCopy = prodCopy.filter((item) => (item.subCategory === subCategory))
            setRelated(prodCopy.slice(0, 5))
           
            console.log(related);
            
        }

    }

    useEffect(()=>{
FindRelated()
    },[products])

    return (
        <div className='flex flex-col gap-12'>

            <div className="title flex items-center justify-center">
                <div className="latestText flex gap-2 items-center">
                    <p className='text-2xl sm:text-3xl font-medium permanent text-gray-500'>RELATED</p>
                    <p className='text-2xl sm:text-3xl permanent font-medium' >PRODUCTS</p>
                    <p className='w-9 sm:w-11 h-[2px] bg-black'></p>
                </div>
            </div>

            <div className="LatestProducts grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  md:grid-cols-4 gap-4 gap-y-7">
{
    related.map((item,index)=>(
        <ProductItem key={index} product={item}></ProductItem>
    ))
}
            </div>


        </div>
    )
}

export default RelatedProd
