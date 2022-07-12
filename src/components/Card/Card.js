import React from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, name, text, tech }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>obrazek</div>
      <h3>{name}</h3>
      <p>{text}</p>
      <p>{tech}</p>
      <div className={styles.goto}>
        <FontAwesomeIcon icon={faCirclePlay} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
};

export default Card;
