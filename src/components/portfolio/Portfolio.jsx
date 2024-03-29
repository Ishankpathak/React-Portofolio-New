import React, { useEffect } from "react";
import "./portfolio.css";

import { data } from "./Project_data.js";

import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-once="true">
        My Recent Work
      </h5>
      <h2 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-once="true">
        Portfolio
      </h2>
      <h3
        className="message"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-once="true"
      >
        There can be sometime little problems in rendering as i have used free
        server
      </h3>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={id} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-once="true">
              <div className="portfolio__item-image">
                <img src={image} alt="" className="portfolio-image" />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
