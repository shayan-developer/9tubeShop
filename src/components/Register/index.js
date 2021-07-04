import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import styles from "../../styles/Register.module.css"

function Register() {
    const history = useHistory();
    const [err, seterr] = useState('')
    const register = (e) => {
        e.preventDefault();
        const Input_email = e.target[0].value;
        const Input_password = e.target[1].value;
        const Input_Repassword = e.target[2].value;
        if (Input_password !==Input_Repassword ) {
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
        <div className={styles.login}>
            <Link to='/'>
                <p className={styles.logo}>9TuBe</p>
            </Link>
            <div className={styles.login_container}>
                <h4 className={styles.sign}>Sign-Up</h4>
                <form className={styles.form} onSubmit={register} method='GET'>
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
                    <p className={styles.label}>Repeat Password </p>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder='Repeat your password '
                        required
                    />
                    <p className={styles.err}>
                        {err}
                    </p>
                    <button
                        type='submit'
                        className={styles.btn}
                    >Create your account</button>
                </form>

            </div>
        </div>
    )
}

export default Register
