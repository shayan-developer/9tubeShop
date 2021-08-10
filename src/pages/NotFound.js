import { Col, Row } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Button from "../components/Button"
import Layout from '../components/Layout'
import styles from "../styles/NotFound.module.css"
function NotFound() {
    const {t,i18n} =useTranslation()
    const lang=i18n.language
    const boder =lang==="en"?styles["br_right"]:styles["br_left"]
    return (
        <Layout>
            <Row className={styles.row}>
                <Col span={24} className={styles.col}>
                    <div className={styles.box} >
                        <div className={styles.content}>
                            <div className={` ${boder} ${styles.text}`}>
                                {t("notFound")}
                            </div>
                            <div className={styles.error}>
                                404
                            </div>
                        </div>
                        <div className={styles.actions}>
                            <Button style={{ margin: "2px" }}>
                                <Link to="/" className={styles.link}>
                                    {t("home")}
                                </Link>
                            </Button>
                            <Button style={{ margin: "2px" }}>
                                <Link to="/products" className={styles.link}>
                                    {t("products")}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Layout>
    )
}

export default NotFound
