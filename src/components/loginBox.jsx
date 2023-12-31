import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import loginData from "../loginData.json";
import { useAlert, withAlert } from "react-alert";

const LoginBox = () => {
  const navigate = useNavigate();
  const Alert = useAlert()

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    if (
      loginData.find(
        (each) => each.email == uname.value && each.password == pass.value
      )
    ) {
      navigate("/home");
    } else {
      Alert.show("Email or Password is wrong!")
    }
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
        <div className={styles.forgot}>
          <Link className={styles.link}>Forgot password?</Link>
        </div>
        <div className={styles.buttonContainer}>
          <input
            type="submit"
            className={styles.signInButton}
            value="Sign In"
          />
        </div>
      </form>
    </>
  );
};

export default withAlert()(LoginBox);
