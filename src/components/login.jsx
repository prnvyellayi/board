import React, { Component } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { useSession, signIn, signOut } from "next-auth/react"
import LoginBox from "./loginBox";
import AccountLogin from "./accountLogin";

const Login = () => {
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
