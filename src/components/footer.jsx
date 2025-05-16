import React from 'react'
import logo from "../assets/logo.png"

const footer = () => {
  return (
    <div>
      <div className="bg-[#222C1D] h-90 ">
        <div className="flex items-center flex-shrink-0 relative left-19 top-10">
                <img className="h-15 w-15 mr-2 relative top-5" src={logo} alt="Logo" />
                <span className="text-3xl tracking-tight font-bold relative right-3 top-8">Plantsy.</span>
        </div>

        <div className="w-80 relative left-25 top-23">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div class="grid auto-cols-[minmax(0,0.05fr)] grid-flow-col relative left-25 top-35 text-1xl font-bold">
            <div>FB</div>
            <div>TW</div>
            <div>LI</div>
        </div>

        <div className="max-w-md mx-auto relative bottom-16 left-24">
         <h2 className="text-xl font-bold mb-6">Quick Link’s</h2>
         <div className="space-y-2 text-lg">
          <div className="cursor-pointer hover:text-gray-400">Home</div>
          <div className="cursor-pointer hover:text-gray-400">Type’s Of plant’s</div>
          <div className="cursor-pointer hover:text-gray-400">Contact</div>
          <div className="cursor-pointer hover:text-gray-400">Privacy</div>
         </div>
        </div>

       
        <div className="max-w-md mx-auto relative bottom-64 left-110">
          <h2 className="text-lg font-bold mb-4">For Every Update.</h2>
         <form className="flex rounded-md overflow-hidden border border-white/60">
          <input
            type="email"
            placeholder="Enter Email"
            className="flex-1 px-4 py-2 bg-transparent text-white placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-6 py-2 hover:bg-gray-200 transition-all"
          >
            SUBSCRIBE
          </button>
          </form>
        </div>

    </div>
    </div>
   
  )
}

export default footer
