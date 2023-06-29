import React, { Component } from "react";
import "../css/homepage.css";
import DashboardIcon from "../svg/dashboard_icon.js";
import ScheduleIcon from "../svg/schedule_icon.js";
import SettingsIcon from "../svg/setting_icon.js";
import TransactionIcon from "../svg/transaction_icon.js";
import UserIcon from "../svg/user_icon.js";
import RevenueIcon from "../svg/Vector.js";
import HomeFeatures from "./homeFeatures";

const Homepage = () => {
  return (
    <>
      <div className="d-flex flex-row home">
        <div className="d-flex flex-column boardhome">
          <div className="d-flex flex-column" style={{ height: "70%" }}>
            <span className="boardhead">Board.</span>
            <span className="boardlist" style={{ fontWeight: "700" }}>
              <DashboardIcon />
              Dashboard
            </span>
            <span className="boardlist">
              <TransactionIcon /> Transactions
            </span>
            <span className="boardlist"><ScheduleIcon /> Schedules</span>
            <span className="boardlist"><UserIcon /> Users</span>
            <span className="boardlist"><SettingsIcon /> Settings</span>
          </div>
          <div
            className="d-flex flex-column"
            style={{ height: "30%", justifyContent: "flex-end" }}
          >
            <span className="boardbottom">Help</span>
            <span className="boardbottom">Contact us</span>
          </div>
        </div>
        <HomeFeatures />
      </div>
    </>
  );
};

export default Homepage;
