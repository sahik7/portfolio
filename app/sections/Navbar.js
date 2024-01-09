"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/public/portfolio-logo.png';
import Image from 'next/image';
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="font-work_sans">
      <div className="flex justify-between items-center px-14 py-5 text-sm">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <nav>
          <ul className="hidden lg:flex gap-10">
            <li>
              <Link href="#about-me">About Me</Link>
            </li>
            <li>
              <Link href="#technologies">Technologies</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact-me">Contact Me</Link>
            </li>
          </ul>
          {/* Dropdown Button */}
          <button
            className="lg:hidden"
            onClick={toggleDropdown}
          >
            {isDropdownOpen ? <IoIosClose className='text-4xl' /> : <IoIosMenu className='text-4xl' />}
          </button>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="lg:hidden z-[20] absolute top-[2%] w-full left-0 text-[#772a15] text-xl bg-[#f1491c] shadow-md text-center">
              <li className="py-8 border border-[#772a15]">
                <Link href="#about-me" onClick={toggleDropdown}>
                  About Me
                </Link>
              </li>
              <li className="py-8 border border-[#772a15]">
                <Link href="#technologies" onClick={toggleDropdown}>
                  Technologies
                </Link>
              </li>
              <li className="py-8 border border-[#772a15]">
                <Link href="#projects" onClick={toggleDropdown}>
                  Projects
                </Link>
              </li>
              <li className="py-8 border border-[#772a15]">
                <Link href="#contact-me" onClick={toggleDropdown}>
                  Contact Me
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
