import React from 'react';
import s4 from "../../assets/Bannar/s4.png";
import br1 from "../../assets/Bannar/co-working.svg";
import br2 from "../../assets/Bannar/workplace.svg";
import br3 from "../../assets/Bannar/conference.svg";
import br4 from "../../assets/Bannar/video-call.svg";

export default function Shared() {
  return (
    <>
      <div className="mt-20 sm:mt-30">
        <div className="relative p-4 sm:p-6 gap-x-5 pt-20 sm:pt-30 bg-[#FDF8F2] mt-10 sm:mt-15 flex flex-col lg:flex-row mx-4 sm:mx-10 lg:mx-24 rounded-xl sm:rounded-2xl">
          
          <div className="w-full lg:w-1/2 gap-y-6 sm:gap-y-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wider sm:tracking-widest">Shared Space</h2>
            <span className="mb-3 sm:mb-5 text-sm sm:text-base">
              ( CO Work Space )
            </span>
            <p className="text-gray-600 pr-0 lg:pr-40 my-4 sm:my-6 text-sm sm:text-base">
              Rent as many desks as you need in a dynamic, shared office space. Business Address and storage options included.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-[#B49D97] my-3 sm:my-5 rounded-full mr-1"></span>
                  Reserved permanent workspace as long as you need
                </span> 
              </div>
              <div className="justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-[#B49D97] my-3 sm:my-5 rounded-full mr-1"></span>
                  Book a desk by the hour or day in anyplace
                </span> 
              </div>
              <div className="justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-[#B49D97] my-3 sm:my-5 rounded-full mr-1"></span>
                  A well-prepared place for your service and comfort
                </span> 
              </div>
              <div className="justify-between items-center">
                <span className="text-gray-600 text-xs sm:text-sm flex items-center">
                  <span className="w-2 h-2 bg-[#B49D97] my-3 sm:my-5 rounded-full mr-1"></span>
                  Hot desk as often as you need in any place
                </span> 
              </div>
            </div>
            
            <div className="border-t border-gray-300 w-full lg:w-1/2 mb-4 sm:mb-6"></div>
            
            <div className="flex gap-2 items-center text-sm sm:text-base">
              <i className="fa-solid fa-clipboard"></i>
              <p>Price Starting From: <span className="text-sm sm:text-md font-bold tracking-wider sm:tracking-widest">1250 EGP</span></p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-10">
              <button className="px-4 sm:px-6 py-1 sm:py-2 bg-[#365327] text-white hover:text-[#365327] rounded-lg border border-[#365327] hover:bg-white text-sm sm:text-base">
                Book Now
              </button>
              <button className="px-4 sm:px-6 py-1 sm:py-2 bg-white border border-[#365327] text-[#365327] rounded-lg hover:bg-[#365327] hover:text-white text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
          
          
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <img src={s4} alt="Co-working space" className="w-full h-auto sm:h-full object-cover rounded-lg" />
          </div>
          
          
          <div className="flex absolute top-0 sm:top-[-10px] w-full sm:w-[90%] lg:w-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center bg-[#365327] gap-2 sm:gap-4 rounded-full py-2 sm:py-4 overflow-x-auto">
            <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 rounded-full bg-white text-green-900 text-xs sm:text-sm whitespace-nowrap">
              <img src={br1} alt="" className="w-4 sm:w-5" />
              <span>Shared Space</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 rounded-full text-green-300 bg-[#32593a] text-xs sm:text-sm whitespace-nowrap">
              <img src={br2} alt="" className="w-4 sm:w-5" />
              <span>Private Offices</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 rounded-full text-green-300 bg-[#32593a] text-xs sm:text-sm whitespace-nowrap">
              <img src={br3} alt="" className="w-4 sm:w-5" />
              <span>Meeting Rooms</span>
            </button>
            <button className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-1 sm:py-3 rounded-full text-green-300 bg-[#32593a] text-xs sm:text-sm whitespace-nowrap">
              <img src={br4} alt="" className="w-4 sm:w-5" />
              <span>Virtual Offices</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}