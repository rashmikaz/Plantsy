// import { Menu, X } from "lucide-react";
// import { useState } from "react";
import { navItems } from "../constants/index";
import logo from "../assets/logo.png"

const Navbar = () => {

    

 

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Plantsy.</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            
            <a
              href="#"
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-2 px-3 rounded-md shadow-md transform hover:scale-105 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 ease-in-out"




            >
            Talk to Us
            </a>
          </div>

         
        </div>
       
     </div>
         
    </nav>
  );
};

export default Navbar;