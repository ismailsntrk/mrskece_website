import React from "react";
import "./Dashboard.scss";
import Navi from "../navi/Navi";
import rotatedImg from "../../assets/1.png";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useTranslation } from "react-i18next";
const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div id="main-dash">
      <div style={{ width: "100%" }}>
        <Navi></Navi>
      </div>

      <div id="our-company-sec">
        <div id="company-one">{t("Hakkımızda")}</div>
        <hr
          style={{ borderBottom: "0.2rem solid green", width: "4em", marginBottom: "2em",
          }}
        ></hr>

        <div id="company-two">
          <div> {t("2015 yılında kurulan Mrs Kece, geri dönüşüm sektöründeki zengin bilgi ve tecrübesini, geotekstil üretimine taşıyarak sektörde önemli bir yer edinmiştir. Müşteri memnuniyetini ön planda tutan anlayışıyla, Mrs Kece, değerli müşterilerine en kaliteli ve hesaplı geotekstil ürünlerini sunma misyonunu benimsemektedir.")} <br></br>{" "} <br></br> 
          {t("Firma olarak, çevre ve doğaya duyduğumuz sorumluluk bilinciyle, geri dönüşüme katkıda bulunmanın yanı sıra kaliteden ödün vermeden özgün ve çeşitli geotekstil ürünlerini sektöre sunmaktan gurur duyuyoruz. Her bir ürünümüz, müşterilerimizin talepleri doğrultusunda özel olarak tasarlanmakta ve üretilmektedir.")}
          </div>
          <div></div>
          <div> {t("Mrs Kece ailesi olarak, sürdürülebilirlik ilkesini benimseyerek çevre dostu malzemeler kullanıyor ve üretim süreçlerimizde enerji verimliliğine büyük önem veriyoruz. Bu sayede, hem çevre dostu bir yaklaşımı sürdürüyor hem de müşterilerimize yüksek kaliteli ve çeşitli geotekstil ürünleri sunarak beklentilerini karşılıyoruz.")}{" "} <br></br> <br></br>
          {t("Siz de Mrs Kece'nin kaliteli, güvenilir ve çevre dostu geotekstil ürünleriyle tanışmak için bize ulaşın. Talepleriniz doğrultusunda en uygun çözümleri sunmaktan memnuniyet duyacağımızı belirtmek isteriz. Geotekstil ihtiyaçlarınız için doğru adreste olduğunuzu bilmek, bize duyulan güvenin bir göstergesidir.")}
          </div>
        </div>
      </div>

      <div id="standarts">
        <AnimationOnScroll
          className="standarts-parts"
          animateIn="animate__fadeIn"
        >
          <VerifiedOutlinedIcon style={{ fontSize: "6em" }} />
          <div className="standarts-titles">{t("Kalite")}</div>
          <p>{t("Bilgi ve tecrübemiz kalitemizi belirler.")}</p>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="standarts-parts"
          animateIn="animate__fadeIn"
        >
          <HandshakeOutlinedIcon style={{ fontSize: "6em" }} />
          <div className="standarts-titles">{t("Güvenilirlik")}</div>
          <p>{t("Tüm süreçlerimizde müşteri odaklı çalışma prensibimizle varız.")}</p>
        </AnimationOnScroll>

        <AnimationOnScroll
          className="standarts-parts"
          animateIn="animate__fadeIn"
        >
          <EmojiObjectsOutlinedIcon style={{ fontSize: "6em" }} />
          <div className="standarts-titles">{t("Çevre Dostu")}</div>
          <p> {t("Geri dönüşüm ve yeni oluşumlar biyosim işimiz temiz çevre ve yeşil dünya için varız.")}
          </p>
        </AnimationOnScroll>
      </div>

      <div id="rotated">
        <img src={rotatedImg} alt="rotated"></img>
        <p>
          {t("MrsKece olarak, kararlı taahhütümüz, yenilikte öncülük etmek: üstün sürdürülebilir liflerin dikkatlice seçimiyle başlayarak ve sürekli araştırma ve geliştirmeye kaynak ayırarak devam ediyor.")}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
