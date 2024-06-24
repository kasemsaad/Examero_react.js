import React from "react";
import EimsImage from "../../../assets/icons/Eims/lucide_file-input.svg";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";
import SecondTriangle from "../../components/SecondTriangle/SecondTriangle";
import MyTable from "../../../common/Table/Table";
// import { useLocation } from "react-router-dom";
import "./Received.css";
const ReceivedEmis = () => {
  let header = {
    name1: "اسم المستخدم",
    name2: "كلمة المرور",
    name7: "رقم الهاتف",
    name8: "اسم الصف",
    name3: "اسم المبحث",
    name4: "صورة دفتر العلامات",
    name5: "تم الاستلام",
    name6: "تم الانتهاء",
  };

  let body = [
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
      name4: "اسم الصف",
      name5: "اسم المبحث",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
      name4: "اسم الصف",
      name5: "اسم المبحث",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
      name4: "اسم الصف",
      name5: "اسم المبحث",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
      name4: "اسم الصف",
      name5: "اسم المبحث",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
      name4: "اسم الصف",
      name5: "اسم المبحث",
    },
  ];
  const other = { checkbox: true, image: true, imag: true };
  // const { pathname } = useLocation;
  //   let icon = {};
  return (
    <>
      <div className="container-emis min-vh-100 w-100">
        <div
          className="header-Eims"
          style={{
            display: "flex",

            height: "100px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            className="=eims-ico"
            style={{
              display: "flex",
              alignItems: "center",
              width: "300px",
              justifyContent: "center",
            }}
          >
            <div className=" mx-2 ">
              <img
                style={{ marginLeft: "5px" }}
                className=" "
                src={EimsImage}
                alt=""
              />
            </div>
            <div>
              <div>
                <h4> إدخال علامات Open Emis</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="conain-emis" style={{ width: "88%", margin: "auto" }}>
          <div style={{ display: "flex" }} className="Arrows-emis ">
            <div>
              <FirstTriangle content={"المستلمة"} />
            </div>
            <div className=" " style={{ transform: "translate(25px, -3px)" }}>
              <SecondTriangle content={"المنتهية"} />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ height: "60px" }}>
              <div
                style={{
                  width: "fit-content",
                  height: "31px",
                  borderRadius: "30px",
                  backgroundColor: "#FF7380",
                }}
              >
                <p
                  style={{
                    margin: "10px",
                    padding: "6px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  تحميل بيانات دفتر العلامات
                </p>
              </div>
            </div>
            <div style={{ overflow: "auto" }}>
              <MyTable header={header} body={body} other={other} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivedEmis;
