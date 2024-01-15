import { useState } from "react";
import { pp } from "../assets";
import { navLinks } from "../constants";


export default function Menu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
const [active, setActive] = useState("Home");
  return (
    <div className="flex items-center justify-end p-3">
      
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
             {navLinks.map((nav, index) => (
                <li key={nav.id} className={`px-3 cursor-pointer 
                ${active === nav.title ? "text-[#20c997]" : "text-white"}  ${active === nav.title ? "text-[#20c997]" : "text-white"}`}
                onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
        {navLinks.map((nav, index) => (
                <li key={nav.id} className={`px-3 cursor-pointer 
                ${active === nav.title ? "text-[#20c997]" : "text-white"}  ${active === nav.title ? "text-[#20c997]" : "text-white"}`}
                onClick={() => setActive(nav.title)}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
