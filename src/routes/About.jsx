import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImag2/HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 text="about" heading="frontEndDeveloper" />
      <Footer />
    </div>
  );
};

export default About;
