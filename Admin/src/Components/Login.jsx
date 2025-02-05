import React, { useState } from 'react'
import axios from "axios"
import { BackendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
          
            console.log(BackendUrl);
            
            const response = await axios.post(BackendUrl + "/api/user/admin",{email,password} )
            console.log(response);
            if (response.data.success) {
                setToken(response.data.token)
                
                
            }else{
                toast.error(response.data.message + "hello")
            }
            
            
        } catch (error) {
            console.log(error);
            toast.error(response.data.message)
            
        }
    }


    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div class="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 class="text-2xl font-bold mb-4">Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div class="mb-3 min-w-72">
                        <p class="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input class="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="email" placeholder="your@email.com" required=""  onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                    </div>
                    <div class="mb-3 min-w-72">
                        <p class="text-sm font-medium text-gray-700 mb-2">Password</p>
                        <input class="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="password" placeholder="Enter your password" required="" onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                    </div>
                    <button class="mt-2 w-full py-2 px-4 rounded-md text-white bg-black" type="submit"> Login </button>
                </form>
            </div>
        </div>
    )
}

export default Login
