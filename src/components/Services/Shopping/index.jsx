import React from "react";
import { Link } from "react-router-dom";
import div1 from "../../../assets/services/div1.png";
import div2 from "../../../assets/services/div2.png";
import div4 from "../../../assets/services/div4.png";
import div6 from "../../../assets/services/div6.png";
import div8 from "../../../assets/services/div8.png";
import div10 from "../../../assets/services/div10.png";
import arrow from "../../../assets/services/arrow.png";
import arrowWhite from "../../../assets/services/arrow-white.png";
import arrowNext from "../../../assets/services/arrow-next.png";
import tabletImage1 from "../../../assets/services/tablet-image-1.png";
import tabletImage2 from "../../../assets/services/tablet-image-2.png";
import tabletImage3 from "../../../assets/services/tablet-image-3.png";
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

const Shopping = ({services}) => {

  if (!services.length) return <div>Loading...</div>
  return (
    <section id="shopping">
      <div className="header">
        <h2>01</h2>
        <h2>
          Шопинг офлайн<span>/</span>онлайн
        </h2>
      </div>
      <div className="formats-desc">
        <div className="div1">
          <img src={div1} alt="" />
        </div>
        <div className="div2">
          <img src={div2} alt="" />
        </div>
        <div className="div3">
          <p>
            Формат: шопинг офлайн, онлайн под моим руководством под ваш запрос,
            цель и бюджет по выбранному тарифу 
          </p>
        </div>
        <div className="div4">
          <img src={div4} alt="" />
        </div>
        <div className="div5">
          <ul>
            <li>Экспресс шопинг</li>
            <li>Мини шопинг</li>
            <li>Базовый шопинг</li>
            <li>Эксклюзивный шопинг</li>
            <li>VIP-шопинг</li>
          </ul>
        </div>
        <div className="div6">
          <img src={div6} alt="" />
        </div>
        <div className="div7"></div>
        <div className="div">
          <img src={div8} alt="" />
        </div>
        <div className="div9"></div>
        <div className="div10">
          <img src={div10} alt="" />
        </div>
      </div>
      <div className="formats-tablet">
        <div className="div1-tablet">
          <p>
            Формат: шопинг офлайн, онлайн под моим руководством под ваш запрос,
            цель и бюджет по выбранному тарифу 
          </p>
        </div>
        <div className="div2-tablet">
          <img src={tabletImage1} alt="" />
        </div>
        <div className="div3-tablet">
          <img src={tabletImage2} alt="" />
        </div>
        <div className="div4-tablet">
          <ul>
            <li>Экспресс шопинг</li>
            <li>Мини шопинг</li>
            <li>Базовый шопинг</li>
            <li>Эксклюзивный шопинг</li>
            <li>VIP-шопинг</li>
          </ul>
        </div>
        <div className="div5-tablet">
          <img src={tabletImage3} alt="" />
        </div>
      </div>
      <div className="accardion">
        <CustomAccordion>
          <AccordionSummary
            expandIcon={ <img src={arrow} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
              Экспресс Шопинг
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкетирования и онлайн брифинга
              </li>
              <li>
                — шопинг продолжительностью 1-1,5 часа в любом торговом центре,
                шоуруме, бутике Минска
              </li>
              <li>
                — покупка одной или двух позиций, экстренно необходимых для
                вашего существующего гардероба
              </li>
              <li>
                — онлайн-поддержка 1 неделя, ответы на возникающие вопросы
              </li>
              <p>В результате услуги:</p>
              <ul>
                <li>
                  — грамотно подобранная позиция(-ии) под ваш запрос и бюджет
                </li>
                <li>— экономия вашего времени на поиск позиции(-ий)</li>
                <li>
                  — онлайн-поддержка 1 неделя с момента встречи по любому
                  возникающему вопросу
                </li>
              </ul>
              <p className="price"> Стоимость:</p>
              <ul className="price">
                <li>1 позиция — {services[0].price1} BYN</li>
                <li>2 позиции — {services[0].price2} BYN</li>
              </ul>
            </ul>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <h3>
             Мини шопинг
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкетирования и онлайн брифинга
              </li>
              <li>
                — шопинг продолжительностью до 3-х часов в любом торговом
                центре, шоуруме, бутике Минска
              </li>
              <li>— экономия вашего времени по поиску необходимых позиций</li>
              <li>
                — покупка до 6 изделий, недостающих для полноценного гардероба
              </li>
              <li>
                — онлайн-поддержка 2 недели, ответы на возникающие вопросы
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>
                — четкое понимание в каком направлении двигаться в плане своего
                стиля
              </li>
              <li>
                — приобретены стильные вещи, которые дополнят ваш существующий
                гардероб
              </li>
              <li>
                — онлайн-поддержка 1 неделя с момента встречи по любому
                возникающему вопросу
              </li>
            </ul>
            <p className="price">Стоимость: {services[1]?.price1} BYN</p>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <h3>
              Базовый шопинг
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкеторования и онлайн брифинга
              </li>
              <li>
                — шопинг продолжительностью до 6 часов в любом торговом центре,
                шоуруме или бутике Минска, с предусмотренной совместной
                кофе-паузой
              </li>
              <li>
                — покупка до 12 позиций, например: капсула, состоящая из верхней
                одежды, обуви, верхов, низов одежды, аксессуаров  + необходимые
                образы для конкретных мероприятий
              </li>
              <li>
                — онлайн-поддержка 2 недели, ответы на возникающие вопросы
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>
                — у вас грамотно обновлён гардероб, и проработан персональный
                стиль
              </li>
              <li>
                — полностью собран сезонный гардероб, и образы под конкретные
                мероприятия
              </li>
              <li>— закрыт вопрос с покупками вещей до следующего сезона</li>
              <li>
                — онлайн-поддержка 2 недели с момента встречи по любому
                возникающему вопросу
              </li>
            </ul>
            <p className="price">Стоимость: {services[2].price1} BYN</p>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <h3>
             Эксклюзивный шопинг
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>
                — выявление и постановка необходимых целей, посредством
                анкетирования и онлайн брифинга
              </li>
              <li>
                — конкретный запрос на винтажную эстетику или уникальную вещь
                вне времени
              </li>
              <li>
                — точечный поиск совместно со стилистом, по разработанному
                маршруту (барахолки, стоки, ярмарки, винтажные магазины,
                second-hand)
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>
                — приобретена(-ы) уникальная(-ые) вещь(-и) для дополнения вашего
                существующего гардероба
              </li>
              <li>— положительные эмоции от необычного совместного шопинга </li>
              <li>
                — профессиональные комментарии при выборе винтажной(-ых)
                вещи(-ей), и рекомендации по стилистическим формулам внедрения
                этой(-их) вещи(-ей) в ваш существующий гардероб
              </li>
            </ul>
            <p className="price">Стоимость: {services[3].price1} BYN</p>
            <p>
              * так как мы приезжаем в магазины с единичным товаром, можем не
              найти то, что необходимо именно нам. Вы должны это понимать,
              соглашаясь на этот вид услуги. Данная ситуация не будет означать,
              что я, как персональный стилист, не оказала для Вас услугу
            </p>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion>
          <AccordionSummary
            expandIcon={<img src={arrow} alt="" />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <h3>
              VIP-шопинг
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              <li>— офлайн имидж-консультация</li>
              <li>— офлайн разбор гардероба</li>
              <li>
                — шопинг под моим руководством в два этапа: обновлённая сезонная
                капсула + покупка недостающих элементов для существующего
                гардероба, а также покупка образов для конкретных мероприятий,
                обуви и аксессуаров
              </li>
              <li>
                — PDF-файл с готовыми образами из ваших старых и новых вещей
              </li>
            </ul>
            <p>В результате услуги:</p>
            <ul>
              <li>
                — проработан ваш персональный стиль от консультации, с разбором
                гардероба до полноценного шопинга
              </li>
              <li>
                — собран функциональный гардероб + плюс стильные образы для
                мероприятий
              </li>
              <li>
                — PDF-файл с вашими готовыми образами, достаточно просматривать
                файл, чтобы выбирать образ на каждый день
              </li>
            </ul>
            <p className="price">Стоимость: {services[4].price1} BYN</p>
            <p>
              * PDF-файл высылается в течении 3-ёх дней с момента последней
              встречи
            </p>
          </AccordionDetails>
        </CustomAccordion>
      </div>
      <article>
        ! все транспортные передвижения по составленному шопинг маршруту (такси
        из одного торгового центра в другой), с финансовой точки зрения ложатся
        на клиента
      </article>
      <div className="accardion">
        <CustomAccordionWhite>
          <AccordionSummary
            expandIcon={<img src={arrowWhite} alt="" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3 style={{color:'white'}}>
              Онлайн-шопинг
            </h3>
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
            <p className="price">Стоимость: {services[5].price1} BYN  [предоплата 100%]</p>
          </AccordionDetails>
        </CustomAccordionWhite>
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

export default Shopping;