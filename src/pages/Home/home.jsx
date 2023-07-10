//* importe la var data du fichier data.js / auto en faisant log(data) -> propose le lien
//* card composant react donc <???? />
import styles from './home.module.css';
import Banner from '../../components/Banners/banner';
import Mer from "./mer.png";
import Card from "../../components/Cards/card_comp";
import { datas } from '../../Data/data';

function Home() {
  return (
    <section className={styles.homePage}>

        <Banner>
          <div className={styles.picBanner}> <img className={styles.pictureBanner} src={Mer} alt="côte littoral" /> </div>
          <div className={styles.textBanner}>Chez vous, partout et ailleurs</div>
        </Banner>

      <section>
        <div className={styles.carrousel}>
          {datas.map(logement => {
            return (<Card logement={logement} />)
          })}
        </div>
      </section>
    </section>
  );
}

export default Home;
