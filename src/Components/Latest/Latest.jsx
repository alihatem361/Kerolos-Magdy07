import React from 'react';
import s2 from "../../assets/Bannar/large-office-interior-with-plants-open-ceiling-3d-rendering.png";

export default function Latest() {
  return (
    <>
      <div className="mx-4 sm:mx-10 lg:mx-25 mt-8 sm:mt-10 justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wider sm:tracking-widest">Latest Listings</h2>
          <span className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">Check our latest listings</span>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10">
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2.5rem)]">
            <div className="relative">
              <img
                src={s2}
                alt="Co-working space"
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-0 left-0 bg-[#A7BC9D] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-br-lg">
                Available
              </span>
              <i className="fa-solid fa-share absolute top-2 right-7 bg-white rounded-full p-2 shadow-sm mx-2 sm:mx-6"></i>
              <i className="fa-solid fa-heart bg-white rounded-full p-2 shadow-sm cursor-pointer absolute top-2 right-2 sm:right-4 text-[#A19B9B] hover:text-red-700"></i>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                4.9 (162 Review)
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Spot Co-Working Space
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Chair location is a website where you can search, find and reserve
                co-working including co-working space
              </p>

              <div className="justify-between items-center mt-3">
                <span className="text-gray-800 mt-4 sm:mt-10 font-semibold text-sm sm:text-base">$ 12 Per</span>
                <span className="text-red-500 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-red-500 my-3 sm:my-5 rounded-full mr-1"></span>
                  Closed
                </span>
              </div>
              <div className="border-t border-gray-300 w-full mb-4 sm:mb-6"></div>

              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-600">
                <span>Starts from: 20SAR/HOUR</span>
                <span className="text-[#365327]">→</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2.5rem)]">
            <div className="relative">
              <img
                src={s2}
                alt="Co-working space"
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-br-lg">
                Not Available
              </span>
              <i className="fa-solid fa-share absolute top-2 right-7 bg-white rounded-full p-2 shadow-sm mx-2 sm:mx-6"></i>
              <i className="fa-solid fa-heart cursor-pointer absolute top-2 right-2 sm:right-4 bg-white rounded-full p-2 shadow-sm text-[#A19B9B] hover:text-red-700"></i>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                4.9 (162 Review)
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Spot Co-Working Space
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Chair location is a website where you can search, find and reserve
                co-working including co-working space
              </p>

              <div className="justify-between items-center mt-3">
                <span className="text-gray-800 mt-4 sm:mt-10 font-semibold text-sm sm:text-base">$ 12 Per</span>
                <span className="text-red-500 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-red-500 my-3 sm:my-5 rounded-full mr-1"></span>
                  Closed
                </span>
              </div>
              <div className="border-t border-gray-300 w-full mb-4 sm:mb-6"></div>

              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-600">
                <span>Starts from: 20SAR/HOUR</span>
                <span className="text-[#365327]">→</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2.5rem)]">
            <div className="relative">
              <img
                src={s2}
                alt="Co-working space"
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-0 left-0 bg-[#A7BC9D] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-br-lg">
                Available
              </span>
              <i className="fa-solid fa-share absolute top-2 right-7 bg-white rounded-full p-2 shadow-sm mx-2 sm:mx-6"></i>
              <i className="fa-solid fa-heart cursor-pointer absolute top-2 right-2 sm:right-4 bg-white rounded-full p-2 shadow-sm text-[#A19B9B] hover:text-red-700"></i>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                4.9 (162 Review)
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Spot Co-Working Space
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Chair location is a website where you can search, find and reserve
                co-working including co-working space
              </p>

              <div className="justify-between items-center mt-3">
                <span className="text-gray-800 mt-4 sm:mt-10 font-semibold text-sm sm:text-base">$ 12 Per</span>
                <span className="text-red-500 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-red-500 my-3 sm:my-5 rounded-full mr-1"></span>
                  Closed
                </span>
              </div>
              <div className="border-t border-gray-300 w-full mb-4 sm:mb-6"></div>

              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-600">
                <span>Starts from: 20SAR/HOUR</span>
                <span className="text-[#365327]">→</span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-2.5rem)]">
            <div className="relative">
              <img
                src={s2}
                alt="Co-working space"
                className="w-full h-40 object-cover"
              />
              <span className="absolute top-0 left-0 bg-[#A7BC9D] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-br-lg">
                Available
              </span>
              <i className="fa-solid fa-share absolute top-2 right-7 bg-white rounded-full p-2 shadow-sm mx-2 sm:mx-6"></i>
              <i className="fa-solid fa-heart cursor-pointer absolute top-2 right-2 sm:right-4 bg-white rounded-full p-2 shadow-sm text-[#A19B9B] hover:text-red-700"></i>
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                4.9 (162 Review)
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Spot Co-Working Space
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Chair location is a website where you can search, find and reserve
                co-working including co-working space
              </p>

              <div className="justify-between items-center mt-3">
                <span className="text-gray-800 mt-4 sm:mt-10 font-semibold text-sm sm:text-base">$ 12 Per</span>
                <span className="text-red-500 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-red-500 my-3 sm:my-5 rounded-full mr-1"></span>
                  Closed
                </span>
              </div>
              <div className="border-t border-gray-300 w-full mb-4 sm:mb-6"></div>

              <div className="flex justify-between items-center mt-2 text-xs sm:text-sm text-gray-600">
                <span>Starts from: 20SAR/HOUR</span>
                <span className="text-[#365327]">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}