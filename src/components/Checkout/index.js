import React from 'react'
import styles from "../../styles/Checkout.module.css"
import { useStateValue } from '../Context/StateProvider'
import Subtotal from '../Subtotal'
import CheckoutProduct from "../CheckoutProduct"
import { MdSentimentDissatisfied } from "react-icons/md";
function Checkout() {
    const [{ basket }, dispath] = useStateValue()

    return (
        <div className={styles.checkout}>
            <div className={styles.calc}>
                <Subtotal />
            </div>
            <div className={styles.items}>
                <p className={styles.title}>Your Shopping Basket : </p>
            </div>
            {
                    basket.length >= 1 ? basket.map((item, i) => <CheckoutProduct {...item} />) :
                        <div className={styles.empty}>
                            <div className={styles.icon}>
                            <MdSentimentDissatisfied/>
                            </div>
                                Your Basket Is Empty ! 
                        </div>
                }
        </div>
    )
}

export default Checkout
