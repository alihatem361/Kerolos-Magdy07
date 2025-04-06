import React from 'react';
import br1 from "../../assets/Bannar/co-working.svg";
import br2 from "../../assets/Bannar/3.svg";
import br3 from "../../assets/Bannar/2.svg";
import br4 from "../../assets/Bannar/4.svg";
import br5 from "../../assets/Bannar/fi_4840332.png";
import br6 from "../../assets/Bannar/18px.jpg";
import br8 from "../../assets/Bannar/18px2.png";
import br9 from "../../assets/Bannar/18px3.png";
import br7 from "../../assets/Bannar/Group 39532.png";

export default function Pricing() {
  return (
    <>
      <div className="py-8 md:py-16 lg:mx-25 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className='text-[#365327] uppercase font-semibold tracking-wider text-sm md:text-base'>pricing</span>
            <h2 className="font-bold text-2xl md:text-3xl text-[#1A2921] tracking-wider my-3 md:my-4">Simple, transparent pricing</h2>
            <p className="text-[#6F6C90] tracking-wider text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel <br className="hidden sm:inline"/> venenatis eu sit massa volutpat.
            </p>
            <div className="w-full flex justify-center mt-5 md:mt-7">
              <div className="flex items-center gap-x-4 md:gap-x-6">
                <span className='text-[#170F49] text-sm md:text-base'>Monthly</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="relative w-[74px] h-[33px] bg-[#365327] rounded-full peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F7F8F9] peer-checked:bg-[#F7F8F9] 
                    after:content-[''] after:absolute after:top-1/2 after:left-[2px] after:-translate-y-1/2 after:bg-white peer-checked:after:bg-[#365327] 
                    after:border after:border-gray-300 after:rounded-full after:w-[29px] after:h-[29px] after:transition-all after:duration-300 peer-checked:after:translate-x-[41px]" />
                </label>
                <span className='text-[#170F49] text-sm md:text-base'>Annually</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start">
            
            <div className="hidden lg:block w-[250px] min-w-[250px] flex flex-col me-10 my-10 items-start justify-center">
              <p className='text-[#1A2921] ml-4 mt-2 mb-4 font-semibold tracking-wider text-left'>Select Form The <br/>
              Upcoming Options.</p>
              <div className="w-[95%] rounded-lg bg-[#F7F8F9] p-3 m-4 hover:bg-[#E7CAAA] hover:text-[#365327] flex items-center justify-center">
                <img 
                  src={br1}
                  alt="Icon" 
                  className="w-[30px] h-[30px] mr-2"
                />
                <span className="text-[#717A76]">Shared Space</span>
              </div>
              <div className="w-[95%] rounded-lg hover:bg-[#F7F8F9] bg-[#E7CAAA] p-3 m-4 flex items-center justify-center">
                <img 
                  src={br3}
                  alt="Icon" 
                  className="w-[30px] h-[30px] mr-2"
                />
                <span className="text-[#717A76]">Meeting Rooms</span>
              </div>
              <div className="w-[95%] rounded-lg bg-[#F7F8F9] p-3 m-4 flex hover:bg-[#E7CAAA] items-center justify-center">
                <img 
                  src={br2}
                  alt="Icon" 
                  className="w-[30px] h-[30px] mr-2"
                />
                <span className="text-[#717A76]">Private Offices</span>
              </div>
              <div className="w-[95%] rounded-lg bg-[#F7F8F9] p-3 m-4 flex hover:bg-[#E7CAAA] items-center justify-center">
                <img 
                  src={br4}
                  alt="Icon" 
                  className="w-[30px] h-[30px] mr-2"
                />
                <span className="text-[#717A76]">Virtual Offices</span>
              </div>
              <p className='text-[#1A2921] mr-5 my-5 font-semibold tracking-normal ml-4'>Do you face Any Problems ?</p>
              <p className='text-[#717A76] ml-4 text-sm'>Contact us Any time Anyplace<br/>
              we will be Happy</p>
              <div className='flex items-center justify-between w-full mt-6 ml-4'>
                <div className="flex items-center gap-2">
                  <img src={br5} alt="Icon" className="w-6 h-6" />
                  <p className="text-[#1A2921] font-medium text-sm">Available 24/7</p>
                </div>
                <div>
                  <p className='text-[#365327] underline font-medium me-3 text-sm'>Contact Us</p>
                </div>
              </div>
            </div>

            
            <div className="w-full lg:w-auto overflow-x-auto pb-4">
              <div className="flex gap-4 md:gap-5 p-2 w-max lg:w-auto">
               
                <div className="min-w-[240px] md:min-w-[270px] rounded-2xl shadow-lg p-4 md:p-6 border-0 bg-white">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <img src={br6} className="mr-3 rounded" alt="Plan Icon" />
                    </div>
                  </div>
                  <p className="text-[#6F6C90] mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                  </p>
                  <p className="my-5 md:my-7">
                    <strong className="text-2xl md:text-3xl">SAR</strong>
                    <span className="text-3xl md:text-4xl font-bold ml-1">99</span><br/>
                    <span className="text-[#6F6C90] ml-1 text-base md:text-xl">/monthly</span>
                  </p>
                  <div className="font-bold my-3 text-sm md:text-base">What's included</div>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>10 Hours / Week</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>25 Hours / Month</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Free 1 hour private office</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Up to 3 team members</li>
                  </ul>
                  <button className="w-full max-w-[180px] md:max-w-[200px] mx-auto mt-4 md:mt-5 py-2 md:py-3 px-4 md:px-6 font-bold rounded-full border border-[#365327] text-[#365327] hover:bg-[#365327] hover:text-white transition-colors text-sm md:text-base">
                    Get started
                  </button>
                </div>

                
                <div className="min-w-[240px] md:min-w-[270px] rounded-2xl shadow-lg p-4 md:p-6 pt-2 border-0 bg-[#365327]">
                  <div className="mb-4">
                    <img src={br7} className="mr-3 my-3 md:my-5 rounded" alt="Plan Icon" />
                    <div className="flex items-center mb-3">
                      <img src={br8} className="mr-3 rounded" alt="Plan Icon" />
                    </div>
                  </div>
                  <p className="text-[#D8D2C6] mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                  </p>
                  <p className="my-5 md:my-7">
                    <strong className="text-2xl md:text-3xl text-[#F9F8F6]">SAR</strong>
                    <span className="text-3xl md:text-4xl text-[#F9F8F6] font-bold ml-1">199</span><br/>
                    <span className="text-[#D8D2C6] ml-1 text-base md:text-xl">/monthly</span>
                  </p>
                  <div className="font-bold my-3 text-[#F9F8F6] text-sm md:text-base">What's included</div>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <li><span className="bg-[#B49D97] text-[#F9F8F6] px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span><span className='text-[#F9F8F6]'>10 Hours / Week</span></li>
                    <li><span className="bg-[#B49D97] text-[#F9F8F6] px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span><span className='text-[#F9F8F6]'>25 Hours / Month</span></li>
                    <li><span className="bg-[#B49D97] text-[#F9F8F6] px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span><span className='text-[#F9F8F6]'>Free 1 hour private office</span></li>
                    <li><span className="bg-[#B49D97] text-[#F9F8F6] px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span><span className='text-[#F9F8F6]'>Up to 3 team members</span></li>
                  </ul>
                  <button className="w-full max-w-[180px] md:max-w-[200px] mx-auto mt-4 md:mt-5 py-2 md:py-3 px-4 md:px-6 font-bold rounded-full bg-[#F9F8F6] border hover:border-[#F9F8F6] text-[#365327] hover:bg-[#365327] hover:text-white transition-colors text-sm md:text-base">
                    Get started
                  </button>
                </div>

                
                <div className="min-w-[240px] md:min-w-[270px] rounded-2xl shadow-lg p-4 md:p-6 border-0 bg-white">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <img src={br9} className="mr-3 rounded" alt="Plan Icon" />
                    </div>
                  </div>
                  <p className="text-[#6F6C90] mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                  </p>
                  <p className="my-5 md:my-7">
                    <strong className="text-2xl md:text-3xl">SAR</strong>
                    <span className="text-3xl md:text-4xl font-bold ml-1">399</span><br/>
                    <span className="text-[#6F6C90] ml-1 text-base md:text-xl">/monthly</span>
                  </p>
                  <div className="font-bold my-3 text-sm md:text-base">What's included</div>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>All analytics features</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Up to (5 Million) tracked</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Dedicated support</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Up to 50 team members</li>
                  </ul>
                  <button className="w-full max-w-[180px] md:max-w-[200px] mx-auto mt-4 md:mt-5 py-2 md:py-3 px-4 md:px-6 font-bold rounded-full border border-[#365327] text-[#365327] hover:bg-[#365327] hover:text-white transition-colors text-sm md:text-base">
                    Get started
                  </button>
                </div>

                
                <div className="min-w-[240px] md:min-w-[270px] rounded-2xl shadow-lg p-4 md:p-6 border-0 bg-white">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <img src={br6} className="mr-3 rounded" alt="Plan Icon" />
                    </div>
                  </div>
                  <p className="text-[#6F6C90] mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                  </p>
                  <p className="my-5 md:my-7">
                    <strong className="text-2xl md:text-3xl">SAR</strong>
                    <span className="text-3xl md:text-4xl font-bold ml-1">4,499.00</span><br/>
                    <span className="text-[#6F6C90] ml-1 text-base md:text-xl">/monthly</span>
                  </p>
                  <div className="font-bold my-3 text-sm md:text-base">What's included</div>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Shared Area Hours / 130</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Meeting Rooms Hours/10</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Number of Friends / 0</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Number of Invitations / 0</li>
                  </ul>
                  <button className="w-full max-w-[180px] md:max-w-[200px] mx-auto mt-4 md:mt-5 py-2 md:py-3 px-4 md:px-6 font-bold rounded-full border border-[#365327] text-[#365327] hover:bg-[#365327] hover:text-white transition-colors text-sm md:text-base">
                    Get started
                  </button>
                </div>

                
                <div className="min-w-[240px] md:min-w-[270px] rounded-2xl shadow-lg p-4 md:p-6 border-0 bg-white">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <img src={br6} className="mr-3 rounded" alt="Plan Icon" />
                    </div>
                  </div>
                  <p className="text-[#6F6C90] mb-4 text-sm md:text-base">
                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit. 
                  </p>
                  <p className="my-5 md:my-7">
                    <strong className="text-2xl md:text-3xl">SAR</strong>
                    <span className="text-3xl md:text-4xl font-bold ml-1">2,899.00</span><br/>
                    <span className="text-[#6F6C90] ml-1 text-base md:text-xl">/monthly</span>
                  </p>
                  <div className="font-bold my-3 text-sm md:text-base">What's included</div>
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-sm md:text-base">
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Shared Area Hours / 130</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Meeting Rooms Hours / 2</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Number of Friends / 2</li>
                    <li><span className="bg-[#365327] text-white px-1.5 py-1 mx-2 rounded-full text-xs font-bold"><i className="fa-solid fa-check"> </i></span>Number of Invitations / 5</li>
                  </ul>
                  <button className="w-full max-w-[180px] md:max-w-[200px] mx-auto mt-4 md:mt-5 py-2 md:py-3 px-4 md:px-6 font-bold rounded-full border border-[#365327] text-[#365327] hover:bg-[#365327] hover:text-white transition-colors text-sm md:text-base">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}