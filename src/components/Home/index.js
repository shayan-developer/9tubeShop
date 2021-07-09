import React, { useEffect } from 'react'
import styles from "../../styles/Home.module.css"
import { Row, Col } from "antd"
import LatestProduct from '../LatesProduct'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet'

function Home() {
    const {t} = useTranslation()
    useEffect(() => {
        document.title = t("home")
    }, [])
    return (
        <>
        <Helmet>
            <title> {t("home")} </title>
        </Helmet>
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <div className={styles.text_hero}>
                        {t("buy_enjoy")}
                    </div>
                </div>
                <Row>
                    <Col>
                        <p className={styles.title_shop}> {t("latest")} </p>
                    </Col>
                </Row>
               <LatestProduct/>
            </div>
        </div>
        </>
    )
}

export default Home
