import React from 'react'
import styles from "../../styles/Product.module.css"
function Product() {
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <p></p>
                <p className={styles.price}></p>
            </div>
            <img
                className={styles.img}
            />
            <button className={styles.btn}>ADD</button>
        </div>
    )
}

export default Product
