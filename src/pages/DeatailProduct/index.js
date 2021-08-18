import React from 'react'
import Gallery from '../../components/DetailProductItem/Gallery'
import Layout from '../../components/Layout'
import { useParams } from "react-router-dom"
import { data } from '../../lib/data'
import InfoProduct from '../../components/DetailProductItem/InfoProduct'
import { Col, Row } from 'antd'
function DetailProduct() {
    const params = useParams()
    const product = data.find((item) => item.id === params.id)
    const { thumbnail, img, price, id, title, amount, brand } = product
    console.log(product);
    return (
        <Layout>
            <Row style={{padding:'12px'}}>
                <Col span={24} >
                    <Gallery thumb={thumbnail["1"]} img={img} />
                    <InfoProduct title={title} brand={brand} price={price} id={id} />
                </Col>
            </Row>
        </Layout>
    )
}

export default DetailProduct
