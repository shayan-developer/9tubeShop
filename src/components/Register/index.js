import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import styles from "../../styles/Register.module.css"
import { useTranslation } from "react-i18next";
import { Col, Row } from 'antd';
import { ConfigProvider } from 'antd';
import { Helmet } from 'react-helmet'

function Register() {
    const { t, i18n } = useTranslation()
    const history = useHistory();
    const lang = i18n.language
    const [err, seterr] = useState('')
    const register = (e) => {
        e.preventDefault();
        const Input_email = e.target[0].value;
        const Input_password = e.target[1].value;
        const Input_Repassword = e.target[2].value;
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
                                type="email"
                                className={styles.input}
                                placeholder={t("email_place")}
                                required
                            />
                            <p className={styles.label}>{t("password")} </p>
                            <input
                                type="password"
                                className={styles.input}
                                placeholder={t("password_place")}
                                required
                            />
                            <p className={styles.label}>{t("re_password")}</p>
                            <input
                                type="password"
                                className={styles.input}
                                placeholder={t("repass_place")}
                                required
                            />
                            <p className={styles.err}>
                                {err}
                            </p>
                            <button
                                type='submit'
                                className={styles.btn}
                            >{t("create_acc")}</button>
                        </form>

                    </div>
                </Col>
            </Row>
        </ConfigProvider>
        </>
    )
}

export default Register
