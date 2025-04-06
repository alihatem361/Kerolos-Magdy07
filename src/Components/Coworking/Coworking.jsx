import React from 'react';
import S51 from "../../assets/Bannar/flat-lay-desk-calendar-clock.jpg";
import S52 from "../../assets/Bannar/flat-lay-desk-calendar-clock 2.jpg";
import S53 from "../../assets/Bannar/man-with-headphones-watching-videos.jpg";

export default function Coworking() {
  return (
    <>
      <div className="text-center p-4 sm:p-6 md:p-10">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2921]">
          How <span className="text-[#365327]">It </span>Works
        </h2>
        <p className="text-[#1A2921] mt-2 text-sm sm:text-base">
          Coworking &amp; Flexible Office Marketplace | Search &amp; <br className="hidden sm:block"/>Book Today
        </p>
        
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
          
          <div className="p-4 sm:p-6 rounded-lg text-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="bg-[#E7CAAA] text-[#365327] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">1</span>
              <h3 className="font-semibold text-[#1A2921] text-base sm:text-lg">Book, Reach or Call</h3>
            </div>
            <img src={S51} alt="Book" className="rounded-lg mb-3 sm:mb-4 w-full max-w-[278px] h-auto" />
            <p className="text-[#1A2921] text-sm sm:text-base text-left sm:pr-15">
              Lorem Ipsum is simply dummy<br className="hidden sm:block"/> text of the printing and <br className="hidden sm:block"/>typesetting industry
            </p>
          </div>
          
          
          <div className="p-4 sm:p-6 rounded-lg text-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="bg-[#E7CAAA] text-[#365327] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">2</span>
              <h3 className="font-semibold text-[#1A2921] text-base sm:text-lg">View Location Info</h3>
            </div>
            <img src={S52} alt="Book" className="rounded-lg mb-3 sm:mb-4 w-full max-w-[278px] h-auto" />
            <p className="text-[#1A2921] text-sm sm:text-base text-left sm:pr-15">
              Lorem Ipsum is simply dummy <br className="hidden sm:block"/>text of the printing and <br className="hidden sm:block"/>typesetting industry
            </p>
          </div>
          
          
          <div className="p-4 sm:p-6 rounded-lg text-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="bg-[#E7CAAA] text-[#365327] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">3</span>
              <h3 className="font-semibold text-[#1A2921] text-base sm:text-lg">Search Locations</h3>
            </div>
            <img src={S53} alt="Book" className="rounded-lg mb-3 sm:mb-4 w-full max-w-[278px] h-auto" />
            <p className="text-[#1A2921] text-sm sm:text-base text-left sm:pr-15">
              Lorem Ipsum is simply dummy<br className="hidden sm:block"/> text of the printing and<br className="hidden sm:block"/> typesetting industry
            </p>
          </div>
        </div>
      </div>
    </>
  )
}