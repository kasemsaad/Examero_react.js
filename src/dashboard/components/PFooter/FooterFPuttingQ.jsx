import React from "react";
import MyButton from "../../../common/Button/Button";
import "./FooterForPuttingQ.css";
import { useLocation, useNavigate } from "react-router-dom";

const FooterFPuttingQ = () => {
  const pages = [
    "/dashboard/putting/questions/levels",
    "/dashboard/putting/questions/units",
    "/dashboard/putting/questions/subjects",
    "/dashboard/putting/questions/lessons",
    "/dashboard/putting/questions/kinds",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const currentIndex = pages.indexOf(pathname);

  const handleNext = () => {
    console.log(`Current Index: ${currentIndex}`);
    console.log(`Total Pages: ${pages.length}`);

    if (currentIndex >= 0 && currentIndex < pages.length - 1) {
      const nextPath = pages[currentIndex + 1];
      console.log(`Navigating to: ${nextPath}`);
      window.open(nextPath);
    } else {
      console.log("No next page to navigate to.");
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
        <MyButton
          onClick={handleNext}
          content={"التالي"}
          className="MyButton"
        />
      </div>
      <div className="col-sm-2 d-flex align-items-center justify-content-center">
        <MyButton
          onClick={handlePrev}
          style={{ backgroundColor: "#CDCDCD", color: "black" }}
          content={"السابق"}
          className="MyButton"
        />
      </div>
    </div>
  );
};

export default FooterFPuttingQ;
