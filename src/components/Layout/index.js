import Footer from "../Footer"
import React from 'react'
import Menu from '../Menu'
import { ConfigProvider } from 'antd';
import { useTranslation } from "react-i18next";
function Layout({ children }) {
    const { i18n } = useTranslation()
    const lang = i18n.language
    return (
        <div style={{ backgroundColor: "#000012" }}>
            <Menu />
            <ConfigProvider direction={lang==="fa"?"rtl":"ltr"}>
                {children}
            </ConfigProvider>
            <Footer />
        </div>
    )
}

export default Layout
