import React from 'react';
import styles from './banner.module.css';

//* composant bannière qui servira pour toutes les bannières des différentes pages
//* children permet d'ajouter ce que l'on veut changer
function Banner({ children }) {
   return (
      <section className={styles.homeBanner}>
         {children}
      </section>
   )
}

export default Banner;