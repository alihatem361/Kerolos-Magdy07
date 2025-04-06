import React from 'react';
import iphone from "../../assets/Bannar/iPhone 12 Pro Clay.jpg";
import google from "../../assets/Bannar/Group 36855.png";
import app from "../../assets/Bannar/Group.png";
import vector from "../../assets/Bannar/Vector (1).png";
import screen from "../../assets/Bannar/Screen iPhone 12 Pro.png";
import logo from "../../assets/Bannar/Logo-png 1.png";

export default function Explore() {
  return (
    <>
      <div className="relative bg-[#FFFFFF] mt-8 sm:mt-10 rounded-3xl sm:rounded-4xl flex flex-col md:flex-row items-center justify-between mx-4 sm:mx-8 lg:mx-29 p-6 sm:p-8 lg:p-10 shadow-lg">
        
        <div className="relative w-full md:w-[30%] mx-auto md:ml-10 lg:ml-20 mt-6 md:mt-10 max-w-xs">
          
          <img
            src={iphone}
            alt="iPhone Frame"
            className="relative z-10 w-full"
          />

          
          <img
            src={screen}
            alt="App Screen"
            className="absolute top-[4.5%] w-[92%] left-[4%] object-cover z-20"
          />
          <img
            src={logo}
            alt="App Logo"
            className="absolute w-12 sm:w-16 md:w-20 top-[52%] left-[39%] object-cover z-20"
          />
        </div>

        
        <div className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-40 sm:w-64 md:w-96 h-2 sm:h-3 md:h-4 bg-[#365327] rounded-t-xl"></div>

        
        <div className="text-center md:text-left mt-6 md:mt-0 md:mr-10 lg:ml-20 lg:mr-30 w-full md:w-[60%]"> 
          <img src={vector} alt="Decorative Hand" className="absolute right-2 top-15 w-20 md:w-30 hidden md:block" />

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A2921] mb-2">
            Explore The Chair Location App
          </h2>
          <p className="text-[#717A76] text-sm sm:text-base my-2 sm:my-4">
            Hybrid working offers you the freedom to work closer to clients,<br className="hidden sm:block"/> colleagues or home.
          </p>

          
          <div className="flex gap-3 sm:gap-4 justify-center md:justify-start mt-6 sm:mt-10">
            <img src={google} alt="Get it on Google Play" className="h-10 sm:h-12 cursor-pointer" />
            <img src={app} alt="Download on the App Store" className="h-10 sm:h-12 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  )
}