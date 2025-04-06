import React from 'react';
import icon1 from "../../assets/Bannar/Group 36863.png";
import icon2 from "../../assets/Bannar/Group 36862.png";

export default function Subscribe() {
  return (
    <>
      <div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 md:px-4 flex flex-col items-center text-center relative">
        
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 md:left-33 animate-spin-slow">
          <img src={icon1} alt="icon" className="w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18" />
        </div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 md:right-33 animate-spin-slow">
          <img src={icon2} alt="icon" className="w-12 sm:w-16 md:w-18 h-12 sm:h-16 md:h-18" />
        </div>

        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1A2921] mb-2 sm:mb-3">
          Subscribe To Our Newsletter
        </h2>

        
        <p className="text-[#717A76] text-sm sm:text-base max-w-xs sm:max-w-md mb-4 sm:mb-6">
          Every couple of weeks we send out an update and a few things that have inspired us.
        </p>

       
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Write Your Mail Here..."
            className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg border bg-[#eaeaea] border-[#e4a664] w-full sm:w-64 md:w-[350px] lg:w-[450px] outline-none placeholder:text-gray-500 text-sm sm:text-base"
          />
          <button className="bg-[#365327] text-white border hover:border-[#365327] px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full sm:w-40 md:w-[180px] hover:text-[#365327] hover:bg-white transition text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}