import React from 'react'
import styles from "../../styles/Spiner.module.css"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {useTranslation} from "react-i18next"
const antIcon = <LoadingOutlined className={styles.spin} spin />;
function Spiner() {
    const {t}=useTranslation()
    return (
        <div className={styles.contain}>
            <div className={styles.content}>
            <Spin indicator={antIcon}></Spin>
            <div className={styles.text}>{t("loading")}</div>
            </div>
        </div>
    )
}

export default Spiner
