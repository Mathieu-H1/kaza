import React from 'react'
import styles from './card.module.css';

function Card(data) {
   console.log(data);
   return (<section className={styles.pictureCard} key={data.id}>
      <div>
         <img src={data.logement.cover} alt="Location" />
      </div>
      <div className={styles.textCard}>
         {data.logement.title}
      </div>
   </section>)
}

export default Card;
