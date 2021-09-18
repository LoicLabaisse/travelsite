import React from "react";
import { TabTravel } from "../../Models/TabTravel.js";
import * as AiIcons from "react-icons/ai";
import "./places.css";

const Places = () => {
  return (
    <div className="place__container container grid">
      {TabTravel.map((travel, index) => (
        <div className="place__card" key={index}>
          <img src={travel.image} alt="" className="place__img" />
          <div className="place__content">
            <div className="place__rating">
              <AiIcons.AiOutlineStar className="place__rating-icon" />
              <span className="place__rating-number">{travel.note}</span>
            </div>
                <div className="place__data">
                    <h3 className="place__title">{travel.name}</h3>
                    <span className="place__subtitle">Indonesia</span>
                    <span className="place__price">{travel.price}</span>
                </div>

          </div>
          <button className="button button--flex place__button">
              <AiIcons.AiOutlineArrowRight/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Places;
