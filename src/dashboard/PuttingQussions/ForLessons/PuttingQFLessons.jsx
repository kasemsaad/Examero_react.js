import React from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import MyTable from "../../../common/Table/Table";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import "./ForLessons.css";
import FormFPLessons from "../../components/PuttingQuesionsPage/FormFPLessons/FormFPLessons";
// import MyButton from "../../../common/Button/Button";
const PuttingQFLessons = () => {
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
      <div className=" min-vh-100 lessons-Container">
        <HeaderOfPuttingQuestions />
        <div
          className="lessons-quessions"
          style={{ width: "90%", margin: "auto" }}
        >
          <PuttingQArrow />
          <div>
            <AddComponent addStyle={"add-lesson"} content={"إضافة درس"} />
          </div>
          <FormFPLessons />
          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <InfoComponent content={"بيانات الدروس"} />
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

export default PuttingQFLessons;
