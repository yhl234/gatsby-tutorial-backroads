import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import img from '../../images/defaultBcg.jpeg';
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.
          </p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
            previewing layouts and visual mockups.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
