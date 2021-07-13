import React from 'react'
import styles from "../../styles/MyCarousel.module.css"
import { Carousel } from 'antd';
import CarouselItem from './CarouselItem';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function MyCarousel() {
    return (
        <Carousel effect="fade" autoplay>
           <CarouselItem price={221} title={"Returnal - PS5 "} img={"https://media.direct.playstation.com/is/image/sierialto/pulse-3d-wireless-ps5-headset-accessory-front-angle?$Background_Large$"}/>
           <CarouselItem price={221} title={"Returnal - PS5 "} img={"https://media.direct.playstation.com/is/image/sierialto/dualsense-ps5-controller-red-accessory-front?$Background_Large$"}/>
           <CarouselItem  price={221} title={"Returnal - PS5 "} img={"https://media.direct.playstation.com/is/image/sierialto/hd-camera-ps5-accessory-front-angle-view?$Background_Large$"}/>
           <CarouselItem  price={221} title={"Returnal - PS5 "}  img={"https://media.direct.playstation.com/is/image/sierialto/returnal-ps5-game-box-front?$Background_Large$"}/>
        </Carousel>
    )
}

export default MyCarousel
