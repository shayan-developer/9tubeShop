import React from 'react'
import styles from "../../styles/Subtotal.module.css"
import { useStateValue } from '../Context/StateProvider'
import { useTranslation } from "react-i18next";
import { toman } from "../../lib/Totoman";
import Button from '../Button';
import { calculate } from '../../lib/calculate';
function Subtotal() {
    const [state] = useStateValue()
    const { t,i18n } = useTranslation()
    const lang =i18n.language;
    const {basket}=state
    const numberOfBasket=basket.reduce((acc,cur)=>{
        return acc+cur.amount
    },0)
    return (
        <div className={styles.subtotal}>
            <p className={styles.count}>{t("basket_item")} : {numberOfBasket}</p>
            <p className={styles.total}>{t("total")} : {lang==="fa"?toman(calculate(basket)):` $ ${calculate(basket)}`}</p>
            <Button >{t("payment")}</Button>
        </div>
    )
}

export default Subtotal
