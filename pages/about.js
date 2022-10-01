import React from 'react'
import styles from "../styles/AboutHero.module.css"
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer';
import Download from '../components/Download';


export const getStaticProps = async () => {
  const response = await fetch('https://comuteapi.herokuapp.com/about/');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      results : data,
    },
  };
};



const About = ({results}) => {
  console.log('results', results)
  return (
    <div>
    <NavigationBar />
    <div className={styles.main}>
    {
      results.map((item, index) => {
          return(
              <div key={index} className={styles.content}>
              <h2 className={styles.aboutheading}>{item.title}</h2>
              <p className={styles.aboutbody}>{item.body}</p>
              </div>
          )
      })
    }
    </div>
     
    <div className={styles.middle}></div>
      <Download/>
      <Footer/>
    </div>
  )
}


export default About