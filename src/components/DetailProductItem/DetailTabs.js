import React from 'react'
import { Tabs } from 'antd';
import styles from "../../styles/DetailTabs.module.css"
import { useTranslation } from 'react-i18next';
const { TabPane } = Tabs;
function DetailTabs() {
    const { t } = useTranslation()
    const width = window.screen.width
    let tabSize = ''
    if (width < 768 && width > 526) {
        tabSize = "default"
    } else if (width < 526) {
        tabSize = "small"
    }else{
        tabSize="large"
    }
    return (
        <div className={styles.container}>
            <Tabs type="card" size={tabSize} style={{ backgroundColor: "#fff" }}>
                <TabPane tab={t("review")} key="1" >
                    <div className={styles.value}>{t("no_data")}</div>
                </TabPane>
                <TabPane tab={t("comments")} key="2">
                    <div className={styles.value}>{t("no_comment")}</div>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default DetailTabs
