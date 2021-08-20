import React from 'react'
import { useTranslation } from 'react-i18next'
import { toman } from '../../lib/Totoman'
import styles from "../../styles/InfoProduct.module.css"
import Button from '../Button'
import { MdShoppingCart } from "react-icons/md";
import { FaPlaystation } from "react-icons/fa";
const InfoProduct=({ title, brand, color, price, id ,addToBasket}) =>{
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const border = lang === 'fa' ? styles['right_border'] : styles['left_border']
    return (
        <div className={styles.box}>
            <div className={styles.detail}>
                <div className={styles.line}>
                    <span className={styles.title}>{t("product_name")}</span>
                    <span className={styles.value}>{title}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.title}>{t("brand")}</span>
                    <span className={styles.brand}>{brand === 'sony' && <FaPlaystation />}</span>
                </div>
               {color&& <div className={styles.line}>
                    <span className={styles.title}>{t("color")}</span>
                    <span className={styles.color} style={{backgroundColor:color}}></span>
                </div>}
            </div>
            <div className={styles.detail}>
                <div className={styles.line} >
                    <span className={styles.title}>{t("price")}</span>
                    <span className={styles.price}> {lang === "fa" ? toman(price) : ` $ ${price}`}</span>
                </div>
                <Button style={{ display: "flex", alignItems: "center" }} onClick={addToBasket}>
                    {t("add_basket")}{<MdShoppingCart className={`${styles.icon} ${border}`} />}
                </Button>
            </div>
        </div>
    )
}

export default React.memo(InfoProduct)
