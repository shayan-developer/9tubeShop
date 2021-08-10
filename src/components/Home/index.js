import React from 'react'
import styles from "../../styles/Home.module.css"
import { Row, Col } from "antd"
import LatestProduct from '../LatesProduct'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet'
import MyCarousel from '../MyCarousel';
import Intro from '../Intro';
import Layout from '../Layout';


function Home() {
    const { t } = useTranslation()
    return (
        <Layout>
            <Helmet>
                <title> {t("home")} </title>
            </Helmet>
            <div className={styles.home}>
                <div className={styles.container}>
                    <MyCarousel />
                    <div className={styles.img}>
                        <Intro />
                        <div className={styles.hero}>
                            <div className={styles.text_hero}>
                                {t("buy_enjoy")}
                            </div>
                        </div>

                    </div>
                    <Row>
                        <Col>
                            <p className={styles.title_shop}> {t("latest")} </p>
                        </Col>
                    </Row>
                    <LatestProduct />
                </div>
            </div>
        </Layout>
    )
}

export default Home
