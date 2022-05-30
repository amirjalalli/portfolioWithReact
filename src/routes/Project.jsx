import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HeroImg2 from "../components/HeroImag2/HeroImg2";
import PricingCart from "../PricingCart/PricingCart";
import Work from "../components/WorkCart/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of my recent works" />
      <Work />
      <PricingCart />
      <Footer />
    </div>
  );
};

export default Project;
