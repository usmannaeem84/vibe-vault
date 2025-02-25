import React, { useContext, useEffect ,useState} from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { ProductContext } from '../Context/Context'

const BestSeller = () => {
const {products} = useContext(ProductContext)
console.log(products);


    const [BestSeller,setBestSeller] = useState([])
    
    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((prod) => prod.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, [products]);
    console.log(BestSeller);


    return (
        <div className="main flex flex-col items-center justify-center py-10 my-8">

            <Title titleOne="BEST" titleTwo="COLLECTION" ></Title>

            <div className="LatestProducts grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  md:grid-cols-4 gap-4 gap-y-7">
                {
                    BestSeller.map((product) => {
                        return <ProductItem key={product._id} product={product}></ProductItem>
                    })
                }
            </div>

        </div>
    )
}


export default BestSeller
