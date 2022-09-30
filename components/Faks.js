import React from 'react'
import styles from "../styles/Faq.module.css"

export const getStaticProps = async function(context) {
    const [aboutData, faqData] = await promise.all([
        fetch('https://comuteapi.herokuapp.com/faq/').then(response => response.json()),
        fetch('https://comuteapi.herokuapp.com/faq/').then(response => response.json())
    ]);
    return { aboutData, faqData };
  };

export default function Faks({response}) {
    console.log('response', response)

  return (
    <div>
    <div className={styles.Header}>Frequently asked questions</div>
    <div className={styles.AccordionSection}>
     {response && response.map((item, index) => {
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
    </div>
  )
}
