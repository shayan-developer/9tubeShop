import React from 'react'
import styles from "../../styles/Button.module.css"
function Button({onClick ,type,style,children}) {
    return ( 
        <button onClick={onClick} type={type} className={`${styles.btn} `} style={style}>
            {children}
        </button>
    )
}

export default Button
