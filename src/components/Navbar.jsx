import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute bg-transparent text-redOrange py-6 w-full border-b border-b-white">
      <div className="w-11/12 flex items-center justify-between mx-auto">
        <div>
          <Link to="/" className="text-xl font-bold">
            Your Name
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#about">About Me</Link>
            </li>
            <li>
              <Link to="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
