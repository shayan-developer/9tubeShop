import React from 'react'
import styles from "../../styles/CarouselItem.module.css"
import { useTranslation } from "react-i18next";
import { toman } from '../../lib/Totoman';
import { TiTick } from 'react-icons/ti';
import { FaTimesCircle } from 'react-icons/fa';
import { notification } from 'antd';
import { useStateValue } from '../Context/StateProvider';
function CarouselItem({ img, title, price, id }) {
    const { t, i18n } = useTranslation();
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
    const state = useStateValue()
    const lang= i18n.language
    const dispath = state[1]
    return (
        <div className={styles.contain}>
            <img src={img} alt={title} className={styles.img} />
            <div
                style={{ textAlign: lang === "fa" ? "right" : "left" }}
                className={styles.info}>
                <div className={styles.title}>{title} </div>
                <div className={styles.price}>
                    {lang === "fa" ? toman(price) : ` $ ${price}`}
                </div>
                <button
                    onClick={addToBasket}
                    className={styles.btn}>{t("add_basket")}</button>

            </div>
        </div>
    )
}

export default CarouselItem
