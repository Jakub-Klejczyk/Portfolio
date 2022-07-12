import React from "react";
import styles from "./Project.module.scss";
import Title from "../Title/Title";
import Card from "../Card/Card";

const Project = ({ children, image, name, text }) => {
  return (
    <section>
      <Title children="Projekty" />

      <div className={styles.wrapper}>
        <Card
          name="Nazwa projektu"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
        exercitationem dolore! Corporis nemo vitae error ullam odit"
          tech="HTML, SCSS, JS"
        />
        <Card
          name="Nazwa projektu"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
        exercitationem dolore! Corporis nemo vitae error ullam odit"
          tech="HTML, SCSS, JS"
        />
        <Card
          name="Nazwa projektu"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
        exercitationem dolore! Corporis nemo vitae error ullam odit"
          tech="HTML, SCSS, JS"
        />
        <Card
          name="Nazwa projektu"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
        exercitationem dolore! Corporis nemo vitae error ullam odit"
          tech="HTML, SCSS, JS"
        />
      </div>
    </section>
  );
};

export default Project;
