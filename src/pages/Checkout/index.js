import React, { useCallback } from 'react'
import styles from "../../styles/Checkout.module.css"
import { useStateValue } from '../../components/Context/StateProvider'
import Subtotal from '../../components/Subtotal'
import { Row, Col } from 'antd'
import CheckoutProduct from "../../components/CheckoutProduct"
import { MdSentimentDissatisfied } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet'
import Layout from "../../components/Layout"
function Checkout() {
    const [state, dispath] = useStateValue()
    const { basket } = state
    const { t } = useTranslation()
    const addToBasket = useCallback(data => {
        dispath({
            type: "ADD",
            item: data
        })
    }, [dispath])
    const minesBasket = useCallback(id => {
        dispath({
            type: "REMOVE",
            item: id
        })
    }, [dispath])
    return (
        <Layout>
            <Helmet>
                <title> {t("shopping_bas")} </title>
            </Helmet>
            <Row className={styles.row}>
                <Col span={24} className={styles.checkout}>
                    <div className={styles.calc}>
                        <Subtotal />
                    </div>
                    <div className={styles.items}>
                        <p className={styles.title}>{t("your_basket")} </p>
                    </div>
                    {
                        basket.length >= 1 ? basket.map(item => {
                            const { img, id, title, price, amount } = item
                            return <CheckoutProduct
                                minesBasket={minesBasket}
                                addToBasket={addToBasket}
                                img={img}
                                price={price}
                                id={id}
                                amount={amount}
                                title={title}
                                key={id} />
                        }) :
                            <div className={styles.empty}>
                                <div className={styles.icon}>
                                    <MdSentimentDissatisfied />
                                </div>
                                {t("empty_basket")}
                            </div>
                    }
                </Col>
            </Row>
        </Layout>
    )
}

export default Checkout
