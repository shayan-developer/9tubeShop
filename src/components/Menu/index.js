import React from 'react'
import styles from "../../styles/Menu.module.css"
import { MdSearch,MdShoppingBasket } from "react-icons/md";
export default function Menu() {
    return (
        <nav className={styles.menu}>
            <img className={styles.logo}
            src='
            https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1280px-Test-Logo.svg.png'
             />
            <div className={styles.search}>
                <input className={styles.input} />
                <MdSearch className={styles.searchIcon}/>
            </div>
            <div className={styles.nav}>
                <div className={styles.options}>
                    <span className={styles.lineOne}> Hello </span>
                    <span className={styles.lineTwo} >sign in </span>
                </div>
                <div className={styles.options}>
                    <span className={styles.lineOne}> Return </span>
                    <span className={styles.lineTwo} > & Orders </span>
                </div>
                <div className={styles.options}>
                    <span className={styles.lineOne}> Your </span>
                    <span className={styles.lineTwo} > Prime </span>
                </div>
                <div className={styles.basket}>
                     <MdShoppingBasket className={styles.basketIcon}/>
                     <span className={styles.count}>0</span>
                </div>
            </div>
        </nav>
    )
}
