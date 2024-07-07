import React from "react";
import arsenal from "../../../assets/home/arsenal.png";
import "./index.scss";

const Arsenal = () => {
  return (
    <section id="arsenal">
      <div className="container">
        <div className="left-column">
          <h2>
            В моём профессиональном <br />
            арсенале:
          </h2>
          <ul>
            <li>
              — авторские статьи о моде на информационных порталах Onliner.by и
              Smartpress.by
            </li>
            <li>— фотопубликации моих стилизаций в международных журналах</li>
            <li>
              — афиша с моим изображением висит в торговом центре «Титан», где я
              являюсь стилистом, проводящий шопинг-туры
            </li>
            <li>
              — колоссальный опыт работы с клиентами из Беларуси и других стран
            </li>
          </ul>
        </div>
        <div className="right-column">
          <div className="top">
            <h2>
              Моё образование в <br /> сфере стиля и моды:
            </h2>
            <ul>
              <li>— Академия имиджа г. Минска</li>
              <li>
                — Знание количество онлайн курсов, вебинаров, лекций от
                известных спикеров в индустрии моды
              </li>
            </ul>
          </div>
          <div className="bottom">
            <img src={arsenal} alt="Image description" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arsenal;
