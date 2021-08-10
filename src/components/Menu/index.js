import React, { useEffect, useState } from 'react'
import styles from "../../styles/Menu.module.css"
import { MdPerson, MdShoppingBasket, MdShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../../firebase';
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MyRadio from "../MyRadio"
import { Badge } from 'antd';
import { IoHome, IoBook } from "react-icons/io5";
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
            <NavLink to="/">
                <div className={styles.logo}>
                    9TuBe
                </div>
            </NavLink>
            <div className={styles.icons}>
                <MyRadio t1="فارسی " t2="English" forlang={true} />
                <NavLink to="checkout">
                    <div className={basketStyle}>
                        <Badge count={countBasket}>
                            <MdShoppingCart className={styles.basketIcon} />
                        </Badge>
                    </div>
                </NavLink>
                <div className={styles.bar} onClick={navChange}>
                    <FaBars className={styles.icon_bar} />
                </div>
            </div>
            <div className={styles.nav_menu} style={{ left: left ? "-100%" : "0" }}>
                <div className={styles.nav} >
                    <NavLink to={!user && "login"} activeClassName={styles.active_item} className={styles.items}>
                        <div className={styles.options} onClick={authcheck}>
                            <MdPerson className={styles.items_icon} />
                            <span className={styles.lineTwo} >{user ? t("sign_out") : t("sign_in")} </span>
                        </div>
                    </NavLink>
                    <NavLink to="about" activeClassName={styles.active_item} className={styles.items}>
                        <div className={styles.options}>
                            <IoBook className={styles.items_icon} />

                            <span className={styles.lineTwo} > {t("about_us")} </span>
                        </div>
                    </NavLink>
                    <NavLink to="products" activeClassName={styles.active_item} className={styles.items}>
                        <div className={styles.options}>
                            <MdShoppingBasket className={styles.items_icon} />
                            <span className={styles.lineTwo} > {t("products")} </span>
                        </div>
                    </NavLink>
                    <NavLink exact={true} to={""} activeClassName={styles.active_item} className={styles.items}>
                        <div className={styles.options}>
                            <IoHome className={styles.items_icon} />
                            <span className={styles.lineTwo} > {t("home")} </span>
                        </div>
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}
