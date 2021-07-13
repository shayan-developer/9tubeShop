import React from 'react'
import styles from "../../styles/CarouselItem.module.css"
import { useTranslation } from "react-i18next";
function CarouselItem({ img, title, price, id }) {
    const { t } = useTranslation()
    return (
            <div className={styles.contain}>
                <img src={img} className={styles.img} />
                <div className={styles.info}>
                    <div className={styles.title}>{title} </div>
                    <div className={styles.price}> {price}</div>
                    <button className={styles.btn}>sss</button>

                </div>
            </div>
    )
}

export default CarouselItem
