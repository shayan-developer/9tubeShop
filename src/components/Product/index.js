import React from 'react'
import styles from "../../styles/Product.module.css"
import {useStateValue} from "../Context/StateProvider"
function Product({id, title, img, price }) {
    const[state,dispath]=useStateValue()
    const addToBasket=()=>{
dispath({
    type:"ADD",
    item:{
        id,title,img,price
    }
})
    }
    return (
        <div className={styles.product}>
            <div className={styles.info}>
                <p>{title}</p>
                <p className={styles.price}>Price : ${price}</p>
            </div>
            <img
                src={img}
                className={styles.img}
            />
            <button className={styles.btn}
            onClick={addToBasket}
            >Add to basket</button>
        </div>
    )
}

export default Product
