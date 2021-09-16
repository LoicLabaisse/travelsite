import React from "react";
import "./discover.css";
import Discover1 from "../../images/discover1.jpg";
import Discover2 from "../../images/discover2.jpg";
import Discover3 from "../../images/discover3.jpg";
import Discover4 from "../../images/discover4.jpg";
import { Carousel } from "3d-react-carousal";

const Discover = () => {
  let slides = [
    <div className="discover__card swipper-slide">
      <img src={Discover1} alt="Bali" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">Bali</h2>
        <span className="discover__description">1200€</span>
      </div>
    </div>,
    <div className="discover__card swipper-slide">
      <img src={Discover2} alt="Hawaii" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">Hawaii</h2>
        <span className="discover__description">800€</span>
      </div>
    </div>,
    <div className="discover__card swipper-slide">
      <img src={Discover3} alt="Hvar" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">Hvar</h2>
        <span className="discover__description">1200€</span>
      </div>
    </div>,
    <div className="discover__card swipper-slide">
      <img src={Discover4} alt="WhiteHaven" className="discover__img" />
      <div className="discover__data">
        <h2 className="discover__title">WhiteHaven</h2>
        <span className="discover__description">1350€</span>
      </div>
    </div>,
  ];
  return (
    <div className="discover__container container swiper-container">
      <div className="discover__container container grid">
        <h2 className="section__title">
          Découvrez les endroits les plus attractifs
        </h2>
        <div className="swipper-wrapper">
          <Carousel slides={slides}></Carousel>
        </div>
      </div>
    </div>
  );
};

export default Discover;
