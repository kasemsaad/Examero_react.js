import React from "react";
import "./FooterForPuttingQ.css";
import { useLocation, useNavigate } from "react-router-dom";

const FooterFPuttingQ = ({ next, prev }) => {
  const pages = [
    "/dashboard/putting/questions/levels=1",
    "/dashboard/putting/questions/subjects=2",
    "/dashboard/putting/questions/units=3",
    "/dashboard/putting/questions/lessons=4",
    "/dashboard/putting/questions/kinds=5",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const currentIndex = pages.indexOf(pathname);

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < pages.length - 1) {
      const nextPath = pages[currentIndex + 1];

      navigate(nextPath);
    } else {
      console.log("error not found 404.");
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevPath = pages[currentIndex - 1];
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
