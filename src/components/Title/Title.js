import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children }) => {
  return (
    <>
      <h1 className={styles.header}>{children}</h1>
      <div className={styles.underline}></div>
    </>
  );
};

export default Title;
