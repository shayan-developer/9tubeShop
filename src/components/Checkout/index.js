import React from 'react'
import styles from "../../styles/Checkout.module.css"
import Subtotal from '../Subtotal'
function Checkout() {
    return (
        <div className={styles.checkout}>
            <div className={styles.calc}>
                 <Subtotal/>
            </div>
            <div className={styles.items}>
              <p className={styles.title}>Your Shopping Basket : </p>  
{/* basket */}
            </div>
        </div>
    )
}

export default Checkout
