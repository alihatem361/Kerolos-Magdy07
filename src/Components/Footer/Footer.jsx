import React from 'react';
import logo from "../../assets/Bannar/Logo-png 2 (1).png";
import f1 from "../../assets/Bannar/facebook.png";
import f2 from "../../assets/Bannar/youtube.png";
import f3 from "../../assets/Bannar/linkedin.png";
import f4 from "../../assets/Bannar/twitter-alt.png";
import ff1 from "../../assets/Bannar/ff1.svg";
import ff2 from "../../assets/Bannar/ff2.svg";
import ff3 from "../../assets/Bannar/ff3.svg";
import ff4 from "../../assets/Bannar/ff4.svg";
import google from "../../assets/Bannar/google.png";
import app from "../../assets/Bannar/app.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F3F5F6] py-3">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 px-4 sm:px-6">
          <div className="border-t border-[#B49D97] w-full my-4 sm:my-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            
            <div className="text-center sm:text-left">
              <img src={logo} alt="Chair Location Logo" className="w-30 mb-4 mx-auto sm:mx-0" />
              <div className='ml-0 sm:ml-6 flex flex-col items-center sm:items-start'>
                <div className="flex gap-4 mb-4">
                  <img src={f1} alt="Facebook" className="w-6 h-6" />
                  <img src={f2} alt="YouTube" className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  <img src={f3} alt="LinkedIn" className="w-6 h-6" />
                  <img src={f4} alt="Twitter" className="w-6 h-6" />
                </div>
              </div>
            </div>

            
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-[#365327] mb-3 sm:mb-4">Main Pages</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className='w-[5px] h-[5px] bg-[#7C9A82] rounded-full'></div>
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className='w-[5px] h-[5px] bg-[#7C9A82] rounded-full'></div>
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    About
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className='w-[5px] h-[5px] bg-[#7C9A82] rounded-full'></div>
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    How It Works
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className='w-[5px] h-[5px] bg-[#7C9A82] rounded-full'></div>
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className='w-[5px] h-[5px] bg-[#7C9A82] rounded-full'></div>
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Membership
                  </a>
                </li>
              </ul>
            </div>

            
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-semibold text-[#365327] mb-3 sm:mb-4">Products</h3>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <img src={ff1} alt="" className="w-4 h-4" />
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Shared Space
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <img src={ff2} alt="" className="w-4 h-4" />
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Private Offices
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <img src={ff3} alt="" className="w-4 h-4" />
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Meeting Rooms
                  </a>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <img src={ff4} alt="" className="w-4 h-4" />
                  <a href="#" className="text-sm sm:text-base text-[#717A76] hover:text-gray-800">
                    Virtual Offices Home
                  </a>
                </li>
              </ul>
            </div>

            
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-[#365327]">
                Download the<br/> 
                Chair Location App
              </h3>
              <div className="gap-y-4 sm:gap-y-6 mb-4 sm:mb-5 flex flex-col items-center sm:items-start">
                <a href="#">
                  <img src={google} alt="Google Play" className="w-32 sm:w-40 my-1 sm:my-3" />
                </a>
                <a href="#">
                  <img src={app} alt="App Store" className="w-32 sm:w-40" />
                </a>
              </div>
            </div>
          </div>

        
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#B49D97] flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
            <div className="space-x-2 sm:space-x-4 mb-3 sm:mb-4 md:mb-0">
              <a href="#" className="hover:text-gray-800 text-[#717A76] underline">
                Privacy & Policy
              </a>
              <a href="#" className="hover:text-gray-800 text-[#717A76] underline">
                Terms & Conditions
              </a>
            </div>
            <p className="text-center sm:text-left">
              All Copyrights Chair Location | Developed by{' '}
              <a href="#" className="text-[#717A76] font-bold hover:underline">
                e-RAMO For Digital Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}