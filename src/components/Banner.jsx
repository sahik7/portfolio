import React, { useEffect, useState } from "react";

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
      <div
        className={`mt-16 w-9/12 py-10 rounded mx-auto text-center text-5xl absolute bottom-0 -translate-x-1/2 left-1/2 font-bold backdrop-blur-sm bg-white/10 ${
          showBorder ? "border-green border-2" : ""
        }`}
      >
        <h1>Hi, I am Sahik 💻</h1>
        <h1>A MERN Stack Developer</h1>
      </div>
    </div>
  );
};

export default Banner;
