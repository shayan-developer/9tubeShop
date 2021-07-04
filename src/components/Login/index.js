import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../styles/Login.module.css"
import { auth } from "../../firebase"
function Login() {
    const history = useHistory();
    const [err, seterr] = useState('')
    const login = (e) => {
        e.preventDefault();
         const input_email =  e.target[0].value
        const input_password = e.target[1].value
        if (input_email && input_password) {
            auth.signInWithEmailAndPassword(input_email, input_password)
                .then(auth => {
                    history.push('/')
                })
                .catch(err => seterr("Email or password is incorrect !"))
        }
        else {
            seterr(" Email or password is empty ! ")
        }
    }
    return (
        <div className={styles.login}>
            <Link to='/'>
                <p className={styles.logo}>9TuBe</p>
            </Link>
            <div className={styles.login_container}>
                <h4 className={styles.sign}>Sign-in</h4>
                <form className={styles.form} onSubmit={login}>
                    <p className={styles.label}>Email </p>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Enter your email"
                        required
                    />
                    <p className={styles.label}>Password </p>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder='Enter your password '
                        required
                    />
                    <p className={styles.err}>
                        {err}
                    </p>
                    <button
                        type='submit'
                        className={styles.btn}
                    >Sign in</button>
                </form>
                <p className={styles.text}>
                    if you dont have account click on

                    <Link to="/register" className={styles.link}>
                        create your acccount
                    </Link>

                </p>
            </div>
        </div>
    )
}

export default Login
