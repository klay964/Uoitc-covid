import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "../css/main.css";
import menu from "../assests/menu2.png";


const NavBar = () => {
  const links = ['About Us', 'News', 'Info', 'Contact Us'];
  const [menuOpen, toggleMenu] = useState(false);
  const mobileMenuClasses = [
    'px-2 pb-2 blue z-40',
    menuOpen ? 'flex' : 'hidden md:flex',
    'flex-col md:flex-row',
    'items-start justify-center',
    'font-helv text-white text-16 tracking-1 md:font-bold',
    'absolute top-0 left-0 md:static w-full',
  ];
  return (
    <header>
      <div className="p-3 md:pb-0 blue flex justify-between items-center md:justify-center">
        <div className="font-arial text-xl md:text-4xl font-base md:font-bold text-white md:text-gray-300">
          <h1>UOITC COVID-19 Center</h1>
        </div>
        <div className="w-6 h-6 md:hidden">
          <button onClick={() => toggleMenu(!menuOpen)}>
            <img src={menu} className="w-full" alt="menu button" />
          </button>
        </div>
      </div>
      <div className="relative">
        <nav className={mobileMenuClasses.join(' ')}>
          {links.map((link, idx) => (
            <Link
              key={idx}
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="mx-3 py-1 cursor-pointer hover:border-b-2"
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;