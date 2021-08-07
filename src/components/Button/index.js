import React from 'react'
import styles from "../../styles/Button.module.css"
function Button({onClick ,type,classes,children}) {
    return ( 
        <button onClick={onClick} type={type} className={`${styles.btn} ${classes}`}>
            {children}
        </button>
    )
}

export default Button
