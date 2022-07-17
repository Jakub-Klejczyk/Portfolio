import React, { useState } from "react";
import styles from "./Project.module.scss";
import Title from "../Title/Title";
import Card from "../Card/Card";
import shop from "../../assets/shop.png";
import todo from "../../assets/todo.png";
import fylo from "../../assets/fylo.png";
import pricing from "../../assets/pricing.png";
import PropTypes from "prop-types";

const Project = ({ children, image, name, text, repo, link }) => {
  const [cards, setCards] = useState([
    {
      name: "To-Do List w React",
      text: "Jest to mój pierwszy samodzielny projet w React'cie. Jego stworzenie pozwoliło mi zapoznać się ze składnią JSX, przekazywaniem propsów oraz pozostałymi podstawowymi operacjami realizowanymi w ramach tej biblioteki.",
      tech: "React, JavaScript, SCSS, HTML",
      id: 1,
      image: todo,
      repo: "https://github.com/Jakub-Klejczyk/ToDoReact.git",
      link: "https://poki.pl/g/scary-maze",
    },
    {
      name: "Strona sklepu",
      text: "Projekt widoku stony produktu w sklepie interetowym. Posiada możliwość dodania wybranej liczby produktów do koszyka, otworzenie widoku koszyka oraz uzunięcie produktu z koszyka. Dzięki realizacji tego projektu pochodzącego ze strony FrontendMaster mogłem poćwiczyć operowanie drzewem DOM oraz pierwszyraz skorzystać ze preprocesora Sass. Do jego stworzenia wykorzystałem bibliotekę JavaScript - SliderJS.",
      tech: "JavaScript, SCSS, HTML",
      id: 2,
      image: shop,
      repo: "https://github.com/Jakub-Klejczyk/Shop.git",
      link: "https://poki.pl/g/scary-maze",
    },
    {
      name: "Strona - ćwiczenie",
      text: "Landing page stworzony w ramach ćwiczenia stylizacji pochodzący z FrontendMasters. Dodatkowo do projektu stworzyłem logikę walidującą formularz przy wykorzystaniu Regular Expression.",
      tech: "JavaScript, CSS, HTML",
      id: 3,
      image: fylo,
      repo: "https://github.com/Jakub-Klejczyk/FrontendMentorsP1.git",
      link: "https://poki.pl/g/scary-maze",
    },
    {
      name: "Interaktywny cennik",
      text: "Projekt interaktywnego cennika pozwala na modyfikację wartości w ramach elementu input. Umożliwił mi zapoznanie się z bardziej zaawansowanym kodem HTML, stylowaniem elementów input, a także ćwiczenie modyfikacji drzewa DOM.",
      tech: "JavaScript, CSS, HTML",
      id: 4,
      image: pricing,
      repo: "https://github.com/Jakub-Klejczyk/FrontendMentorsP2.git",
      link: "https://poki.pl/g/scary-maze",
    },
  ]);
  return (
    <section id="projects">
      <Title children="Projekty" />

      <div className={styles.wrapper}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  repo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Project.defaultProps = {
  image: null,
};

export default Project;
