import React, { useState } from "react";
import { Data } from "./Data";
import { FiPlus, FiMinus } from "react-icons/fi";
import styles from "../../styles/Faq.module.css"

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://comuteapi.herokuapp.com/faq/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

function Faq({ data }) {
  const [clicked, setClicked] = useState(false);
  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>Frequently asked questions</div>
        <div className={styles.AccordionSection}>
          {Data.map((item, index) => {
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
  );
}

export default Faq;



