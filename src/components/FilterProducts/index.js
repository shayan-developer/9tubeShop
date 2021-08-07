import { Divider, Radio, Slider, Switch } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaDollarSign, FaFilter, FaPlaystation, FaXbox } from 'react-icons/fa'
import styles from "../../styles/FilterProducts.module.css"
function FilterProducts() {
    const {t}= useTranslation()
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
                {t("filter_pr")}
                <FaFilter />
            </div>
            <Divider style={{ backgroundColor: "#FF0000" }} />
            <div className={styles.filter_price}>
                <div className={styles.filter_title}>
                   {t("price_range")}
                    <FaDollarSign />
                </div>
                <Slider
                    marks={marks}
                    range
                    style={{ color: "#FF0000" }}
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
                   {t("brand")}
                </div>
                <Radio.Group onChange={onChange}
                    size={"large"}
                    buttonStyle="solid"
                    defaultValue="a">
                    <Radio.Button value="a"><FaPlaystation /></Radio.Button>
                    <Radio.Button value="b"><FaXbox /></Radio.Button>
                </Radio.Group>
            </div>
            <div className={styles.filter_exist}>
                <div >{t("available_pr")}</div> <Switch defaultChecked />
            </div>
        </div>
    )
}

export default FilterProducts
