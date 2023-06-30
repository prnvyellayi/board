import React, { Component } from "react";
import styles from "../css/homepage.module.css";
import DashboardIcon from "../svg/dashboard_icon.js";
import ScheduleIcon from "../svg/schedule_icon.js";
import SettingsIcon from "../svg/setting_icon.js";
import UserIcon from "../svg/user_icon.js";
import TransactionIcon from "../svg/transaction_icon.js";
import HomeFeatures from "../components/homeFeatures";

const Homepage = () => {
  const Board = () => {
    return (
      <>
        <div className={`d-flex flex-column ${styles.boardhome}`}>
          <div
            className={`d-flex flex-column ${styles.w100} ${styles.h70} ${styles.hidden}`}
          >
            <span className={styles.boardhead}>Board.</span>
            <div className={`d-flex flex-column`}>
              <span className={`${styles.boardlist} ${styles.fw700}`}>
                <DashboardIcon />
                Dashboard
              </span>
              <span className={styles.boardlist}>
                <TransactionIcon /> Transactions
              </span>
              <span className={styles.boardlist}>
                <ScheduleIcon /> Schedules
              </span>
              <span className={styles.boardlist}>
                <UserIcon /> Users
              </span>
              <span className={styles.boardlist}>
                <SettingsIcon /> Settings
              </span>
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-end ${styles.h30} ${styles.hidden}`}
          >
            <span className={styles.boardbottom}>Help</span>
            <span className={styles.boardbottom}>Contact us</span>
          </div>
          <div className={`${styles.w100} ${styles.h70} ${styles.mobilehead}`}>
            <span className={styles.boardhead}>Board.</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={`d-flex ${styles.home}`}>
        <Board />
        <HomeFeatures />
      </div>
    </>
  );
};

export default Homepage;
