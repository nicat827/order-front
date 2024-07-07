import React from "react";
import about1 from "../../../assets/home/about-1.png";
import about2 from "../../../assets/home/about-2.png";
import about3 from "../../../assets/home/about-3.png";
import about4 from "../../../assets/home/about-4.png";
import about5 from "../../../assets/home/about-5.png";
import about6 from "../../../assets/home/about-6.png";
import about7 from "../../../assets/home/about-7.png";
import about8 from "../../../assets/home/about-8.png";
import about9 from "../../../assets/home/about-9.png";
import stars from "../../../assets/home/stars-about.png";
import aboutTablet from "../../../assets/home/about-tablet.png";
import aboutTablet2 from "../../../assets/home/about-tablet-2.png";
import aboutTablet3 from "../../../assets/home/about-tablet-3.png";
import aboutTablet4 from "../../../assets/home/about-tablet-4.png";
import tabletTop1 from "../../../assets/home/tablet-top-1.png";
import tabletTop2 from "../../../assets/home/tablet-top-2.png";
import mobileImg1 from "../../../assets/home/mobile-image-1.png";
import mobileImg2 from "../../../assets/home/mobile-image-2.png";
import mobileImg3 from "../../../assets/home/mobile-image-3.png";
import mobileImg4 from "../../../assets/home/mobile-image-4.png";
import mobileImg5 from "../../../assets/home/mobile-image-5.png";

import "./index.scss";

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="left">
          <img className="about1-desc" src={about1} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <img src={about2} className="desc-img" alt="" />
            <img src={about3} className="desc-img" alt="" />
          </div>
          <div className="tablet-img">
            <img src={tabletTop1} alt="" />
            <img src={tabletTop2} alt="" />
          </div>
          <div className="mobile-img">
            <img src={mobileImg1} alt="" />
          </div>
          <div className="bottom">
            <p>
              Привет, меня зовут <span>Анжелика Працуто</span> Оказываю услуги
              персонального стайлинга в форматах офлайн и онлайн по Беларуси, в
              частности Минск, и онлайн по всему миру. Cоздаю уникальные
              гардеробы для женщин, помогаю найти уникальный код ДНК стиля
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <div className="mobile-img">
            <img src={mobileImg2} alt="" />
          </div>
          <div className="top">
            <img className="tablet-img" src={aboutTablet} alt="" />
            <p>
              Обо мне, разумеется, как о <span>вдохновляющей моднице</span>{" "}
              писал белорусский информационный портал и поэтому, моему
              эстетическому виденью можно бесспорно доверять
            </p>
          </div>
          <div className="bottom">
            <img className="stars-desc" src={stars} alt="" />
            <img src={about4} alt="" />
            <img src={about5} alt="" />
          </div>
        </div>
        <div className="right">
          <img src={about6} className="desc-img" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="left">
          <img className="desc-img" src={about7} alt="" />
        </div>
        <div className="right">
          <div className="top">
            <img src={about8} className="desc-img" alt="" />
            <img src={about9} className="desc-img" alt="" />
          </div>
          <div className="bottom tablet-wrapper">
            <div id="tablet-images">
              <div>
                <img src={aboutTablet2} alt="" />
              </div>
              <div>
                <img src={aboutTablet3} alt="" />
                <img src={aboutTablet4} alt="" />
              </div>
            </div>
            <div className="mobile-img">
              <img src={mobileImg3} alt="" />
            </div>
            <div className="mobile-img">
              <img src={stars} alt="" />
            </div>
            <div className="mobile-img mobile-img-flex">
              <img src={mobileImg4} alt="" />
              <img src={mobileImg5} alt="" />
            </div>
            <p>
              Мой ориентир — это женщина, которая успешна, красива, умна, любит
              и уважает себя, знает свои сильные и слабые стороны, умеет себя
              правильно преподнести через{" "}
              <span>красоту окружающих её вещей и одежды</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
