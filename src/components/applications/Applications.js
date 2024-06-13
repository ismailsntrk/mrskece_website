import React from "react";
import "./Applications.scss";
import CarouselSlider from "react-carousel-slider";
import caritems1 from "../../assets/app-1.JPG";
import caritems2 from "../../assets/app-2.JPG";
import caritems3 from "../../assets/app-3.JPG";
import caritems4 from "../../assets/app-4.JPG";
import item2 from "../../assets/item2.jpeg";
import { useTranslation } from "react-i18next";
// import vid from '../../assets/app-vid.mov'
// import gif from '../../assets/app-vid.gif'
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

const Applications = () => {
  const { t } = useTranslation();
  // let width = window.screen.width;
  return (
    <div id="application-container">
      <div id="applications-page-two">
        <div id="app-cont">
          <h2 className="app-titles"> {t("İğneleme Teknolojisi: MrsKece'de Tekstil İnovasyonunu Yükseltiyor")}
          </h2>
          <br></br>
          <p> {t("MrsKece olarak, tekstil yaratımlarımıza yenilik katmaktan büyük gurur duyuyoruz ve iğneleme teknolojimiz, mükemmeliyet taahhüdümüzün bir göstergesi olarak durmaktadır.")}
          </p>{" "}
          <br></br>
          <div id="item2"> <img id="item2-img" src={item2} alt="felt" />
          </div>{" "}
          <br></br>
          {/* {width >= 880 ? ( <video id="app-vid" src={vid} autoPlay muted loop />
          ) : ( <img id="app-gif" src={gif} alt=""></img>
          )}
          */}
          <h2 className="app-titles"> {t("İğneleme Nedir ?")}</h2> <br></br>
          <p> {t("İğneleme, liflerin mekanik olarak birbirine kilitleyildiği esnek bir kumaş oluşturmak için kullanılan gelişmiş bir tekstil üretim sürecidir. Özel uçlu iğneler, gevşek bir lif ağına nüfuz eder ve lifleri karmaşık bir şekilde birbirine geçirerek sağlam ve dayanıklı bir malzeme oluşturur.")}
          </p>{" "}
          <br></br>
          <h2 className="app-titles">{t("İğneleme Nasıl Yapılır ?")}</h2> <br></br>
          <p>{t("İğneleme süreci birden fazla aşama içerir:")}</p> <br></br>
          <ul> <li>   {t("Ağ Oluşturma: Titizlikle seçilmiş kaliteli ve sürdürülebilirliği için seçilen gevşek bir lif ağı ile başlarız.")}{" "} </li>
           <br></br>
            <li>  {t("İğne Delme: Lif ağı daha sonra son teknoloji iğneleme makinesine tanıtılır. Dikenli iğneler, liflere tekrarlayan şekilde nüfuz eder ve mekanik olarak birbirine kilitleyilmiş bir kumaşın ortaya çıkmasına neden olur.")} </li>{" "}
             <br></br> <li>  {t("İkilikte Güç: İğneleme teknolojisinin benzersiz kalitesi, liflerin mekanik olarak birbirine kilitleyilmesinde yatar, bu da sağlam olmanın yanı sıra çeşitli uygulamalara uygun bir kumaşın ortaya çıkmasını sağlar.")} </li>{" "} <br></br>
          </ul>
          <br></br>
          <h2 className="app-titles"> {t("MrsKece'de İğneleme Neden Önemlidir :")}
          </h2>{" "}
          <br></br>
          <p> {t("İğneleme, çeşitli uygulamalarda kullanılabilen çok yönlü bir tekstil tekniktir, örneğin:")}
          </p>{" "}
          <br></br>
          <ul> <li>   {t("Sürdürülebilirlik: İğneleme tekniğimiz, çevresel olarak zararlı gazlara duyulan ihtiyacı ortadan kaldırarak sürdürülebilirliği destekler ve bu da çevre dostu bir tercih oluşturur.")} </li>{" "} <br></br>
           <li>   {t("Çeşitlilik: Ortaya çıkan kumaş, yatak üretiminden bahçe tarımına ve yalıtım ambalajına kadar çeşitli endüstrilerde uygulama bulur.")} </li> 
          <br></br> <li>   {" "}  {t("Dayanıklılık: MrsKece'nin iğneleme kumaşları, güç ve dirençle özdeşleşir, çeşitli uygulamalarda uzun ömürlü performansı garanti eder.")} </li>{" "}
          </ul>
          <br></br>
          <CarouselSlider slideItems={data} manner={manner} sliderBoxStyle={sliderBoxStyle} buttonSetting={buttonSetting}
          />
          <br></br>
          <h2 className="app-titles"> {t("Yenilikçi Tekstiller İçin MrsKece'yi Seçin:")}
          </h2>
          <br></br>
          <p> {t("İğneleme teknolojisini entegre ederek, MrsKece'de tekstil zanaatının ölçülerini yeniden tanımlıyoruz. Mükemmeliyete olan kararlılığımız, bu ileri teknikle birleştiğinde, size özel gereksinimlerinize uygun üst düzey ürünler sunmamıza olanak tanır.")} <br></br> <br></br>
           {t("MrsKece ile iğneleme tekstillerinin olasılıklarını keşfedin. İnovatif yaklaşımımızın tekstil deneyiminizi nasıl yükseltebileceğini öğrenmek için bize ulaşın.")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
