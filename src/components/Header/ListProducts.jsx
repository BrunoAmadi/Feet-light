import React from 'react';
import styles from './listproducts.module.css';
import { Link } from 'react-router-dom';

const ListProducts = ({ category, links }) => {
  return (
    <div className={styles.contList}>
      <h2 className={styles.title}>{category}</h2>
      <ul className={styles.list}>
        {links.map((item) => {
          return (
            <li key={item}>
              <Link className={styles.link}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListProducts;
