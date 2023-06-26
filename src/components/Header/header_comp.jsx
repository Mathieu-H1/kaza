import React from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.css'; // importe module css -> styles

function Header() {
  return (
    <nav>
      <p className={styles.acceuil}><Link to="/">Acceuil</Link></p>
      <p className={styles.aPropos}><Link to="/a_propos">A Propos</Link></p>
    </nav>
  )
}

export default Header