import React, { useState } from 'react'
import styles from "../../styles/Menu.module.css"
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../../firebase';
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MyRadio from "../MyRadio"
export default function Menu() {
    const { t } = useTranslation()
    const state = useStateValue()
    const { basket, user } = state[0]
    const [left, setleft] = useState(true)

    const navChange = () => {
        setleft(!left)
    }

    const authcheck = () => {
        if (user) {
            auth.signOut()
        }
    }
    return (
        <nav className={styles.menu}>
            <Link to="/">
                <div className={styles.logo}>
                    9TuBe
                </div>
            </Link>


            <div className={styles.nav_menu} style={{ left: left ? "-100%" : "0" }}>
                <div className={styles.search}>
                    <input className={styles.input} />
                    <MdSearch className={styles.searchIcon} />
                </div>

                <div className={styles.nav} >
                    <Link to={!user && "/login"}>
                        <div className={styles.options} onClick={authcheck}>
                            <span className={styles.lineTwo} >{user ? t("sign_out") : t("sign_in")} </span>
                        </div>
                    </Link>
                    <Link to="/products">
                        <div className={styles.options}>
                            <span className={styles.lineTwo} > {t("products")} </span>
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className={styles.options}>
                            <span className={styles.lineTwo} > {t("about_us")} </span>
                        </div>
                    </Link>
                </div>

            </div>

            <div className={styles.icons}>
                <MyRadio t1="فارسی " t2="English" forlang={true}/>
                <Link to="/checkout">
                    <div className={styles.basket}>
                        <MdShoppingBasket className={styles.basketIcon} />
                        <span className={styles.count}>{basket.length}</span>
                    </div>
                </Link>
                <div className={styles.bar} onClick={navChange}>
                    <FaBars className={styles.icon_bar} />
                </div>
            </div>
        </nav>
    )
}
