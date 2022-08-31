import React from 'react'
import styles from "../styles/Partners.module.css"
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Faq from '../components/Faq/Faq'

const Partners = () => {
  return (
    <div>
    <NavigationBar/>
    <div className={styles.container}>
    <h2>PARTNERS</h2>
    </div>
    <Faq/>
    </div>
  )
}

export default Partners