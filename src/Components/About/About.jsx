import React from 'react';
import one from "../../assets/Bannar/Group 36868.jpg";
import tow from "../../assets/Bannar/Group 36869.jpg";
import three from "../../assets/Bannar/Group 36870.jpg";
import lo from "../../assets/Bannar/lo.svg";
import lo1 from "../../assets/Bannar/lo1.svg";
import lo2 from "../../assets/Bannar/lo2.svg";

export default function About() {
  return (
    <>
      <div className="p-4 sm:p-6 lg:p-6 gap-x-4 lg:gap-x-5 mt-10 sm:mt-16 lg:mt-22 flex flex-col lg:flex-row mx-4 sm:mx-10 lg:mx-20 rounded-lg">
        
        <div className="w-full lg:w-1/2 gap-y-6 sm:gap-y-8 lg:gap-y-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1A2921]">About Chair Location</h2>
          <p className="pr-0 lg:pr-40 text-sm sm:text-base text-[#717A76] mb-4 sm:mb-6">
            "CHAIR LOCATION" is a website where you can search, find, and reserve co-working space, including co-working offices, private offices, meeting rooms, and virtual offices near you. It shows the features and amenities this space can provide. Professionals and businesses can then compare all available co-working spaces to find one with the services and facilities that best suit their requirements.
          </p>
    
          
          <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 text-[#365327] mb-4 sm:mb-6">Why Chair Location</h3>
          <ul className="space-y-4 sm:space-y-6 my-6 sm:my-8 mb-4 sm:mb-5">
            <li className="flex items-center text-sm sm:text-base">
              <span className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-[#365327] bg-[#E7CAAA] rounded-full flex items-center justify-center">
                <img src={lo} alt="" className='w-3 sm:w-5' />
              </span>
              More Than (4652) Location
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <span className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-[#365327] bg-[#E7CAAA] rounded-full flex items-center justify-center">
                <img src={lo2} alt="" className='w-3 sm:w-5' />
              </span>
              We Offer ALL Amenities in OUR Location
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <span className="w-6 h-6 sm:w-8 sm:h-8 mr-2 text-[#365327] bg-[#E7CAAA] rounded-full flex items-center justify-center">
                <img src={lo1} alt="" className='w-3 sm:w-5' />
              </span>
              ALL Kinds Of Supports 24/7
            </li>
          </ul>
    
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-10">
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-[#365327] hover:text-[#365327] border border-[#365327] text-white rounded-lg hover:bg-white text-sm sm:text-base">
              VIEW PRODUCTS
            </button>
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-white border border-[#365327] text-[#365327] hover:text-white rounded-lg hover:bg-[#365327] text-sm sm:text-base">
              BOOK NOW
            </button>
          </div>
        </div>
        
        
        <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 mt-6 lg:mt-0">
          <img src={one} alt="Co-working space 1" className="w-full h-32 sm:h-40 object-cover rounded-lg" />
          <img src={tow} alt="Co-working space 2" className="w-full h-32 sm:h-40 object-cover rounded-lg" />
          <img src={three} alt="Co-working space 3" className="w-full h-32 sm:h-40 object-cover rounded-lg" />
        </div>
      </div>
    </>
  )
}