//* importe la var data du fichier data.js / auto en faisant log(data) -> propose le lien
//* card composant react donc <???? />
import styles from './home.module.css';
import Card from "../../components/Cards/card_comp";
import Mer from "./mer.png";

function Home() {
  return (
    <section className={styles.homePage}>
      <section className={styles.homeBanner}>
        <div> <img className={styles.pictureBanner} src={Mer} alt="côte littoral" /> </div>
        <div className={styles.textBanner}> Chez vous, partout et ailleurs </div>
      </section>
      <section>
        <div className={styles.carrousel}> <Card /> </div>
      </section>
    </section>
  );
}

export default Home;
