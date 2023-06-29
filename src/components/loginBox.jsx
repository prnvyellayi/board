import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css'

const LoginBox = () => {
    return (
        <>
            <div className="form">
                <form style={{ margin: "20px" }}>
                    <div className="input-container">
                        <label className="label">Email address </label>
                        <input type="uname" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label className="label">Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div style={{ textAlign: "left", marginBottom: "20px" }}>
                        <Link className="link">Forgot password?</Link>
                    </div>
                    <div className="button-container">
                        <button className="signInButton"><Link style={{color: "white", textDecoration: "none"}} to="/home">Sign In</Link></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginBox