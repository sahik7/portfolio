import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute bg-transparent text-redOrange py-6 w-full border-b border-b-white">
      <div className="w-11/12 flex items-center justify-between mx-auto">
        <div>
          <Link to="/" className="text-xl font-bold">
            Sahik Mueeb Ahsan
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
