import React from "react";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSass } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons";
import Title from "../Title/Title";

const About = ({ children }) => {
  return (
    <section>
      <Title children="O mnie" id="about" />
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Cześć!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            necessitatibus quibusdam soluta quidem illum! Voluptas eos aliquam
            quam totam numquam ad reiciendis eius, hic modi tenetur doloremque
            cupiditate eveniet commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cum necessitatibus quibusdam soluta quidem illum!
            Voluptas eos aliquam quam totam numquam ad reiciendis eius, hic modi
            tenetur doloremque cupiditate eveniet commodi? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cum necessitatibus quibusdam
            soluta quidem illum! Voluptas eos aliquam quam totam numquam ad
            reiciendis eius, hic modi tenetur doloremque cupiditate eveniet
            commodi?
          </p>
        </div>

        <ul aria-label="Wykorzystywane technologie:">
          <li>
            HTML
            <FontAwesomeIcon className={styles.icon} icon={faHtml5} />
          </li>
          <li>
            CSS <FontAwesomeIcon className={styles.icon} icon={faCss3Alt} />
          </li>
          <li>
            Sass <FontAwesomeIcon className={styles.icon} icon={faSass} />
          </li>
          <li>
            JavaScript <FontAwesomeIcon className={styles.icon} icon={faJs} />
          </li>
          <li>
            React <FontAwesomeIcon className={styles.icon} icon={faReact} />
          </li>
          <li>
            npm <FontAwesomeIcon className={styles.icon} icon={faNpm} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
