import { Divider, Slider } from 'antd'
import React from 'react'
import { FaDollarSign, FaFilter, FaPlaystation, FaXbox } from 'react-icons/fa'
import styles from "../../styles/FilterProducts.module.css"
import MyRadio from "../MyRadio";
function FilterProducts() {
    const marks = {
        0: {
            label: <span className={styles.label_price}>0</span>
        },
        10000000: {
            style: {
                transform: "translateX(86%)"
            },
            label: <span className={styles.label_price}>10,000,000</span>
        }
    };
    function onChange(value) {
        console.log('onChange: ', value);
    }

    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }
    return (
        <div className={styles.filter}>
            <div className={styles.filter_txt}>
                فیلتر محصولات
                <FaFilter />
            </div>
            <Divider style={{ backgroundColor: "#fd1212" }} />
            <div className={styles.filter_price}>
                <div className={styles.filter_title}>
                    رنج قیمت
                    <FaDollarSign />
                </div>
                <Slider
                    marks={marks}
                    range
                    step={10}
                    defaultValue={[0, 5000000]}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                    max={10000000}
                    tooltipPlacement={"bottom"}
                />
            </div>
            <div className={styles.filter_brand}>
                <div className={styles.filter_title}>
                    برند
                </div>
                {/* <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a"><FaPlaystation /></Radio.Button>
                    <Radio.Button value="b"><FaXbox /></Radio.Button>
                    <Radio.Button value="c">Beijing</Radio.Button>
                    <Radio.Button value="d">Chengdu</Radio.Button>
                </Radio.Group> */}
                <MyRadio t1={<FaPlaystation />} t2={<FaXbox />}/>
            </div>
        </div>
    )
}

export default FilterProducts
