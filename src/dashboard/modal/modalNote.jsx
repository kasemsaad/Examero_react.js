import React, { useState } from "react";
import "./add.css";
import { useForm } from "react-hook-form";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";

const AddMangerModel = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = (mangerData) => {
    console.log(mangerData);
    Api_Dashboard.post("/managers", { mangerData })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleError = (errors) => {};

  // const onErrors = errors => console.error(errors);
  const registerOptions = {
    fullName: { required: "يرجى ادخال الاسم " },
    email: {
      required: "يرجى ادخال البريد",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: " يرجى كتابة الإيميل بطريقة صحيحة",
      },
    },
    phone_number: { required: "يرجى ادخال رقم الهاتف" },
    password: {
      required: "يرجى ادخال كلمة المرور ",
      minLength: {
        value: 8,
        message: "يرجي استخدام حروف وأرقام ولا يقل 8 خانات",
      },
      pattern: {
        value: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
        message: "يرجي استخدام حروف وأرقام",
      },
    },
  };
  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="modal fade"
        id="add-manger-dash"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog rady" role="document">
          <div
            className="modal-content"
            style={{ backgroundColor: "#1D195D", borderRadius: "13.97px" }}
          >
            <div
              className="modal-header-new"
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
            >
              <h5 className="modal-title m-auto" id="exampleModalLabel">
                إضافة مدير جديد
              </h5>
              <button
                type="button"
                className="btn-close-new"
                data-bs-dismiss="modal"
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
                ❌
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
              className="modal-body-new p-0 d-flex"
              style={{ height: "375px" }}
            >
              <form
                onSubmit={handleSubmit(handleRegistration, handleError)}
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
                    className="form-group col-5 d-flex flex-column"
                    style={{ direction: "rtl" }}
                  >
                    <label
                      htmlFor="recipient2-name"
                      className="col-form-label"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      الاسم(الاسم ثنائي)
                    </label>
                    <input
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      className="form-control text-end"
                      id="fullName"
                      name="fullName"
                      {...register("fullName", registerOptions.fullName)}
                      autoComplete="current-userName"
                      style={{ direction: "rtl" }}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.fullName && errors.fullName.message}
                    </span>
                  </div>
                  <div className="form-group col-5 d-flex flex-column">
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label px-2"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      البريد الألكتروني
                    </label>
                    <input
                      placeholder="أدخل البريد الألكتروني هنا"
                      type="email"
                      className="form-control text-end"
                      id="email"
                      name="email"
                      {...register("email", registerOptions.email)}
                      style={{ direction: "rtl" }}
                      autoComplete="current-email"
                    />
                    <span style={{ color: "red" }}>
                      {errors?.email && errors.email.message}
                    </span>
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
                    className="form-group col-5 d-flex flex-column"
                    style={{ display: "flex" }}
                  >
                    <label
                      htmlFor="recipient4-name"
                      className="col-form-label"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      رقم الهاتف
                    </label>
                    <div>
                      <input
                        placeholder="أدخل رقم الهاتف هنا"
                        type="text"
                        className="form-control text-end"
                        id="phone_number"
                        name="phone_number"
                        {...register(
                          "phone_number",
                          registerOptions.phone_number
                        )}
                        style={{ direction: "rtl" }}
                        autoComplete="current-number"
                      />
                      <span style={{ color: "red" }}>
                        {errors?.phone_number && errors.phone_number.message}
                      </span>
                    </div>
                  </div>
                  <div className="form-group col-5 d-flex flex-column">
                    <label
                      htmlFor="recipient3-name"
                      className="col-form-label"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                      }}
                    >
                      كلمة المرور
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        placeholder="ادخل كلمة المرور"
                        type={showPassword ? "text" : "password"}
                        className="form-control text-end"
                        id="password"
                        name="password"
                        {...register("password", registerOptions.password)}
                        style={{ direction: "rtl", position: "relative" }}
                        autoComplete="current-password"
                      />

                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={handlePasswordToggle}
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
                      >
                        <i
                          className={`fa-solid ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors?.password && errors.password.message}
                    </span>
                  </div>
                </div>
                <div className="modal-footer-new new-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "30px",
                      border: "none",
                      backgroundColor: "#C01F59",
                      width: "96px",
                      height: "40px",
                      marginLeft: "12px",
                    }}
                  >
                    إضافة
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
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

export default AddMangerModel;