import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import styles from "../../styles/Register.module.css"
import { useTranslation } from "react-i18next";
import { Col, Row } from 'antd';
import { ConfigProvider } from 'antd';
import { Helmet } from 'react-helmet'
import Button from '../../components/Button';

function Register() {
    const { t, i18n } = useTranslation()
    const emailRef = useRef()
    const passwordRef = useRef()
    const rePasswordRef = useRef()
    const history = useHistory();
    const lang = i18n.language
    const [err, seterr] = useState('')
    const register = (e) => {
        e.preventDefault();
        const Input_email = emailRef.current.value;
        const Input_password = passwordRef.current.value;
        const Input_Repassword = rePasswordRef.current.value;
        if (Input_password !== Input_Repassword) {
            seterr("Your password does not match the password you repeated")
        }
        if (Input_password === Input_Repassword && Input_email) {
            auth.createUserWithEmailAndPassword(Input_email, Input_Repassword)
                .then(auth => {
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(err => seterr(err.message))
        }
    }
    return (
        <>
            <Helmet>
                <title> {t("create_acc")} </title>
            </Helmet>
            <ConfigProvider direction={lang === "fa" ? "rtl" : "ltr"}>
                <Row className={styles.row}>
                    <Col span={24} className={styles.login}>
                        <Link to='/'>
                            <p className={styles.logo}>9TuBe</p>
                        </Link>
                        <div className={styles.login_container}>
                            <h4 className={styles.sign}>{t("create_acc")}</h4>
                            <form className={styles.form} onSubmit={register} method='GET'>
                                <p className={styles.label}> {t("email")} </p>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className={styles.input}
                                    placeholder={t("email_place")}
                                    required
                                />
                                <p className={styles.label}>{t("password")} </p>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    className={styles.input}
                                    placeholder={t("password_place")}
                                    required
                                />
                                <p className={styles.label}>{t("re_password")}</p>
                                <input
                                    ref={rePasswordRef}
                                    type="password"
                                    className={styles.input}
                                    placeholder={t("repass_place")}
                                    required
                                />
                                <p className={styles.err}>
                                    {err}
                                </p>
                                <Button
                                    type='submit'
                                >{t("create_acc")}</Button>
                            </form>

                        </div>
                    </Col>
                </Row>
            </ConfigProvider>
        </>
    )
}

export default Register
