import React, { useEffect } from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="about">
      <h5 data-aos="fade-up" data-aos-anchor-placement="top-center">
        Get To Know
      </h5>
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-center">
        About Me
      </h2>

      <div
        className="Image"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div>
          <img src={ME} alt="Ishank Pathak" style={{ width: "15rem" }} />
        </div>

        <div
          className="Image"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>Knowledgeable </small>
              </article>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>10+ happy Clients</small>
              </article>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsFillFolderFill className="about__icon" />
                <h5>Project</h5>
                <small>50+ completed</small>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-about">
        <a href="#contact" className="btn btn-primary ">
          Let's talk
        </a>
      </div>
    </section>
  );
};

export default About;
