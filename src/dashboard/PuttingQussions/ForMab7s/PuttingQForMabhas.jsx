import React, { useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
// import FormForAll from "../../components/PuttingQuesionsPage/FormForAll";
import MyTable from "../../../common/Table/Table";
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

  let icon = { edit: true, trash: true, toggle: true };

  return (
    <>
      <div className=" min-vh-100 mab7asContainer">
        <HeaderOfPuttingQuestions />
        <div className="question" style={{ width: "80%", margin: "auto" }}>
          <PuttingQArrow />
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
          <FooterFPuttingQ next={"التالي"} prev={"السابق"} />
        </div>
      </div>
    </>
  );
};

export default PuttingQForMab7as;
