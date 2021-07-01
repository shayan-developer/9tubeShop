import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from "../../styles/Login.module.css"
import { auth } from "../../firebase"
function Login() {
    const history = useHistory();
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [err, seterr] = useState('')
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(err => seterr("Email or password is incorrect !"))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))
    }
    return (
        <div className={styles.login}>
            <Link to='/'>
                <p className={styles.logo}>9TuBe</p>
            </Link>
            <div className={styles.login_container}>
                <h4 className={styles.sign}>Sign-in</h4>
                <form className={styles.form}>
                    <p className={styles.label}>Email </p>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="Enter your email"
                        onChange={e => setemail(e.target.value)}
                    />
                    <p className={styles.label}>Password </p>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder='Enter your password '
                        onChange={e => setpassword(e.target.value)}
                    />
                    <p className={styles.err}>
                        {err}
                    </p>
                    <button
                        type='submit'
                        className={styles.btn}
                        onClick={login}
                    >Sign in</button>
                    <button
                        type='submit'
                        className={styles.btn}
                        onClick={register}
                    >Create your account</button>
                </form>

            </div>
        </div>
    )
}

export default Login
