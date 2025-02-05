import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from "./pages/Add"
import List from "./pages/List"
import Order from "./pages/Order"
import Login from './Components/Login'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BackendUrl = import.meta.env.VITE_BACKEND_URL


const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token',token)
    // console.log(token);
    
  }, [token])


  return (
    <div className='bg-gray-50 min-h-screen'>

         
      <ToastContainer/>
        {token === "" ? <Login setToken={setToken} /> : <div>
          <div>
            <Navbar setToken={setToken}></Navbar>
            <hr />
          </div>

          <div className='flex w-full'>
            <Sidebar></Sidebar>
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/order' element={<Order token={token} />} />
               
               
              </Routes>
            </div>
          </div>
        </div>

        }
    </div>
  )
}

export default App
