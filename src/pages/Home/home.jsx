//* importe la var data du fichier data.js / auto en faisant log(data) -> propose le lien
//* card composant react donc <???? />
import styles from './home.module.css';
import Banner from '../../components/Banners/banner';
import Mer from "./mer.png";
import Card from "../../components/Cards/card_comp";
import { datas } from '../../Data/data';

//*comp Banner a déjà 1 div / children permet d'ajouter ce que l'on veut changer
function Home() {
  console.log(datas);
  return (
    <section className={styles.homePage}>
      <Banner>
        <div className={styles.picBanner}> <img className={styles.pictureBanner} src={Mer} alt="côte littoral" /> </div>
        <div className={styles.textBanner}>Chez vous, partout et ailleurs</div>
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
