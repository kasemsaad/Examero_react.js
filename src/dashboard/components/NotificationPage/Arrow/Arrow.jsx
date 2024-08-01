import React, { useState } from "react";
import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangl/SecondTriangle";
import "./Arrow.css";
import { Link, useLocation } from "react-router-dom";

const ArrowNotification = () => {
  const { pathname } = useLocation();

  const [api, setApi] = useState("/activity");

  return (
    <>
      <div style={{ display: "flex" }} className="outArrorws text-white ">
        <Link to={"/dashboard/activity/all"}>
          <FirstTriangle
            stylep={{ fontSize: "16px" }}
            style={{
              backgroundColor:
                pathname === "/dashboard/activity/all" ? "#4941A6" : "",
            }}
            className={""}
            content={"الكل"}
          />
        </Link>

        <div className="secondd">
          <Link to={"/dashboard/activity/mangers"}>
            <SecondTriangle
              stylep={{
                fontSize: "16px",
                color:
                  pathname === "/dashboard/activity/mangers" ? "white" : "",
              }}
              style={{
                backgroundColor:
                  pathname === "/dashboard/activity/mangers" ? "#4941A6" : "",
              }}
              content={"المديرين"}
            />
          </Link>
        </div>
        {/* <div className="third">
          <SecondTriangle content={"المشرفين"} />
        </div> */}
      </div>
    </>
  );
};

export default ArrowNotification;
