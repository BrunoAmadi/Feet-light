import React from 'react';
import logo from '../../img/logologin.svg';
import styles from './login.module.css';
const Login = () => {
  return (
    <div className={styles.wrapperLogin}>
      <section className={styles.contLogin}>
        <div className={styles.contImg}>
          <img src={logo} alt="" />
        </div>

        <form className={styles.form} action="POST">
          <label htmlFor="login">Email ou Usuário</label>
          <input
            type="text"
            id="login"
            name="login"
            placeholder="Email ou login"
          />

          <label htmlFor="password">Senha</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Senha"
          />

          <button>Entrar</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
