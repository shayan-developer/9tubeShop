import React from 'react'
import styles from "../../styles/Button.module.css"
function Button({onClick ,type,style,children,varient="fill"}) {

let varientBtn;
 if (varient==="fill") {
     varientBtn=styles["btn"]
 } else if (varient==="outline"){
    varientBtn=styles["btnOutline"]
 }

    return ( 
        <button onClick={onClick} type={type} className={`${varientBtn} `} style={style}>
            {children}
        </button>
    )
}

export default Button
