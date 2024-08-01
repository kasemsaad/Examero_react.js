import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Api_website from "../../../../../utlis/axios_utils_websit";

const EditopenemisModal = ({ api, fetchAllData, rowData, content }) => {
  const [showPassword, setShowPassword] = useState(false);
  const element = document.getElementById("edit-openemis-dash");

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors },
  } = useForm(
    rowData && {
      defaultValues: {
        user_name: rowData.user_name,
        password: rowData.password,
        group: rowData.group,
        subject: rowData.subject,
      },
    }
  );

  const handleModalClose = () => {
    resetField("password");
    element.style.display = "none";
  };

  useEffect(() => {
    if (rowData) {
      reset({
        user_name: rowData.user_name,
        password: rowData.password,
        group: rowData.group,
        subject: rowData.subject,
        phone_number: rowData.phone_number,
       
      });
    }
  }, [rowData, reset]);

  const handleRegistration = async (data) => {
    document.body.style.removeProperty("overflow");

    const formattedData = {
      id: rowData.id,
      user_name: data.user_name,
      password: data.password,
      group: data.group,
      subject: data.subject,
      phone_number:data.phone_number,
    
    };

    await Api_website.post(`/teachers/open-emis/${rowData.id}`, formattedData)
      .then((response) => {
        handleModalClose();
        console.log(response);
        fetchAllData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerOptions = {
    user_name: { required: "يرجى ادخال الاسم الاول" },
    password: {
      required: "يرجى ادخال كلمة المرور",
      minLength: {
        value: 8,
        message: "يرجى استخدام حروف وأرقام ولا يقل 8 خانات",
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "يرجى استخدام حروف وأرقام",
      },
    },
    group: { required: "يرجى ادخال اسم الصف" },
    subject: { required: "يرجى ادخال الموضوع" },
    phone_number: { required: "يرجى ادخال رقم الهاتف" },
  
  };

  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="modal fade"
        id="edit-openemis-dash"
        tabIndex="-1"
        aria-labelledby="edit-openemis-dash"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog my-mod-add" role="document">
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
                {content}
              </h5>
              <button
                type="button"
                onClick={handleModalClose}
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
              style={{ height: "500px" }}
            >
              <form
                onSubmit={handleSubmit(handleRegistration)}
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
                    height: "85px",
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
                      الاسم الاول
                    </label>
                    <input
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-first_name"
                      name="user_name"
                      autoComplete="current-userName"
                      style={{ direction: "rtl" }}
                      {...register("user_name", registerOptions.user_name)}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.user_name && errors.user_name.message}
                    </span>
                  </div>

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
                      كلمة المرور
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        placeholder="ادخل كلمة المرور"
                        type={showPassword ? "text" : "password"}
                        className="form-control text-end"
                        id="edit-password"
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
                            showPassword ? "fa-eye" : "fa-eye-slash"
                          }`}
                        ></i>
                      </button>
                    </div>
                    <span style={{ color: "red" }}>
                      {errors?.password && errors.password.message}
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
                      اسم الصف
                    </label>
                    <input
                      placeholder="أدخل   اسم الصف هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-group"
                      name="group"
                      {...register("group", registerOptions.group)}
                      style={{ direction: "rtl" }}
                      autoComplete="current-group"
                    />
                    <span style={{ color: "red" }}>
                      {errors?.group && errors.group.message}
                    </span>
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
                      اسم المبحث
                    </label>
                    <input
                      placeholder="أدخل  اسم المبحث هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-subject"
                      name="subject"
                      {...register("subject", registerOptions.subject)}
                      style={{ direction: "rtl" }}
                      autoComplete="current-subject"
                    />
                    <span style={{ color: "red" }}>
                      {errors?.subject && errors.subject.message}
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
                     رقم الهاتف
                    </label>
                    <input
                      placeholder="أدخل   رقم الهاتف هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-group"
                      name="phone_number"
                      {...register("phone_number", registerOptions.phone_number)}
                      style={{ direction: "rtl" }}
                      autoComplete="current-group"
                    />
                    <span style={{ color: "red" }}>
                      {errors?.group && errors.group.message}
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
               
                 
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                    margin: "40px 0 20px",
                  }}
                >
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      color: "white",
                      backgroundColor: "#4941A6",
                      borderRadius: "9px",
                      width: "160px",
                      height: "52px",
                    }}
                  >
                    حفظ
                  </button>
                </div>
              </form>
            </div>
            <div
              className="modal-footer-new"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditopenemisModal;
