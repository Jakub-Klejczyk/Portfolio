import React from "react";
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "../Title/Title";

const Form = ({ children }) => {
  return (
    <section>
      <Title children="Kontakt" />
      <div className={styles.wrapper}>
        <form autoComplete="off" className={styles.form}>
          <input placeholder="Email" type="email" className={styles.mail} />
          <input placeholder="Temat" type="text" className={styles.mail} />
          <textarea
            placeholder="Treść wiadomości"
            type="textarea"
            rows="8"
            className={styles.description}
          />
          <input
            type="submit"
            value="Skontaktuj się ze mną!"
            className={styles.submit}
          />
        </form>
        <div>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            +48 511 001 174
          </p>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
            jakub.klejczyk16@gmail.pl
          </p>
        </div>
      </div>
    </section>
  );
};

export default Form;
