import React, { useState } from "react";
import styles from "../css/homefeatures.module.css";
import BellIcon from "../svg/Bell.js";
import RevenueIcon from "../svg/Vector.js";
import TotalTransactionsIcon from "../svg/total_transactions_icon.js";
import LikesIcon from "../svg/likes_icon.js";
import User2Icon from "../svg/user2_icon.js";
import loginPic from "../svg/ID_icon.jpg";
// import DashboardIcon from "../svg/dashboard_icon.js";
// import ScheduleIcon from "../svg/schedule_icon.js";
// import SettingsIcon from "../svg/setting_icon.js";
// import UserIcon from "../svg/user_icon.js";
// import TransactionIcon from "../svg/transaction_icon.js";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Text,
  PieChart,
  Pie,
} from "recharts";

const HomeFeatures = () => {
  var data = [
    { title: "Total Revenues", value: "$2,129,430", css: [styles.revenue] },
    { title: "Total Transactions", value: "1,520", css: [styles.transactions] },
    { title: "Total Likes", value: "9,721", css: [styles.likes] },
    { title: "Total Users", value: "892", css: [styles.users] },
  ];

  const Icon = (value) => {
    if (value == "Total Revenues") return <RevenueIcon />;
    else if (value == "Total Transactions") return <TotalTransactionsIcon />;
    else if (value == "Total Likes") return <LikesIcon />;
    else if (value == "Total Users") return <User2Icon />;
  };

  const Dashboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <>
        <div className={`d-flex flex-column ${styles.w100}`}>
          <div className={`d-flex flex-row ${styles.w100}`}>
            <div className={`d-flex ${styles.w50} justify-content-start`}>
              <span className={styles.dashboard}>Dashboard</span>
              <select
                value={value}
                onChange={handleChange}
                className={styles.dashboard2}
              >
                <option className={styles.dropoptions} value={0}>
                  Dashboard
                </option>
                <option className={styles.dropoptions} value={1}>
                  Transactions
                </option>
                <option className={styles.dropoptions} value={2}>
                  Schedules
                </option>
                <option className={styles.dropoptions} value={3}>
                  Users
                </option>
                <option className={styles.dropoptions} value={4}>
                  Settings
                </option>
                <option className={styles.dropoptions} value={5}>
                  Help
                </option>
                <option className={styles.dropoptions} value={6}>
                  Contact us
                </option>
              </select>
            </div>
            <div className={`d-flex ${styles.w50} justify-content-end`}>
              <input
                type="search"
                id="form1"
                class={`form-control ${styles.search}`}
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
            <BellIcon />
            <img
              src={loginPic}
              height={30}
              width={30}
              className={styles.loggedInImg}
            />
          </div>
          <div className={`d-flex ${styles.tilesStyle}`}>
            {data.map((each) => (
              <div className={styles.tiles}>
                <div className={each.css}>
                  <span className={`${styles.w100} ${styles.iconspan}`}>
                    {Icon(each.title)}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span1}`}
                  >
                    {each.title}
                  </span>
                  <span
                    className={`${styles.w100} justify-content-left ${styles.span2}`}
                  >
                    {each.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const Chart = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data1 = [
      [
        { name: "Week 0", value: 250 },
        { name: "Week 1", value: 380 },
        { name: "Week 2", value: 250 },
        { name: "Week 3", value: 380 },
        { name: "Week 4", value: 160 },
        { name: "Week 5", value: 380 },
      ],
      [
        { name: "Week 0", value: 160 },
        { name: "Week 1", value: 470 },
        { name: "Week 2", value: 260 },
        { name: "Week 3", value: 310 },
        { name: "Week 4", value: 230 },
        { name: "Week 5", value: 460 },
      ],
      [
        { name: "Week 0", value: 250 },
        { name: "Week 1", value: 380 },
        { name: "Week 2", value: 250 },
        { name: "Week 3", value: 380 },
        { name: "Week 4", value: 160 },
        { name: "Week 5", value: 380 },
      ],
    ];
    const data2 = [
      [
        { name: "Week 0", value: 160 },
        { name: "Week 1", value: 470 },
        { name: "Week 2", value: 260 },
        { name: "Week 3", value: 310 },
        { name: "Week 4", value: 230 },
        { name: "Week 5", value: 460 },
      ],
      [
        { name: "Week 0", value: 250 },
        { name: "Week 1", value: 380 },
        { name: "Week 2", value: 250 },
        { name: "Week 3", value: 380 },
        { name: "Week 4", value: 160 },
        { name: "Week 5", value: 380 },
      ],
      [
        { name: "Week 0", value: 160 },
        { name: "Week 1", value: 470 },
        { name: "Week 2", value: 260 },
        { name: "Week 3", value: 310 },
        { name: "Week 4", value: 230 },
        { name: "Week 5", value: 460 },
      ],
    ];

    const renderLineChart = (
      <ResponsiveContainer
        width="96.5%"
        height={359}
        className={styles.chartbox}
      >
        <LineChart margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
          <Text textAnchor={"title"} />
          <Line
            name="Guest"
            data={data1[value]}
            type="monotone"
            dataKey="value"
            stroke="#9BDD7C"
            strokeWidth={3}
            dot={false}
          />
          <Line
            name="User"
            data={data2[value]}
            type="monotone"
            dataKey="value"
            stroke="#E9A0A0"
            strokeWidth={3}
            dot={false}
          />
          <Legend align="right" verticalAlign="top" iconType="circle" />
          <CartesianGrid vertical={false} stroke="#ccc" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );

    return (
      <>
        <div className={`d-flex flex-column ${styles.abovechart}`}>
          <span className={styles.chartTitle}>Activites</span>
          <select
            value={value}
            onChange={handleChange}
            className={styles.options}
          >
            <option value={0}>Apr-May 2021</option>

            <option value={1}>May-Jun 2021</option>

            <option value={2}>Jun-Jul 2021</option>
          </select>
        </div>
        {renderLineChart}
      </>
    );
  };

  const Schedule = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    const data01 = [
      [
        { name: "Basic Tees", value: 250, fill: "#F6DC7D" },
        { name: "Custom Short Pants", value: 380, fill: "#EE8484" },
        { name: "Super Hoodies", value: 250, fill: "#98D89E" },
      ],
      [
        { name: "Basic Tees", value: 160, fill: "#F6DC7D" },
        { name: "Custom Short Pants", value: 470, fill: "#EE8484" },
        { name: "Super Hoodies", value: 260, fill: "#98D89E" },
      ],
      [
        { name: "Basic Tees", value: 250, fill: "#F6DC7D" },
        { name: "Custom Short Pants", value: 380, fill: "#EE8484" },
        { name: "Super Hoodies", value: 250, fill: "#98D89E" },
      ],
    ];

    const scheduleData = [
      {
        title: "Meeting with suppliers from Kuta Bali",
        time: "14:00 - 25:00",
        location: "at Sunset Road, Kuta Bali",
        css: [styles.scheduletile1],
      },
      {
        title: "Check Operation at Giga Factory 1",
        time: "18:00 - 20:00",
        location: "at Central Jakarta",
        css: [styles.scheduletile2],
      },
    ];

    return (
      <>
        <div className={`d-flex ${styles.scheduleflex} ${styles.w100}`}>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <div className={`d-flex flex-row ${styles.abovepie}`}>
              <span className={`${styles.w50} ${styles.piechartTitle}`}>
                Top Products
              </span>
              <select
                value={value}
                onChange={handleChange}
                className={`${styles.w50} ${styles.optionsPie}`}
              >
                <option value={0}>Apr-May 2021</option>

                <option value={1}>May-Jun 2021</option>

                <option value={2}>Jun-Jul 2021</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={data01[value]}
                  dataKey="value"
                  nameKey="name"
                  cx="60%"
                  cy="60%"
                  outerRadius={60}
                  fill="#fff"
                />
                <Legend
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                  iconType="circle"
                  iconSize={10}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div
            className={`d-flex flex-column ${styles.w50} ${styles.schedule} ${styles.padding30}`}
          >
            <span className={`${styles.w100} ${styles.scheduletext}`}>
              Today's Schedule
            </span>
            {scheduleData.map((each) => (
              <div className={`${styles.w100} ${each.css} d-flex flex-column`}>
                <span className={styles.schedtitle}>{each.title}</span>
                <span className={styles.schedtext}>{each.time}</span>
                <span className={styles.schedtext}>{each.location}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.homefeat}`}
      >
        <Dashboard />
        <Chart />
        <Schedule />
      </div>
    </>
  );
};

export default HomeFeatures;
