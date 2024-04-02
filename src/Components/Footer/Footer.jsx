import "./footer.css";
import { BsSend } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { BiLogoTwitter } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import video2 from "../../assets/video2.mp4";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import i18n from "i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const lang = window.localStorage.getItem("i18nextLng") || "en";
  console.log(lang);
  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lang]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>{t("keep in touch")}</small>
            <h2>{t("travel wiht us")}</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder={t("email placeholder")}
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              {t("send")}
              <BsSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <Link to="#" className="logo flex">
                <MdTravelExplore className="icon" /> {t("travel")}
              </Link>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              {t("travel desc")}
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <BiLogoTwitter className="icon" />
              <BsYoutube className="icon" />
              <BsInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group One */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("OUR AGENCY")}</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Services")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Insurance")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Agency")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Tourism")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Payment")}
              </li>
            </div>
            {/* Group Two */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("PARTINERS")}</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Bookings")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Rentcars")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Hoste lWorld")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Trivago")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Trip Advisor")}
              </li>
            </div>
            {/* Group Three */}
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">{t("LAST MINUTE")}</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("London")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("California")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Indonesia")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Europe")}
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                {t("Oceania")}
              </li>
            </div>
          </div>

          <div data-aos="fade-up" className="footerDiv flex">
            <small>{t("BEST TRAVEL WEBSITE THEME")}</small>
            <small>COPYRIGHTS RESERVED - ISRATECH 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
