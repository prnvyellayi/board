import React, { Component, useEffect } from "react";
import styles from "../css/login.module.css";
import SignUpBox from "../components/signUpBox";

const SignUp = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.board}>
          <span className={styles.boardtext}>Board.</span>
        </div>
        <div className={`d-flex justify-content-center ${styles.div2}`}>
          <div className={styles.login}>
            <span className={styles.signInSpan}>Sign Un</span>
            <div className={styles.form}>
              <SignUpBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
