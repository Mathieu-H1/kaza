//* modifier page index composant error en page erreur_404
//* pas de composant react car page unique

import styles from './error.module.css';

function Error() {
   return (
      <section className={styles.errorPage}>
         <div className={styles.number}>
            <p>404</p>
         </div>
         <div className={styles.errorMessage}>
            <p>Oups! La page que vous demandez n'existe pas.</p>
         </div>
         <div className={styles.returnHome}>
            <p>Retourner sur la page d’accueil</p>
         </div>
      </section>
   )
}

export default Error;
/*
function Home() {
   console.log(datas);
   return (
      <section className={styles.homePage}>
         <Banner>
            <div className={styles.picBanner}> <img className={styles.pictureBanner} src={Mer} alt="côte littoral" /> </div>
            <div className={styles.textBanner}>Chez vous,{<span className={styles.back}><br /></span>} partout et ailleurs</div>
         </Banner>
         <section className={styles.gallery}>
            <div className={styles.cardsGallery}>
               {datas.map(logement => {
                  return (<Card logement={logement} key={logement.id} />)
               })}
            </div>
         </section>
      </section>
   );
}

export default Home;
*/