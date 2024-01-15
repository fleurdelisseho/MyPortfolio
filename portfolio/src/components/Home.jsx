import React from 'react'
import { arrow, hero } from '../assets'
import TypeWriter from './Typewriter'
import '../index.css'
const hats = [
  {
    suffix: "I'm Fleurdelisse Rabanes. "
  },
  {
    suffix: "I'm a Frontend Developer."
  },
  {
    suffix: "I'm a UI/UX Designer."
  },
  {
    suffix: "I'm a Graphics Designer."
  },
];


export default function Home() {
    return (
      <div id="home" className='overflow:hidden'>
        <div className='h-screen sm:pb-[-20px] bg-[#1e1e1e] flex justify-center items-center'>
          <div className=' text-center flex-col justify-center'>
          <p className='text-white font-poppins sm:text-[25px] md:text-[32px] mb-5 text-[20px]'>
            Welcome 
          </p>
          
          <TypeWriter
          appendClass="m-auto"
          hats={hats}
        />
          
         <p className='text-white font-poppins md:text-[26px] sm:text-[25px] mt-5 text-[20px]'>
            based in Cebu, Philippines.
          </p>
          <a href="#contact">
          <button className='bg-none rounded-full border-[#20c997] text-[#20c997] border py-3 px-10 mt-10 hover:bg-[#20c997] hover:text-white'>
            Hire Me
          </button>
          </a>
            <div className='flex w-full justify-center'>
              <a href='#about' className="scroll-down"></a>
            </div>
          </div>
        </div>
      </div>
  )
}
