import React from 'react';
import logo from "../../assets/Bannar/Logo-png 1.png";
import kk from "../../assets/Bannar/11.svg";
import kkk from "../../assets/Bannar/Saudi.svg";
import login from "../../assets/Bannar/user.svg";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white fixed z-[9999] w-full inset-x-0 top-0 text-black border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          
          <div className="flex items-center">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-8 md:h-12" alt="Flowbite Logo" />
            </a>
          </div>

          
          <button 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-language"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          
          <div className="hidden w-full md:block md:w-auto" id="navbar-language">
            <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 lg:space-x-2 p-4 md:p-0">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#365327]">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-[#717A76] hover:text-[#365327]">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-[#717A76] hover:text-[#365327]">Products</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-[#717A76] hover:text-[#365327]">How It Works</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-[#717A76] hover:text-[#365327]">Contact Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-[#717A76] hover:text-[#365327]">Membership</a>
              </li>
            </ul>
          </div>

          
          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="flex items-center gap-2 border-2 border-[#365327] text-[#365327] rounded-lg px-3 py-1 md:px-4 md:py-2 hover:bg-[#365327] hover:text-white">
              العربيه
              <img src={kkk} className="w-5 h-5" alt="" />
              <img src={kk} className="w-5 h-5" alt="" />
            </button>
            
            <button type="button" className="text-white bg-[#365327] border-2 border-[#365327] hover:bg-white hover:text-[#365327] rounded-lg text-sm px-3 py-1 md:px-4 md:py-2">
              Create Account
            </button>
           
            <button className="flex items-center gap-2 border-2 border-[#365327] text-[#365327] rounded-lg px-3 py-1 md:px-4 md:py-2 hover:bg-[#365327] hover:text-white">
              <img src={login} className="w-5 h-5" alt="" />
              <span className="hidden md:inline">Login</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}