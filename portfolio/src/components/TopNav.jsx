import React from 'react'
import { navLinks } from "../constants";
import { useState  } from "react";
import '../index.css'

export default function TopNav() {
      const [active, setActive] = useState("Home");
  return (
    <div className="fixed z-[1000] w-full bg-[#111418] p-5 font-poppins text-white mx-auto">
    <ul className="list-none flex justify-center">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`px-3 cursor-pointer 
                ${active === nav.title ? "text-[#20c997]" : "text-white"}  ${active === nav.title ? "text-[#20c997]" : "text-white"}`}
                onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </div>

  )
}
