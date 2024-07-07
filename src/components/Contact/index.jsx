import React from "react";
import { useLocation } from "react-router-dom";
import arrowNextWhite from "../../assets/services/arrow-next-white.png";
import contactUs from "../../assets/contacts/contact-us.png";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import "./index.scss";
import { useFormik } from "formik";
import axios from "axios";

const Contact = () => {
  const location = useLocation();
  const path = location.pathname;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    // validationSchema: 
    onSubmit: async (values, actions) => {
      if (!values.email?.length || !values.name?.length || !values.message?.length) alert("field cannot be empty!")
      try {
        const res = await axios.post('https://script.google.com/macros/s/AKfycbwanLjBdtIAqMRngmzYdZ2pEi1X_jTXymwkH43SFqgmJrd2P2hbC4acoFNC8_IxYWDZtg/exec', values, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        alert("Вы успешно оставили заявку!")
        
      } catch (error) {
        console.error('Error:', error);
      }
      actions.resetForm();
    }
  })

  return (
    <section id="contact-with-us">
      <h4>Записаться на услугу</h4>
      <div className="wrapper">
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Имя</label>
            <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Gmail</label>
            <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
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
