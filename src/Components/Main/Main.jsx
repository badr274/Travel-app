import "./main.css";
import React from "react";
import { data } from "../../Apis/Apis";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  const lang = window.localStorage.getItem("i18nextLng") || "en";
  console.log(lang);

  const dataShow = lang === "en" ? data[0] : data[1];

  console.log(dataShow);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          {t("most visited")}
        </h3>
      </div>

      <div className="secContent grid">
        {dataShow.map((ele) => {
          return (
            <div key={ele.id} data-aos="fade-up" className="singleDestination">
              <div className="imageDiv">
                <img
                  src={require(`../../assets/${ele.imgSrc}`)}
                  alt={ele.destTitle}
                />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{ele.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{ele.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {ele.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{ele.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{ele.description}</p>
                </div>

                <button className="btn flex">
                  {t("details")} <BsClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
