import React from 'react'
import styles from "../../styles/Subtotal.module.css"
import { calc } from '../Context/reducer'
import { useStateValue } from '../Context/StateProvider'
import { useTranslation } from "react-i18next";

function Subtotal() {
    const state = useStateValue()
    const { t } = useTranslation()
    const {basket}=state[0]
    return (
        <div className={styles.subtotal}>
            <p className={styles.count}>{t("basket_item")} : {basket.length}</p>
            <p className={styles.total}>{t("total")}: ${calc(basket)}</p>
            <button className={styles.btn}>{t("payment")}</button>
        </div>
    )
}

export default Subtotal
