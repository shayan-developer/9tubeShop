import React from 'react'
import styles from "../../styles/Spiner.module.css"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = <LoadingOutlined className={styles.spin} spin />;
function Spiner() {
    return (
        <div className={styles.contain}>
            <Spin indicator={antIcon}></Spin>
        </div>
    )
}

export default Spiner
