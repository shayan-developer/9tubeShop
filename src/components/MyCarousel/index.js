import React from 'react'
import styles from "../../styles/MyCarousel.module.css"
import { Carousel, Col, Row } from 'antd';
import CarouselItem from './CarouselItem';
import {data} from "../../lib/data"
const MyCarousel=()=> {
  const newData=data.filter((item,i)=>i<4)
  
  return (
    <Row>
      <Col span={24}>
        <Carousel effect="fade" dots={{ className: styles.dot }} autoplay>
          {newData.map(item=><CarouselItem key={item.id} {...item}/>)}
        </Carousel>
      </Col>
    </Row>

  )
}

export default React.memo( MyCarousel)
