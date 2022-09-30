import styles from "../../styles/NavigationBarHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/comute_logo.png'
import { IoMdLogOut } from 'react-icons/io'
import React from 'react';

const NavigationBarHome = () => {    

    return(
        <div className={styles.Container}>
            <div className={styles.body}>
                <Link href="/">
                    <Image
                    src={Logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className={styles.logo}/>
                </Link></div>
               <div className={styles.logi}> <Link href="/">
                    <Image
                    src=""
                    alt="image"
                    width={50}
                    height={50}
                    className={styles.logoimage}/>
                </Link>
                <div className={styles.btnicon}><IoMdLogOut/></div>
                </div>
            </div>
    )
    }


export default NavigationBarHome