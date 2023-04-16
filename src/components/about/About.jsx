import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFillFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="Image">
        <div>
          <img src={ME} alt="My Image" style={{ width: "15rem" }} />
        </div>

        <div className="Image">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>30+ happy Clients</small>
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
