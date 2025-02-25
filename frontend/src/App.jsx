import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from "./Pages/Product"
import Verify from './Pages/Verify'
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import PlaceOrder from "./Pages/PlaceOrder"
import MyOrder from "./Pages/MyOrder"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div  className=' min-h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  '>
      <ToastContainer></ToastContainer>
      <Navbar/>
      <SearchBar></SearchBar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/my-order' element={<MyOrder/>} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
  <Footer></Footer>
    </div>
  )
}

export default App
