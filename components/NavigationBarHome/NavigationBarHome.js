import styles from "../../styles/NavigationBarHome.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/comute_logo.png'
import React  from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { IoMdLogOut } from 'react-icons/io'

const NavigationBarHome = () => {    
    const { data: session } = useSession()
    if (session) {
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
                    src={session.user.image}
                    alt="logo"
                    width={50}
                    height={50}
                    className={styles.logoimage}/>
                </Link>
                <div className={styles.btnicon}><IoMdLogOut onClick={() => signOut()}/></div></div>
            </div>
    )
    }
    return (
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
                <button onClick={() => signIn()} className={styles.btn}>Sign in</button>
            </div>
      )
}

export default NavigationBarHome