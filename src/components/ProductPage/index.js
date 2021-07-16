import { Col, Row} from 'antd'
import React from 'react'
import { data } from '../../lib/data'
import styles from "../../styles/ProductPage.module.css"
import Product from '../Product'
import SortBy from '../SortBy'

function ProductsPage() {
    return (
        <Row className={styles.row}>
            <SortBy />
            <Row gutter={[6, 8]} >
                {data.map((item, i) => {
                    return <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col} key={i}>
                        <Product
                            id={item.id}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                        />
                    </Col>
                })}
            </Row>
        </Row>
    )
}

export default ProductsPage
