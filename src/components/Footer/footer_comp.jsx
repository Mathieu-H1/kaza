import React from 'react';
import styles from './footer.module.css';
import PicK from './Pictures/picK.png';
import PicHouse from './Pictures/picHouse.png';
import PicS from './Pictures/picS.png';
import PicA from './Pictures/picA.png';


function Footer() {
   return (
      <section className={styles.background}>
         <div className={styles.logo}>
            <p className={styles.letterK}><img src={PicK} alt="K" /></p>
            <p><img src={PicHouse} alt="Home" /></p>
            <p><img src={PicS} alt="S" /></p>
            <p><img src={PicA} alt="A" /></p>
         </div>
         <div className={styles.text}>© 2020 Kasa. All rights reserved</div>
      </section>
   )
}
export default Footer