import React, { createContext,useEffect,useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [updateID,setUpdateID] = useState("")

       const contextValue = {updateID,setUpdateID}
    
        return (
    
            <ProductContext.Provider value={contextValue}>
                {props.children}
            </ProductContext.Provider>
    
        )
    
    }
    export default ProductContextProvider;