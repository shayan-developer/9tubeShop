import React from 'react'
import styles from "../../styles/Home.module.css"
import { Row, Col } from "antd"
import LatestProduct from '../LatesProduct'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet'
import MyCarousel from '../MyCarousel';

function Home() {
    const {t} = useTranslation()
    return (
        <>
        <Helmet>
            <title> {t("home")} </title>
        </Helmet>
        <div className={styles.home}>
            <div className={styles.container}>
                <MyCarousel/>
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
