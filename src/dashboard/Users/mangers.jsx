import React from "react";
import HeaderNotificaion from "../components/NotificationPage/Header/Header";
import FirstTriangle from "../components/FirstTriangle/FirstTriangle";
import SecondTriangle from "../components/SecondTriangle/SecondTriangle";
import MyButton from "../../common/Button/Button";
import MyTable from "../../common/Table/Table";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import "./manger.css";
const Mangers = () => {
  let header = {
    name1: "اسم المدير",
    name2: "البريد الإلكتروني",
    name3: "رقم الهاتف",
    name4: "الخصائص",

    name5: "ملاحظات",
  };

  let body = [
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
    {
      id: 1,
      name1: "اسم الصف",
      email: "mrady8085@gmail.coom",
      phone: "01201562254",
    },
  ];
  const icon = { eye: true, edit: true, trash: true, butt: true };

  return (
    <>
      <div className="container-manger min-vh-100 w-100">
        <HeaderNotificaion content={"مديرو الموقع"} />

        <div style={{ width: "85%", margin: "auto" }} className="  ">
          <div style={{ display: "flex" }} className="outArrorws text-white ">
            <FirstTriangle
              style={{ fontSize: "16px" }}
              content={"مديرو الموقع"}
            />
            <div className="secondd">
              <SecondTriangle content={"المشرفين"} />
            </div>
          </div>

          <div
            className="add-manger "
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{ position: "relative" }}
              data-mdb-input-init
              className="form-outline"
            >
              <input
                className="form-control ps-5"
                type="text"
                style={{
                  backgroundColor: "#0E0A43",
                  color: "#FFFFFF",
                  width: "195px",
                  height: "36px",
                  borderRadius: "9.47px",
                  border: "#4941A6 solid 1px",
                }}
                placeholder="            جدول البحث هنا"
              />
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "9.47px",
                  backgroundColor: "#4941A6",
                  color: "white",
                }}
              >
                <i className="fa-solid fa-magnifying-glass "></i>
              </div>
            </div>
            <div style={{ position: "relative" }} className="add-butt">
              <MyButton
                style={{
                  backgroundColor: " #C01F59",
                  width: "115px",
                  border: "none",
                  height: "36px",
                  color: "white",
                  borderRadius: "30px",
                  padding: "3px, 15px, 3px, 0px",
                }}
                className={"but-manger"}
                content={"إضافة مدير"}
              />
              <div
                style={{
                  borderRadius: "100%",
                  backgroundColor: "white",
                  color: "red",
                  width: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  height: "15px",
                  position: "absolute",
                  top: "11px",
                  right: "17px",
                }}
              >
                +
              </div>
            </div>
          </div>

          <div style={{ width: "100%", overflow: "auto" }}>
            <MyTable header={header} body={body} icons={icon} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              height: " 74px",
              alignItems: "center",
            }}
            className="footer-manger"
          >
            <div
              style={{
                backgroundColor: "#120E4D",
                height: "26px",
                width: "26px",
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "0" }}>&gt;</p>
            </div>
            <div
              style={{
                marginLeft: "5px",
                backgroundColor: "#120E4D",
                height: "26px",
                width: "26px",
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ margin: "0" }}>&lt;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mangers;
