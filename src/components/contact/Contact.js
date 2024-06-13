import React, { useRef, useState } from "react";
import "./Contact.scss";
import CustomGoogleMapWithMarker from "./CustomGoogleMapWithMarker";
import call from "../../assets/phone.jpg";
import convid from "../../assets/nav-one.mov";
import congif from "../../assets/contact.gif";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import SmartphoneIcon from '@mui/icons-material/WhatsApp';

import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const toggle = () => setCapcthaDone((prevState) => !prevState);
  const [capcthaIsDone, setCapcthaDone] = useState(false);
  function onChange() {
    toggle();
  }
  const { t } = useTranslation();
  const form = useRef();
  let width = window.screen.width;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0stjmjf",
        "template_5y7myvg",
        form.current,
        "qO6ce20J10NxIRFOV"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            alert("Your message has been delivered");
            window.location.reload();
          } else {
            alert("An error occured");
            window.location.reload();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact-cont">
      <div id="contact-first">
      
        {width >= 880 ? (
            <video src={convid} autoPlay muted loop />
          ) : (
            <img src={congif} alt=""></img>
          )}
        <div id="video-blur">
          <h1>{t("Bize Ulaşın")}</h1>
          <p>
           
{t("Sürdürülebilir keçe dolgu çözümleri için MrsKece ile iletişime geçin - projelerinizi çevre dostu mükemmeliyetle yükseltin.")}
          </p>
        </div>
      </div>

      <div id="contact-sec">
        <div id="form-div">
          <img src={call} alt="callcenter"></img>
          <div id="form-inside">
            <h2>
              {t("İletişim")}
              <hr
                style={{
                  width: "4em",
                  color: "green",
                  border: "2px solid green",
                }}
              ></hr>
            </h2>

            <form ref={form} onSubmit={sendEmail}>
              <div id="form-name-email">
                <input
                  maxlength={26}
                  minLength={6}
                  placeholder="Name"
                  type="text"
                  for="name"
                  name="name"
                />

                <input
                  maxlength={30}
                  minLength={6}
                  placeholder="Email"
                  type="email"
                  name="email"
                />
              </div>

              <input
                maxlength={40}
                minLength={3}
                placeholder="Subject"
                type="text"
                name="subject"
              />
              <textarea
                placeholder="Message"
                maxlength={500}
                minLength={6}
                name="message"
                rows={6}
              ></textarea>
              <div id="recaptcha">
                <ReCAPTCHA
                  sitekey="6LcPUjgpAAAAAJX85UeFC10CClXZIDA0-_ZE4zKN"
                  onChange={onChange}
                />
                {capcthaIsDone === true ? (
                  <button type="submit" value="Gönder">
                    {t("Gönder")}
                  </button>
                ) : (
                  <button
                    style={{
                      backgroundColor: "orange",
                      cursor: "alias",
                    }}
                    disabled
                    type="submit"
                    value="Gönder"
                  >
                    {t("Gönder")}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="contact-boxes">
        <a href="mailto:info@mrskece.com" className="boxes">
          <EmailIcon style={{ fontSize: "4em", color: "black" }} />
          <h2 style={{ color: "black", textDecorationLine: "none" }}>
            {t("Mail Gönder")}
          </h2>
        </a>
        <a
          href="https://maps.app.goo.gl/DzfYXhNEW9yuKrEE6"
          target="_blank"
          rel="noreferrer"
          className="boxes"
        >
          <DirectionsIcon style={{ fontSize: "4em", color: "black" }} />
          <h2 style={{ color: "black", textDecorationLine: "none" }}>
            {t("Ziyaret Et")}
          </h2>
        </a>
        <a href="https://web.whatsapp.com/" target="_blank"  className="boxes" rel="noreferrer">
          <SmartphoneIcon style={{ fontSize: "4em", color: "black" }} />
          <h2 style={{ color: "black", textDecorationLine: "none" }}>
            {t("0532 490 04 74")}
          </h2>
        </a>
      </div>
      <div
        style={{
          width: "100%",
          height: "49vh",
          marginTop: "5em",
          marginBottom: "5em",
        }}
      >
        <CustomGoogleMapWithMarker></CustomGoogleMapWithMarker>
      </div>
    </div>
  );
};

export default Contact;
