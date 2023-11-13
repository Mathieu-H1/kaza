import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.css'; // importe module css -> styles
import PicK from './Pictures/picK.png';
import PicHouse from './Pictures/picHouse.png';
import PicS from './Pictures/picS.png';
import PicA from './Pictures/picA.png';

function Header() {
  return (
    <section className={styles.header}>
      <section className={styles.banner}>
        <div className={styles.logo}>
          <p> <img className={styles.letterK} src={PicK} alt="K" /> </p>
          <p> <img src={PicHouse} alt="Home" /> </p>
          <p> <img src={PicS} alt="S" /> </p>
          <p> <img src={PicA} alt="A" /> </p>
        </div>
        <nav className={styles.navigation} >
          <p> <Link to="/" className={styles.links}> Acceuil </Link> </p>
          <p> <Link to="/a_propos" className={styles.links}> A Propos </Link> </p>
        </nav>
      </section>
    </section>
  )
}

export default Header