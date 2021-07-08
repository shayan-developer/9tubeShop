import React from 'react'
import styles from "../../styles/CheckoutProduct.module.css"
import { useStateValue } from '../Context/StateProvider'
import { useTranslation } from "react-i18next";
function CheckoutProduct({ img, id, title, price }) {
    const state = useStateValue()
    const dispath=state[1]
    const { t } = useTranslation()
    const removing = () => {
        dispath({
            type: "REMOVE", id
        })
    }
    return (
        <div className={styles.checkoutProduct}>
            <img src={img} alt={title} className={styles.img} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}> {t("price")}: $ {price} </p>
                <button className={styles.btn} onClick={removing}>{t("remove_basket")}</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
