import { Col, Row } from 'antd'
import Layout from "../../components/Layout"
import React from 'react'
import { data } from '../../lib/data'
import styles from "../../styles/ProductPage.module.css"
import FilterProducts from '../../components/FilterProducts'
import Product from '../../components/Product'
import SortBy from '../../components/SortBy'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function ProductsPage() {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title> {t("products")} </title>
            </Helmet>
            <Layout>

                <Row className={styles.row}>
                    <Col xs={0} sm={0} md={0} lg={6} xl={6}>
                        <FilterProducts />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                        <SortBy />
                        <Row gutter={[6, 8]} >
                            {data.map((item, i) => {
                                return <Col xs={12} sm={12} md={12} lg={12} xl={12} className={styles.col} key={i}>
                                    <Product
                                        id={item.id}
                                        title={item.title}
                                        img={item.img['1'].large}
                                        price={item.price}
                                        amount={item.amount}
                                    />
                                </Col>
                            })}
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default ProductsPage
