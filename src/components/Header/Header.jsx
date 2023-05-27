import React from 'react';
import styles from './header.module.css';
import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import cart from '../../img/cart.svg';
import MoreProducts from './MoreProducts';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';

const Header = () => {
  const { showproduct, setshowproducts } = React.useContext(GlobalContext);

  const openMenu = () => {
    setshowproducts(true);
  };
  const closeMenu = () => {
    setshowproducts(false);
  };
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link onMouseMove={closeMenu} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link onMouseMove={openMenu}>Produtos</Link>
              {showproduct && <MoreProducts />}
            </li>{' '}
            <li>
              <Link onMouseMove={closeMenu} to="contato">
                Contato
              </Link>
            </li>
            <li>
              <Link onMouseMove={closeMenu} to="quemsomos">
                Quem Somos
              </Link>
            </li>
          </ul>
          <ul className={styles.menuLogin}>
            <li>
              <Link to="/loginUser">
                <img src={user} alt="" />
              </Link>
            </li>
            <li>
              <Link to="cartUser">
                {' '}
                <img src={cart} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
