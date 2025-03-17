import React, { createContext,useEffect,useState } from "react";
import { products } from "../assets/assets.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios"




export const ProductContext = createContext();

const ProductContextProvider = (props) => {




const currency = "$ "
const deliveryFee = 10; 

const BackendUrl = import.meta.env.VITE_BACKEND_URL

const [search , setSearch] = useState("")
const [showSearch , setShowSearch] = useState(false)
const [cartItems,setCartItems] = useState({})
const navigate = useNavigate()
const [token,setToken] = useState("")
// const [products,setProducts] = useState([])


const AddCart = async (itemId,size)=>{

  let cart = structuredClone(cartItems)

    if (!size) {
        toast.error("Select Product Size")
        return;
    }

if (cart[itemId]) {
    if (cart[itemId][size]) {
        cart[itemId][size] += 1;
    }else{
        cart[itemId][size] = 1;
    }
    
}else{
    cart[itemId] = {};
  cart[itemId][size]=1;
}




setCartItems(cart);

toast.success(
    <div>
  Item added to cart.{" "}
  <NavLink onClick={()=>scrollTo(0,0)} className="text-green-600 border-b-[1px] border-green-600" to="/cart">
    Go to cart
  </NavLink>
</div>
)

if (token) {
    try {
        await axios.post(BackendUrl + "/api/cart/add", {itemId,size},{ headers : {token}})
       
    } catch (error) {
        console.log(error);
        toast.error(error.message)
        
    }
}


};

function getTotalCart(){

    let totalCartQuant = 0;
    for (const items in cartItems) {
       for (const item in cartItems[items]) {
        try {     
            if (cartItems[items][item] > 0) {
                
            }
            totalCartQuant += cartItems[items][item]
                
         
        } catch (error) {
            
        }
       
       }
    }
    return totalCartQuant;
}

async function updateQuantity(itemId,size,quantity){

    const cartData = structuredClone(cartItems) 
 
       cartData[itemId][size]=quantity
    
    setCartItems(cartData)

    if (token) {

        try {

            await axios.post(BackendUrl + "/api/cart/update",{itemId,size,quantity},{headers:{token}})
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
        
    }
}

function getTotalAmount(){
let totalAmount=0;
for (const itemID in cartItems) {
 
    const prodInfo = products.find((product)=>itemID===product._id)

    for (const item in cartItems[itemID]) {
        try {
            if (cartItems[itemID][item] > 0) {
                
                totalAmount += prodInfo.price * cartItems[itemID][item]  
            }
        } catch (error) {
            
        }
    }

}

return totalAmount;
}

function clearCart() {

    let clearedCart = structuredClone(cartItems);
  
    for (const itemID in clearedCart) {
      for (const size in clearedCart[itemID]) {
        clearedCart[itemID][size] = 0;
      }
    }
  
    setCartItems(clearedCart);

}


// const fetchingProduct = async () => {

//     try {
//         const response = await axios.get( BackendUrl + '/api/product/list')
//         if (response.data.success) {
//             toast.error(response.data.message)
//             setProducts(response.data.products)
//         }  else{
//             toast.error(response.data.message)
//         }



//     } catch (error) {
//         console.log(error);
//         toast.error(error)
        
//     }

// }


const getUserCart = async (token) => {

    try {
        const response = await axios.post( BackendUrl + "/api/cart/get",{},{headers:{token}})
        if (response.data.success) {
            toast.error(response.data.message)
            setProducts(response.data.product)
        }  else{
            toast.error(response.data.message)
        }



    } catch (error) {
        console.log(error);
        toast.error(error)
        
    }

}



// useEffect(()=>{
//     fetchingProduct()
// },[])


useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'))
        getUserCart()
    }
},[])





    const contextValue = {products,currency,deliveryFee,getTotalAmount,cartItems,search,setSearch,updateQuantity,showSearch,getTotalCart,setShowSearch,AddCart,navigate,clearCart,BackendUrl,token,setToken,setCartItems}

    return (

        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>

    )

}
export default ProductContextProvider;