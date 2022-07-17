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
    <section id="about">
      <Title children="O mnie" />
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h3>Cześć!</h3>
          <p>
            Nazywam się Jakub Klejczyk. Z programownaiem pierwszy raz zetknąłem
            się w okolicach szkoły podstawowej, kiedy to z przyjacielem
            spróbowaliśmy stworzyć swoją własną grę. Jednak dopiero od dwóch lat
            kodowanie stało się moją codziennością. Od tego czasu systematycznie
            staram się rozwijać w zakresie technologii front-endowych.
          </p>
          <p>
            Poza tym jestem fanem wspinaczki sportowej, jak i skłkowej. Moje
            serce skradzione zostało lata temu przez gady, które do dziś
            hodouje. Uwielbiam również spędzać czas przy dobrej książce,
            ostatnio najczęciej wybieram literature faktu.
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
