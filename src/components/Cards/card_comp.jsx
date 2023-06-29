import React from 'react'
import { datas } from '../../Data/data';
import styles from './card.module.css';

function Card() {
   const listLocation = datas.map(data =>
      <section className={styles.gallery} key={data.id}>
         <div className={styles.pictureCard}>
            {data.cover}
         </div>
         <div className={styles.textCard}>
            {data.title}
         </div>
      </section>
   )
   return (
      {listLocation},
      console.log(listLocation)
   )
}

export default Card
