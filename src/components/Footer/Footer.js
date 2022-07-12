import React from "react";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <h3>Jakub Klejczyk</h3>

      <div>
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <p>© 2022 Jakub Klejczyk, all rights reserved.</p>
    </footer>
  );
};

export default Footer;
