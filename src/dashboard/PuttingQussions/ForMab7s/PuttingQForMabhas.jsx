import React from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";
import SecondTriangle from "../../components/SecondTriangle/SecondTriangle";
// import FormForAll from "../../components/PuttingQuesionsPage/FormForAll";
import MyTable from "../../../common/Table/Table";
import MyButton from "../../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import FormForMaba7s from "../../components/PuttingQuesionsPage/FormForMbhas/FormForMaba7s ";
import "./PuttingQForMahbas.css";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
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
          <div style={{ height: "7rem", display: "flex" }}>
            <FirstTriangle onClick={handelOnclick} content={"الصفوف"} />
            <SecondTriangle content={"المباحث"} className="iddd" />
            <SecondTriangle content={"الوحدات"} className="to" />
            <SecondTriangle content={"الدروس"} className="arrowfour" />
            <SecondTriangle content={"أنواع الأسئلة"} className="arrowfive" />
          </div>

          <div>
            <div className="add-class-button">
              <div>
                <p>اضافة مبحث</p>
              </div>
            </div>
          </div>

          <FormForMaba7s />

          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <div className="col-12 d-flex align-items-center">
              <div className="class-info-button">
                <div className="info-ma">
                  <p>بيانات المبحث</p>
                </div>
              </div>
              <div className="class-info-divider"></div>
            </div>
          </div>

          <div className="MyTable">
            <MyTable header={header} body={body} icons={icon} />
          </div>
        </div>
        <FooterFPuttingQ />
      </div>
    </>
  );
};

export default PuttingQForMab7as;
