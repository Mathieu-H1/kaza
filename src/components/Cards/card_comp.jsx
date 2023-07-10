import React from 'react'
import styles from './card.module.css';

function Card(data) {
   return (<section key={data.id}>
      <div className={styles.pictureCard}>
         <img src={data.cover} alt="Location" />
      </div>
      <div className={styles.textCard}>
         {data.title}
      </div>
   </section>)
}

export default Card;
