import React from 'react'
import Product from '../Product'
import { Row, Col } from "antd"
import styles from "../../styles/Latest.module.css"
import {data} from "../../lib/data"
function LatestProduct() {
    return (
        <Row gutter={[6, 8]} className={styles.row}>
            {data.map((item, i) => {
               return <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col} key={i}>
                    <Product
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        amount={item.amount}
                    />
                </Col>
            })}
        </Row>
    )
}

export default LatestProduct
