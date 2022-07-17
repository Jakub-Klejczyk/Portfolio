import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import img from "../../assets/logo białe svg (1).svg";

const Navbar = () => {
  const [active, setActive] = useState("wrapper");
  const [active2, setActive2] = useState("wrapper2");
  const navToggle = () => {
    active === "wrapper" && active2 === "wrapper2"
      ? setActive2("wrapper2 wrapper__active")
      : setActive2("wrapper2");
  };
  return (
    <>
      <nav className="nav">
        <a href="#">
          <img className="logo" src={img} alt="" />
        </a>
        <FontAwesomeIcon onClick={navToggle} icon={faBars} className="icon" />
        <div className="test"></div>
        <ul className={active}>
          <li className="item">
            <a href="#">Start</a>
          </li>
          <li className="item">
            <a href="#about">O mnie</a>
          </li>
          <li className="item">
            <a href="#projects">Projekty</a>
          </li>
          <li className="item">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
        <ul className={active2}>
          <li className="item">
            <a href="#">Start</a>
          </li>
          <li className="item">
            <a href="#about">O mnie</a>
          </li>
          <li className="item">
            <a href="#projects">Projekty</a>
          </li>
          <li className="item">
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
