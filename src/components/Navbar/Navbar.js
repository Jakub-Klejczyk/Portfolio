import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import img from "../../assets/logo białe svg (1).svg";

const Navbar = () => {
  const [active, setActive] = useState("wrapper");
  const navToggle = () => {
    active === "wrapper"
      ? setActive("wrapper wrapper__active")
      : setActive("wrapper");
  };
  return (
    <>
      <nav className="nav">
        <img className="logo" src={img} alt="" />
        <FontAwesomeIcon onClick={navToggle} icon={faBars} className="icon" />
        <div className="test"></div>
        <ul className={active}>
          <li href="#about" className="item">
            Start
          </li>
          <li href="#about" className="item">
            O mnie
          </li>
          <li href="#projects" className="item">
            Projekty
          </li>
          <li href="#contact" className="item">
            Kontakt
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
