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
      <h5 data-aos="fade-up" data-aos-once="true">Get To Know</h5>
      <h2 data-aos="fade-up" data-aos-once="true">About Me</h2>

      <div className="Image" data-aos="fade-up" data-aos-once="true">
        <div>
          <img src={ME} alt="Ishank Pathak" style={{ width: "15rem" }} />
        </div>

        <div className="Image">
          <div className="about__content" data-aos="fade-up" data-aos-once="true">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5 data-aos="fade-left" data-aos-once="true">Experience</h5>
                <small data-aos="fade-right" data-aos-once="true">Knowledgeable </small>
              </article>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5 data-aos="fade-left" data-aos-once="true">Clients</h5>
                <small data-aos="fade-right" data-aos-once="true">10+ happy Clients</small>
              </article>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsFillFolderFill className="about__icon" />
                <h5 data-aos="fade-left" data-aos-once="true">Project</h5>
                <small data-aos="fade-right" data-aos-once="true">50+ completed</small>
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
