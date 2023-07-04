import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const Banner = () => {
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowBorder(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white py-8 h-[600px]  bg-cover bg-[url('https://i.ibb.co/2KzWv7X/banner.jpg')]">
      <img
        className="absolute bottom-10 w-1/2 -translate-x-1/2 left-1/2 "
        src="https://i.ibb.co/FVrTmYv/IMG-0017-removebg.png"
        alt=""
      />
      <div
        className={`mt-16 w-9/12 py-10 rounded mx-auto text-center text-5xl absolute bottom-0 -translate-x-1/2 left-1/2 font-bold backdrop-blur-sm bg-white/10 ${
          showBorder ? "border-green border-2" : ""
        }`}
      >
        <h1>Hi, I am Sahik 💻</h1>
        <h1>A MERN Stack Developer</h1>
        <a
          href="/Sahik_Mueeb_Ahsan.pdf"
          download="Sahik_Mueeb_Ahsan.pdf"
          className="text-black py-3 px-5 rounded-md hover:bg-redOrange text-xl hover:text-white duration-200 bg-white"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Banner;
