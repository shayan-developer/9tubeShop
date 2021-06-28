import React from 'react'
import styles from "../../styles/Menu.module.css"
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
export default function Menu() {
    const[{basket},dispath]=useStateValue()
console.log(basket);
    return (
        <nav className={styles.menu}>
            <Link to="/">
                <div className={styles.logo}>
                    9TuBe
                </div>
            </Link>
            <div className={styles.search}>
                <input className={styles.input} />
                <MdSearch className={styles.searchIcon} />
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
                <Link to="/checkout">
                    <div className={styles.basket}>
                        <MdShoppingBasket className={styles.basketIcon} />
                        <span className={styles.count}>{basket.length}</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}
