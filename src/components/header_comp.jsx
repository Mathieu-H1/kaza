import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/header.module.css'; // importe module css -> styles

function Header() {
  return (
    <ul>
      <li><Link to="/">Acceuil</Link></li>
      <li><Link to="/a_propos">A Propos</Link></li>
    </ul>
  )
}

export default Header