import React from "react";
import MyButton from "../../../common/Button/Button";
import "./FooterForPuttingQ.css";
const FooterFPuttingQ = () => {
  return (
    <>
      <div className="nextButton col-12">
        <div className="col-sm-2 d-flex align-items-center justify-content-center">
          <MyButton content={"التالي"} className="MyButton" />
        </div>
        <div
          style={{}}
          className=" col-sm-2 d-flex align-items-center justify-content-center"
        >
          <MyButton
            style={{ backgroundColor: "#CDCDCD", color: "black" }}
            content={"السابق"}
            className="MyButton"
          />
        </div>
      </div>
    </>
  );
};

export default FooterFPuttingQ;
