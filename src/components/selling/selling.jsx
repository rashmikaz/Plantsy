import React from 'react'
import "./selling.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const selling = () => {
  return (
   <div>
    <h1 className="relative bottom-25 left-120 text-6xl">Our Top Selling</h1>
     <div className="selling-card">
        
     <div className="flex flex-col items-center text-center space-y-4">
     <img src="src/assets/selling-01.png" alt="" className="relative bottom-37 size-90 " />
     <h2 className="text-xl relative bottom-45 right-10 font-thin">Calathea plant</h2>
     <p className="w-61 relative bottom-46 right-4 text-sm font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
     <h2 className="text-xl relative bottom-45 right-16 font-thin">Rs. 359/-</h2>
    
     <button className="border border-white/120 text-white p-1 rounded-md hover:bg-white/10 transition relative bottom-57 left-18">
     <HiOutlineShoppingBag className="text-xl" />
     </button>
     

 
     </div>
     </div>
   </div>
  )
}

export default selling
