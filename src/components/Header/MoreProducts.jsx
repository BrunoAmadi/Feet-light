import React from 'react';
import styles from './moreproducts.module.css';
import ListProducts from './ListProducts';
import { GlobalContext } from '../../GlobalContext';
const MoreProducts = () => {
  const { setshowproducts } = React.useContext(GlobalContext);
  const bgMenu = React.useRef();
  const shoesMale = [
    'Tenis Esportivo',
    'Tenis Casual',
    'Chinelos',
    'Sapatenis',
    'Sapato Social',
  ];
  const shoesFemale = [
    'Tenis Esportivo',
    'Tenis Casual',
    'Sandálias',
    'Saltos',
    'Tamancos',
  ];

  const shoesKid = ['Tenis Esportivo', 'Tenis Casual', 'Papete', 'Chinelos'];

  const closedMenu = (event) => {
    if (event.target === bgMenu.current) {
      setshowproducts(false);
    }
  };
  return (
    <div ref={bgMenu} onMouseMove={closedMenu} className={styles.wrappermenuBG}>
      <div className={styles.menuBG}>
        <div className={`${styles.contProducts} container`}>
          <ListProducts category="Masculino" links={shoesMale} />
          <ListProducts category="Femininos" links={shoesFemale} />
          <ListProducts category="Infantis" links={shoesKid} />
          <ListProducts category="Acessorios" links={shoesKid} />
          <ListProducts category="Roupas" links={shoesKid} />
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
