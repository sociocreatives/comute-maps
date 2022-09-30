import Footer from '../components/Footer';
import MapLayout from '../components/MapLayout/MapLayout';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <NavigationBar/>
      </div>
      <div className={styles.map}>
        <MapLayout/>
      </div>
      <div className={styles.footerMain}>
      <Footer/>
      </div>
    </div>
  )
}


