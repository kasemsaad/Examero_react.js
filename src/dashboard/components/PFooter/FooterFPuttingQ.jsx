import React from "react";
import MyButton from "../../../common/Button/Button";
import "./FooterForPuttingQ.css";
import { useLocation, useNavigate } from "react-router-dom";
const FooterFPuttingQ = () => {
  const pages = [
    "/dashboard/putting/questions/levels",
    "putting/questions/units",
    "putting/questions/subjects",
    "putting/questions/lessons",
    "putting/questions/kinds",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname + "my path");
  const currentIndex = pages.indexOf(pathname);

  const handelNext = () => {
    console.log(currentIndex + "is her");
    console.log(pages.length + "pages");
    navigate("/dashboard/putting/questions/levels", { replace: true });

    if (currentIndex <= 0 && currentIndex < pages.length - 1) {
      navigate("units");
      navigate("/dashboard/putting/questions/levels", { replace: true });
      // navigate(pages[currentIndex + 1]);
      console.log();
      console.log(currentIndex);
      console.log(pages[currentIndex + 1] + "  iam her in if");
    }
  };

  const handelPrev = () => {
    console.log("dsfdfs");
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
      console.log("read");
    }
  };

  return (
    <>
      <div className="nextButton col-12">
        <div className="col-sm-2 d-flex align-items-center justify-content-center">
          <MyButton
            onClick={handelNext}
            content={"التالي"}
            className="MyButton"
          />
        </div>
        <div
          style={{}}
          className=" col-sm-2 d-flex align-items-center justify-content-center"
        >
          <MyButton
            onClick={handelPrev}
            // linkTo={"/dashboard/mab"}
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
