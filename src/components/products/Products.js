import React from "react";
import "./Products.scss";
import felt from "../../assets/felt33.JPG";
import CarouselSlider from "react-carousel-slider";
import caritems1 from "../../assets/product-1.JPG";
import caritems2 from "../../assets/product-2.JPG";
import caritems3 from "../../assets/product-3.JPG";
import caritems4 from "../../assets/product-4.JPG";
import caritems5 from "../../assets/product-5.JPG";
import caritems6 from "../../assets/product-6.jpeg";
import caritems7 from "../../assets/product-7.jpeg";
import { useTranslation } from "react-i18next";
let data = [
  {
    id: "1",
    imgSrc: caritems1,
  },
  {
    id: "2",
    imgSrc: caritems2,
  },
  {
    id: "3",
    imgSrc: caritems3,
  },
  {
    id: "4",
    imgSrc: caritems4,
  },
  {
    id: "5",
    imgSrc: caritems5,
  },
];
let manner = {
  autoSliding: { interval: "3s" },
  duration: "2s",
};
let buttonSetting = {
  placeOn: "middle-inside",
};

let sliderBoxStyle = {
  background: "tranparent",
};

const Products = () => {
  const { t } = useTranslation();
  return (
    <div id="products-cont">
      <div id="products-first">
        <div id="products-title">{t("Ürünler")}</div>
        <img id="felt-img" src={felt} alt="product" />
        <div id="felt-img2" alt="product" />
      </div>
      <div id="products-second">
    
       
      
        <div id="product-four">
          <img
            className="product-four-items"
            src={caritems6}
            alt="product-1"
          ></img>

          <table className="product-four-items">
            <tr>
              <th>{t("Ürün İsmi")}</th>
              <th>{t("En")}</th>
              <th>{t("Boy")}</th>
              <th>{t("Rulo")}</th>
            </tr>
            <tr>
              <td>{t("GEOTEKSTİL KEÇE")} 150 gr.</td>
              <td>2m</td>
              <td>100m</td>
              <td>200m²</td>
            </tr>
            <tr>
              <td>{t("GEOTEKSTİL KEÇE")} 200 gr</td>
              <td>2m</td>
              <td>100m</td>
              <td>200m²</td>
            </tr>
            <tr>
              <td>{t("GEOTEKSTİL KEÇE")}250 gr</td>
              <td>2m</td>
              <td>100m</td>
              <td>200m²</td>
            </tr>
            <tr>
              <td>{t("GEOTEKSTİL KEÇE")} 300 gr</td>
              <td>2m</td>
              <td>50m</td>
              <td>100m²</td>
            </tr>
            <tr>
              <td>{t("GEOTEKSTİL KEÇE")} 500 gr</td>
              <td>2m</td>
              <td>50m</td>
              <td>100m²</td>
            </tr>
          </table>
          <img
            className="product-four-items"
            src={caritems7}
            alt="product-1"
          ></img>

        </div>
        <div id="product-three">
          {t(
            "İşletmenizin veya projenizin özel gereksinimlerini karşılamak için buradayız! Müşterilerimize benzersiz tasarım ve üretim çözümleri sunuyoruz. Esneklik, kalite ve müşteri odaklı yaklaşımımızla size en uygun çözümleri sağlıyoruz."
          )}
          <br></br>
          <br></br>
         
        </div>
      </div>

      <CarouselSlider
        slideItems={data}
        manner={manner}
        sliderBoxStyle={sliderBoxStyle}
        buttonSetting={buttonSetting}
      />
    </div>
  );
};

export default Products;
