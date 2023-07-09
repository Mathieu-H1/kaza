import React from 'react';
import styles from './banner.module.css';

function Banner() {
   return (
      <section className={styles.homeBanner}>
         <div> <img className={styles.pictureBanner} alt="" /> </div>
         <div className={styles.textBanner}></div>
      </section>
   )
}

export default Banner;