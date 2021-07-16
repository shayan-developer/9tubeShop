import { Col, Row ,Select} from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next';
import styles from "../../styles/SortBy.module.css"
const { Option } = Select;
function SortBy() {
   const { t } = useTranslation()
    return (
        <Row className={styles.row}>
            <Col span={24}>
            <div className={styles.sort}>
                <div className={styles.sort_text}>
                    {t("sort_by")}
                </div>
                <Select defaultValue="lucy" style={{ width: 200 }}>
                    <Option value="jack">{t("sort_by_opt1")}</Option>
                    <Option value="lucy">{t("sort_by_opt2")}</Option>
                    <Option value="disabled">
                    {t("sort_by_opt3")}
                    </Option>
                    <Option value="Yiminghe">{t("sort_by_opt4")}</Option>
                </Select>
            </div>
            </Col>
        </Row>
    )
}

export default SortBy
