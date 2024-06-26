import React from "react";
import "./info.css";
const InfoComponent = ({ content }) => {
  return (
    <>
      <div className="col-12 d-flex align-items-center">
        <div className="class-info-button-co">
          <div>
            <p>{content}</p>
          </div>
        </div>
        <div className="class-info-divider"></div>
      </div>
    </>
  );
};

export default InfoComponent;
