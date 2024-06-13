import React from "react";
import "./AboutUs.scss";
import img1 from "../../assets/item1.png";
import img2 from "../../assets/imgs.gif";
import video from "../../assets/1.mov";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  let width = window.screen.width;
  const { t } = useTranslation();
  return (
    <div>
      <div className="about-us">
      <div id="about-img-blur"></div>
          <img id="about-img" src={img1} alt="yarn" />
           
          <div id="about-cont">
            <div id="about-title">{t("Hakkımızda")}</div>
            <div id="about-p"> {t("Firmamız, 2015 yılında kurulmuş olup, o günden bu yana Mrs Kece markasıyla geri dönüşüm sektöründe değerli bir bilgi birikimi ve deneyime sahiptir. Bu birikimi, geotekstil üretimi alanında kullanarak, müşterilerimize talepleri doğrultusunda en kaliteli ve hesaplı geotekstil ürünlerini sunmaktayız. Mrs Kece olarak, çevre ve doğaya katkıda bulunma sorumluluğumuzun bilincindeyiz. Geri dönüşüm sektöründeki tecrübemizi, çevre dostu geotekstil üretimine taşıyarak, kaliteli ürünler sunma vizyonunu benimsemekteyiz. Müşteri memnuniyetini ön planda tutarak, farklı ihtiyaçlara uygun çeşitli geotekstil ürünlerini sektöre sunmanın gururunu yaşıyoruz. Kalite standartlarından ödün vermeden, çevreye saygılı üretim anlayışımızla Mrs Kece olarak sektörde öncü bir konumda yer almayı hedefliyoruz. Müşterilerimize sadece ürünlerimizle değil, aynı zamanda çevreye duyarlılığımızla da güvenilir bir iş ortağı olduğumuzu hissettirmeyi amaçlıyoruz. Bizi tercih eden müşterilerimize teşekkür ederiz, ve gelecekte de sürdürülebilir çözümler sunmaya devam edeceğimizi taahhüt ederiz.")}             </div>
          </div>


        <div class="video-container">
          <div id="about-vid-background"></div>
          {width >= 880 ? (
            <video src={video} autoPlay muted loop />
          ) : (
            <img src={img2} alt=""></img>
          )}

          <div class="caption">
            <h1> {t("`Tekstil ve iplikleri yeni dönemin mükemmeliyetine dönüştürüyoruz.`")}             </h1>
          </div>
        </div>

        <div id="mission-part">
          <p style={{ fontSize: "3em", fontWeight: "bold" }}>{t("Misyonumuz")}</p>
          <p style={{ fontSize: "2em", width: "90%", textAlign: "center" }}>
            {t("❝ Sürdürülebilir dolgu ve keçe ürünleri alanında en ileri üretici olma hedefimizle birlikte, müşteri memnuniyetine beş yıldızlı bir vurgu yapmayı amaçlıyoruz. ❞")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
