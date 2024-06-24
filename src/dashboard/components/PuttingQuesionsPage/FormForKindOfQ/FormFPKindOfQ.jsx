import React from "react";
import MyButton from "../../../../common/Button/Button";
import Checkbox from "../../NotificationPage/Checkbox/Checkbox";
import "./FornFPkindOfQ.css";
const FormFPkindOfQ = () => {
  const using = () => {
    console.log("READ");
  };
  return (
    <>
      <div className="container-kind">
        <form action="" className="form-kind">
          <div className="head-kind">
            <p className="p-kind">نوع السؤال</p>
          </div>
          <div className="content-kind">
            <div className="kind-qu">
              <div className="inputs-kind">
                <div className="input-kind">
                  <div className="inputs">
                    <Checkbox
                      name={"option"}
                      id={"option1"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind1">
                      صح/خطأ
                    </label>
                  </div>
                  <div className="inputs">
                    <Checkbox name={"option"} Checkbox={"radio"} />
                    <label className="label-kind" htmlFor="kind2">
                      توصيل بين عمودين
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <Checkbox
                      id={"option2"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind3">
                      متعدد الاختيارات
                    </label>
                  </div>
                  <div className="inputs">
                    <Checkbox
                      id={"option3"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind2">
                      تحديد فى الصور
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <Checkbox
                      id={"option4"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind2">
                      سؤال إنشائي
                    </label>
                  </div>
                  <div className="inputs">
                    <Checkbox
                      id={"option5"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind2">
                      املأ الفراغات
                    </label>
                  </div>
                </div>
                <div className="input-kind">
                  <div className="inputs">
                    <Checkbox
                      id={"option6"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind2">
                      سؤال المحتوى
                    </label>
                  </div>
                  <div className="inputs">
                    <Checkbox
                      id={"option7"}
                      name={"option"}
                      Checkbox={"radio"}
                    />
                    <label className="label-kind" htmlFor="kind2">
                      سؤال مرفق
                    </label>
                  </div>
                </div>
              </div>
              <div className=" mybutton-kind  ">
                <MyButton
                  className={"button-kind-2"}
                  content={"+  اضافة نوع سؤال جديد "}
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
        </form>
      </div>
    </>
  );
};

export default FormFPkindOfQ;
