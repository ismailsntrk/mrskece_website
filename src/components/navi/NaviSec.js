import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
import "./NaviSec.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const NaviSec = () => {
  const { t } = useTranslation();
  const [IsOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener("scroll", changeColor);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  const triggerMenu = () => {
    setIsOpen((open) => !open);
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: for smooth scrolling
    });
  };

  return (
    <div
      className={
        color
          ? `inside-video-sec header-bg-sec ${IsOpen ? "sec-is-open header-bg-sec-two" : ""} `
          : `inside-video-sec ${IsOpen ? "sec-is-open" : ""}`
      }
    >
      <Link onClick={toTop} to="/" id="logo-sec">
        <img src={logo} alt="logo"></img>
      </Link>
      <div></div>
      <div class="dvs-header__trigger" onClick={triggerMenu}>
        <MenuIcon sx={{ color: "orange" }}></MenuIcon>
      </div>
      <NavLink
        onClick={toggleMenu}
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        {/* other code */}
      </NavLink>
      <NavLink to="/" onClick={toggleMenu} className="nav-items-sec isActive">
        {t("Ana Sayfa")}
      </NavLink>
      <NavLink to="/about-us" onClick={toggleMenu} className="nav-items-sec">
        {t("Hakkımızda")}
      </NavLink>
      <NavLink to="/products" onClick={toggleMenu} className="nav-items-sec">
        {t("Ürünler")}
      </NavLink>
      <NavLink
        to="/applications"
        onClick={toggleMenu}
        className="nav-items-sec"
      >
        {t("Uygulamalar")}
      </NavLink>
      <NavLink to="/contact" onClick={toggleMenu} className="nav-items-sec">
        {t("İletişim")}
      </NavLink>
      
    </div>
  );
};

export default NaviSec;
