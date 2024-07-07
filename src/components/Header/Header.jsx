import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import hamburgerIcon from "../../assets/hamburger-icon.png";
import closeIcon from "../../assets/close-icon.png";
import style from "../Header/header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"
          className={style.logo}
        />
        <nav className={`${style.nav} ${menuOpen ? style.open : ""}`}>
          <div className={style.close}>
            <img src={closeIcon} onClick={() => setMenuOpen(false)} alt="" />
          </div>
          <NavLink to={"/services"} onClick={() => setMenuOpen(false)}>
            Мои услуги
          </NavLink>
          <NavLink to={"/gallery"} onClick={() => setMenuOpen(false)}>
            Галерея
          </NavLink>
          <NavLink to={"/contacts"} onClick={() => setMenuOpen(false)}>
            Контакты
          </NavLink>
        </nav>
        <img
          src={menuOpen ? closeIcon : hamburgerIcon}
          onClick={toggleMenu}
          alt="Menu"
          className={style.hamburger}
        />
      </div>
    </header>
  );
};

export default Header;