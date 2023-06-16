import React from 'react'
import { education, experience } from '../constants'

export default function Resume() {

  return (
    <div id="resume" className='h-auto flex justify-center pt-10'>
      <div>
        <div className='position-relative d-flex text-center mb-5'>
          <h2 className='font-poppins text-[#f2f4f4] font-semibold text-[120px] '>
            SUMMARY
          </h2>
          <div className='mt-[-115px]'>
          <p className='text-[#212529] fw-600 font-semibold text-[32px] font-poppins lh-base mb-0'>
            Resume
          </p> 
          <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
          </div>
      </div>
      <div className='flex w-full p-10 justify-center'>
      <div className='w-[45%]'>
      <h2 className='font-poppins font-semibold text-[22px] text-[#212529]'>
        My Education
      </h2>
      
      <ul className="list-none">
        {education.map((edu, index) => (
          <li key={edu.id}>
            <div className='border border-[#dee2e6] rounded-lg p-5 my-8 mr-8'>
            <div className='bg-[#20c997] text-[12px] text-white font-poppins py-1 px-2 rounded-lg w-[80px] text-center'>
            {edu.year}
            </div>
            <div className='font-poppins text-[20px] py-3'>
            {edu.degree}
            </div>
            <div className='text-[#dc3545] font-poppins  text-[15px]'>
            {edu.school}
            </div>
            <p className='font-poppins text-[15px] py-2'>
             <i>{edu.program}</i> {edu.major}
            </p>
            <p className='font-poppins text-[15px] py-2'>
             {edu.honors}
            </p>
            </div>
          </li>
        ))}
        </ul>
      </div>

      <div className='w-[45%]'>
      <h2 className='font-poppins font-semibold text-[22px] text-[#212529]'>
        My Experience
      </h2>
      <ul className="list-none">
        {experience.map((exp, index) => (
            <div className='border border-[#dee2e6] rounded-lg p-5 my-8'>
          <li key={exp.id}>
            <div className='bg-[#20c997] text-[12px] text-white font-poppins py-1 px-2 rounded-lg w-[120px] text-center'>
              {exp.year}
            </div>
            <div className='font-poppins text-[20px] py-3'>
            {exp.title}
            </div>
            <div className='text-[#dc3545] font-poppins  text-[15px]'>
            {exp.company}
            </div>
            <div className='font-poppins  text-[15px] py-2'>
            {exp.description}
            </div>
          </li>
          </div>
        ))}
        </ul>
      </div>    
      </div>
      </div>
      </div>
  )
}