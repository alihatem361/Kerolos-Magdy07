import React from 'react';
import s1 from "../../assets/Bannar/haden.png";

export default function Header() {
  return (
    <>
      {/* Added mt-16 (or your navbar height) to push content below navbar */}
      <div className="relative flex pt-5  md:pt-21 justify-center items-center mt-16 md:mt-0">
        
        <img 
          src={s1} 
          alt="Office Space" 
          className="w-full h-auto object-cover"
        />
        
        {/* Text overlay */}
        <h2 className="absolute top-10 md:top-20 lg:top-50 text-center tracking-wider text-[#f6e7d6] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
          Office That Fit You<br />
          Creative Way To Work
        </h2>
        
        {/* Search box - adjusted positioning */}
        <div className="absolute rounded-2xl md:rounded-4xl top-32 sm:top-40 md:top-48  lg:top-150 p-4 sm:p-6 md:p-8 lg:p-10 justify-center items-center bg-[#FFFFFF] w-11/12 sm:w-5/6 md:w-4/5 lg:w-3/4" 
             style={{ marginTop: 'calc(100vh * 0.15)' }}> {/* Adjust this value as needed */}
          <div className="w-full space-y-3 sm:space-y-4 md:space-y-6">
            
            {/* Buttons row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
              <div>
                <button className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center gap-2 border hover:bg-gray-200 text-xs sm:text-sm">
                  <i className="fa-solid fa-square-share-nodes"></i>
                  <span className="font-medium">Shared Space</span>
                </button>
              </div>
              <div>
                <button className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center gap-2 border hover:bg-gray-200 text-xs sm:text-sm">
                  <i className="fa-solid fa-building-circle-check"></i>
                  <span className="font-medium">Private Offices</span>
                </button>
              </div>
              <div>
                <button className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-[#74886a] text-[#1A2921] rounded-lg flex items-center justify-center gap-2 border border-green-600 text-xs sm:text-sm">
                  <i className="fa-solid fa-person-booth"></i>
                  <span className="font-medium">Meeting Rooms</span>
                </button>
              </div>
              <div>
                <button className="w-full py-2 sm:py-3 px-2 sm:px-4 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center gap-2 border hover:bg-gray-200 text-xs sm:text-sm">
                  <i className="fa-solid fa-print"></i>
                  <span className="font-medium">Virtual Offices</span>
                </button>
              </div>
            </div>

            {/* Search input */}
            <div className="flex flex-col md:flex-row gap-2 sm:gap-3 items-center">
              <div className="relative w-full md:w-9/12">
                <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500 text-xs sm:text-sm"></i>
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full pl-8 sm:pl-10 pr-4 py-1 sm:py-2 rounded-lg border border-gray-300 bg-white text-xs sm:text-sm text-gray-700 focus:outline-none"
                />
                
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-900 text-xs sm:text-sm font-medium hidden md:inline"> 
                  Search Nearby
                </span>
              </div>
              <div className="w-full md:w-3/12">
                <button className="w-full bg-[#2a431e] hover:bg-white hover:text-[#1A2921] border hover:border-[#1A2921] text-white py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}