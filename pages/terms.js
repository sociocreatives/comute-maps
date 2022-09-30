import React from 'react'
import styles from '../styles/Terms.module.css'
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';

export const getStaticProps = async () => {
    const response = await fetch('https://comuteapi.herokuapp.com/terms/');
    const data = await response.json();
    console.log(data);
  
    return {
      props: {
        results : data,
      },
    };
  };
  

export default function Terms({results}) {
  return (
    <>
    <NavigationBar/>
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Terms and conditions</h1>
        </div>
      {
        results.map((item, index) => {
            return(
                <div key={index} className={styles.main}>
                <h2 className={styles.heading}>{item.title}</h2>
                <p className={styles.body}>{item.body}</p>
                </div>
            )
        })
      }
      </div>
      <div className={styles.footer}>
      <Footer/>
      </div>
    </>
  )
}