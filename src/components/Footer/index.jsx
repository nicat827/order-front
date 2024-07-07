import React from "react";
import logo from "../../assets/logo.png";
// import footer from "../../assets/footer.png";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <img src={logo} alt="" />
          {/* <img src={footer} alt="" /> */}
          <p>
          <span>YOUR</span><br />
          <span>FASHION</span><br />
          <span style={{marginLeft: '50px'}}>LIFESTYLE</span><br />
          <span style={{marginLeft: '70px'}}>PARTNER</span>
        </p>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink to="/services">Мои услуги</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Галерея</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <p>copyright © 2024 prattostyle.All rights reserved</p>
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
      </div>
    </footer>
  );
};

export default Footer;
