import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
let handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
  };

  return (
    <footer>
      <div className="footer-top">
        <img id="footer-logo" src={logo} alt="" />
        <div className="address">
        <h3> {t("Adres")}: </h3>
          <p> No:15 </p>
          <p> Bölme </p>
          <p> UŞAK / TURKEY</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-links">
          <Link onClick={handleScrollToTop} to="/">{t("Ana Sayfa")}</Link> <Link to="/about-us">{t("Hakkımızda")}</Link> 
          <Link onClick={handleScrollToTop} to="/products">{t("Ürünler")}</Link> 
          <Link onClick={handleScrollToTop} to="/applications">{t("Uygulamalar")}</Link>
          <Link onClick={handleScrollToTop} to="/contact">{t("İletişim")}</Link>
        </div>
        <div className="copyright">
          <p>All rights reserved MrsKece © 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
