import React from 'react'
import Resume from '../assets/RabanesResume.pdf'
export default function About() {
  return (
    <div id="about" className='h-auto flex justify-center md:p-10 xs:p-10'>
      <div >
          <div className='position-relative d-flex text-center md:pb-5'>
            
            <h2 className='font-poppins text-[#f2f4f4] font-semibold xs:text-[50px] md:text-[90px] lg:text-[120px] '>
              ABOUT ME
            </h2>
            <div className='lg:mt-[-115px] md:mt-[-90px] xs:mt-[-50px]'>
            <p className='text-[#212529] fw-600 font-semibold xs:text-[15px] md:text-[24px] lg:text-[32px] font-poppins lh-base mb-0'>
              Know Me More
            </p> 
            <hr className='xs:w-[50px] md:w-[100px] xs:h-[2px] md:h-[3px] bg-[#20c997] m-auto relative'/>
            </div>
        </div>
      
        <div className='lg:p-10 xl:flex xs:mt-10 lg:mt-0'>
        <div className=''>
        <h1 className='font-poppins lg:text-[26px] md:text-[20px] font-semibold'>
        I'm 
        <span className='text-[#20c997]'> Fleurdelisse Rabanes,</span> a Frontend Developer
        </h1>
        <p className='text-[#4c4d4d] font-poppins xs:text-[12px] sm:text-[16px]'>
        <br/>
        During my academic journey, I developed a strong foundation in computer science principles, algorithms, and programming languages. I also had the opportunity to explore various areas of software development, but my true passion lies in frontend development.
        <br/><br/>
        I am fascinated by the art of creating visually appealing and intuitive user interfaces that enhance the overall user experience. I enjoy leveraging my creativity and technical skills to transform ideas into beautiful and functional websites and web applications.
        <br/><br/>
        {/* As a recent graduate, I am eager to apply my knowledge and skills to real-world projects, collaborating with experienced professionals to further enhance my expertise. I am a quick learner, always seeking to stay updated with the latest industry trends and best practices to deliver innovative solutions.
        <br/><br/> */}
        I am excited about the endless possibilities in the world of software development, and I am open to new opportunities that will help me grow both personally and professionally. If you're looking for a dedicated and enthusiastic front-end developer to join your team or collaborate on a project, I would be delighted to connect with you.
        </p>
        </div>
        <div className='xs:text-[12px] sm:text-[16px] text-[#4c4d4d] font-poppins xl:p-10 xs:pt-10 xl:pt-0'>
          <span className='font-semibold'>Name: </span> Fleurdelisse Rabanes
          <hr className='my-3'/>
          <span className='font-semibold'>Email: </span>  <span className='text-[#20c997]'> fleurdelisserabanes@gmail.com </span>
          <hr className='my-3'/>
          <span className='font-semibold'>From: </span>  Cebu, Philippines

          <a href={Resume} download="Resume.pdf" target="_blank">
          <button className='bg-[#20c997] block text-white font-poppins py-3 px-9 rounded-full drop-shadow-xl m-auto mt-10 mb-8'>
            Download CV
          </button>
          </a>
        </div>
      </div>
      </div>
    
    </div>
  )
}