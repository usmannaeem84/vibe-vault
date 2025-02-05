import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/Context'
import ProductItem from '../Components/ProductItem'
import { assets } from '../assets/assets'



const Collection = () => {
  const [visible, setVisible] = useState(false)
  const [filterProd, setFilterProd] = useState([])
  const [category, setCategory] = useState([])
  const [type, setType] = useState([])
  const [sortType, setSortType] = useState("relavent")
  const { products,search,showSearch } = useContext(ProductContext)



  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => (item !== e.target.value)))
    }
    else {
      setCategory((prev) => ([...prev, e.target.value]))
    }
  }


  const toggleType = (e) => {

    if (type.includes(e.target.value)) {
      setType(type.filter((item) => (item !== e.target.value)))
    }
    else {
      setType((prev) => ([...prev, e.target.value]))
    }

  }


  const filterApply = () => {

    let prodCopy = products.slice()

    if (category.length > 0) {
      prodCopy = prodCopy.filter((item) => (category.includes(item.category)))
    }


    if (type.length > 0) {
      prodCopy = prodCopy.filter((item) => (type.includes(item.subCategory)))
    }

if(showSearch && search){
  prodCopy = prodCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
}
    setFilterProd(prodCopy)
  }


  useEffect(() => {
    filterApply()
  }, [category, type,search,showSearch,products])


  useEffect(() => {
    Sort()
  }, [sortType])


  const Sort = () => {

    let fpCopy = filterProd.slice()

    switch (sortType) {

      case "low-high":
        setFilterProd(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case "high-low":
        setFilterProd(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        filterApply()
        break;
    }

  }

  return (
    <div className='my-5 flex gap-12 flex-col sm:flex-row '>


      <div className="left  flex flex-col ">

        <div onClick={() => setVisible(prev => (!prev))} className="FilterHead">

          <div className='flex items-center gap-2'>
            <p className='text-md sm:text-2xl '>FILTERS</p>

            <img src={assets.dropdown_icon} className={`${visible ? "rotate-90" : ""} sm:hidden h-4`} alt="" />
          </div>


        </div>

        <div className={`Category w-full sm:w-44  flex flex-col border border-gray-300 my-2 p-5 ${visible ? "" : "hidden"} sm:block border-gray-300`}>
          <p className='text-sm'>CATEGORIES</p>
          <div className="option flex flex-col gap-3 mt-3">
            <p className='flex gap-2 text-sm'><input onChange={toggleCategory} type="checkbox" name="" id="" value={'Men'} />Men</p>
            <p className='flex gap-2 text-sm'><input onChange={toggleCategory} type="checkbox" name="" id="" value={'Women'} />Women</p>
            <p className='flex gap-2 text-sm'><input onChange={toggleCategory} type="checkbox" name="" id="" value={'Kids'} />Kids</p>
          </div>
        </div>
        <div className={`Category w-full sm:w-44 flex flex-col border-gray-300 border my-3 p-5 ${visible ? "" : "hidden"} sm:block`}>
          <p className='text-sm'>TYPE</p>
          <div className="option flex flex-col gap-3 mt-3">
            <p className=' flex gap-2 text-sm'><input onChange={toggleType} type="checkbox" name="" id="" value={'Topwear'} />Top wear</p>
            <p className='flex gap-2 text-sm'><input onChange={toggleType} type="checkbox" name="" id="" value={'Bottomwear'} />Bottom wear</p>
            <p className=' flex gap-2 text-sm'><input onChange={toggleType} type="checkbox" name="" id="" value={'Winterwear'} />Winter wear</p>
          </div>
        </div>


      </div>
      <div className="right flex flex-col ">

        <div className='flex justify-between sm:flex-row sm:gap-0 gap-4 flex-col mb-5 '>

          <div className="latestText flex gap-2 items-center">
            <p className='text-xl sm:text-3xl  font-medium text-gray-500'>ALL</p>
            <p className='text-xl sm:text-3xl  font-medium' >COLLECTIONS</p>
            <p className='w-9 sm:w-11 h-[2px] bg-black'></p>
          </div>
          <div className="sort">
            <select onChange={(e) => setSortType(e.target.value)} className='p-2 sm:p-3 ' name="" id="">
              <option className='text-xs sm:text-sm' value="relavent">Sort by : Relavent</option>
              <option className='text-xs sm:text-sm' value="low-high">Sort by : Low to high</option>
              <option className='text-xs sm:text-sm' value="high-low">Sort by : High to low</option>
            </select>
          </div>
        </div>

        <div className="w-full  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-7">
          {
            filterProd.map((product,index) => (
              <ProductItem key={index} product={product} />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Collection
