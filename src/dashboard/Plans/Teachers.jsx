import React from "react";
import image from "../../assets/icons/plans of teacher/fluent_payment-32-regular.svg";
import FirstTriangle from "../components/FirstTriangle/FirstTriangle";
import SecondTriangle from "../components/SecondTriangle/SecondTriangle";
import MyButton from "../../common/Button/Button";
import MyTable from "../../common/Table/Table";
const Teacher = () => {
  let header = {
    name1: "اسم الباقه",
    name2: "السعر",
    nam3: "الامتحنات",
    name4: "الخصائص",
  };

  let body = [
    {
      id: 1,
      name1: "اسم الباقه",
      name2: "السعر",
      nam3: "الامتحنات",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
    },
    {
      id: 1,
      name1: "اسم المستخدم",
      name2: "كلمة المرور",
      nam3: "رقم الهاتف",
    },
  ];
  const icon = { trash: true, eye: true };
  return (
    <>
      <div className="container-teacher-d min-vh-100 w-100">
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
              width: "240px",
              justifyContent: "center",
            }}
          >
            <div className=" mx-4 ">
              <img className="  " src={image} alt="" />
            </div>
            <div>
              <div>
                <h4> باقات الاشتراكات</h4>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "85%", margin: "auto" }}>
          <div style={{ display: "flex" }} className="Arrows-teacher ">
            <div>
              <FirstTriangle content={"المستلمة"} />
            </div>
            <div className=" " style={{ transform: "translate(25px, -3px)" }}>
              <SecondTriangle content={"المنتهية"} />
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
              style={{
                width: "fit-content",
                height: "31px",
                borderRadius: "30px",
                backgroundColor: "#FF7380",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "10px", padding: "4px" }}>
                بيانات باقات المعلمين
              </p>
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
          <div>
            <MyTable header={header} body={body} icons={icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;
