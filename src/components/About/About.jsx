import React from "react";
import "./about.css";
import Aboutphoto1 from '../../images/about1.jpg'
import Aboutphoto2 from '../../images/about2.jpg'

const About = () => {
  return (
    <div className="about__container container grid">
      <div className="about__data">
        <h2 className="section__title about__title" id="about_title">
          Plus D'Informations <br /> A Propos Des Meilleurs Plages
        </h2>
        <p className="about__description">
          Vous pourrez trouver les plus beaux endroits au meilleur prix, vous
          choisissez l'endroit nous nous occupons du reste, prenez votre place
          maintenant.{" "}
        </p>
        <a href="#" className="button">Reservez votre place</a>
      </div>
      <div className="about__img">
          <div className="about__img-overlay">
                <img src={Aboutphoto1} alt="about" className="about__img-one" />
          </div>
          <div className="about__img-overlay">
                <img src={Aboutphoto2} alt="about" className="about__img-one" />
          </div>
      </div>
    </div>
  );
};

export default About;
