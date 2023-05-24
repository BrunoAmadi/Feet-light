import React from 'react';
import styles from './sectiondetails.module.css';
import tenisperfil from '../../img/tenisperfil.webp';
import tenissoil from '../../img/tenissoil.webp';


const SectionDetails = () => {
  return (
    <section className={styles.sectionBG}>
      <div className={`${styles.contSection} container`}>
        <div>
          <img src={tenisperfil} alt="" />
        </div>
        <div className={styles.description}>
          <h2>Design Moderno</h2>
          <p>
            O design do tênis esportivo moderno é inovador e dinâmico,
            incorporando linhas fluidas e detalhes arrojados. A parte superior é
            frequentemente feita de materiais leves e respiráveis, como malha
            sintética ou tecidos técnicos, proporcionando ventilação adequada
            aos pés durante atividades intensas. Além disso, o cabedal
            geralmente apresenta camadas estrategicamente posicionadas para
            fornecer suporte extra aos pés e estabilidade lateral.
          </p>
        </div>
        <div className={styles.description}>
          <h2>Sola Flexível</h2>
          <p>
            A sola do tênis esportivo moderno é construída com borracha durável
            e aderente, que oferece tração excelente em várias superfícies. Além
            disso, muitos modelos possuem sulcos de flexão estrategicamente
            colocados para permitir movimentos naturais do pé e maior
            flexibilidade.
          </p>
        </div>
        <div className={styles.soil}>
          <img src={tenissoil} alt="" />
        </div>
      </div>
  
    </section>
  );
};

export default SectionDetails;
