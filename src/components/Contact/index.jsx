import React from "react";
import { useLocation } from "react-router-dom";
import arrowNextWhite from "../../assets/services/arrow-next-white.png";
import contactUs from "../../assets/contacts/contact-us.png";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import "./index.scss";
import { useFormik } from "formik";

const Contact = () => {
  const location = useLocation();
  const path = location.pathname;

  const formik = useFormik({
    initialValues: {
      yName: '',
      gmail: '',
      message: '',
    },
    // validationSchema: 
    onSubmit: async (values, actions) => {
      console.log(values);
      actions.resetForm();
    }
  })

  return (
    <section id="contact-with-us">
      <h4>Записаться на услугу</h4>
      <div className="wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="yName">Имя</label>
            <input type="text" id="yName" name="yName" value={formik.values.yName} onChange={formik.handleChange}/>
          </div>
          <div>
            <label htmlFor="gmail">Gmail</label>
            <input type="email" id="gmail" name="gmail" value={formik.values.gmail} onChange={formik.handleChange}/>
          </div>
          <div>
            <label htmlFor="message">Сообщение</label>
            <input type="text" id="message" name="message" value={formik.values.message} onChange={formik.handleChange}/>
          </div>
          <button type="submit">
            <span>оставить заявку</span>
            <img src={arrowNextWhite} alt="" />
          </button>
        </form>
        <div className="img">
          <img src={contactUs} alt="" />
        </div>
      </div>
      {path == "/contacts" && (
        <div className="icons-wrapper">
          <ul>
            <li>
              <a href="#" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <PiTelegramLogo />
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Contact;
