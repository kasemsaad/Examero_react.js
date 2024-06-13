// export default PuttingQuestions;
import React, { useState } from "react";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";
import MyButton from "../../../common/Button/Button";
import MyTable from "../../../common/Table/Table";
import "./Quesion.css"; // Import the CSS file
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import SecondTriangle from "../../components/SecondTriangle/SecondTriangle";
import FormForAll from "../../components/PuttingQuesionsPage/FormForClasses/FormForAll";
// import image from "../../assets/icons/PuttingQuestion/octicon_question-16.svg";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import { useNavigate } from "react-router-dom";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";

const PuttingQuestions = () => {
  const [toggled, setToggled] = useState(false);

  let header = {
    name1: "اسم الصف",
    name2: "حالة الصف",
    name3: "الخصائص",
  };

  let body = [
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
  ];

  let icon = { edit: true, trash: true, toggle: true };

  const tog = () => {
    setToggled(!toggled);
  };
  const navigate = useNavigate();

  return (
    <div className="questionContainer min-vh-100 w-100">
      <HeaderOfPuttingQuestions />

      <div className="question" style={{ width: "80%", margin: "auto" }}>
        {/* <div style={{ height: "7rem", display: "flex" }}>
          <FirstTriangle content={"الصفوف"} />
          <SecondTriangle content={"المباحث"} className="iddd" />
          <SecondTriangle content={"الوحدات"} className="to" />
          <SecondTriangle content={"الدروس"} className="arrowfour" />
          <SecondTriangle
            content={"أنواع الأسئلة"}
            className="arrowfive"
            to="/dashboard/q"
          />
        </div> */}
        <PuttingQArrow />
        <div>
          <AddComponent content={"إضافة سؤال"} />
        </div>

        <div className="MyForm col-8">
          <FormForAll />
        </div>

        <div
          className="class-info-button-container d-flex align-items-center"
          style={{ height: "9rem" }}
        >
          <InfoComponent content={"بيانات الصفوف"} />
        </div>

        <div className="MyTable">
          <MyTable header={header} body={body} icons={icon} />
        </div>
      </div>

      <div className="nextButton col-12">
        <div className="col-sm-3 d-flex align-items-center justify-content-center">
          <MyButton
            linkTo={""}
            // onClick={() => {
            //   navigate(1);
            // }}
            content={"التالي"}
            className="MyButton"
          />
        </div>
      </div>
    </div>
  );
};

export default PuttingQuestions;
