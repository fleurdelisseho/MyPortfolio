import React from 'react'
import {portfolio, ui } from '../constants'
import '../index.css'
import { Link } from "react-router-dom"


export default function Portfolio() {
    return (
    <div id="portfolio" className='h-auto flex justify-center py-10 bg-[#f8f9fa]'>
      <div>
        <div className='position-relative d-flex text-center mb-5'>
        <h2 className='font-poppins text-[#f2f4f4] font-semibold xs:text-[50px] md:text-[90px] lg:text-[120px] '>
            PORTFOLIO
          </h2>
          <div className='lg:mt-[-115px] md:mt-[-90px] xs:mt-[-50px]'>
          <p className='text-[#212529] fw-600 font-semibold xs:text-[15px] md:text-[24px] lg:text-[32px] font-poppins lh-base mb-0'>
            My Work
          </p> 
          <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
          </div>
        </div>
     
      <div className='lg:p-10 xs:pb-0'>
      <h2 className='xs:pt-5 md:p-10 md:pb-0 font-poppins font-semibold xs:text-[18px] sm:text-[22px] text-[#212529]'>
        UI/UX Design Projects
      </h2>
        <ul>
          <div className="grid md:grid-cols-2 md:gap-10 md:p-10 xs:gap-5 xs:mt-5 xs:pb-10 xs:justify-center">
            {ui.map((proj, index) => (
              <li key={proj.id} >
                <div className='container flex overflow-hidden rounded-lg '>  
                <Link to={`/${proj.title}`}>
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg'>
                    <img src={proj.icon}  className='image object-cover hover:scale-110 transition duration-300 ease-in-out block '/>
                    <div className='middle'>
                      <button className='text'>
                        {proj.title}
                      </button>
	                  </div>
                  </div> 
                  </Link>       
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>

      <div className='lg:p-10 lg:pt-0'>
      <h2 className='md:pl-10 md:pt-10 font-poppins font-semibold xs:text-[16px] sm:text-[22px] text-[#212529]'>
        Web Design and Development Projects
      </h2>
        <ul>
        <div className="grid md:grid-cols-2 md:gap-10 md:p-10 xs:gap-5 xs:mt-5 xs:pb-10 xs:justify-center">
            {portfolio.map((skill, index) => (
              <li key={skill.id} >
                <div className='container flex overflow-hidden rounded-lg '>  
                <a href={skill.link} target="blank">
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg'>
                    <img src={skill.icon}  className='image object-cover hover:scale-110 transition duration-300 ease-in-out block '/>
                    <div className='middle'>
                      <button className='text'>
                        {skill.title}
                      </button>
	                  </div>
                  </div>
                </a>
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
