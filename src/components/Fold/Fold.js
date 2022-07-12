import React from "react";
import styles from "./Fold.module.scss";
import img from "../../assets/logo białe svg (1).svg";

export const Fold = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h3>Jakub Klejczyk,</h3>
          <h1>Front-end Developer</h1>
          <button>Projekty</button>
        </div>
        <div className={styles.item}>
          <img className={styles.hero} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Fold;
