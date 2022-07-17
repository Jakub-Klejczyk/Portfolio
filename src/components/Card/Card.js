import React from "react";
import styles from "./Card.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, name, text, tech, repo, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      <div className={styles.other}>
        <h3>{name}</h3>
        <div className={styles.style}></div>
        <p>{text}</p>
        <div className={styles.action}>
          <p>{tech}</p>
          <div className={styles.goto}>
            <a target="_blank" rel="noreferrer" href={link}>
              <FontAwesomeIcon icon={faCirclePlay} />
            </a>
            <a target="_blank" rel="noreferrer" href={repo}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
