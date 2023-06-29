import React from "react";
import "../css/homefeatures.css";
import BellIcon from "../svg/Bell";

const HomeFeatures = () => {
    
  var data = [{}]

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

          </div>
        </div>
      </>
    );
  };

  const Chart = () => {
    return (
      <>
        <div></div>
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
