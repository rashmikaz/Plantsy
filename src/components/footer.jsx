import React from 'react'
import logo from "../assets/logo.png"

const footer = () => {
  return (
    <div>
      <div className="bg-[#222C1D] h-100 ">
        <div className="flex items-center flex-shrink-0 relative left-13 top-10">
                <img className="h-15 w-15 mr-2 relative top-5" src={logo} alt="Logo" />
                <span className="text-3xl tracking-tight font-bold relative right-3 top-8">Plantsy.</span>
        </div>

        <div className="w-80 relative left-17 top-23">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

      </div>
    </div>
  )
}

export default footer
