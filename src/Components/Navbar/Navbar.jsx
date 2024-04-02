import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [active, setActive] = useState("navBar");
  const { t } = useTranslation();
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              {t("travel")}
            </h1>
          </Link>
        </div>
        <div className="btnsDiv">
          <button
            className="langBtn"
            onClick={(e) => {
              if (e.target.value === "AR") {
                i18n.changeLanguage("ar");
                e.target.value = "EN";
                e.target.innerHTML = "EN";
              } else {
                i18n.changeLanguage("en");
                e.target.value = "AR";
                e.target.innerHTML = "AR";
              }
            }}
          >
            EN
          </button>
          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("home")}
                </Link>
              </li>

              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("package")}
                </Link>
              </li>

              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("shop")}
                </Link>
              </li>

              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("about")}
                </Link>
              </li>

              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("pages")}
                </Link>
              </li>

              <li className="navItem">
                <Link to="/" className="navLink">
                  {t("news")}
                </Link>
              </li>

              <li className="navItem">
                <Link href="#" className="navLink">
                  {t("contact")}
                </Link>
              </li>

              <button className="btn">
                <Link href="#">{t("book now")}</Link>
              </button>
            </ul>

            <div className="closeNavbar" onClick={removeNav}>
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
