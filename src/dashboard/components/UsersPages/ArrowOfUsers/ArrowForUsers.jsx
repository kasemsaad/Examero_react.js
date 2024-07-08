import React from "react";

import FirstTriangle from "../../FirstTriangle/FirstTriangle.jsx";

import SecondTriangle from "../../SecondTriangle/SecondTriangle.jsx";

import { Link, useLocation } from "react-router-dom";

const ArrowForUsers = ({ name1, name2, loc1, loc2 }) => {
  const { pathname } = useLocation();

  return (
    <>
      <div style={{ display: "flex" }} className="outArrorws text-white ">
        <Link to={loc1}>
          <FirstTriangle
            stylep={{ fontSize: "14px" }}
            style={{
              fontSize: "14px",
              backgroundColor: pathname === loc1 ? "#4941A6" : "#1D195D",

            }}
            content={name1}
          />
        </Link>
        <div className="secondd">
          <Link to={loc2}>
            <SecondTriangle
              stylep={{
                fontSize: "14px",
                color: pathname === loc2 ? "white" : "",
              }}
              style={{
                fontSize: "12px",
                backgroundColor: pathname === loc2 ? "#4941A6" : "",
              }}
              content={name2}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArrowForUsers;
