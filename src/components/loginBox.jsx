import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/login.module.css'

const LoginBox = () => {
    return (
        <>
            <div className={styles.form}>
                <form style={{ margin: "20px" }}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Email address </label>
                        <input type="uname" name="uname" required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className={styles.forgot}>
                        <Link className={styles.link}>Forgot password?</Link>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.signInButton}><Link style={{color: "white", textDecoration: "none"}} to="/home">Sign In</Link></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginBox