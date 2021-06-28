import React from 'react'
import styles from "../../styles/Subtotal.module.css"
import { calc } from '../Context/reducer'
import { useStateValue } from '../Context/StateProvider'
function Subtotal() {
    const[{basket},dispath]=useStateValue()
    return (
        <div className={styles.subtotal}>
            <p className={styles.count}>Number of items : {basket.length}</p>
            <p className={styles.total}>Total Price: ${calc(basket)}</p>
            <button className={styles.btn}>To Payment</button>
        </div>
    )
}

export default Subtotal
