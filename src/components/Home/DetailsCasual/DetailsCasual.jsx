import React from 'react';
import shoescasual from '../../../img/shoecasualred.webp';
import shoescasualblue from '../../../img/shoecasualblue.webp';
import shoescasualbrown from '../../../img/shoecasualbrown.webp';
import shoescasualpink from '../../../img/shoecasualpink.webp';
import styles from './detailscasual.module.css';
import { ChooseColor } from './ChooseColor';
import { GlobalContext } from '../../../GlobalContext';

const DetailsCasual = () => {
  const { colorRed, colorBlue, colorBrown, colorPink } =
    React.useContext(GlobalContext);

  return (
    <div className={styles.sectionBG}>
      <section className={`${styles.section}`}>
        <div>
          {colorRed && <img src={shoescasual} alt="" />}
          {colorBlue && <img src={shoescasualblue} alt="" />}
          {colorBrown && <img src={shoescasualbrown} alt="" />}
          {colorPink && <img src={shoescasualpink} alt="" />}
        </div>
        <div className={styles.description}>
          <h2>NIKE AIR JORDAN</h2>
          <p>
            Os tênis Air Jordan Nike são uma linha de calçados esportivos
            icônicos criados em colaboração com o lendário jogador de basquete
            Michael Jordan. Esses tênis são altamente reconhecidos e valorizados
            por sua combinação única de estilo, desempenho e história.
          </p>
          <ChooseColor />
        </div>
      </section>
    </div>
  );
};

export default DetailsCasual;
