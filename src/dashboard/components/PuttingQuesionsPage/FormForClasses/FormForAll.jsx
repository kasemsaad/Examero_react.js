import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FormForAll.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { useForm } from "react-hook-form";
const FormForAll = ({ fetchAllData }) => {
  // const [classData, setClassData] = useState("");
  // const handelValue = (e) => {
  //   console.log(e.target.value);
  //   setClassData(e.target.value);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = async (data) => {
    await Api_Dashboard.post("/groups", data)
      .then((response) => {
        console.log(JSON.stringify(response));
        fetchAllData();
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
    console.log();
  };
  const registerOptions = {
    name: { required: "يرجى ادخال اسم الصف" },
  };
  const handleError = (errors) => {};

  return (
    <>
      <form
        className="form-container-putt "
        onSubmit={handleSubmit(handleRegistration, handleError)}
      >
        <div className="form-group-putt col-8 mx-3 d-flex flex-column justify-content-end">
          <label className="mb-2" htmlFor="exampleInputEmail1">
            اسم الصف
          </label>
          <input
            style={{ fontSize: "1.3" }}
            type="name"
            {...register("name", registerOptions.name)}
            className="form-control col-8"
            id="name"
            aria-describedby="emailHelp"
            placeholder=" أدخل أسم الصف الجديد هنا"
          />
          <span style={{ color: "red" }}>
            {errors?.name && errors.name.message}
          </span>{" "}
        </div>
        <div className="button-container-putt">
          <MyButton className="my-button" content="إضافة" type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default FormForAll;
