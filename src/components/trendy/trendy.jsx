import React from 'react'
import "./trendy.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const trendy = () => {
  return (
    <div>
      <div className="relative bottom-40">
      <h1 className="relative bottom-45 left-120 text-6xl">Our Trendy plants</h1>
      <div className="glass-card-1">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="src/assets/trendy-01.png" alt="" className="relative right-95 bottom-35" />
            <div>
              <h1 className="text-4xl relative bottom-120 left-35">For Small Decs Ai Plat</h1>
              <p className="w-140 relative bottom-115 left-60 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h1 className="text-4xl relative bottom-110 left-8">Rs. 599/-</h1>

              <a 
              href="#" 
              role="button"
              aria-label="View References"
              className="py-3 px-9 mx-5 rounded-md border relative bottom-103 left-11"
              >
              Explore
              </a>
              <button className="border border-white/120 text-white p-3 rounded-md hover:bg-white/10 transition relative bottom-102 left-11">
              <HiOutlineShoppingBag className="text-xl" />
              </button>

            </div>
       
        
      
         </div>
      </div>
    </div>


    <div className="relative bottom-12">
      <div className="glass-card-1">
          <div className="flex flex-col items-center text-center space-y-4">
            <img src="src/assets/trendy-02.png" alt="" className="relative left-90 bottom-35" />
            <div className="relative right-120">
              <h1 className="text-4xl relative bottom-120 left-35">For Fresh Decs Ai Plat</h1>
              <p className="w-140 relative bottom-115 left-60 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <h1 className="text-4xl relative bottom-110 left-8">Rs. 599/-</h1>

              <a 
              href="#" 
              role="button"
              aria-label="View References"
              className="py-3 px-9 mx-5 rounded-md border relative bottom-103 left-11"
              >
              Explore
              </a>
              <button className="border border-white/120 text-white p-3 rounded-md hover:bg-white/10 transition relative bottom-102 left-11">
              <HiOutlineShoppingBag className="text-xl" />
              </button>

            </div>
       
        
      
         </div>
      </div>
    </div>
    </div>
  )
}

export default trendy
