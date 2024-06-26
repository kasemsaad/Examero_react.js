import React from "react";
import "./add.css";
const AddComponent = ({ content, addStyle }) => {
  return (
    <>
      <div className={`add-class-button ${addStyle}`}>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
