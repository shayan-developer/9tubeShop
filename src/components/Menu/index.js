import React, { useState } from 'react'
import styles from "../../styles/Menu.module.css"
import { MdSearch, MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { auth } from '../../firebase';
import { FaBars } from "react-icons/fa";
export default function Menu() {
    const [{ basket, user }, dispath] = useStateValue()
    const [left, setleft] = useState(true)
    
    const navChange=()=>{
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
            {/* ==== */}

            <div className={styles.nav_menu} style={{left:left?"-100%":"0"}}>
                <div className={styles.search}>
                    <input className={styles.input} />
                    <MdSearch className={styles.searchIcon} />
                </div>
                <div className={styles.nav} >
                    <Link to={!user && "/login"}>
                        <div className={styles.options} onClick={authcheck}>
                            <span className={styles.lineOne}> Hello </span>
                            <span className={styles.lineTwo} >{user ? "Sign out" : "Sign in"} </span>
                        </div>
                    </Link>

                    <div className={styles.options}>
                        <span className={styles.lineOne}> Return </span>
                        <span className={styles.lineTwo} > & Orders </span>
                    </div>
                    <div className={styles.options}>
                        <span className={styles.lineOne}> Your </span>
                        <span className={styles.lineTwo} > Prime </span>
                    </div>

                </div>
                {/* === */}
            </div>
            <div className={styles.icons}>
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
