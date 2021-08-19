import React from 'react'
import styles from "../../styles/CarouselItem.module.css"
import { useTranslation } from "react-i18next";
import { toman } from '../../lib/Totoman';
import Button from '../Button';
import { useHistory } from 'react-router-dom';
const CarouselItem = ({ img, title, price, id, amount }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language
    const history = useHistory()
    const showProduct = () => {
        history.push(`/products/${id}`)
    }

    return (
        <div className={styles.contain}>
            <img src={img['1'].large} alt={title} className={styles.img} />
            <div
                style={{ textAlign: lang === "fa" ? "right" : "left" }}
                className={styles.info}>
                <div className={styles.title}>{title} </div>
                <div className={styles.price}>
                    {lang === "fa" ? toman(price) : ` $ ${price}`}
                </div>
                <Button
                    onClick={showProduct}
                >{t("view_product")}</Button>

            </div>
        </div>
    )
}

export default React.memo(CarouselItem)
