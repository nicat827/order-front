import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../../../assets/home/main.png";
import descImg from "../../../assets/home/descImg.png";
import starsImg from "../../../assets/home/stars.png";
import starsTablet from "../../../assets/home/stars-tablet.png";
import arrowNext from "../../../assets/services/arrow-next.png";
import "./index.scss";

const Hero = () => {
  return (
    <section id="hero">
      <div className="first-wrapper">
        <img src={mainImg} className="main-img" />
        <div>
          <div className="name-wrapper">
            <div>
              <div className="line"></div>
              <span>Працуто</span>
            </div>
            <div>
              <span>Анжелика</span>
              <div className="line" style={{ width: "300px" }}></div>
            </div>
          </div>
          <div className="desc-wrapper">
            <p>
              Персональный стилист Беларусь / Минск
              <br />
              <br />
              Оказываю услуги персонального стайлинга в форматах офлайн и онлайн
              по Беларуси
            </p>
            <img src={descImg} className="descImg" />
          </div>
          <img src={starsImg} className="stars" />
        </div>
      </div>
      <img src={starsTablet} className="stars-tablet" />
      <Link to="/contacts" id="sign-to-service">
        <span>Записаться на услугу</span>
        <img src={arrowNext} alt="" />
      </Link>
    </section>
  );
};

export default Hero;
