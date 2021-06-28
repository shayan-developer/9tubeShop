import React from 'react'
import styles from "../../styles/Product.module.css"
function Product({ title, img, price }) {
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <p>{title}</p>
                <p className={styles.price}>${price}</p>
            </div>
            <img
                src={img}
                className={styles.img}
            />
            <button className={styles.btn}>Add to basket</button>
        </div>
    )
}

export default Product
