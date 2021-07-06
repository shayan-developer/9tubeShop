import React from 'react'
import Product from '../Product'
import { Row, Col } from "antd"
import styles from "../../styles/Latest.module.css"
function LatestProduct() {
    return (
        <Row gutter={[6,16]} className={styles.row}>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="1234567"
                    title="DualSense™ Wireless Controller"
                    img="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-front?$Background_Large$"
                    price={74}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="2234567"
                    title="PULSE 3D™ Wireless Headset"
                    img="https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$"
                    price={99}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="3234567"
                    title="DualSense™ Wireless Controller"
                    img="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-white-accessory-front?$Background_Large$"
                    price={69}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="The PS5™ console "
                    img="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense?$Background_Large$"
                    price={499}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="HD Camera for PS5 consoles "
                    img="https://media.direct.playstation.com/is/image/sierialto/hd-camera-ps5-accessory-front-angle-view?$Background_Large$"
                    price={59}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="DualSense™ Charging Station "
                    img="https://media.direct.playstation.com/is/image/sierialto/dualsense-charging-station-accessory-with-ps5-controllers?$Background_Large$"
                    price={29}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="Ghost of Tsushima™ "
                    img="https://media.direct.playstation.com/is/image/sierialto/ps5-ghostoftsushima-directorscut-game-box-front?$Background_Large$"
                    price={69}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="6234567"
                    title="Destruction AllStars - PS5"
                    img="https://media.direct.playstation.com/is/image/sierialto/DestructionAS_PS5_ProductHero_v2_900X900?$Background_Large$"
                    price={19}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="Returnal - PS5 "
                    img="https://media.direct.playstation.com/is/image/sierialto/returnal-ps5-game-box-front?$Background_Large$"
                    price={59}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} sclassName={styles.col}>
                <Product
                    id="6234567"
                    title="Ratchet & Clank: Rift Apart Launch"
                    img="https://media.direct.playstation.com/is/image/sierialto/PS5-Ratchet-Clank-Rift-Apart-Launch-Edition-Front-Cover?$Background_Large$"
                    price={69}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="4234567"
                    title="MLB The Show 21 - PS5"
                    img="https://media.direct.playstation.com/is/image/sierialto/mlb-21-ps5-game-box-front?$Background_Large$"
                    price={69}
                />
            </Col>
            <Col xs={12} sm={12} md={12} lg={8} xl={8} className={styles.col}>
                <Product
                    id="5234567"
                    title="Marvel's Spider-Man"
                    img="https://media.direct.playstation.com/is/image/sierialto/SMMM_UE_PS5_ProductHero_900X900_2X?$Background_Large$"
                    price={69}
                />
            </Col>
        </Row>
    )
}

export default LatestProduct
