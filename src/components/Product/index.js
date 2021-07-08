import React from 'react'
import { notification } from 'antd';
import styles from "../../styles/Product.module.css"
import { useStateValue } from "../Context/StateProvider";
import { TiTick } from "react-icons/ti";
import { FaTimesCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function Product({ id, title, img, price }) {
    const { t } = useTranslation()
    const state = useStateValue()
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
                id, title, img, price
            }
        })
    }
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <div className={styles.title}>{t("product_name")}</div> 
                <div > {title}</div>
                <div className={styles.price}> {t("price")} : {` $ ${price} `} </div>
            </div>
            <img
                src={img}
                className={styles.img}
                alt={title}
            />
            <button className={styles.btn}
                onClick={addToBasket}
            >
                {t("add_basket")}
            </button>
        </div>
    )
}

export default Product
