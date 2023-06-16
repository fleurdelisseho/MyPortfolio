import React from 'react'
import Resume from '../assets/RabanesResume.pdf'
export default function About() {
  return (
    <div id="about" className='h-auto flex justify-center p-10'>
      <div >
          <div className='position-relative d-flex text-center mb-5'>
            
            <h2 className='font-poppins text-[#f2f4f4] font-semibold text-[120px] '>
              ABOUT ME
            </h2>
            <div className='mt-[-115px]'>
            <p className='text-[#212529] fw-600 font-semibold text-[32px] font-poppins lh-base mb-0'>
              Know Me More
            </p> 
            <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
            </div>
        </div>
      
        <div className='p-10 flex mt-10'>
        <div className='w-[60%]'>
        <h1 className='font-poppins text-[26px] font-semibold'>
        I'm 
        <span className='text-[#20c997]'> Fleurdelisse Rabanes,</span> a Frontend Developer
        </h1>
        <p className='text-[#4c4d4d] font-poppins'>
        <br/>
        During my academic journey, I developed a strong foundation in computer science principles, algorithms, and programming languages. I also had the opportunity to explore various areas of software development, but my true passion lies in frontend development.
        <br/><br/>
        I am fascinated by the art of creating visually appealing and intuitive user interfaces that enhance the overall user experience. I enjoy leveraging my creativity and technical skills to transform ideas into beautiful and functional websites and web applications.
        <br/><br/>
        As a recent graduate, I am eager to apply my knowledge and skills to real-world projects, collaborating with experienced professionals to further enhance my expertise. I am a quick learner, always seeking to stay updated with the latest industry trends and best practices to deliver innovative solutions.
        <br/><br/>
        I am excited about the endless possibilities in the world of software development, and I am open to new opportunities that will help me grow both personally and professionally. If you're looking for a dedicated and enthusiastic front-end developer to join your team or collaborate on a project, I would be delighted to connect with you.
        </p>
        </div>
        <div className='text-[#4c4d4d] font-poppins px-10'>
          <span className='font-semibold'>Name: </span> Fleurdelisse Rabanes
          <hr className='my-3'/>
          <span className='font-semibold'>Email: </span>  <span className='text-[#20c997]'> fleurdelisserabanes@gmail.com </span>
          <hr className='my-3'/>
          <span className='font-semibold'>From: </span>  Cebu, Philippines

          <a href={Resume} download="Resume.pdf" target="_blank">
          <button className='bg-[#20c997] block text-white font-poppins py-3 px-9 rounded-full drop-shadow-xl m-auto mt-10'>
            Download CV
          </button>
          </a>
        </div>
      </div>
      </div>
    
    </div>
  )
}