import React from 'react'
import MyResume from '../assets/RabanesResume.pdf'
import { education, experience, skillset} from '../constants'

export default function Resume() {

  return (
    <div id="resume" className='h-auto flex justify-center pt-10'>
      <div>
        <div className='position-relative d-flex text-center sm:mb-0 md:mb-5'>
        <h2 className='font-poppins text-[#f2f4f4] font-semibold xs:text-[50px] md:text-[90px] lg:text-[120px] '>
            SUMMARY
          </h2>
          <div className='lg:mt-[-115px] md:mt-[-90px] xs:mt-[-50px]'>
          <p className='text-[#212529] fw-600 font-semibold xs:text-[15px] md:text-[24px] lg:text-[32px] font-poppins lh-base mb-0'>
            Resume
          </p> 
          <hr className='xs:w-[50px] md:w-[100px] xs:h-[2px] md:h-[3px] bg-[#20c997] m-auto relative'/>
          </div>
      </div>
      <div className='px-10 pt-10 grid md:grid-cols-2 w-full'>
      <div className='lg:pl-10'>
      <h2 className='font-poppins font-semibold xs:text-[18px] md:text-[22px] text-[#212529]'>
        My Education
      </h2>
      
      <ul className="list-none">
        {education.map((edu, index) => (
          <li key={edu.id}>
            <div className='border border-[#dee2e6] rounded-lg p-5 xs:my-5 xs:mr-0 md:my-8 md:mr-8'>
            <div className='bg-[#20c997] text-[12px] text-white font-poppins py-1 px-2 rounded-lg w-[85px] text-center'>
            {edu.year}
            </div>
            <div className='font-poppins xs:text-[16px]md:text-[20px] py-3'>
            {edu.degree}
            </div>
            <div className='text-[#dc3545] font-poppins  xs:text-[12px] md:text-[15px]'>
            {edu.school}
            </div>
            <p className='font-poppins xs:text-[12px] md:text-[15px] py-2'>
             <i>{edu.program}</i> {edu.major}
            </p>
            <p className='font-poppins xs:text-[12px] md:text-[15px] py-2'>
             {edu.honors}
            </p>
            </div>
          </li>
        ))}
        </ul>
      </div>

      <div className='lg:pr-10'>
      <h2 className='font-poppins font-semibold xs:text-[18px] md:text-[22px] text-[#212529]'>
        My Experience
      </h2>
      <ul className="list-none">
        {experience.map((exp, index) => (
            <div className='border border-[#dee2e6] rounded-lg p-5 xs:mt-5 xs:mb-8 md:my-8'>
          <li key={exp.id}>
            <div className='bg-[#20c997] text-[12px] text-white font-poppins py-1 px-2 rounded-lg w-[120px] text-center'>
              {exp.year}
            </div>
            <div className='font-poppins xs:text-[16px]md:text-[20px] py-3'>
            {exp.title}
            </div>
            <div className='text-[#dc3545] font-poppins  xs:text-[12px] md:text-[15px]'>
            {exp.company}
            </div>
            <div className='font-poppins xs:text-[12px] md:text-[15px] py-2'>
            {exp.description}
            </div>
          </li>
          </div>
        ))}
        </ul>
      </div>    
      </div>
      <div className='w-full px-5'>
      <h2 className='ml-5 font-poppins font-semibold xs:text-[18px] md:text-[22px] text-[#212529] lg:pl-10'>
        My Skills
      </h2>
      <div>
          <ul className="list-none flex inline">
            <div className="grid md:grid-cols-2 w-full lg:px-10">
            {skillset.map((skill, index) => (
                <li key={skill.id} 
                  className={`font-poppins font-normal text-[#212529] `}
                >
                  <div className='xs:px-5 xs:mt-3 sm:p-5'>
                  <div className="flex xs:text-[14px] md:text-[18px] justify-between mb-2 ">
                      <h3 className='font-medium'>
                        {skill.name}
                      </h3>
                      <p className=' '>
                        {skill.value}%
                      </p> 
                    </div> 
                    <div className="h-3 w-full bg-gray-300 rounded-lg">
                      <div  style={{ width:`${skill.value}%`}}
                        className="h-full rounded-lg bg-[#20c997]">
                      </div>
                    </div>
                  </div>
                </li>
          ))}
     
    </div>
    </ul>
        </div>
      </div>
      <a href={MyResume} download="Resume.pdf" target="_blank">
          <button className='block text-[#6c757d] border-[#6c757d] font-poppins border py-3 px-12 rounded-full drop-shadow-xl m-auto my-16 hover:bg-[#6c757d] hover:text-white xs:text-[12px] sm:text-[16px]'>
            Download CV
          </button>
          </a>
      </div>
      </div>
  )
}