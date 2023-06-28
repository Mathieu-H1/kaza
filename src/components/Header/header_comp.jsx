import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.css'; // importe module css -> styles
import Footer from '../Footer/footer_comp';

function Header() {
  return (
    <section className={styles.banner}>
      <div className={styles.logo}><Footer /></div>

      <nav>
        <p className={styles.navigation}><Link to="/">Acceuil</Link></p>
        <p className={styles.navigation}><Link to="/a_propos">A Propos</Link></p>
      </nav>
    </section>
  )
}

export default Header