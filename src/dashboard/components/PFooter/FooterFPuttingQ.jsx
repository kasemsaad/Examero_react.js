import React from "react";
import "./FooterForPuttingQ.css";
import { useLocation, useNavigate } from "react-router-dom";

const FooterFPuttingQ = ({ next, prev }) => {
  const pages = [
    "/dashboard/putting/questions/levels",
    "/dashboard/putting/questions/subjects",
    "/dashboard/putting/questions/units",
    "/dashboard/putting/questions/lessons",
    "/dashboard/putting/questions/kinds",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const co = 0;
  const currentIndex = pages.indexOf(pathname);

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < pages.length - 1) {
      const nextPath = pages[currentIndex + 1];
      console.log(`Navigating to: ${nextPath}`);
      navigate(nextPath);
    } else {
      console.log("error not found 404.");
    }
  };

  const handlePrev = () => {
    console.log(`Current Index: ${currentIndex}`);

    if (currentIndex > 0) {
      const prevPath = pages[currentIndex - 1];
      console.log(`Navigating to: ${prevPath}`);
      navigate(prevPath);
    } else {
      console.log("No previous page to navigate to.");
    }
  };

  return (
    <div className="nextButton col-12">
      <div className="col-sm-2 d-flex align-items-center justify-content-center">
        <button onClick={handleNext} className="MyButton">
          {next}
        </button>
      </div>
      <div className="col-sm-2 d-flex align-items-center justify-content-center">
        <button
          onClick={handlePrev}
          style={{ backgroundColor: "#CDCDCD", color: "black" }}
          className="MyButton"
        >
          {prev}
        </button>
      </div>
    </div>
  );
};

export default FooterFPuttingQ;
