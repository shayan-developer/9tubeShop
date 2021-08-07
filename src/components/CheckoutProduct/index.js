import React from 'react'
import styles from "../../styles/CheckoutProduct.module.css"
import { useStateValue } from '../Context/StateProvider'
import { useTranslation } from "react-i18next";
import { toman } from "../../lib/Totoman";
import Button from '../Button';
function CheckoutProduct({ img, id, title, price, amount }) {
    const state = useStateValue()
    const [, dispath] = state
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const addToBasket = () => {
        dispath({
            type: "ADD",
            item: { id, title, price, amount, img }
        })
    }
    const minesBasket = () => {
        dispath({
            type: "REMOVE",
            item: id
        })
    }
    return (
        <div className={styles.checkoutProduct} >
            <img src={img} alt={title} className={styles.img} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}> {t("price")} : {lang === "fa" ? toman(price) : ` $ ${price}`}</p>
                <p className={styles.price}>{t("amount")} :  {amount} </p>
                <div className={styles.actions}>
                    <Button style={{ marginLeft: "8px", width: "60px" }} onClick={addToBasket}> + </Button>
                    <Button style={{ marginLeft: "8px", width: "60px" }} onClick={minesBasket}> - </Button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
