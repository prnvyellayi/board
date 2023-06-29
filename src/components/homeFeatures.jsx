import React, { useState } from "react";
import "../css/homefeatures.css";
import BellIcon from "../svg/Bell";
import RevenueIcon from "../svg/Vector.js";
import TotalTransactionsIcon from "../svg/total_transactions_icon.js";
import LikesIcon from "../svg/likes_icon.js";
import User2Icon from "../svg/user2_icon.js";
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
} from "recharts";

const HomeFeatures = () => {
  var data = [
    { title: "Total Revenues", value: "$2,129,430", css: "revenue" },
    { title: "Total Transactions", value: "1,520", css: "transactions" },
    { title: "Total Likes", value: "9,721", css: "likes" },
    { title: "Total Users", value: "892", css: "users" },
  ];

  const Icon = (value) => {
    if (value == "revenue") return <RevenueIcon />;
    else if (value == "transactions") return <TotalTransactionsIcon />;
    else if (value == "likes") return <LikesIcon />;
    else if (value == "users") return <User2Icon />;
  };

  const Dashboard = () => {
    return (
      <>
        <div className="d-flex flex-column w100">
          <div className="d-flex flex-row w100">
            <div
              className="d-flex w50"
              style={{ justifyContent: "flex-start" }}
            >
              <span className="dashboard">Dashboard</span>
            </div>
            <div className="d-flex w50" style={{ justifyContent: "flex-end" }}>
              <input
                type="search"
                id="form1"
                class="form-control search"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
            <BellIcon />
          </div>
          <div className="d-flex flex-row">
            {data.map((each) => (
              <div className="tiles">
                <div className={`${each.css}`}>
                  <span className="w100 iconspan">{Icon(each.css)}</span>
                  <span className="w100 justify-content-left span1">
                    {each.title}
                  </span>
                  <span className="w100 justify-content-left span2">
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
      <ResponsiveContainer width="96.5%" height={359} className="chartbox">
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
          <Legend align="right" verticalAlign="top" type="circle" />
          <CartesianGrid vertical={false} stroke="#ccc" />
          <XAxis dataKey="name" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    );
    
    return (
      <>
        <div className="d-flex flex-column abovechart">
          <span className="chartTitle">Activites</span>
          <select value={value} onChange={handleChange} className="options">
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
    return (
      <>
        <div></div>
      </>
    );
  };

  return (
    <>
      <div className="d-flex flex-column align-items-center homefeat">
        <Dashboard />
        <Chart />
        <Schedule />
      </div>
    </>
  );
};

export default HomeFeatures;
