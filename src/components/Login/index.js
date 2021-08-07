import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../styles/Login.module.css"
import { auth } from "../../firebase"
import { useTranslation } from "react-i18next";
import { Col, Row } from 'antd';
import { ConfigProvider } from 'antd';
import { Helmet } from 'react-helmet'
import Button from '../Button';

function Login() {
    const { t, i18n } = useTranslation()
    const history = useHistory();
    const lang = i18n.language
    const [err, seterr] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()
    const login = (e) => {
        e.preventDefault();
        const input_email = emailRef.current.value
        const input_password = emailRef.current.value
        if (input_email && input_password) {
            auth.signInWithEmailAndPassword(input_email, input_password)
                .then(auth => {
                    history.push('/')
                })
                .catch(err => seterr(t("err_login1")))
        }
        else {
            seterr(t("err_login2"))
        }
    }
    return (
        <>
        <Helmet>
            <title> {t("sign_in")} </title>
        </Helmet>
        <ConfigProvider direction={lang === "fa" ? "rtl" : "ltr"}>
            <Row className={styles.row}>
                <Col span={24} className={styles.login}>
                    <Link to='/'>
                        <p className={styles.logo}>9TuBe</p>
                    </Link>
                    <div className={styles.login_container}>
                        <h4 className={styles.sign}>{t("sign_in")}</h4>
                        <form className={styles.form} onSubmit={login}>
                            <p className={styles.label}> {t("email")} </p>
                            <input
                                type="email"
                                ref={emailRef}
                                className={styles.input}
                                placeholder={t("email_place")}
                                required
                            />
                            <p className={styles.label}>{t("password")} </p>
                            <input
                                type="password"
                                className={styles.input}
                                ref={passwordRef}
                                placeholder={t("password_place")}
                                required
                            />
                            <p className={styles.err}>
                                {err}
                            </p>
                            <Button
                                type='submit'
                                className={styles.btn}
                            >{t("sign_in")}</Button>
                        </form>
                        <p className={styles.text}>
                            {t("login_text")}
                            <Link to="/register" className={styles.link}>
                               {t("create_acc")}
                            </Link>

                        </p>
                    </div>
                </Col>
            </Row>
        </ConfigProvider>
        </>
    )
}

export default Login
