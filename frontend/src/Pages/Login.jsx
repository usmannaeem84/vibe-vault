import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductContext } from '../Context/Context';
import axios from "axios"



const Login = () => {


  const { token, setToken, BackendUrl, navigate } = useContext(ProductContext)
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")





  // Function to toggle between Login and Sign Up
  const toggleState = () => {
    setCurrentState(currentState === "Login" ? "Sign Up" : "Login");
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      if (currentState === "Sign Up") {

        const response = await axios.post(BackendUrl + '/api/user/register', { name, email, password })

        if (response.data.success) {
          setToken(response.data.token)
          toast.success(response.data.message)
          localStorage.setItem("token", response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {

        const response = await axios.post(BackendUrl + '/api/user/login', { email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message );
        }
      }



    } catch (error) {

      console.log(error + "hello");
      toast.error(error.message);
    }

  };

useEffect(()=>{
  if (token) {
    navigate('/')
  }
},[token])



  return (
    <div className='flex items-center justify-center '>
      <div className='flex flex-col items-center justify-center w-full sm:w-[28%] gap-5 mt-12'>

        {/* Title and underline */}
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex gap-2 items-center">
            <p className="text-2xl prata sm:text-3xl font-medium">{currentState}</p>
            <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
          </div>
        </div>

        {/* Form Fields */}
        <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
          {currentState === "Sign Up" && (
            <input
              className='border border-gray-500 px-2 py-2 text-base'
              type="text"
              placeholder='Name'
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
          )}
          <input
            className='border border-gray-500 px-2 py-2 text-base'
            type="text"
            placeholder='Email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
          />
          <input
            className='border border-gray-500 px-2 py-2 text-base'
            type="password"
            placeholder='Password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />

          {/* Submit Button */}
          <button type="submit" className='mt-2 w-full bg-black text-white px-4 py-3 '>
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Links */}
        <div className='flex items-center justify-between w-full'>
          {currentState === "Login" && <p className='text-black cursor-pointer'>Forgot password?</p>}
          <p
            className='text-black cursor-pointer'
            onClick={toggleState}
          >
            {currentState === "Login" ? "Create account" : "Already have an account?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
