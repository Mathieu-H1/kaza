import React from 'react';
import styles from './banner.module.css';

function Banner({ children }) {
   return (
      <section className={styles.homeBanner}>
         {children}
      </section>
   )
}

export default Banner;