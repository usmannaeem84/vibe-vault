import React from 'react'
import { assets } from "../assets/assets"
import {Link} from "react-router-dom"

const Navbar = ({setToken}) => {
    return (
        <div className="flex items-center py-2 px-[4%] justify-between">
             <Link to="/">
              <h1 className="logo-font drop-shadow-[0_2px_4px_rgba(234,179,8,0.3)] animate-gradient bg-gradient-to-r from-amber-300 via-amber-600 to-yellow-700 bg-[length:200%] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter hover:skew-y-1 transition-transform duration-300 cursor-pointer">
                VibeVault.
              </h1>
            </Link>
            <button onClick={()=>setToken("")} className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">Logout</button>
        </div>
        
    )
}

export default Navbar
