import { Col, Row } from 'antd'
import React from 'react'
import styles from "../../styles/About.module.css"
import img from "../../images/god.jpg"
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import Layout from "../Layout"
function About() {
    const { t } = useTranslation();
    return (
        <Layout>
            <Helmet>
                <title> {`${t("about")} ${t("us")}`} </title>
            </Helmet>
            <Row className={styles.row}>
                <Col span={24} className={styles.col}>
                    <div className={styles.contain}>
                        <img src={img} className={styles.img} alt="god of war" />
                        <div className={styles.about}>
                            <div className={styles.content}>
                                <div className={styles.titles}>
                                    <div className={styles.title}>{t("about")}</div>
                                    <div className={styles.title_2}>{t("us")}</div>
                                </div>

                                <div className={styles.text}>
                                    {t("about_txt")}
                                </div>
                            </div>
                        </div>
                    </div>

                </Col>
            </Row>
        </Layout>
    )
}

export default About
