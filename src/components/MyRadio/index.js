import React, { useState } from 'react'
import { Radio } from "antd"
import { useTranslation } from "react-i18next";
import styles from "../../styles/Radio.module.css"
function MyRadio() {
    const { i18n } = useTranslation()
    const [check, setcheck] = useState({ en: false, fa: true })
    const changeLang = (e) => {
        console.log(e);
        i18n.changeLanguage(e.target.value)
        if (e.target.value === "en") {
            setcheck({ en: true })
        } else {
            setcheck({ fa: true })
        }
    }
    return (
        <Radio.Group
            defaultValue={'fa'}
            buttonStyle="solid"
            onChange={changeLang}
            size='small'
            className={styles.radio}
        >
            <Radio.Button
                className={styles.btn}
                value="en"
                checked={check}
                style={{
                    backgroundColor: check.en ? "#fd1212" : "#fff",
                    borderColor: check.en ? "#fd1212" : "#fff"
                }}
            >English</Radio.Button>
            <Radio.Button
                value="fa"
                checked={check}
                className={styles.btn}
                style={{
                    backgroundColor: check.fa ? "#fd1212" : "#fff",
                    borderColor: check.fa ? "#fd1212" : "#fff"
                }}
            >فارسی</Radio.Button>
        </Radio.Group>
    )
}

export default MyRadio