import { Row, Col } from 'antd'
import React from 'react'
import styles from "../../styles/Footer.module.css"
import { useTranslation } from "react-i18next";
import {
    FaInstagram,
    FaRegArrowAltCircleUp,
    FaTwitterSquare,
    FaGooglePlay
} from "react-icons/fa";
function Footer() {
    const { t } = useTranslation()
    const goUp = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <Row>
            <Col span={24}>
                <div className={styles.footer}>
                    <div className={styles.header}>
                        <div className={styles.up} onClick={goUp}>
                            <FaRegArrowAltCircleUp className={styles.up_icon} />
                            <div className={styles.up_text}>{t("up")}</div>
                        </div>
                        <div className={styles.logo_contain}>
                            <div className={styles.logo}>
                                9TuBe
                            </div>
                            <div className={styles.enjoy}>
                                {t("buy_enjoy")}
                            </div>
                            <div className={styles.email}>
                                shayan.dev.arak@gmail.com
                            </div>
                            <div className={styles.social}>
                                <FaInstagram className={styles.icon} />
                                <FaTwitterSquare className={styles.icon} />
                                <FaGooglePlay className={styles.icon} />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Footer
