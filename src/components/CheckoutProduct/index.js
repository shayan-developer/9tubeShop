import React from 'react'
import styles from "../../styles/CheckoutProduct.module.css"
import { useStateValue } from '../Context/StateProvider'
function CheckoutProduct({ img, id, title, price }) {
    const [{ basket }, dispath] = useStateValue()
    const removing = () => {
        dispath({
            type: "REMOVE", id
        })
    }
    return (
        <div className={styles.checkoutProduct}>
            <img src={img} alt={title} className={styles.img} />
            <div className={styles.info}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}> Price: $ {price} </p>
                <button className={styles.btn} onClick={removing}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
