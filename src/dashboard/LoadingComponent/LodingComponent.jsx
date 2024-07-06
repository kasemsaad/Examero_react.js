import React from "react";
const LadingComponent = () => {
  return (
    <>
      <div className="text-center ">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="m-auto">loading</span>
      </div>
    </>
  );
};

export default LadingComponent;
