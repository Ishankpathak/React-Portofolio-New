import React, { useEffect } from "react";
import "./header.css";
import My from "../../assets/my.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header data-aos="flip-left" data-aos-delay="100" data-aos-anchor=".div" >
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Ishank Pathak</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={My} alt="" className="myImage" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
