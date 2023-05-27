import React from 'react';
import styles from './main.module.css';
import tenisMain from '../../../img/tenisinit.webp';
import tenisTop from '../../../img/tenistopvision.webp';
import tenisperfil from '../../../img/tenisperfil.webp';
import tenissoil from '../../../img/tenissoil.webp';

export const Main = () => {
  return (
    <main className={styles.mainBg}>
      <div className={`${styles.mainCont} container`}>
        <div className={styles.infoMain}>
          <h1>NIKE FLYKNIT</h1>
          <p>
            O Nike Flyknit está disponível em uma variedade de estilos, desde
            tênis de corrida de alto desempenho até tênis casuais para uso
            diário. É uma opção popular para aqueles que buscam uma combinação
            de conforto, suporte e estilo em um único tênis.
          </p>
          <a href="htps://">Comprar</a>
        </div>
        <div className={styles.contImg}>
          <img src={tenisMain} alt="" />
        </div>
        <div className={styles.choosePosition}>
          <img src={tenisperfil} alt="" />
          <img src={tenisTop} alt="" />
          <img src={tenissoil} alt="" />
        </div>
      </div>
    </main>
  );
};
