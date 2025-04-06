import React from 'react';
import S61 from "../../assets/Bannar/3d-rendering-business-meeting-working-room-office-building.jpg";
import S62 from "../../assets/Bannar/empty-office-with-flowerpots.jpg";
import S63 from "../../assets/Bannar/modern-business-office-interior-3d-rendering.jpg";

export default function Chair() {
  return (
    <>
      <div className="text-center mx-4 sm:mx-10 lg:mx-24 px-4 sm:px-6 py-6 sm:py-10">
        <h2 className="text-2xl sm:text-3xl text-[#1A2921] font-semibold mb-2">Hybrid working can work for you</h2>
        <p className="text-[#717A76] text-sm sm:text-base mb-4 sm:mb-6">
          Hybrid working offers you the freedom to work closer to clients, colleagues or home.
          It's also greener and more cost-effective. With over<br className="hidden sm:block" /> 4,000 locations globally,
          nobody is better placed than Regus to help you make the best of it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            { 
              src: S61,
              title: "Offices for rent", 
              desc:"If you need to work privately in your own office with your employees without the hassle of operating, a private office would be a great option to rent your office with us in Chair Location." 
            },
            { 
              src: S62,  
              title: "Shared Area Places", 
              desc: "A shared area in Jeddah in Chair Location Co-Working space is a communal workspace or facility designed for use by multiple members, rather than being assigned to a single person or team" 
            },
            { 
              src: S63,  
              title: "Dedicated Desk", 
              desc: "Our dedicated desks in Chair Location branch in Jeddah is a desk in a communal office space that's set aside just for you for a certain length of time. It's a flexible workspace option somewhere between private office or luxury offices." 
            }
          ].map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg h-64 sm:h-80">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center
                            translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out text-center p-4 sm:p-6">
                <h3 className="text-white text-xl sm:text-2xl font-medium mb-2">{item.title}</h3>
                <p className="text-white text-xs sm:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}