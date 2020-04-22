import React from 'react';
import Title from '../Title';
import styles from '../../css/contact.module.css';
const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us"></Title>
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/mvobeogl" method="POST">
          <div>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" className={styles.formControl} placeholder="John Smith"></input>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            ></input>
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hello there"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="submit here" className={styles.submit}></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
