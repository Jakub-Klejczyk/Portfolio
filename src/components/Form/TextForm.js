import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "../Title/Title";
import styles from "./Form.module.scss";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ErrorMessage, Formik } from "formik";

const TextForm = ({ children, useRef }) => {
  // const form = useRef;

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_5nlq0ib",
  //       "template_1rymkcj",
  //       form.current,
  //       "h3nc2j5S2BOSG6LN3"
  //     )
  //     .then(
  //       () => {
  //         alert("Dziękuję za wiadomość! ;)");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Coś poszło nie tak... :(");
  //       }
  //     );
  // };
  const validate = Yup.object({
    email: Yup.string()
      .email("Email nie jest poprawny.")
      .required("Email jest wymagany."),
    title: Yup.string()
      .max(15, "Tytuł nie powinien przekraczać 15 znaków")
      .required("Tytuł jest wymagany."),
    description: Yup.string()
      .max(300, "Treść nie powinna przekraczać 300 znaków")
      .required("Treść jest wymagana."),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        title: "",
        description: "",
      }}
      validationSchema={validate}
    >
      <section>
        <Title children="Kontakt" />
        <div className={styles.wrapper}>
          <form autoComplete="off" className={styles.form}>
            <input
              placeholder="Email"
              type="email"
              className={styles.mail}
              name="email"
            />
            <input
              placeholder="Temat"
              type="text"
              className={styles.mail}
              name="title"
            />
            <textarea
              placeholder="Treść wiadomości"
              type="textarea"
              rows="8"
              name="description"
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
    </Formik>
  );
};

export default TextForm;
