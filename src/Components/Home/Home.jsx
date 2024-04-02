import "./home.css";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { AiOutlineUnorderedList } from "react-icons/ai";
import video from "../../assets/video.mp4";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            {t("our packages")}
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            {t("search holiday")}
          </h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">{t("search description")}</label>
            <div className="input flex">
              <input
                type="text"
                placeholder={t("name placeholder")}
                id="city"
              />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">{t("select date")}</label>
            <div className="input flex">
              <input type="date" id="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">{t("max price")}</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" id="price" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>{t("filter")}</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <AiOutlineUnorderedList className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
