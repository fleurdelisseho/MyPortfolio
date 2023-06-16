import React from 'react'
import {portfolio } from '../constants'

export default function Portfolio() {
    return (
    <div id="portfolio" className='h-auto flex justify-center py-10 bg-[#f8f9fa]'>
      <div>
        <div className='position-relative d-flex text-center mb-5'>
          <h2 className='font-poppins text-[#f2f4f4] font-semibold text-[120px] '>
            PORTFOLIO
          </h2>
          <div className='mt-[-115px]'>
          <p className='text-[#212529] fw-600 font-semibold text-[32px] font-poppins lh-base mb-0'>
            My Work
          </p> 
          <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
          </div>
        </div>

      <div className='p-10'>
        <ul className="list-none flex inline">
          <div class="grid grid-cols-3 gap-10 p-10">
            {portfolio.map((skill, index) => (
              <li key={skill.id} >
                <div className=' flex '>
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg'>
                    <img src={skill.icon}  className='object-cover rounded-lg'/>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
    </div>
  )
}
