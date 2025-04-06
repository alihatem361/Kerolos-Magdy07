import React from 'react';
import k1 from "../../assets/Bannar/k1.png";
import k2 from "../../assets/Bannar/k2.png";
import k3 from "../../assets/Bannar/k3.png";
import k4 from "../../assets/Bannar/k4.png";
import k5 from "../../assets/Bannar/k5.png";
import k6 from "../../assets/Bannar/k6.png";
import k7 from "../../assets/Bannar/k7.png";
import k8 from "../../assets/Bannar/k8.png";

export default function Location() {
  return (
    <>
    
    <div className="bg-[url('/src/assets/Bannar/bg.jpg')] bg-no-repeat bg-cover bg-center py-10">
      
      <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row items-center justify-between">
       
        <div className="md:w-1/2 ml-10 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold mb-5 text-[#F3F5F6]">
          Chair Location Is<br/>Trusted By The World’s<br/> Largest Companies.
          </h2>
          <p className="mt-2  tr text-[#F3F5F6]">
          Lorem Ipsum is simply dummy text of the printing and<br/> typesetting industry.
          </p>
        </div>

        
        <div className="md:w-1/2 max-w-[450px] flex flex-wrap gap-6">
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k1}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k5}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k2}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k6}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k3}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k7}
              alt="Icon"
              className="w-25"
            />
          </div>
          
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k4}
              alt="Icon"
              className="w-25"
            />
          </div>
         
          <div className="flex-1 basis-[calc(50%-12px)] bg-[#FFFFFF1C] border border-[#FFFFFF1C] rounded-[15px] p-2 h-20 flex items-center justify-center transition-transform duration-300 ease-in-out">
            <img
              src={k8}
              alt="Icon"
              className="w-25"
            />
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}
