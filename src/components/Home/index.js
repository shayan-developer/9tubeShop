import React from 'react'
import styles from "../../styles/Home.module.css"
import Product from '../Product'
function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <div className={styles.img}>
                </div>
                <div className={styles.row}>
                    <Product 
                    title="DualSense™ Wireless Controller"
                    img="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-white-accessory-front?$Background_Large$"
                   price="69"
                   />
                    <Product 
                    title="PULSE 3D™ Wireless Headset"
                    img="https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$"
                   price="99"
                   />

                </div>
                <div className={styles.row}>
                <Product 
                    title="DualSense™ Wireless Controller"
                    img="https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-white-accessory-front?$Background_Large$"
                   price="69"
                   />
                    <Product 
                    title="MLB The Show 21 - PS5"
                    img="https://media.direct.playstation.com/is/image/sierialto/mlb-21-ps5-game-box-front?$Background_Large$"
                   price="69"
                   />
                    <Product 
                    title="Marvel's Spider-Man: Miles Morales Ultimate Edition - PS5"
                    img="https://media.direct.playstation.com/is/image/sierialto/SMMM_UE_PS5_ProductHero_900X900_2X?$Background_Large$"
                   price="69"
                   />

                </div>
                <div className={styles.row}>
                <Product 
                    title="The PS5™ console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an 
                    all-new generation of incredible PlayStation® games."
                    img="https://media.direct.playstation.com/is/image/sierialto/PS5-front-with-dualsense?$Background_Large$"
                   price="499"
                   />

                </div>
            </div>
        </div>
    )
}

export default Home
