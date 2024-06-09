import React from "react";
import FirstTriangle from "../FirstTriangle/FirstTriangle";
import "./Arrow.css";
import SecondTriangle from "../SecondTriangle/SecondTriangle";
const MyArrow = () => {
  return (
    <>
      <div
        style={{ height: "7rem", display: "flex", flexWrap: "wrap" }}
        className=""
      >
        <FirstTriangle content={"الصفوف"} style={{ width: "" }} />

        <SecondTriangle
          style={{
            border: "none",
            width: "",
          }}
          className={"iddd"}
          content={"المباحث"}
        />
        <SecondTriangle
          style={{
            border: "none",
            width: "",
          }}
          className={"to"}
          content={"الوحدات"}
        />
        <SecondTriangle
          style={{
            border: "none",
            width: "",
          }}
          className={"arrowfour"}
          content={"الدروس"}
        />
        <SecondTriangle
          style={{
            border: "none",
            width: "",
          }}
          className={"arrowfive "}
          content={"أنواع الأسئلة"}
        />
      </div>
    </>
  );
};

export default MyArrow;
