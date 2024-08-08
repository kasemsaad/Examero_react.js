import { useState } from "react";
import { toast } from "react-toastify";
import Api_Dashboard from "../../../interceptor/interceptorDashboard";

const AddTOfQuestion = ({ fetchAllData }) => {
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
  const [errors, setErrors] = useState("");
  const element = document.getElementById("addTypeOfQuestion");

  const [selctedQ, setSelectedQ] = useState({
    name: "",
  });
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

    const handelEdit = async (selctedQ) => {
      console.log(selctedQ);
      if (selctedQ) {
        await Api_Dashboard.post("questions-type", selctedQ)
          .then((response) => {
            console.log(response);
            let x = response.data.message;
            element.style.display = "none";
            notify("تم اضافة نوع السؤال بنجاح ");
            fetchAllData();
          })
          .catch((err) => {
            console.log(err);
            let x = err.response.data.message;
            SetAlertPoint(x);
            Errornotify(x);
            setErrors(err.response.data.errors);
          });
      }
    };
    handelEdit(selctedQ);
  };

  return (
    <>
      <div
        className="modal fade"
        id="addTypeOfQuestion"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content content-dash">
            <div className="modal-header modal-header-dash">
              <h5 className="modal-title-dash " id="exampleModalLabel">
                اضافة نوع سؤال جديد
              </h5>
            </div>

            <div className="modal-body">
              <div className="container text-white">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">نوع السؤال</label>
                    <input
                      name="name"
                      value={selctedQ.name}
                      onChange={(e) => {
                        handelChange(e);
                      }}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    />
                  </div>

                  <div className="mt-5 buttons-container-dash">
                    <div className="submitButton">
                      <button
                        type="submit"
                        className="text-white submit-edit-class-dash"
                      >
                        اضافه
                      </button>
                      <button
                        className="  cancel-edit-class-dash"
                        type="button"
                        data-bs-dismiss="modal"
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

export default AddTOfQuestion;
