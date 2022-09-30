import React from 'react'
// import styles from "../styles/Partners.module.css"
import NavigationBar from '../components/NavigationBar/NavigationBar'
import 'firebase/firestore'
import Footer from '../components/Footer'
import Download from '../components/Download'
import styles from "../styles/Faq.module.css"
import Image from 'next/image'

export const getStaticProps = async () => {
  const response = await fetch('https://comuteapi.herokuapp.com/partners/');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      results : data,
    },
  };
};

export default function Partners({results}) {
  console.log('results', results)
  return (
    <div>
    <NavigationBar/>
    <div className={styles.container}>
    <div className={styles.Header}>
        <h2>PARTNERS</h2>
    </div>
    <div className='partnersMain'>
    {
      results.map((item, index) => {
          return(
              <div key={index} className='main'>
              <h2 className={styles.heading}>{item.title}</h2>
              <p className={styles.body}>{item.body}</p>
              </div>
          )
      })
    }
    </div>

    </div>
    <Download/>
    <Footer/>
    </div>
  )}

