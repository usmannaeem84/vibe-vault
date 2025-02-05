import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/Context'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
    const { navigate, token, setCartItems, BackendUrl } = useContext(ProductContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null;
            }
    
            console.log("Success parameter:", success, "Order ID:", orderId);
    
    
            const response = await axios.post(BackendUrl + "/api/order/verifyStripe" ,{ success, orderId }, { headers: { token } } );
    
            console.log("Verification Response:", response.data);
    
            if (response.data.success) {
                setCartItems({});
                navigate("/my-order");
            } else {
                navigate("/cart");
            }
        } catch (error) {
            console.error("Payment verification error:", error);
            toast.error(error.response?.data?.message || "Payment verification failed");
        }
    };
    useEffect(() => {
        if (token) {
            verifyPayment();
        }
    }, [token]);

    return (
        <div>
            {/* Additional component code */}
        </div>
    );
};

export default Verify;
