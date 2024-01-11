import React from 'react'
import { services } from "../constants";

export default function Services() {
    return (
    <div id="services" className='h-auto flex-col justify-center py-10 bg-[#f8f9fa]'>
       <div className='position-relative d-flex text-center mb-10'>   
            <h2 className='font-poppins text-[#f2f4f4] font-semibold text-[120px] '>
              SERVICES
            </h2>
            <div className='mt-[-115px]'>
              <p className='text-[#212529] fw-600 font-semibold text-[32px] font-poppins lh-base mb-0'>
                What I Do?
              </p> 
              <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
            </div>
        </div>
        <div className='p-10'>
          <ul className="list-none flex inline">
            <div className="grid md:grid-cols-2">
              {services.map((service, index) => (
                <li key={service.id} 
                  className={`font-poppins font-normal text-[#465A69] `}
                >
                  <div className='p-10 flex items-center'>
                    <div className='w-[70px] h-[70px] shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded flex justify-center items-center'>
                      <img src={service.icon} className='w-[32px] object-contain'/>  
                    </div>
                    <div className='flex-row ml-5 w-[90%]'>
                      <h1 className='text-[18px] font-medium pb-1'>
                        {service.title}
                      </h1>
                      <p className='text-[16px] '>
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