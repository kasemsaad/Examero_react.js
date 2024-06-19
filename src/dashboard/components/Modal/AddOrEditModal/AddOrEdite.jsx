import React from "react";
import "./add.css";
import { useState } from "react";
const AddOrEditModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handelPassword = (e) => {
    setShowPassword((prevState) => !prevState);
  };
  const handelOnChangeData = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(userData);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <>
      <div
        className="modal fade "
        id="exampleModal"
        name="password"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog rady  " role="document">
          <div
            className="modal-content"
            style={{ backgroundColor: "#1D195D", borderRadius: "13.97px" }}
          >
            <div
              style={{
                flexDirection: "row-reverse",
                width: "100%",
                height: "86px",
                color: "#FF8A00",
                fontSize: "20px",
                fontWeight: "700",
                display: "flex",
                textAlign: "center",
              }}
              className="  m-0"
            >
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                إضافة مدير جديد
              </h5>
              <button
                type="button"
                className=" "
                data-dismiss="modal"
                aria-label="Close"
                style={{
                  margin: "9px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                  width: "32px",
                  height: "32px",
                  fontSize: "14px",
                  border: "none",
                }}
              >
                <span style={{}} aria-hidden="true">
                  ❌
                </span>
              </button>
            </div>
            <div
              style={{
                margin: "auto",
                width: "581px",
                backgroundColor: "#A6A0F4",
                height: "1px",
              }}
            ></div>
            <div
              style={{ height: "375px" }}
              className="modal-body-new p-0 d-flex  "
            >
              <form
                onSubmit={handelSubmit}
                style={{ width: "95%", margin: "auto" }}
                className="w-95"
              >
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                    height: "90px",
                  }}
                >
                  <div
                    style={{ direction: "rtl" }}
                    className="form-group col-5 d-flex flex-column  "
                  >
                    <label
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: " flex",
                      }}
                      htmlFor="recipient2-name"
                      className="col-form-label"
                    >
                      الاسم(الاسم ثنائي)
                    </label>
                    <input
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      style={{ direction: "rtl" }}
                      className="form-control text-end"
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={handelOnChangeData}
                      autoComplete="current-userName"
                    />
                  </div>
                  <div
                    style={{}}
                    className="form-group col-5 d-flex flex-column  "
                  >
                    <label
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: " flex",
                      }}
                      htmlFor="recipient-name"
                      className="col-form-label px-2 "
                    >
                      البريد الألكتروني
                    </label>
                    <input
                      onChange={(e) => {
                        handelOnChangeData(e);
                      }}
                      name="email"
                      value={userData.email}
                      placeholder="أدخل البريد الألكتروني هنا"
                      type="email"
                      className="form-control text-end"
                      id="email"
                      style={{ direction: "rtl" }}
                      autoComplete="current-email"
                    />
                  </div>
                </div>
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    style={{ display: "flex" }}
                    className="form-group col-5   d-flex flex-column "
                  >
                    <label
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: " flex",
                      }}
                      htmlFor="recipient4-name"
                      className="col-form-label"
                    >
                      رقم الهاتف
                    </label>
                    <div>
                      <div style={{}}>
                        <input
                          onChange={handelOnChangeData}
                          placeholder="أدخل رقم الهاتف هنا"
                          style={{ direction: "rtl" }}
                          type="text"
                          className="form-control  text-end"
                          id="phone"
                          name="phone"
                          value={userData.phone}
                          autoComplete="current-number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-5  d-flex flex-column ">
                    <label
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: " flex",
                      }}
                      htmlFor="recipient3-name"
                      className="col-form-label"
                    >
                      كلمة المرور
                    </label>
                    <div style={{ position: "relative" }}>
                      <div>
                        <input
                          onChange={handelOnChangeData}
                          name="password"
                          style={{ direction: "rtl", position: "relative" }}
                          type={showPassword ? "password" : "text"}
                          className="form-control text-end"
                          id="password"
                          value={userData.password}
                          autoComplete="current-password"
                          placeholder="ادخل كلمة المرور"
                        />
                      </div>
                      <div style={{}}>
                        <li
                          style={{
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "3px 0 0 3px",
                            border: "none",

                            color: "black",
                            backgroundColor: "#4941A6",
                            width: "40px",

                            height: "100%",
                          }}
                          onClick={handelPassword}
                          className={`fa-solid ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" new-footer">
                  <button
                    style={{
                      borderRadius: "30px",
                      border: "none",
                      backgroundColor: "#C01F59",
                      width: "96px",
                      height: "40px",
                      marginLeft: "12px",
                    }}
                    type="submit"
                    className="btn btn-primary"
                  >
                    إضافة
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    style={{
                      borderRadius: "30px",
                      color: "#FE4F60",
                      border: "#FE4F60 solid 2px",
                      backgroundColor: "#1D195D",
                      width: "96px",
                      height: "40px",
                    }}
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrEditModal;
