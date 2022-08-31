import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import styles from "../../styles/Sidebar.module.css"
import { HiOutlineLogout } from 'react-icons/hi';
import { signOut } from "next-auth/react"
import Link from 'next/link'

const Sidebar = () => {
    const [showmenu, setShowmenu] = useState(false)
  return (
    <div className={styles.sidemainmain}>
        <div className={styles.sidebar}>
                { showmenu?
                    <div className={styles.sidemain}>
                        <FaBars onClick={()=>setShowmenu(false)} className={styles.fabsnewone}/> 
                        <HiOutlineLogout className={styles.fabsnewone} onClick={() => signOut()}/> 
                 </div>:null 
                }
                <FaBars onClick={()=>setShowmenu(true)} className={styles.fabsnew}/> 
        </div> 
        <Link href="/about"><p className={styles.para}>About Us</p></Link>
    </div>
  )
}

export default Sidebar
