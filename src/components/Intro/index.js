import { Col, Row } from 'antd'
import React from 'react'
import styles from "../../styles/Intro.module.css"
import { useTranslation } from "react-i18next";
import { FaShoppingCart,FaShippingFast, FaLaughWink, FaWarehouse } from "react-icons/fa";
const  Intro=() =>{
    const { t } = useTranslation()
    return (
        <Row gutter={10} className={styles.row}>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <FaShoppingCart />
                    </div>
                    <div className={styles.text}>
                   {t("easy")}
                    </div>
                </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <FaLaughWink />
                    </div>
                    <div className={styles.text}>
                    {t("guarantee")}
                    </div>
                </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <FaShippingFast />
                    </div>
                    <div className={styles.text}>
                    {t("fast_send")}
                    </div>
                </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <FaWarehouse/>
                    </div>
                    <div className={styles.text}>
                    {t("home_delivery")}
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default React.memo(Intro)
