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
        <a
          href="https://www.linkedin.com/in/jakub-klejczyk-03b296245/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a
          href="https://github.com/Jakub-Klejczyk"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
      <p>© 2022 Jakub Klejczyk, all rights reserved.</p>
    </footer>
  );
};

export default Footer;
