import React from 'react'
import { notification } from 'antd';
import styles from "../../styles/Product.module.css"
import { useStateValue } from "../Context/StateProvider";
import { TiTick } from "react-icons/ti";
import { FaTimesCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { toman } from "../../lib/Totoman";
import Button from '../Button';
function Product({ id, title, img, price,amount }) {
    const { t ,i18n} = useTranslation()
    const state = useStateValue()
    const lang= i18n.language
    const dispath = state[1]

    const openNotification = () => {
        notification.info({
            message: <p className={styles.title_notif}>{t("added_basket")}</p>,
            description: <div className={styles.notif}>
                <img src={img} alt={title} className={styles.img_notif} />
                <div className={styles.text_notif}>{title}</div>
            </div>,
            icon: <TiTick className={styles.notif_icon} />,
            closeIcon: <FaTimesCircle className={styles.notif_icon} />,
            className: styles.contain_notif,
        });
    };

    const addToBasket = () => {
        openNotification()
        dispath({
            type: "ADD",
            item: {
                id, title, img, price,amount
            }
        })
    }
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <div className={styles.title}>{t("product_name")}</div> 
                <div > {title}</div>
                <div className={styles.price}> {t("price")}</div>
                <div >{lang==="fa"?toman(price):` $ ${price}`} </div>
            </div>
            <img
                src={img}
                className={styles.img}
                alt={title}
            />
            <Button 
            style={{width:"100%"}}
                onClick={addToBasket}
            >
                {t("add_basket")}
            </Button>
        </div>
    )
}

export default Product
