import React from 'react';
import styles from './choosecolor.module.css';
import { GlobalContext } from '../../../GlobalContext';

export const ChooseColor = () => {
  const { setColorRed, setColorBlue, setColorBrown, setColorPink } =
    React.useContext(GlobalContext);

  function clickButtonRed() {
    setColorRed(true);
    setColorBlue(false);
    setColorBrown(false);
    setColorPink(false);
  }
  function clickButtonBlue() {
    setColorRed(false);
    setColorBlue(true);
    setColorBrown(false);
    setColorPink(false);
  }
  function clickButtonBrown() {
    setColorRed(false);
    setColorBlue(false);
    setColorBrown(true);
    setColorPink(false);
  }
  function clickButtonPink() {
    setColorRed(false);
    setColorBlue(false);
    setColorBrown(false);
    setColorPink(true);
  }

  return (
    <div className={styles.contBtn}>
      <button
        onClick={clickButtonRed}
        className={`${styles.btn} ${styles.btn1}`}
      ></button>
      <button
        onClick={clickButtonBlue}
        className={`${styles.btn} ${styles.btn2}`}
      ></button>
      <button
        onClick={clickButtonBrown}
        className={`${styles.btn} ${styles.btn3}`}
      ></button>
      <button
        onClick={clickButtonPink}
        className={`${styles.btn} ${styles.btn4}`}
      ></button>
    </div>
  );
};
