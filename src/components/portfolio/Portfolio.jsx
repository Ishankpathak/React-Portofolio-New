import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/google.png";
import Img2 from "../../assets/crypto.jpg";
import Img3 from "../../assets/youtube.jpg";
import Img4 from "../../assets/google.png";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Google Clone using react",
    github: "https://github.com",
    demo: "https://google-apis-clone.netlify.app",
  },
  {
    id: 2,
    image: Img2,
    title: "Crypto Currency Clone ",
    github: "https://github.com",
    demo: "https://suncrypto.netlify.app",
  },
  {
    id: 3,
    image: Img3,
    title: "Youtube React Clone ",
    github: "https://github.com",
    demo: "https://suncrypto.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id , image , title , github , demo}) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" className="portfolio-image" />
              </div>
              <h3>{title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary"  target="_blank">
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
