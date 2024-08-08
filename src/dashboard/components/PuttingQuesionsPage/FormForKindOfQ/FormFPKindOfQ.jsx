import React, { useState } from "react";
import MyButton from "../../../../common/Button/Button";
import "./FornFPkindOfQ.css";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AddTOfQuestion from "../AddTypeOfQuestionModal/AddTypeOfQurstionModal";

const FormFPkindOfQ = ({ fetchAllKQuestons }) => {
  const notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const Errornotify = (AlertPoint) => {
    toast.error(AlertPoint, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const [AlertPoint, SetAlertPoint] = useState("");
  const [AlertPointSuccess, SetAlertPointSuccess] = useState("");
  const [errors, setErrors] = useState("");
  const [selctedQ, setSelectedQ] = useState({
    name: "",
  });
  const navigate = useNavigate();
const reset=()=>{
  setSelectedQ({name:""})
}
  const handelChange = (e) => {
    console.log(e.target.value);
    setErrors({});
    console.log();
    setSelectedQ({
      ...selctedQ,
      name: e.target.value,
    });
  };
  const newErrors = {};
  const onSubmit = (e) => {
    e.preventDefault();
    if (!selctedQ.name) {
      newErrors.name = "يرجى اختيار نوع السؤال";
      setErrors(newErrors);
      return;
    }

    const handelEdit = async (selctedQ) => {
      await Api_Dashboard.post("questions-type", selctedQ)
        .then((response) => {
          let x = response.data.message;
          SetAlertPointSuccess(x);
          notify("تم اضافة نوع السؤال بنجاح ");
          fetchAllKQuestons();
        })
        .catch((err) => {
          let x = err.response.data.message;
          SetAlertPoint(x);
          Errornotify(x);
          setErrors(err.response.data.errors);
        });
    };
    handelEdit(selctedQ);
  };

  return (
    <>
      <div className="container-kind">
        <form onSubmit={onSubmit} action="" className="form-kind">
          <div className="head-kind">
            <p className="p-kind">نوع السؤال</p>
          </div>
          <div className="content-kind">
            <div className="kind-qu">
              <div className="inputs-kind">
                <div className="input-kind">
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value={"صح/خطأ"}
                      name={"option"}
                      id={"option2"}
                      type="radio"
                    ></input>
                    <label className="label-kind" htmlFor="kind1">
                      صح/خطأ
                    </label>
                  </div>
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      name={"option"}
                      id={"option1"}
                      type="radio"
                      value={"توصيل بين عمودين"}
                    ></input>
                    <label className="label-kind" htmlFor="kind2">
                      توصيل بين عمودين
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value="متعدد الاختيارات"
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind3">
                      متعدد الاختيارات
                    </label>
                  </div>
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value="تحديد فى الصور"
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind2">
                      تحديد فى الصور
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value="سؤال إنشائي"
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind2">
                      سؤال إنشائي
                    </label>
                  </div>
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value="املأ الفراغات "
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind2">
                      املأ الفراغات
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value={"سؤال المحتوى"}
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind2">
                      سؤال المحتوى
                    </label>
                  </div>
                  <div className="inputs">
                    <input
                      onChange={handelChange}
                      value={"سؤال مرفق"}
                      name={"option"}
                      id={"option1"}
                      type="radio"
                    ></input>

                    <label className="label-kind" htmlFor="kind2">
                      سؤال مرفق
                    </label>
                  </div>
                </div>
              </div>

              <div className=" mybutton-kind  ">
                <MyButton
                  type="button"
                  databstoggle="modal"
                  databstarget="#addTypeOfQuestion"
                  className={"button-kind-2"}
                  content={"+  اضافة نوع سؤال جديد "}
                  // onClick={navgateToQBank}
                />
              </div>
            </div>

            <div className="button-container-kind">
              <MyButton
                className="my-button-kind"
                content="إضافة"
                type={"submit"}
              />
            </div>
          </div>
          <span style={{ color: "red", margin: "auto" }}>{errors.name}</span>
        </form>
        {/* <AddTOfQuestion fetchAllData={""} /> */}
      </div>
    </>
  );
};

export default FormFPkindOfQ;
