import React from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";
import SecondTriangle from "../../components/SecondTriangle/SecondTriangle";
// import FormForAll from "../../components/PuttingQuesionsPage/FormForAll";
import MyTable from "../../../common/Table/Table";
import MyButton from "../../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import FormForMaba7s from "../../components/PuttingQuesionsPage/FormForMaba7s/FormForMaba7s ";
import "./PuttingQForMahbas.css";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
const PuttingQForMab7as = () => {
  let header = {
    name1: "اسم المبحث",
    name2: "الصفوف التي يدرس فيها",
    name3: "حالة المبحث",
    name4: "الخصائص",
  };

  let body = [
    {
      id: 2,
      name1: "اسم الصف",
      name2: "اسم الصف",
    },
    {
      id: 3,
      name1: "اسم الصف",
      name3: "اسم الصف",
    },
    {
      id: 4,
      name1: "اسم الصف",
      name4: "اسم الصف",
    },
    {
      id: 6,
      name1: "اسم الصف",
      name4: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
      name5: "اسم الصف",
    },
  ];
  const navegate = useNavigate();
  const handelOnclick = () => {
    navegate("/dashboard/q");
  };
  let icon = { edit: true, trash: true, toggle: true };
  return (
    <>
      <div className=" min-vh-100 mab7asContainer">
        <HeaderOfPuttingQuestions />
        <div className="question" style={{ width: "80%", margin: "auto" }}>
          <PuttingQArrow onClick={handelOnclick} />
          <div>
            <AddComponent content={"اضافة مبحث"} />
          </div>
          <FormForMaba7s />
          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <InfoComponent content={"بيانات المبحث"} />
          </div>
          <div className="MyTable">
            <MyTable header={header} body={body} icons={icon} />
          </div>
        </div>
        <div className="nextButton col-12">
          <div className="col-sm-2 d-flex align-items-center justify-content-center">
            <MyButton
              // onClick={handleNext}
              content={"التالي"}
              className="MyButton"
              linkTo={"/dashboard/putting/questions/units"}
            />
          </div>
          <div className="col-sm-2 d-flex align-items-center justify-content-center">
            <MyButton
              // onClick={handlePrev}
              style={{ backgroundColor: "#CDCDCD", color: "black" }}
              content={"السابق"}
              className="MyButton"
              linkTo={"/dashboard/putting/questions/levels"}
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default PuttingQForMab7as;
