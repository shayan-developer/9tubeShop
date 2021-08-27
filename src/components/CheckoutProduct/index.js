import React from 'react'
import styles from "../../styles/CheckoutProduct.module.css"
import { useTranslation } from "react-i18next";
import { toman } from "../../lib/Totoman";
import Button from '../Button';
function CheckoutProduct({ img, id, title, price, amount, minesBasket, addToBasket }) {
    const { t, i18n } = useTranslation()
    const lang = i18n.language

    const addHandler = () => {
        addToBasket({ id, title, price, amount, img })
    }
    const minesHandler = () => {
        minesBasket(id)
    }
    return (
        <div className={styles.checkoutProduct} >
            <img src={img} alt={title} className={styles.img} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}> {t("price")} : {lang === "fa" ? toman(price) : ` $ ${price}`}</p>
                <p className={styles.price}>{t("amount")} :  {amount} </p>
                <div className={styles.actions}>
                    <Button varient="outline" style={{ marginLeft: "8px", width: "60px" }} onClick={addHandler}> + </Button>
                    <Button varient="outline" style={{ marginLeft: "8px", width: "60px" }} onClick={minesHandler}> - </Button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CheckoutProduct)
