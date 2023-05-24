import React from 'react';
import styles from './casualsection.module.css';
import topsidetenis from '../../img/topsideteniss.webp';

const CasualSection = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`${styles.contSect} container`}>
        <div className={styles.contDescription}>
          <h2 className={styles.title}>
            Para você
            <span className={styles.span}>+</span>
            <span className={styles.casual}>Casual</span>
          </h2>

          <p className={styles.text}>
            O tênis casual é um calçado versátil e confortável, ideal para uso
            no dia a dia em diversas ocasiões informais. Com um design moderno e
            despojado, ele combina estilo e praticidade, proporcionando um
            visual descontraído e contemporâneo.
          </p>
          <a className={styles.aboutMore} href="">
            Saiba Mais
          </a>
        </div>

        <div className={styles.contTenis}>
          <img src={topsidetenis} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CasualSection;
