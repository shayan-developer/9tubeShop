import React from 'react'
import styles from "../../styles/Home.module.css"
import { Row, Col } from "antd"
import LatestProduct from '../LatesProduct'
function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <div className={styles.text_hero}>
                        Buy And Enjoy !
                    </div>
                </div>
                <Row>
                    <Col>
                        <p className={styles.title_shop}>The latest products </p>
                    </Col>
                </Row>
               <LatestProduct/>
            </div>
        </div>
    )
}

export default Home
