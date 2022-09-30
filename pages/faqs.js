import React, {useState} from 'react'
import { FiPlus, FiMinus } from "react-icons/fi";
import Download from '../components/Download';
import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import styles from "../styles/Faq.module.css"


export const getStaticProps = async () => {
    const response = await fetch('https://comuteapi.herokuapp.com/faq/');
    const data = await response.json();
    console.log(data);
  
    return {
      props: {
        results : data,
      },
    };
  };


export default function Faqs({results}) {
    console.log('results', results)

    const [clicked, setClicked] = useState(false);
    const toggle = index => {
      if (clicked === index) {
        return setClicked(null);
      }
      setClicked(index);
    }
  
  return (
    <div>
    <NavigationBar/>
    <div className={styles.container}>
    <div className={styles.Header}>Frequently asked questions</div>
       <div className={styles.AccordionSection}>
        {results.map((item, index) => {
          return (
            <>
              <div className={styles.Wrap} onClick={() => toggle(index)} key={index}>
                <h4>{item.title}</h4>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </div>
              {clicked === index ? (
                <div className={styles.Dropdown}>
                  <p>{item.body}</p>
                </div>
              ) : null}
            </>
          );
        })}
      </div>
      <Download/>
      <Footer/>
      </div>
    </div>
    
  )
}
