//* importe la var data du fichier data.js / auto en faisant log(data) -> propose le lien
import { data } from "../../Data/data";
import styles from './home.module.css';
import Mer from "./mer.png";

console.log(data);

function Home() {
  return (
    <section className={styles.homeBanner}>
      <div>
        <img className={styles.pictureBanner} src={Mer} alt="côte littoral" />
      </div>
      <div className={styles.textBanner}>Chez vous, partout et ailleurs</div>
    </section>
  );
}

export default Home;
