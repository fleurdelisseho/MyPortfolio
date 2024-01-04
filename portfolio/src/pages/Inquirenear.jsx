import React from 'react'
import { portfolioInquirenear, pp } from '../assets'
import { ui, portfolio } from '../constants'
import { Link } from "react-router-dom"

export default function Inquirenear() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='fixed'>
      <div className='bg-[#111418] w-[313px] h-screen p-10 font-poppins text-white text-center'>
    <div>
      <h2 className='text-[21px]'>
      Other UI/UX <br/>Design Projects
      </h2>
        <ul>
          <div >
            {ui.map((proj, index) => (
              proj.id !== "InquireNear" && (
              <li key={proj.id}>
                <div className='container overflow-hidden rounded-lg '>  
                <Link to={`/${proj.id}`}>
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg pt-[10%]'>
                    <img src={proj.icon} alt={`${proj.title} icon`} className='image rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out block '/>
                    <div className='middle'>
                      <button className='text'>
                        {proj.id}
                      </button>
	                  </div>
                  </div> 
                  </Link>       
                </div>
              </li>
               )
            ))}
          </div>
        </ul>
      </div>
        
    </div>
      </div>
      
      <div className='ml-[313px] bg-[#f9f9f9] py-10'>
        
        <div className='flex flex-wrap content-center flex-col justify-center'>
          <div className='mb-10 flex content-center'>
            <div className='pr-3'>
            <img src={pp} alt='Fleurdelisse Rabanes' className='w-[60px] m-auto rounded-full' />
            </div>
            <div className='w-[100%] flex justify-between '>
            <div>
          <h2 className='font-poppins font-bold text-[22px] text-[#212529]'>
          InquireNear
          </h2>
          <h2 className='font-poppins text-[18px] text-[#212529]'>
          Fleurdelisse Rabanes <span className='px-1'>2023</span>
          </h2>
          </div>

          <Link to={`/`}>
          <button className='bg-none rounded-full border-[#20c997] text-[#20c997] border py-3 px-10 hover:bg-[#20c997] hover:text-white'>
            Back to Home
          </button>
          </Link>
          </div>
          </div>

          <div className='w-[90%] flex justify-center shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]'>
          <img src={portfolioInquirenear} alt="InquireNear Website Design"/>
          </div>
        </div>
      </div>

      <div className='ml-[313px] bg-[#f9f9f9] p-10 pt-0 '>
      <h2 className='pl-5 pb-5 font-poppins font-semibold text-[22px] text-[#212529]'>
       Explore more of my Web Design and Development Projects
      </h2>
        <ul>
          <div class="grid grid-cols-4 gap-5 p-5">
            {portfolio.map((skill, index) => (
              <li key={skill.id} >
                <div className='container flex overflow-hidden rounded-lg '>  
                <a href={skill.link} target="blank">
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg'>
                    <img src={skill.icon}  className='image object-cover hover:scale-110 transition duration-300 ease-in-out block '/>
                    <div className='middle'>
                      <button className='text'>
                        {skill.id}
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
  )
}

