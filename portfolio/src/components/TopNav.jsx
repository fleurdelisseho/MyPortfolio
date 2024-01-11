import React from 'react'
import { navLinks } from "../constants";
import { useState } from "react";

export default function TopNav() {
    const [active, setActive] = useState("Home");
  return (
    <div className=" w-full absolute bg-[#111418] p-5 font-poppins text-white">
    <ul className="list-none flex justify-end">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`mr-5 cursor-pointer 
                ${active === nav.title ? "text-[#20c997]" : "text-white"} `}
                onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}
