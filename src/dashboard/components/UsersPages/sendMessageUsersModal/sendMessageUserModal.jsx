import React, { useState, useEffect } from "react";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";
import { toast, ToastContainer } from "react-toastify";
const SendTecherMessageModal = ({ mangerID, api, punish }) => {
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
  const [point, setPoints] = useState(0);
  const [modal, setModal] = useState("");
  const handelClose = () => {
    setAddMessage({
      message: "",
      points: 0,
      type: "",
      teacher_id: mangerID,
    });
  };
  const [addMessage, setAddMessage] = useState({
    message: "",
    points: "",
    type: "",
    teacher_id: "",
  });

  useEffect(() => {
    setAddMessage((prev) => ({
      ...prev,
      points: point,
      teacher_id: mangerID,
    }));
  }, [point, mangerID]);
  // Initialize the state with the values from rowDataOfClass
  const element = document.getElementById("send-message-dash");
  const handelChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setErrors({});
    if (name === "points") {
      setPoints(Number(value));
    }

    setAddMessage((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSendNot = async (addMessage) => {
    document.body.style.removeProperty("overflow");
    if (addMessage) {

      console.log(addMessage);
      await Api_Dashboard.post(`${api}`, addMessage)
        .then((response) => {
          element.style.display = "none";
          let x = response.data.message;
          SetAlertPointSuccess(x);
          notify("تم ارسال الملحوظه  بنجاح ");
          console.log(response);
          // setModal("modal");
        })
        .catch((err) => {
          let x = err.response.data.message;
          SetAlertPoint(x);
          Errornotify(x);
        });
    }
  };
  const [errors, setErrors] = useState("");
  const newErrors = {};
  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (!addMessage.message) {
      newErrors.message = "يرجى اختيار اسم الصف ";
    }
    if (!addMessage.type) newErrors.type = " رجي اختيار غرض الرساله";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    handelSendNot(addMessage);
  };
  const handelAddPoints = () => {
    setPoints((prev) => prev + 1);
    console.log(point);
  };
  const handelDecreasPoints = () => {
    if (point === 0) return;
    setPoints((prev) => prev - 1);
    console.log(point);
  };

  return (
    <>
      <ToastContainer position="top-center" />

      <div
        className="modal fade"
        id="send-message-dash"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#1D195D",
              borderRadius: "20px",
              height: "449px",
            }}
          >
            <div className="modal-header-message">
              <h5
                style={{ color: "#FF8A00", margin: "auto" }}
                className="modal-title"
                id="exampleModalLabel"
              >
                أرسل رساله
              </h5>
            </div>
            <div
              style={{
                height: ".5px",
                width: "80%",
                margin: "auto",
                backgroundColor: "#A6A0F4",
              }}
            ></div>
            <div className="modal-body">
              <div
                style={{ width: "420px" }}
                className="container   text-white"
              >
                <form onSubmit={handelOnSubmit}>
                  <div className="write-message">
                    <span className="write-message-text">اكتب رساله </span>
                  </div>
                  <div className="form-group-textarea-dash">
                    <textarea
                      className="ext-area-send-message"
                      name="message"
                      value={addMessage.message}
                      // value={rowDataOfClass.name || ""}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                      cols="50"
                      type="text"
                      style={{
                        width: "100%",
                        resize: "none",
                        height: 95,
                        borderRadius: "0",
                        backgroundColor: "#D9D9D9",
                      }}
                      placeholder="اكتب رسالتك هنا"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                    <span style={{ color: "red" }}>{errors.message}</span>
                  </div>
                  <div className="main-message">
                    <span className="main-message-text">غرض الرساله</span>
                  </div>
                  <div className="gives-a-reward">
                    <div className="gives-a-reward-inputs">
                      <input
                        onChange={handelChange}
                        name="type"
                        value={1}
                        type="radio"
                      />
                      <label htmlFor=""> منح مكافأه</label>
                    </div>

                    <div className="gives-a-reward-inputs">
                      <input
                        onChange={handelChange}
                        name="type"
                        value={2}
                        type="radio"
                      />
                      <label htmlFor=""> اعطاء تحذير</label>
                    </div>
                    <div className="gives-a-reward-inputs">
                      <input
                        onChange={handelChange}
                        name="type"
                        value={3}
                        type="radio"
                      />
                      <label htmlFor="">غير ذالك</label>
                    </div>
                  </div>
                  <div>
                    <div className="container-input-dash">
                      <button
                        type="button"
                        style={{ backgroundColor: "#4941A6", color: "white" }}
                        className="button-send-message"
                        onClick={handelAddPoints}
                      >
                        +
                      </button>
                      <input
                        onChange={handelChange}
                        value={addMessage.points}
                        name="points"
                        className="input-send-message"
                        type="text"
                      />
                      <button
                        type="button"
                        onClick={handelDecreasPoints}
                        style={{ backgroundColor: "#4941A6", color: "white" }}
                        className="button-send-message"
                      >
                        -
                      </button>
                      <span style={{ color: "red", margin: "auto" }}>
                        {errors.type}
                      </span>
                    </div>
                  </div>

                  <div
                    className="mt-3"
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div className="submitButton">
                      <button
                        data-bs-dismiss={modal}
                        type="submit"
                        className="btn btn-primary"
                        style={{
                          borderRadius: "30px",
                          border: "none",
                          backgroundColor: "#C01F59",
                          width: "90px",
                          height: "34px",
                          marginLeft: "12px",
                        }}
                      >
                        ارسل
                      </button>
                      <button
                        type="button"
                        data-bs-dismiss="modal"
                        className="btn btn-secondary"
                        onClick={handelClose}
                        style={{
                          borderRadius: "30px",
                          color: "#FE4F60",
                          border: "#FE4F60 solid 2px",
                          backgroundColor: "#1D195D",
                          width: "90px",
                          height: "34px",
                        }}
                      >
                        إلغاء
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendTecherMessageModal;
