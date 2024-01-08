import React from 'react'
import { portfolioOrocan, pp } from '../assets'
import { ui, portfolio, socialLinks } from '../constants'
import { Link } from "react-router-dom"
import { Contact, Footer, ScrollToTopButton } from '../components'

export default function Orocan() {
  return (
    <div className='w-full overflow-hidden'>
      <ScrollToTopButton />
      <div className='fixed'>
      <div className='bg-[#111418] w-[313px] h-screen p-10 font-poppins text-white text-center'>
    <div>
      <h2 className='text-[21px]'>
      Other UI/UX <br/>Design Projects
      </h2>
        <ul>
          <div >
            {ui.map((proj, index) => (
              proj.id !== 2 && (
              <li key={proj.id}>
                <div className='container overflow-hidden rounded-lg '>  
                <Link to={`/${proj.title}`}>
                  <div className='shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)] rounded-lg pt-[10%]'>
                    <img src={proj.icon} alt={`${proj.title} icon`} className='image rounded-lg object-cover hover:scale-110 transition duration-300 ease-in-out block '/>
                    <div className='middle'>
                      <button className='text'>
                        {proj.title}
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
        <div className='flex items-center justify-center bottom-[50px] absolute inset-x-0 bottom-0 '>
        {socialLinks.map((socialLink) => (
              <div key={socialLink.title}>
                <ul className='list-none inline-flex'>
                  {socialLink.links.map((link, index) => (
                    <li key={link.id}>
                        <div className="group">
                        <div className="group-hover:hidden">
                            <a href={link.link} target="_blank">
                                <img src={link.icon} className="px-2 w-8 " />
                            </a>
                        </div>
                        <div className="hidden group-hover:flex">
                            <a href={link.link} target="_blank">
                                <img src={link.active} className="px-2 w-8 " />
                            </a>
                        </div>
                        </div>
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
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
          Orocan
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
          <img src={portfolioOrocan} alt="Orocan Website Design"/>
          </div>
        </div>
      </div>

      <div className='ml-[313px] bg-[#f9f9f9] p-10 pt-0 '>
      <h2 className='pl-5 pb-5 font-poppins font-semibold text-[22px] text-[#212529]'>
       Explore more of my Web Design and Development Projects
      </h2>
        <ul>
          <div className="grid grid-cols-4 gap-5 p-5">
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

      <div className='ml-[313px]'>
        <Contact/> 
        <Footer/>
      </div>

    </div>
  )
}
