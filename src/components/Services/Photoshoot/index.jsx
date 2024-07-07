import React from "react";
import { Link } from "react-router-dom";
import arrowNext from "../../../assets/services/arrow-next.png";
import "./index.scss";

const Photoshoot = () => {
  return (
    <section id="photoshoot">
      <div className="header">
        <h2>03</h2>
        <h2>стилизация съёмки</h2>
      </div>
      <div className="cards-wrapper">
        <div className="card">
          <h3>Оффлайн разбор гардероба</h3>
          <ul>
            <li>— разработка идеи для стилизованной фотосессии</li>
            <li>— разработка стилизации до 10 дней</li>
            <li>— готовый PDF-файл вашей стилизации</li>
            <li>
              — координация с фотографом, визажистом и другими участниками
              съёмки по необходимости
            </li>
            <li>
              — образ под ключ, включая одежду, обувь, аксессуары + персональное
              присутствие на площадке
            </li>
          </ul>
        </div>
        <div className="card">
          <h3>Онлайн разбор гардероба</h3>
          <ul>
            <li>— онлайн консультация</li>
            <li>
              — продумывание вашего образа в течение 10 дней с момента вашего
              запроса
            </li>
            <li>
              — PDF-файл с готовым образом, ссылками и информацией, где
              приобрести, взять в аренду составляющие для вашего образа
            </li>
          </ul>
        </div>
      </div>
      <Link to="/contacts" className="contact">
        <span>записаться на услугу</span>
        <span>
          <img src={arrowNext} alt="" />
        </span>
      </Link>
    </section>
  );
};

export default Photoshoot;
