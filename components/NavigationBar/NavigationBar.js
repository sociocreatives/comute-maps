import styles from "../../styles/NavigationBar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/comute_logo.svg'
import { CgMenuRight } from 'react-icons/cg'
import { IoMdLogOut } from 'react-icons/io'


import React from 'react';

const NavigationBar = () => {
    return(
        <div className={styles.Container}>
            <div className={styles.body}>
            <Link href="/">
                <Image
                src={Logo}
                alt="logo"
                width={160}
                height={35}
                className={styles.logo}/>
            </Link>
            <div className={styles.userprofile}>
                <ul className={styles.list} >
                    <li><Link href="/">Live Map</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/partners">Partners</Link></li>
                    <li><Link href="/faqs">FAQs</Link></li>
                    <li><button className={styles.btn}>Sign In </button></li>
                </ul>
                <div className="humburger" ><CgMenuRight/></div>
               </div>
            </div>
            </div>
    )
    }

export default NavigationBar


