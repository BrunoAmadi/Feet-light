import React from 'react';
import styles from './header.module.css';
import logo from '../../img/logo.svg';
import user from '../../img/user.svg';
import cart from '../../img/cart.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>{' '}
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Quem Somos</a>
          </li>
        </ul>
        <ul className={styles.menuLogin}>
          <li>
            <a href="">
              <img src={user} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              {' '}
              <img src={cart} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
