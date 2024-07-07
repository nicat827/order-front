import React from "react";
import { Link } from "react-router-dom";
import wardrobe1 from "../../../assets/services/wardrobe1.png";
import wardrobe2 from "../../../assets/services/wardrobe2.png";
import wardrobe3 from "../../../assets/services/wardrobe3.png";
import wardrobe4 from "../../../assets/services/wardrobe4.png";
import arrow from "../../../assets/services/arrow.png";
import arrowWhite from "../../../assets/services/arrow-white.png";
import arrowNext from "../../../assets/services/arrow-next.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";
import "./index.scss";

const CustomAccordion = styled(Accordion)({
  borderRadius: "0px",
  border: "1px solid #EF751D",
  backgroundColor: "#081E1B",
  color: "white",
  "& .MuiAccordionSummary-root": {
    backgroundColor: "#081E1B",
    color: "white",
  },
  "& .MuiAccordionDetails-root": {
    backgroundColor: "#081E1B",
    color: "white",
  },
});

const CustomAccordionWhite = styled(Accordion)({
  borderRadius: "0px",
  border: "1px solid #fff",
  backgroundColor: "#081E1B",
  color: "white",
  "& .MuiAccordionSummary-root": {
    backgroundColor: "#081E1B",
    color: "white",
  },
  "& .MuiAccordionDetails-root": {
    backgroundColor: "#081E1B",
    color: "white",
  },
});

const Wardrobe = ({services}) => {
  return (
    <section id="wardrobe">
      <div className="header">
        <h2>02</h2>
        <h2>
          разбор гардероба офлайн<span>/</span>онлайн
        </h2>
      </div>
      <div className="photos">
        <div className="div1">
          <img src={wardrobe1} alt="" />
        </div>
        <div className="div2">
          <img src={wardrobe2} alt="" />
        </div>
        <div className="div3">
          <img src={wardrobe3} alt="" />
        </div>
        <div className="div4">
          <img src={wardrobe4} alt="" />
        </div>
      </div>
      <div className="accardion">
        <CustomAccordionWhite>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Оффлайн разбор гардероба</h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкетирования и онлайн брифинга
              </li>
              <li>
                — разбор гардероба у вас дома из вещей двух сопутствующих
                сезонов (весна-лето, лето-осень, осень-зима, зима-весна),
                продолжительностью до 4-х часов
              </li>
              <li>
                — анализ гардероба, сортируются все неактуальные вещи с чёткими
                объяснениями и комментариями
              </li>
              <li>
                — составление наглядных формул образов из актуальных вещей,
                участвующих в разборе гардероба 
              </li>
              <li>
                — PDF-файл, содержащий наглядные формулы образов + шопинг-лист
                (список вещей рекомендуемых к покупке, без ссылок)
              </li>
              <li></li>
              <li>
                — онлайн-поддержка 2 недели, ответы на возникающие вопросы
              </li>
            </ul>
            <p>Инструкция по подготовке:</p>
            <ul>
              <li>
                — к моему приезду на разбор гардероба, все вещи участвующие в
                разборе гардероба должны быть заранее разложены на любой
                поверхности (кровать, диван, пол) по категориям: низы, верха,
                верхняя одежда, обувь, сумки, аксессуары, украшения)
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>— чёткое понимание возможностей и потенциала гардероба</li>
              <li>— наглядные формулы образов из ваших вещей</li>
              <li>
                — ответы на любые ваши вопросы в моменте разбора гардероба
              </li>
              <li>— PDF-файл, который удобно открыть в любой момент</li>
              <li>— шопинг-лист</li>
              <li>
                — онлайн-поддержка 2 недели, ответы на любые возникающие вопросы
                после разбора гардероба 
              </li>
            </ul>
            <p>
              * PDF-файл высылается в течении 3-х дней после разбора гардероба
            </p>
            <p className="price"> Стоимость: {services[6]?.price1} BYN</p>
          </AccordionDetails>
        </CustomAccordionWhite>

        <CustomAccordionWhite>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Онлайн разбор гардероба</h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкетирования и онлайн брифинга
              </li>
              <li>
                — общение и получение фотоинформации через телеграмм мессенджер
              </li>
              <li>
                — разбор гардероба осуществляется из вещей двух сопутствующих
                сезонов (весна-лето, лето-осень и т.д.)
              </li>
              <li>
                — анализ гардероба, сортируются все неактуальные вещи с чёткими
                объяснениями и комментариями
              </li>
              <li>
                — итоговый PDF-файл, содержащий наглядные формулы образов из
                актуальных вещей вашего гардероба + шопинг-лист (рекомендуемые к
                покупке вещи, без ссылок)
              </li>
              <li>— cрок исполнения 7-10 дней</li>
              <li>
                — онлайн-поддержка 2 недели, ответы на возникающие вопросы
              </li>
            </ul>
            <p>Высылаемая вами фотоинформация:</p>
            <ul>
              <li>
                — фото ваших вещей (верха, низы, верхняя одежда, обувь, сумки,
                аксессуары, украшения), сопутствующих сезонов
              </li>
              <li>
                — все фотографии должны быть сделаны на одном и том же фоне,
                желательно на однотонном светлом фоне+фото высылаемых вещей на
                вас
              </li>
              <li>
                — если дополнительно мне понадобится небольшое видео конкретной
                вещи, я об этом уведомлю дополнительно
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>— чёткое понимание возможностей и потенциала гардероба</li>
              <li>— наглядные формулы образов из ваших вещей</li>
              <li>
                — содержательный PDF-файл разбора гардероба, который удобно
                открыть в любой момент 
              </li>
              <li>
                — онлайн-поддержка 2 недели, ответы на любые возникающие вопросы
                после онлайн разбора гардероба
              </li>
            </ul>
            <p className="price">Стоимость: {services[7]?.price1} BYN  [предоплата 100%]</p>
          </AccordionDetails>
        </CustomAccordionWhite>

        <CustomAccordionWhite>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Дополнительная услуга</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Формат: расширенный PDF-файл с конкретными позициями из конкретных
              онлайн магазинов. Вам останется лишь сделать заказ онлайн, не
              тратя времени на поиски позиций   
            </p>
            <p className="price">Стоимость: {services[8]?.price1} BYN</p>
          </AccordionDetails>
        </CustomAccordionWhite>
      </div>
      <div className="contact-wrapper">
        <Link to="/contacts" className="contact">
          <span>записаться на услугу</span>
          <span>
            <img src={arrowNext} alt="" />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Wardrobe;