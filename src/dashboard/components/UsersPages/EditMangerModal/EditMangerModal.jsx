import { useForm } from "react-hook-form";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import React, { useEffect, useState } from "react";

const EditMangerModal = ({ api, fetchAllData, rowData, content }) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [id, seId] = useState(idOfDeleteOrEditItem);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: rowData.firstName,
      last_name: rowData.lastName,
      phone_number: rowData.phone_number,
      governorate: rowData.governorate,
      date_of_birth: rowData.date_of_birth,
      email: rowData.email,
    },
  });
  useEffect(() => {
    if (data) {
      reset({
        first_name: rowData.firstName,
        last_name: rowData.lastName,
        phone_number: rowData.phone_number,
        governorate: rowData.governorate,
        date_of_birth: rowData.date_of_birth,
        email: rowData.email,
      });
    }
  }, [rowData, reset]);
  const handleRegistration = async (mangerData) => {
    console.log(JSON.stringify(mangerData) + "form edit");
    await Api_Dashboard.post(`/${api}/${rowData.id}`, mangerData)
      .then((response) => {
        console.log(response.data);
        fetchAllData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleError = (errors) => {};

  // const onErrors = errors => console.error(errors);
  const registerOptions = {
    first_name: { required: "يرجى ادخال الاسم الاول" },
    last_name: { required: " يرجى ادخال الاسم الاسم الاخير" },
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
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: "يرجي استخدام حروف وأرقام",
      },
    },
    phone_number: { required: "يرجى ادخال الهاتف" },
    date_of_birth: { required: "يرجى ادخال تاريخ الميلاد" },
    governorate: { required: "يرجى ادخال البلد" },
  };
  const handlePasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="modal fade"
        id="edit-manger-dash"
        tabIndex="-1"
        aria-labelledby="edit-manger-dash"
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
                    height: "85px",
                  }}
                >
                  {/*////////////// first name ////////////////// */}
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
                      //   value={}
                      placeholder="أدخل اسم المدير هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-first_name"
                      name="first_name"
                      {...register("first_name", registerOptions.first_name)}
                      autoComplete="current-userName"
                      style={{ direction: "rtl" }}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.first_name && errors.first_name.message}
                    </span>
                  </div>

                  {/* ///////////////last name input ///////////////////////////// */}

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
                      الاسم الاخير
                    </label>
                    <input
                      placeholder="أدخل اسم المدير  الاخير هنا"
                      type="text"
                      className="form-control text-end"
                      id="edit-last_name"
                      name="last_name"
                      {...register("last_name", registerOptions.last_name)}
                      autoComplete="current-userName"
                      style={{ direction: "rtl" }}
                    />
                    <span style={{ color: "red" }}>
                      {errors?.last_name && errors.last_name.message}
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
                      id="edit-email"
                      name="email"
                      {...register("email", registerOptions.email)}
                      style={{ direction: "rtl" }}
                      autoComplete="current-email"
                    />
                    <span style={{ color: "red" }}>
                      {errors?.email && errors.email.message}
                    </span>
                  </div>

                  {/*  */}
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
                {/*//////////////////////////phone and birth  */}
                <div
                  className="d-flex col-12 p-0"
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* ///////////////start phone number */}
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
                        id="edit-phone_number"
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
                  {/* end of phone number */}
                  {/* start the birthDate */}
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
                      تاريخ الميلاد
                    </label>
                    <div>
                      <input
                        placeholder="أدخل رقم الهاتف هنا"
                        type="date"
                        className="form-control text-end"
                        id="edit-date_of_birth"
                        name="date_of_birth"
                        {...register(
                          "date_of_birth",
                          registerOptions.date_of_birth
                        )}
                        style={{ direction: "rtl" }}
                        autoComplete="current-number"
                      />
                      <span style={{ color: "red" }}>
                        {errors?.date_of_birth && errors.date_of_birth.message}
                      </span>
                    </div>
                  </div>
                  {/* end of birth date */}

                  {/*  */}

                  {/* start of governorate */}
                </div>
                <div
                  style={{
                    width: "91%",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    className="form-group col-5 d-flex flex-column "
                    style={{ display: "flex", width: "89%" }}
                  >
                    <label
                      htmlFor="recipient4-name"
                      className="col-form-label"
                      style={{
                        flexDirection: "column-reverse",
                        color: "white",
                        justifyContent: "end",
                        display: "flex",
                        // textAlign: "center",
                      }}
                    >
                      اسم البلد
                    </label>
                    <div>
                      <input
                        placeholder="أدخل اسم البلد هنا"
                        type="text"
                        className="form-control text-end"
                        id="edit-governorate"
                        name="governorate"
                        {...register(
                          "governorate",
                          registerOptions.governorate
                        )}
                        style={{ direction: "rtl" }}
                        autoComplete="current-number"
                      />
                      <span style={{ color: "red" }}>
                        {errors?.governorate && errors.phone_number.message}
                      </span>
                    </div>
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
                    تعديل
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

export default EditMangerModal;
