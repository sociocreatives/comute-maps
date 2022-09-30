import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer.js'
import styles from "../styles/Faq.module.css"

export default function Layout() {
  return (
    <div className={styles.container}>
      <NavigationBar/>
      {props.children}
      <Footer/>
    </div>
  )
}
