import React, { useContext, useState , useEffect} from 'react'
import { ProductContext } from '../Context/Context'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';



const SearchBar = () => {

const [visible,setVisible] = useState(false)   

const location = useLocation();

useEffect(()=>{
if(location.pathname.includes('/collection') && showSearch){
setVisible(true)
}
else{
    setVisible(false)
}
},[location])

const {search,setSearch,showSearch,setShowSearch} = useContext(ProductContext)

  return  showSearch && visible ? (
    <div className='flex border-t-[1px] py-5 gap-3 bg-gray-50 justify-center items-center border-b-[1px]  border-gray-300 ' >
      <div  className="searchbar bg-inherit py-2 px-4 w-full sm:w-1/2 border border-gray-400 rounded-[30px] flex items-center justify-between">
        <input className='w-[80%] bg-inherit outline-none' onChange={(e)=>setSearch(e.target.value)} value={search} placeholder='Search your product' type="text" />
        <img className='w-5' src={assets.search_icon} alt="" />
      </div>
      <div className="cross">
        <img className='w-5' onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" />
      </div>

    </div>
  ): null;
}

export default SearchBar
