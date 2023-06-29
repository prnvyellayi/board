import React, { Component } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const AccountLogin = () => {};

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
              <button className="signInButton">Sign In</button>
            </div>
          </form>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="main">
        <div className="board">
          <span className="boardtext">Board.</span>
        </div>
        <div className="d-flex justify-content-center div2">
          <div className="login">
            <span
              style={{ fontSize: "36px", fontWeight: "700", textAlign: "left" }}
            >
              Sign In
            </span>
            <span
              style={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              Sign in to your account
            </span>
            <AccountLogin />
            <LoginBox />
            <span
              style={{
                textAlign: "center",
                fontFamily: "Lato",
                color: "#858585",
              }}
            >
              Don't have an account? <Link className="link">Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;