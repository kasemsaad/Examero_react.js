import React, { useState } from "react";
import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangle/SecondTriangle";
import "./Arrow.css";

const ArrowNotification = ({ getApi }) => {
  const [api, setApi] = useState("/activity");

  return (
    <>
      <div style={{ display: "flex" }} className="outArrorws text-white ">
        <FirstTriangle className={""} content={"الكل"} />
        <div className="secondd">
          <SecondTriangle content={"المديرين"} />
        </div>
        {/* <div className="third">
          <SecondTriangle content={"المشرفين"} />
        </div> */}
      </div>
    </>
  );
};

export default ArrowNotification;
