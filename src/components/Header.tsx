import React, { ReactElement } from 'react';
import firebase from 'firebase/app';
import { Link } from 'react-router-dom';
import styles from '../style/header.module.css';

export default function Header(): ReactElement {
  const signOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className={styles.container}>
      <Link to="home">
        <button className={styles.home}>Главная страница</button>
      </Link>

      <Link to="">
        <button className={styles.signout} onClick={signOut}>
          Выйти/Войти
        </button>
      </Link>
    </div>
  );
}
