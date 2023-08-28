import React, { useEffect } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="services">
      <h5
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
      >
        What I Offer
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
      >
        Services
      </h2>
      <div
        className="container services__container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
      >
        <article className="service" data-aos="fade-right" data-aos-once="true">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design system</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaboration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous improvement</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service" data-aos="fade-right" data-aos-once="true">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance and Support</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Security</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Analytics and Reporting</p>
            </li>
          </ul>
        </article>
        {/* END of WEB DEV */}

        <article className="service" data-aos="fade-right" data-aos-once="true">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content strategy development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content creation</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Editing and proofreading</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO optimization</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Social media management</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Email marketing</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Analytics and reporting</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Content consulting</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Brand storytelling</p>
            </li>
          </ul>
        </article>

        {/* END of Content reation */}
      </div>
    </section>
  );
};

export default Services;
