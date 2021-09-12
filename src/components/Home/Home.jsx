import React from "react";
import Homephoto from "../../images/home1.jpg";
import * as AiIcons from "react-icons/ai";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home" id="home">
        <img src={Homephoto} alt="travel boat" className="home__img" />
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__data-subtitle">Découvrir un lieux</span>
            <h1 className="home__data-title">
              Explorer Les <br /> Plus Belles <br /> Plages
            </h1>
            <a href="#home" className="button">
              Explorer
            </a>
          </div>
          <div className="home__social">
            <a
              href="https://www.facebook.com/"
              target="blank"
              className="home__social-link"
            >
              <AiIcons.AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              className="home__social-link"
            >
              <AiIcons.AiFillInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="blank"
              className="home__social-link"
            >
              <AiIcons.AiOutlineTwitter />
            </a>
          </div>
            <a href ="#home">
                <div href="#skills" className="home__scroll"></div>
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
