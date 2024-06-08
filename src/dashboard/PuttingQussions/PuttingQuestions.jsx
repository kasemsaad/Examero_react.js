import React from "react";
import FirstTriangle from "../components/FirstTriangle/FirstTriangle";
import MyButton from "../../common/Button/Button";
import MyTable from "../../common/Table/Table";
import "./Quesion.css";
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import SecondTriangle from "../components/SecondTriangle/SecondTriangle";
import FormForAll from "../components/PuttingQuesionsPage/FormForAll";
import image from "../../assets/icons/PuttingQuestion/octicon_question-16.svg";
const PuttingQuestions = () => {
  let header = {
    name1: "اسم الصف",
    name2: "حالة الصف",
    name3: "الخصائص",
  };

  let body = [
    {
      id: 1,
      name1: "اسم الصف",
      name2: "اسم الصف",
    },
    {
      id: 1,

      name1: "اسم الصف",
      name2: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
      name2: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
      name2: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
      name2: "اسم الصف",
    },
  ];
  let icon = { edit: true, trash: true };

  return (
    <>
      <div
        style={{ backgroundColor: "#0E0A43" }}
        className="questionContainer min-vh-100 w-100 "
      >
        <div style={{ height: "100px" }} className="col-12 ">
          <div
            className=" imag-question col-5 h-100 d-flex  align-items-center "
            style={{}}
          >
            <div className=" inner-image-question d-flex col-9 justify-content-center align-items-center ">
              <img
                className=" "
                style={{
                  backgroundColor: "",
                  width: "20px",

                  marginLeft: "5px",
                }}
                src={image}
                alt=""
              />

              <p
                style={{
                  fontWeight: "700",
                  fontSize: "24px",
                }}
              >
                وضع الأسئله
              </p>
            </div>
          </div>
        </div>

        <div style={{ width: "80%", margin: "auto" }} className="question  ">
          <div style={{ height: "7rem", display: "flex" }} className="">
            <FirstTriangle content={"الصفوف"} style={{ width: "" }} />

            <SecondTriangle
              style={{
                border: "none",
                width: "",
              }}
              className={"iddd"}
              content={"المباحث"}
            />
            <SecondTriangle
              style={{
                border: "none",
                width: "",
              }}
              className={"to"}
              content={"الوحدات"}
            />
            <SecondTriangle
              style={{
                border: "none",
                width: "",
              }}
              className={"arrowfour"}
              content={"الدروس"}
            />
            <SecondTriangle
              style={{
                border: "none",
                width: "",
              }}
              className={"arrowfive "}
              content={"أنواع الأسئلة"}
            />
          </div>
          <div>
            <div
              style={{
                height: "32.63px",
                backgroundColor: "#FF7380",
                borderRadius: "32.63px",
                display: "flex",
                alignItems: "center",
                color: "black",
                fontSize: "1rem",
                fontWeight: "600",
                width: "12rem",
              }}
              //   height: "32.63px",
              //       backgroundColor: "#FF7380",

              //       borderRadius: "32.63px",
              //       alignItems: "center",
              //       color: "black",
              //       fontSize: "1rem",
              //       fontWeight: "600",
              //       width: "12rem",
              className=" my-3  "
            >
              <div
                style={{ height: "100%" }}
                className="col-12 d-flex justify-content-center align-items-center"
              >
                <p style={{ margin: "0" }}>اضافة صف</p>
              </div>
            </div>

            {/* form */}
            <div style={{ width: "100%" }}> </div>
          </div>

          <div
            style={{
              height: "70px",
              borderRadius: "16.28px",
              backgroundColor: "#1D195D",
            }}
            className="MyForm col-8"
          >
            <FormForAll />
          </div>

          <div
            className=" d-flex align-items-center "
            style={{ height: "9rem" }}
          >
            <div
              className="col-12 "
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  height: "32.63px",
                  backgroundColor: "#FF7380",

                  borderRadius: "32.63px",
                  alignItems: "center",
                  color: "black",
                  fontSize: "1rem",
                  fontWeight: "600",
                  width: "12rem",
                }}
                className="info-button "
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <p
                    className="info "
                    style={{ transform: "translate(-11px,4px)", margin: "0" }}
                  >
                    بيانات الصفوف
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#FF919C",
                }}
              ></div>
            </div>
          </div>

          <div className="MyTable">
            <MyTable header={header} body={body} icons={icon} />
          </div>
        </div>
        <div
          style={{
            height: "9rem",
            display: "flex",
            alignItems: "center",
            flex: "row",
          }}
          className="nextButton col-12 flex-row-reverse"
        >
          <div className="col-sm-3  d-flex align-items-center justify-content-center">
            <MyButton
              content={"التالي"}
              className={"MyButton"}
              style={{
                backgroundColor: "#C01F59",
                width: "7rem",
                height: "auto",
                padding: "5px",
                border: "none",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PuttingQuestions;
