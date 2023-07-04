import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
