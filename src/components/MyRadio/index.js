import React, { useEffect, useState } from 'react'
import { Radio } from "antd"
import { useTranslation } from "react-i18next";
import styles from "../../styles/Radio.module.css"
function MyRadio({t1,t2,forlang}) {
    const { i18n } = useTranslation()
    const lang=i18n.language
    const [check, setcheck] = useState({ en: false, fa: false})
    const changeLang = (e) => {
        i18n.changeLanguage(e.target.value)
        if (e.target.value === "en") {
            setcheck({ en: true })
        } else {
            setcheck({ fa: true })
        }
    }
    useEffect(() => {
        if (lang==="fa") {
            setcheck({fa:true})
        } else {
            setcheck({en:true})
        }
    }, [lang])
    return (
        <Radio.Group
            defaultValue={lang}
            buttonStyle="solid"
            onChange={forlang&&changeLang}
            size='small'
            className={styles.radio}
        >
            <Radio.Button
                className={styles.btn}
                value="en"
                checked={check}
                style={{
                    backgroundColor: check.en ? "#FF0000" : "#fff",
                    borderColor: check.en ? "#FF0000" : "#fff"
                }}
            >{t2}</Radio.Button>
            <Radio.Button
                value="fa"
                checked={check}
                className={styles.btn}
                style={{
                    backgroundColor: check.fa ? "#FF0000" : "#fff",
                    borderColor: check.fa ? "#FF0000" : "#fff"
                }}
            >{t1}</Radio.Button>
        </Radio.Group>
    )
}

export default MyRadio
