import React from 'react';
import img from "../../assets/Bannar/Group 36844.png"

export default function Contact() {
  return (
    <>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 p-4 sm:p-6">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#1A2921]">Contact Us</h2>
          <p className="text-[#1A2921] text-sm sm:text-md tracking-widest mt-2 sm:mt-4">We Are Here For Your Help</p>
        </div>
        
        <div className="rounded-lg p-4 sm:p-6">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            
            <div className="w-full lg:w-1/2 mt-0 sm:mt-1.5">
              <div className="space-y-6  sm:space-y-8">
                <img src={img} alt="Office 1" className="w-full object-cover rounded-lg"/>
              </div>
            </div>

            
            <div className="w-full lg:w-1/2 lg:ml-5">
              <form className="space-y-1 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold tracking-wide text-[#1A2921]">
                  Please fill the upcoming fields <span className='text-[#CC4F4F]'>*</span>
                </h3>

                
                <div className="relative mb-1 sm:mb-6">
                  <input
                    type="text"
                    id="name-input"
                    className="w-full p-2 sm:p-3 rounded-lg focus:outline-none bg-[#F9F8F6] border-b-2 border-transparent focus:border-b-[#1A2921] peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="name-input"
                    className="absolute left-2 sm:left-3 top-1 sm:top-2 text-gray-500 text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#1A2921]"
                  >
                    Name..
                  </label>
                </div>

                
                <div className="relative mb-4 sm:mb-6">
                  <input
                    type="email"
                    id="email-input"
                    className="w-full p-2 sm:p-3 rounded-lg focus:outline-none bg-[#F9F8F6] border-b-2 border-transparent focus:border-b-[#1A2921] peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email-input"
                    className="absolute left-2 sm:left-3 top-1 sm:top-2 text-gray-500 text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#1A2921]"
                  >
                    Email Address
                  </label>
                </div>

                
                <div className="relative mb-4 sm:mb-6">
                  <input
                    type="tel"
                    id="phone-input"
                    className="w-full p-2 sm:p-3 pt-4 sm:pt-5 rounded-lg focus:outline-none bg-[#F9F8F6] border-b-2 border-transparent focus:border-b-[#1A2921] peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="phone-input"
                    className="absolute left-2 sm:left-3 top-1 sm:top-2 text-gray-500 text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#1A2921]"
                  >
                    Phone Number
                  </label>
                </div>

                
                <div className="relative mb-4 sm:mb-6">
                  <input
                    type="text"
                    id="city-input"
                    className="w-full p-2 sm:p-3 pt-4 sm:pt-5 rounded-lg focus:outline-none bg-[#F9F8F6] border-b-2 border-transparent focus:border-b-[#1A2921] peer"
                    placeholder=" "
                  />
                  <label 
                    htmlFor="city-input"
                    className="absolute left-2 sm:left-3 top-1 sm:top-2 text-gray-500 text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#1A2921]"
                  >
                    City..
                  </label>
                </div>

                
                <div className="relative mb-4 sm:mb-6">
                  <textarea
                    id="message-input"
                    rows="4"
                    className="w-full p-2 sm:p-3 pt-4 sm:pt-5 rounded-lg focus:outline-none bg-[#F9F8F6] border-b-2 border-transparent focus:border-b-[#1A2921] peer"
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message-input"
                    className="absolute left-2 sm:left-3 top-1 sm:top-2 text-gray-500 text-xs sm:text-sm transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:top-3 sm:peer-placeholder-shown:text-base peer-focus:top-1 sm:peer-focus:top-2 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:text-[#1A2921]"
                  >
                    Your Message
                  </label>
                </div>

                
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#365327] border border-[#365327] text-white hover:text-[#365327] px-4 sm:px-6 py-2 w-full sm:w-[304px] h-[38px] sm:h-[56px] rounded-lg hover:bg-white text-sm sm:text-base"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}