import React from 'react'
import Gallery from '../../components/DetailProductItem/Gallery'
import Layout from '../../components/Layout'
import { useParams } from "react-router-dom"
import { data } from '../../lib/data'
import InfoProduct from '../../components/DetailProductItem/InfoProduct'
import { Col, Row } from 'antd'
import { notification } from 'antd';
import { FaTimesCircle } from "react-icons/fa";
import DetailTabs from '../../components/DetailProductItem/DetailTabs'
import styles from "../../styles/DetailPage.module.css"
import { useStateValue } from '../../components/Context/StateProvider'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
function DetailProduct() {
    const params = useParams()
    const product = data.find((item) => item.id === params.id)
    const [, dispath] = useStateValue()
    const { t } = useTranslation()
    const { img, price, id, title, amount, brand } = product
    const openNotification = () => {
        notification.info({
            message: <p className={styles.title_notif}>{t("added_basket")}</p>,
            description: <div className={styles.notif}>
                <img src={img['1'].large} alt={title} className={styles.img_notif} />
                <div className={styles.text_notif}>{title}</div>
            </div>,
            closeIcon: <FaTimesCircle className={styles.notif_icon} />,
            className: styles.contain_notif,
        });
    };
    const addToBasket = () => {
        openNotification()
        dispath({
            type: "ADD",
            item: {
                id, title, img: img['1'].large, price, amount
            }
        })
    }
    return (
        <>
            <Helmet>
                <title> {title} </title>
            </Helmet>
            <Layout>
                <Row className={styles.row}>
                    <Col span={24} >
                        <Gallery data={img} />
                        <InfoProduct addToBasket={addToBasket} title={title} brand={brand} price={price} id={id} />
                        <DetailTabs />
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default DetailProduct
