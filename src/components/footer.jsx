import React from 'react'
import logo from "../assets/logo.png"

const footer = () => {
  return (
    <div>
      <div className="bg-[#222C1D] h-90 ">
        <div className="flex items-center flex-shrink-0 relative left-28 top-10">
                <img className="h-15 w-15 mr-2 relative top-5" src={logo} alt="Logo" />
                <span className="text-3xl tracking-tight font-bold relative right-3 top-8">Plantsy.</span>
        </div>

        <div className="w-80 relative left-32 top-23">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="grid auto-cols-[minmax(0,0.05fr)] grid-flow-col relative left-32 top-35 text-1xl font-bold">
            <div>FB</div>
            <div>TW</div>
            <div>LI</div>
        </div>

        <div className="max-w-md mx-auto relative bottom-16 left-43">
        <h2 className="text-xl font-bold mb-6">Quick Link’s</h2>
        <div className="space-y-2 text-lg">
          <div className="cursor-pointer hover:text-gray-400">Home</div>
          <div className="cursor-pointer hover:text-gray-400">Type’s Of plant’s</div>
          <div className="cursor-pointer hover:text-gray-400">Contact</div>
          <div className="cursor-pointer hover:text-gray-400">Privacy</div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default footer
