import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/google.png";
import Img2 from "../../assets/crypto.jpg";
import blog from "../../assets/blog.jpg";
import Img4 from "../../assets/editor-min.png";

const data = [
  {
    id: 1,
    image: blog,
    title: "Mern Blog App",
    github: "https://github.com/Ishankpathak/MERN_BLOG_APP_NEW",
    demo: "https://blog-app-new.onrender.com",
  },
  {
    id: 1,
    image: Img1,
    title: "Google Clone using react",
    github: "https://github.com/Ishankpathak/Google_Clone",
    demo: "https://google-apis-clone.netlify.app",
  },
  {
    id: 2,
    image: Img2,
    title: "Crypto Currency Clone ",
    github: "https://github.com/Ishankpathak/crypto_app-chakra_ui",
    demo: "https://suncrypto.netlify.app",
  },
  {
    id: 3,
    image: Img4,
    title: "Text Editor Using React",
    github: "https://github.com/Ishankpathak/TextEditor",
    demo: "https://multitexteditor.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
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
