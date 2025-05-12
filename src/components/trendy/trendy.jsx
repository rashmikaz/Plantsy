import React from 'react'
import "./trendy.css";

const trendy = () => {
  return (
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
              className="py-3 px-9 mx-5 rounded-md border relative bottom-103 left-5"
              >
              Explore
              </a>
            </div>
       
        
      
         </div>
      </div>
    </div>
  )
}

export default trendy
