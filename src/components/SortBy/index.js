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
                <Select defaultValue="c" className={styles.select}>
                    <Option value="a">{t("sort_by_opt1")}</Option>
                    <Option value="b">{t("sort_by_opt2")}</Option>
                    <Option value="c">
                    {t("sort_by_opt3")}
                    </Option>
                    <Option value="d">{t("sort_by_opt4")}</Option>
                </Select>
            </div>
            </Col>
        </Row>
    )
}

export default SortBy
