import React from 'react'
import styles from "../../styles/AboutHero.module.css"
import Image from 'next/image'
import Logo from '../../public/SVG/whitelogo.svg'
import Traffic from '../../public/SVG/traffic-police.svg'
import Google from '../../public/google.png'



const AboutHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainhead}>
        <div  className={styles.heading}>
          <div className={styles.logoarea}>
              <Image
              src={Logo}
              alt="car"
              width={200}
              height={50}
              className={styles.logo}/>
          </div>
            <h1>What a perfect time to devore/manger a suitable and commendable e-book.</h1>
        </div>
        <div className={styles.intro}>
        <Image
          src={Traffic}
          alt="car"
          className={styles.traffic}/>
        </div>
      </div>

    <div className={styles.comute}>
        <div className={styles.tlights}></div>
        <div className={styles.mapping}><h2>Commit yourself to comute as a solo comuter or a jocomuter and enjoy your anxious free commuting while listining to your favorite country music or gospel song from your preferred artist and let your visitor finds </h2>
        <div className={styles.google}>
          <Image
          src={Google}
          alt="car"
          className={styles.google}/>
        </div>
        </div>
    </div>
       
                
         </div>
  )
}

export default AboutHero
