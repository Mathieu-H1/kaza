import React from 'react';
import styles from './footer.module.css';
import picture from './Pictures/';

//! à modifier
function Footer() {
   return (
      <section className={styles.background}>
         <div className={styles.logo}>
            <p className={styles.letterK}>{picture.picK}</p>;
            <p className={styles.home}>{picture.picHouse}</p>;
            <p className={styles.letterS}>{picture.picS}</p>;
            <p className={styles.letterA}>{picture.picA}</p>;
         </div>

         <p className={styles.text}>© 2020 Kasa. All rights reserved</p>
      </section>
   )
}
export default Footer