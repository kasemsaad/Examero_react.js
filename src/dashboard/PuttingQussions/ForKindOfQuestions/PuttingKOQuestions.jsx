import React, { useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import MyTable from "../../../common/Table/Table";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import FormFPkindOfQ from "../../components/PuttingQuesionsPage/FormForKindOfQ/FormFPKindOfQ";
import "./ForKindOfQuestions.css";
const PuttingKindOfQ = () => {
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
  let other = { toggle: true };

  let icon = { edit: true, trash: true, toggle: true };
  return (
    <>
      <div className=" min-vh-100 lessons-Container">
        <HeaderOfPuttingQuestions />
        <div
          className="lessons-quessions"
          style={{ width: "90%", margin: "auto" }}
        >
          <PuttingQArrow />
          <div>
            <AddComponent addStyle={"add-lesson"} content={"إضافة نوع سؤال"} />
          </div>
          <FormFPkindOfQ />
          <div
            className=" d-flex align-items-center my-info-kind"
            style={{ height: "9rem" }}
          >
            <div className="col-12 d-flex align-items-center  ">
              <div className="my-ifo-kind">
                <div>
                  <p>بيانات الأسئلة</p>
                </div>
              </div>
              <div className="class-info-divider"></div>
            </div>
          </div>
          <div className="MyTable">
            <MyTable header={header} body={body} icons={icon} />
          </div>
        </div>
        <FooterFPuttingQ next={"التالي"} prev={"السابق"} />
      </div>
    </>
  );
};

export default PuttingKindOfQ;
