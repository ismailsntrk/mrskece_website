import React, { useState } from "react";
import "./Navi.scss";
import video2 from "../../assets/convid .mp4";
import logo from "../../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import img3 from "../../assets/convid.gif";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from "react-i18next";
const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const { t } = useTranslation();
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener("scroll", changeColor);
  let width = window.screen.width;
  const toggleMenu = () => {
    setIsOpen((open) => !open);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const triggerMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div id="navbar-body">
      <div className="overlay">
        <div id="overlay-p">
          <p id="overlay-title">{t("MRS Keçe ve Tekstil San.Tic.Ltd.Sti. Geotekstil Keçe")}</p>
         <hr
            style={{
              border: "0.2rem solid black",
              width: "6em",
              marginBottom: "2em",
            }}
          ></hr>
          <p id="overlay-pr">
          {t("Geotekstil İhtiyaclarinizda Dogru Adres.")}
          </p>

          <Link to="/contact" id="vid-btn">
            <WhatsAppIcon></WhatsAppIcon>
            0532 490 04 74
          </Link>
        </div>
      </div>
      {width >= 880 ? (
        <video id="background-video" src={video2} autoPlay muted loop />
      ) : (
        <img id="background-video" src={img3} alt=""></img>
      )}

      <div
        className={
          color
            ? `inside-video header-bg ${isOpen ? "is-open header-bg-sec-two" : ""}`
            : `inside-video ${isOpen ? "is-open" : ""}`
        }
      >
        <Link onClick={toTop} to="/" id="logo">
          <img src={logo} alt="logo"></img>
        </Link>
        <div></div>
        <div class="dvs-header__trigger" onClick={triggerMenu}>
          <MenuIcon sx={{ color: "orange" }}></MenuIcon>
        </div>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          {/* other code */}
        </NavLink>
        <NavLink
          onClick={toggleMenu}
          to="/"
          className="nav-items isActive"
          id="home"
        >
          {t("Ana Sayfa")}
        </NavLink>
        <NavLink onClick={toggleMenu} to="/about-us" className="nav-items">
          {t("Hakkımızda")}
        </NavLink>
        <NavLink onClick={toggleMenu} to="/products" className="nav-items">
          {t("Ürünler")}
        </NavLink>
        <NavLink onClick={toggleMenu} to="/applications" className="nav-items">
          {t("Uygulamalar")}
        </NavLink>
        <NavLink onClick={toggleMenu} to="/contact" className="nav-items">
          {t("İletişim")}
        </NavLink>
      
      </div>
    </div>
  );
};

export default Navi;
