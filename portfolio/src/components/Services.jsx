import React from 'react'
import { services } from "../constants";

export default function Services() {
    return (
    <div id="services" className='h-auto flex-col justify-center py-10 bg-[#f8f9fa]'>
       <div className='position-relative d-flex text-center sm:mb-0 md:mb-5'>   
       <h2 className='font-poppins text-[#f2f4f4] font-semibold xs:text-[50px] md:text-[90px] lg:text-[120px] '>
              SERVICES
            </h2>
            <div className='lg:mt-[-115px] md:mt-[-90px] xs:mt-[-50px]'>
            <p className='text-[#212529] fw-600 font-semibold xs:text-[15px] md:text-[24px] lg:text-[32px] font-poppins lh-base mb-0'>
                What I Do?
              </p> 
              <hr className='xs:w-[50px] md:w-[100px] xs:h-[2px] md:h-[3px] bg-[#20c997] m-auto relative'/>
            </div>
        </div>
        <div className='lg:p-10 xs:mt-10'>
          <ul className="list-none flex inline">
            <div className="grid md:grid-cols-2">
              {services.map((service, index) => (
                <li key={service.id} 
                  className={`font-poppins font-normal text-[#465A69] `}
                >
                  <div className='xs:py-5 xs:px-10 md:p-10 flex items-center'>
                    <div className='xs:w-[50px] xs:h-[50px]  md:w-[70px] md:h-[70px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded flex justify-center items-center'>
                      <img src={service.icon} className='xs:w-[24px] md:w-[32px] object-contain'/>  
                    </div>
                    <div className='flex-row ml-5 w-[90%]'>
                      <h1 className='xs:text-[14px] md:text-[18px] font-medium pb-1'>
                        {service.title}
                      </h1>
                      <p className='xs:text-[12px] md:text-[16px] '>
                        {service.description}
                      </p> 
                    </div> 
                  </div>
                </li>
          ))}
     
    </div>
    </ul>
        </div>
    </div>
  )
}