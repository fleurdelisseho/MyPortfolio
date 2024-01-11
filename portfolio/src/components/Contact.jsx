import React, { useState } from "react";
const FORM_ENDPOINT = ""; // TODO - fill on the later step
import { footerLinks, socialLinks } from "../constants";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div id="contact" className='h-auto flex justify-center pt-10'>
    <div className="w-full">
      <div className='position-relative d-flex text-center mb-10'>
        <h2 className='font-poppins text-[#f2f4f4] font-semibold text-[120px] '>
        CONTACT
        </h2>
        <div className='mt-[-115px]'>
        <p className='text-[#212529] fw-600 font-semibold text-[32px] font-poppins lh-base mb-0'>
        Get in Touch
        </p> 
        <hr className='w-[100px] h-[3px] bg-[#20c997] m-auto relative'/>
        </div>
    </div>
    <div className='lg:flex w-full p-10 lg:justify-evenly'>
    <div className='lg:w-[25%] mr-5'>
    
    {footerLinks.map((footerlink) => (
              <div key={footerlink.title}
              className={` flex-col my-4 min-w-[150px `}>
                <h4 className='font-poppins font-semibold text-[20px] leading-[27px]'>
                  {footerlink.title}
                </h4>
           
                <ul className='list-none mt-4 '>
                  {footerlink.links.map((link, index) => (
                    <li key={link.name}
                    className={`font-poppins font-normal text-[16px] text-[#2D3845] ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                    <div className="flex items-center ">
                      <img className={`h-[15px] w-[15px] mr-5`} src={link.icon}/>
                      {link.name}
                    </div>
                    </li>
                  ))}
                </ul>
            </div>
          ))}

<div className='hidden lg:block flex items-start justify-start '>
        {socialLinks.map((socialLink) => (
              <div key={socialLink.title}>
                <h4 className='font-poppins font-semibold py-5 text-[20px] leading-[27px]'>
                  {socialLink.title}
                </h4>
           
                <ul className='list-none inline-flex'>
                  {socialLink.links.map((link, index) => (
                    <li key={link.id}>
                        <div className="group">
                        <div className="group-hover:hidden">
                            <a href={link.link} target="_blank">
                                <img src={link.follow} className="pr-2 w-8 " />
                            </a>
                        </div>
                        <div className="hidden group-hover:flex">
                            <a href={link.link} target="_blank">
                                <img src={link.active} className="pr-2 w-8 " />
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

    <div className='lg:w-[60%] sm:mt-10 lg:m-0'>
      <h4 className='font-poppins font-semibold text-[20px] my-4 leading-[27px]'>
          SEND ME A NOTE
      </h4>
    <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
          >
            <div className="flex justify-between mb-5">
            <div className="w-[48%]">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white border border-[#dee2e6] rounded-lg w-full"
                required
              />
            </div>

            <div className="w-[48%]">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 bg-white border border-[#dee2e6] rounded-lg w-full"
                required
              />
            </div>
            </div>

            <div className="mb-3 pt-0">
              <textarea
                placeholder="Tell me more about your needs...."
                name="message"
                className="px-3 py-3 h-[150px] placeholder-gray-400 text-gray-600 bg-white border border-[#dee2e6] rounded-lg w-full"
                required
              />
            </div>

            <div className="my-10 pt-0 flex justify-center">
            <button
              className="text-white bg-[#20c997]  px-8 py-3 rounded-full font-poppins shadow-[0_2px_4px_0px_rgba(0,0,0,0.25)]"
              type="submit"
            >
                Send Message
            </button>
          </div>
        </form>
    </div>    
    </div>
    </div>
    </div>
  )
}
