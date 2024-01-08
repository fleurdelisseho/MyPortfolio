import { navLinks, socialLinks } from "../constants";
import { pp } from '../assets';
import { useState } from "react";


export default function Navbar() {
    const [active, setActive] = useState("Home");

  return (
    <div className='bg-[#111418] w-[313px] h-screen p-10 font-poppins text-white  text-center'>
        <div className="">
            <img src={pp} alt='Fleurdelisse Rabanes' className='w-[200px] m-auto border-[10px] border-[#343a40] rounded-full' />
            <h1 className="text-[21px] py-5">
                Fleurdelisse Rabanes
            </h1>
        </div>
        <div className='py-10 text-[18px] items-center'>
            <ul className="list-none">
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`cursor-pointer py-[10px]
                    ${active === nav.title ? "text-[#20c997]" : "text-white"} `}
                    onClick={() => setActive(nav.title)}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </div>
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
  )
}