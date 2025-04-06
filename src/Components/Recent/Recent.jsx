import React from 'react';
import img1 from "../../assets/Bannar/Image.png";
import icon from "../../assets/Bannar/Icon.png";

export default function Recent() {
  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-24 justify-center items-center mt-8 md:mt-10 p-4 md:p-8 lg:p-15">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 md:mb-8">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl text-[#172A41]">Our Recent Articles</h2>
            <p className="text-[#4E657F] text-xs sm:text-sm pl-1 mt-1">Stay Up With Our Latest Insights</p>
          </div>
          <div className='flex'> 
            <i className="fa-solid fa-arrow-left bg-white rounded-full py-2 px-2.5 sm:py-2.5 sm:px-3 shadow-sm mx-2 sm:mx-3 border hover:bg-[#365327] hover:text-white border-[#365327] text-[#365327] text-sm sm:text-base"></i>
            <i className="fa-solid fa-arrow-right bg-white rounded-full py-2 px-2.5 sm:py-2.5 sm:px-3 shadow-sm cursor-pointer hover:bg-[#365327] hover:text-white border border-[#365327] text-[#365327] text-sm sm:text-base"></i>
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-15'>
          
          <div className="w-full sm:w-1/3">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src={img1} alt="" className="w-full h-48 sm:h-56 object-cover"/>
              <div className="p-4 sm:p-7">
                <div className="flex justify-between text-left items-center text-xs sm:text-sm text-[#879AAF] mb-2">
                  <span>Mohamed MO</span>
                  <span>20 Apr 2024</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#101828] text-left">Blog Title Here</h3>
                <p className="text-[#4E657F] text-xs sm:text-sm my-3 sm:my-4">
                  In the realm of modern business operations, a Point <br className="hidden sm:inline"/> of Sale (POS) system serves as more than just a too...
                </p>
                <a href="#" className="flex items-center font-bold text-[#3d602c] text-xs sm:text-sm mt-3 sm:mt-5 hover:underline">
                  Read More 
                  <img src={icon} alt="" className='ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4' />
                </a>
              </div>
            </div>
          </div>

          
          <div className="w-full sm:w-1/3">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src={img1} alt="" className="w-full h-48 sm:h-56 object-cover"/>
              <div className="p-4 sm:p-7">
                <div className="flex justify-between text-left items-center text-xs sm:text-sm text-[#879AAF] mb-2">
                  <span>Mohamed MO</span>
                  <span>20 Apr 2024</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#101828] text-left">Blog Title Here</h3>
                <p className="text-[#4E657F] text-xs sm:text-sm my-3 sm:my-4">
                  In the realm of modern business operations, a Point <br className="hidden sm:inline"/> of Sale (POS) system serves as more than just a too...
                </p>
                <a href="#" className="flex items-center font-bold text-[#3d602c] text-xs sm:text-sm mt-3 sm:mt-5 hover:underline">
                  Read More 
                  <img src={icon} alt="" className='ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4' />
                </a>
              </div>
            </div>
          </div>

          
          <div className="w-full sm:w-1/3">
            <div className="bg-white rounded-lg overflow-hidden">
              <img src={img1} alt="" className="w-full h-48 sm:h-56 object-cover"/>
              <div className="p-4 sm:p-7">
                <div className="flex justify-between text-left items-center text-xs sm:text-sm text-[#879AAF] mb-2">
                  <span>Mohamed MO</span>
                  <span>20 Apr 2024</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#101828] text-left">Blog Title Here</h3>
                <p className="text-[#4E657F] text-xs sm:text-sm my-3 sm:my-4">
                  In the realm of modern business operations, a Point <br className="hidden sm:inline"/> of Sale (POS) system serves as more than just a too...
                </p>
                <a href="#" className="flex items-center font-bold text-[#3d602c] text-xs sm:text-sm mt-3 sm:mt-5 hover:underline">
                  Read More 
                  <img src={icon} alt="" className='ml-2 sm:ml-3 w-3 h-3 sm:w-4 sm:h-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}