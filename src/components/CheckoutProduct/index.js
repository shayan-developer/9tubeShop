import React from 'react'
import styles from "../../styles/CheckoutProduct.module.css"
function CheckoutProduct() {
    return (
        <div className={styles.checkoutProduct}>
            <img src={ } alt={ } className={styles.img} />
            <div className={styles.info}>
                <p className={styles.title}></p>
                <p className={styles.price}> $  </p>
                <button className={styles.btn}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
