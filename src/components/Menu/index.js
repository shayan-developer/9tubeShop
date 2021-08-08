import React, { useEffect, useState } from 'react'
import styles from "../../styles/Menu.module.css"
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../../firebase';
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MyRadio from "../MyRadio"
import { Badge } from 'antd';
export default function Menu() {
    const { t } = useTranslation()
    const [state] = useStateValue()
    const { basket, user } = state
    const [left, setleft] = useState(true)
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const countBasket = basket.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0)
    const navChange = () => {
        setleft(!left)
    }

    const authcheck = () => {
        if (user) {
            auth.signOut()
        }
    }
    useEffect(() => {
        if (basket.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [basket])
    const basketStyle = `${styles.basket} ${btnIsHighlighted ? styles.bump : ''}`;
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
                <MyRadio t1="فارسی " t2="English" forlang={true} />
                <Link to="/checkout">
                    <div className={basketStyle}>
                        <Badge count={countBasket}>
                            <MdShoppingCart  className={styles.basketIcon} />
                        </Badge>
                    </div>
                </Link>
                <div className={styles.bar} onClick={navChange}>
                    <FaBars className={styles.icon_bar} />
                </div>
            </div>
        </nav>
    )
}
