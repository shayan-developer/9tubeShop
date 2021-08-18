import React from 'react'
import { useTranslation } from 'react-i18next'
import { toman } from '../../lib/Totoman'
import styles from "../../styles/InfoProduct.module.css"
import Button from '../Button'
import {MdShoppingCart } from "react-icons/md";
function InfoProduct({ title, brand, color, price, id }) {
    const { t ,i18n} = useTranslation()
    const lang = i18n.language
    const addBasket = () => {
        console.log('added');
    }
    return (
        <div className={styles.box}>
            <div className={styles.detail}>
                <div className={styles.line}>
                    <span className={styles.title}>{t("product_name")}</span>
                    <span>{title}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.title}>{t("brand")}</span>
                    <span>{brand}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.title}>{t("color")}</span>
                    <span>{color}</span>
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.line}>
                    <span className={styles.title}>{t("price")}</span>
                    <span> {lang === "fa" ? toman(price) : ` $ ${price}`}</span>
                </div>
                <Button onClick={addBasket}>{t("add_basket")} {<MdShoppingCart/>} </Button>
            </div>
        </div>
    )
}

export default InfoProduct
