import React from 'react'
import styles from "../../styles/Product.module.css"
import { useTranslation } from "react-i18next";
import { toman } from "../../lib/Totoman";
import Button from '../Button';
import { useHistory} from 'react-router';
const Product = ({ id, title, img, price, amount }) => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const history = useHistory()
    const addToBasket = () => {
        history.push(`/products/${id}`)
    }
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <div className={styles.title}>{t("product_name")}</div>
                <div > {title}</div>
                <div className={styles.price}> {t("price")}</div>
                <div >{lang === "fa" ? toman(price) : ` $ ${price}`} </div>
            </div>
            <img
                src={img}
                className={styles.img}
                alt={title}
            />
            <Button
                style={{ width: "100%" }}
                onClick={addToBasket}
            >
                {t("view_product")}
            </Button>
        </div>
    )
}

export default React.memo(Product)
