import React from 'react';
import styles from './banner.module.css';

//* children permet d'ajouter ce que l'on veut changer
function Banner({ children }) {
   return (
      <section className={styles.homeBanner}>
         {children}
      </section>
   )
}

export default Banner;