import React, { Component, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import loginData from "../loginData.json";

const SignUpBox = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    loginData.push({email: uname.value, password: pass.value})
    navigate("/");
  };
  
  return (
    <>
      <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email address </label>
          <input type="uname" name="uname" required />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            className={styles.signInButton}
            value="Sign Up"
          />
        </div>
      </form>
    </>
  );
};

export default SignUpBox;
