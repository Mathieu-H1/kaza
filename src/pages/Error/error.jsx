//* modifier page index composant error en page erreur_404
//* pas de composant react car page unique

import { Link } from "react-router-dom";
import styles from './error.module.css';

function Error() {
   return (
      <section className={styles.errorPage}>
         <div>
            <p className={styles.number}>404</p>
         </div>
         <div>
            <p className={styles.errorMessage}>Oups! La page que vous demandez n'existe pas.</p>
         </div>
         <div className={styles.returnHome}>
            <p> <Link to="/" className={styles.links}> Retourner sur la page d’accueil </Link> </p>
         </div>
      </section>
   )
}

export default Error;