import React from 'react';
import Banner from '../../components/Banners/banner';
import styles from './a_propos.module.css';
import Montagne from './Montagne.png';

function APropos() {
   return (
      <section>
         <Banner>
            <div className={styles.picBanner}> <img className={styles.pictureBanner} src={Montagne} alt="montagne" /> </div>
         </Banner>
         
      </section>
   )
}

export default APropos;