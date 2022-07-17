import React from "react";
import styles from "./Title.module.scss";
import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <>
      <h1 className={styles.header}>{children}</h1>
      <div className={styles.underline}></div>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
