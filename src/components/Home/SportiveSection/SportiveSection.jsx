import React from 'react';
import styles from './sportive.module.css';
import persontraining from '../../../img/persontraining.webp';

const SportiveSection = () => {
  return (
    <div className={styles.sectionBG}>
      <section className={`${styles.section}`}>
        <div className={styles.contText}>
          <p>
            <span>❝</span>A tecnologia avançada de amortecimento deste tênis
            absorve o impacto a cada passo, reduzindo o estresse nas
            articulações e proporcionando um conforto excepcional. Sinta-se
            confiante ao enfrentar qualquer tipo de terreno ou superfície,
            sabendo que seus pés estão protegidos e apoiados.<span>❞</span>
          </p>
        </div>
        <div className={styles.contImg}>
          <img src={persontraining} alt="" />
        </div>
      </section>
    </div>
  );
};

export default SportiveSection;
