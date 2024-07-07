import React from "react";

import FirstTriangle from "../../FirstTriangle/FirstTriangle.jsx";

import SecondTriangle from "../../SecondTriangle/SecondTriangle.jsx";

import { Link, useLocation } from "react-router-dom";

const ArrowForUsers = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div style={{ display: "flex" }} className="outArrorws text-white ">
        <Link to="/dashboard/mangers">
          <FirstTriangle
            stylep={{ fontSize: "12px" }}
            style={{
              fontSize: "14px",
              backgroundColor:
                pathname === "/dashboard/mangers" ? "#4941A6" : "#1D195D",
            }}
            content={"مديرو الموقع"}
          />
        </Link>
        <div className="secondd">
          <Link to={"/dashboard/supervisors"}>
            <SecondTriangle
              stylep={{
                fontSize: "14px",
                color: pathname === "/dashboard/supervisors" ? "white" : "",
              }}
              style={{
                fontSize: "12px",
                backgroundColor:
                  pathname === "/dashboard/supervisors" ? "#4941A6" : "",
              }}
              content={"المشرفين"}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArrowForUsers;
