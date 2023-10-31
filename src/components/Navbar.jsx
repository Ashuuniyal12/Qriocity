import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { HiMenu, HiX } from 'react-icons/hi'; 

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex flex-row justify-between max-w-[1440px] h-[66px] w-[100vw] items-center md:px-[64px] px-8'>
      <img src={logo} alt="company logo" />
      <div className='hidden md:flex flex-row gap-6 font-RedHat text-white'>
        <a href="">Home</a>
        <a href="">Our Courses</a>
        <a href="">About Us</a>
        <a href="">Projects</a>
        <a href="">Contact Us</a>
      </div>
      <div className="md:hidden flex items-center">
        {showMenu ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-screen h-screen z-50 bg-[#616161] flex flex-col  gap-10  py-10  items-center text-white">
          <a href="">Home</a>
          <a href="">Our Courses</a>
          <a href="">About Us</a>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
    </div>
  );
};
