import { Col, Row } from 'antd'
import React from 'react'
import { data } from '../../lib/data'
import styles from "../../styles/ProductPage.module.css"
import FilterProducts from '../FilterProducts'
import Product from '../Product'
import SortBy from '../SortBy'

function ProductsPage() {
    return (
        <Row className={styles.row}>
            <Col xs={0} sm={0} md={0} lg={6} xl={6}>
                <FilterProducts/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <SortBy />
                <Row gutter={[6, 8]} >
                    {data.map((item, i) => {
                        return <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.col} key={i}>
                            <Product
                                id={item.id}
                                title={item.title}
                                img={item.img}
                                price={item.price}
                            />
                        </Col>
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default ProductsPage
