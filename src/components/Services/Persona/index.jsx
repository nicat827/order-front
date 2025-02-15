import React from "react";
import { Link } from "react-router-dom";
import arrowNext from "../../../assets/services/arrow-next.png";
import "./index.scss";

const Persona = ({services}) => {
  return (
    <section id="persona">
      <div className="header">
        <h2>05</h2>
        <h2>Имидж-консультация</h2>
      </div>
      <div className="descr">
        <h4>Этапы подготовки к консультации:</h4>
        <ul>
          <li>
            1. Анкетирование. Высылаю анкету для заполнения, путём которой я
            определяю ваши стилевые предпочтения, анализирую анкетные данные.
          </li>
          <li>
            2. Фотоинформация. Вы высылаете мне несколько фотографий для точного
            анализа типа вашей фигуры и цветотипа внешности (портретная
            фотография без макияжа при дневном освещении+фотография в полный
            рост в купальнике)
          </li>
        </ul>
        <p>Как проходит имидж-консультация:</p>
        <p>
          Мы встречаемся в назначенное время и день в уютном кафе. Я прихожу на
          встречу с ноутбуком и готовым PDF-файлом, содержащим информацию о Вас.
          Файл будет состоять из блоков колористики внешности, типологии фигуры,
          стилевого ориентира. После имидж-консультации Вы получаете PDF-файл в
          ваше личное пользование  *онлайн-поддержка в течении 2-х недель с
          момента имидж-консультации по возникающим вопросам
        </p>

        <h4>Во время нашей консультации Вы узнаете:</h4>
        <ul>
          <li>
            — какие цвета, фактуры, крой, стилевые направления вам подходят
          </li>
          <li>
            — в каком направлении двигаться в построении своего персонального
            стиля
          </li>
          <li>
            — узнаете как подчеркнуть достоинства вашей фигуры, и скрыть
            имеющиеся недостатки
          </li>
          <li>
            — узнаете как видоизменить ваш имеющийся гардероб, чтобы он заиграл
            новыми красками
          </li>
          <li>
            — получите консультацию по всем возникающим вопросам, касательно
            стиля и моды
          </li>
        </ul>
        <h4>
        Формат: экспертная консультация в формате офлайн встречи продолжительностью до 2-х часов
        <br />
        Стоимость: {services[10]?.price1} BYN
        </h4>
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

export default Persona;