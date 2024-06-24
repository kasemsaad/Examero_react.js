import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Homeicon from '../../../assets/icons/home_student_view/majesticons_home-line copy.svg';
import delet from '../../../assets/image/fluent_delete-12-regular.svg';
import edit from '../../../assets/image/uil_edit.svg';
import imagee from '../../../assets/image/Group 30.svg';
import plus from '../../../assets/image/+.svg';
import request from '../../../utlis/axios_utils_websit.jsx';
import '../Student_View/homeStudentView.css';
import "../../../dashboard/Home_Dashboard/home_dashboard.css";
import "./DeleteElement.css";
import "./AddNewUser.css";

let useId;
function onSelect(id) {
  useId = id
}
function HomeStudentview(props) {
  const getToken = () => { return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3N0dWRlbnRzL2xvZ2luIiwiaWF0IjoxNzE5MTYwNDAxLCJleHAiOjE3MTkxNjQwMDEsIm5iZiI6MTcxOTE2MDQwMSwianRpIjoidVRFN2hZSE43aEViTEd3NiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.TrhHEQ5x9U0i1dQK9S0zevvbKeU65KS2KwpxJxmoIc8"; };
  const layoutBackground = useSelector((state) => state.dark.lay);

  //////////////////////////Get All Note///////////////////////////////////////////////////
  const [allNotes, setAllNotes] = useState("");
  useEffect(() => {
    request({
      url: '/students/notes',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
      .then(response => {
        setAllNotes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching notes data:", error);
      });
  }, []);
  //////////////////////////End Get All Note///////////////////////////////////////////////////
  //////////////////////////Delete Note///////////////////////////////////////////////////
  const deleteNote = (id) => {
    request({
      url: `/students/notes/${id}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(response => {
        console.log('Note deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting note:');
      });
  };
  //////////////////////////End Delete Note///////////////////////////////////////////////////
  //////////////////////////add Note///////////////////////////////////////////////////
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [addressValidationMessage, setAddressValidationMessage] = useState('');
  const [noteValidationMessage, setNoteValidationMessage] = useState('');
  const handleAddressChange = (event) => {
    const value = event.target.value;

    if (value.trim() === '') {
      setAddressValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 15) {
      setAddressValidationMessage('العنوان لايزيد عن 15 حرف');
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(value)) {
      setAddressValidationMessage('يجب ان يكون نص');
    } else {
      setAddressValidationMessage('');
    }
    setAddress(value);
  };

  const handleNoteChange = (event) => {
    const value = event.target.value;

    if (value.trim() === '') {
      setNoteValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 50) { // Example max length for note
      setNoteValidationMessage('الملحوظه لاتزيد عن 50 حرف');
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(value)) {
      setNoteValidationMessage('يجب ان يكون نص');
    } else {
      setNoteValidationMessage('');
    }
    setNote(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      address: address,
      note: note
    };

    request({
      url: 'students/notes', method: 'post', data,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(response => {
        console.log('Note added successfully:');
        const modalElement = document.getElementById('addManagerModal');
        modalElement.style.display = "none"
      })
      .catch(error => {
        console.error('Error adding note:');
      });
  };

  //////////////////////////End add Note///////////////////////////////////////////////////
  //////////////////////////update Note///////////////////////////////////////////////////

  const [getDataUpdateAddress , setgetDataUpdateAddress]=useState("");
  const [getDataUpdateNote , setgetDataUpdateNote]=useState("");
  const handleGetUpdate = (id) => {
    request({
      url: `students/notes/${id}`, method: 'get',
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(response => {
        setgetDataUpdateNote(response.data.data.note);
        setgetDataUpdateAddress(response.data.data.address);

              })
      .catch(error => {
        console.error('Error get note:');
      });
  };
  ////////////////////////////////////add update//////////////////////////////////////////////////////////////
  const [DataAfterUpdateAddress, setDataAfterUpdateAddress] = useState("");
  const [DataAfterUpdateNote, setDataAfterUpdateNote] = useState("");
  const [addressUpdateValidationMessage, setAddressUpdateValidationMessage] = useState('');
  const [noteUpdateValidationMessage, setNoteUpdateValidationMessage] = useState('');

  const handleAddressChangeUpdate = (event) => {
    const value = event.target.value;

    if (value.trim() === '') {
      setAddressUpdateValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 15) { // Example max length for address
      setAddressUpdateValidationMessage('العنوان لايزيد عن 15 حرف');
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(value)) {
      setAddressUpdateValidationMessage('يجب ان يكون نص');
    } else {
      setAddressValidationMessage('');
    }
    setDataAfterUpdateAddress(value)
  };

  const handleNoteChangeUpdate = (event) => {
    const value = event.target.value;

    // Validate note input
    if (value.trim() === '') {
      setNoteUpdateValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 50) { // Example max length for note
      setNoteUpdateValidationMessage('الملحوظه لاتزيد عن 50 حرف');
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(value)) {
      setNoteUpdateValidationMessage('يجب ان يكون نص');
    } else {
      setNoteUpdateValidationMessage('');

    }
    setDataAfterUpdateNote(value)
  };
  const handleSubmitUpdate = (event) => {

    event.preventDefault();
    const data = {
      address: DataAfterUpdateAddress,
      note: DataAfterUpdateNote
    };

    request({
      url: `students/notes/${useId}`, method: 'post', data,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
      .then(response => {
        console.log('Note update successfully:');
        const modalElement = document.getElementById('UpdateManagerModal');
        modalElement.style.display = "none"
      })
      .catch(error => {
        console.error('Error update note:');
      });
  };
  //////////////////////////End add Note///////////////////////////////////////////////////

  if (!allNotes) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container py-5 mb-2 d-flex align-items-center justify-content-center flex-column">
        <div className="" style={{ width: "85%", paddingTop: "4.25px" }}>
          <img src={Homeicon} alt="HomeIcon" style={{ backgroundColor: "transparent" }} />
          <Link
            className="btn"
            to="#"
            style={{
              backgroundColor: "transparent",
              color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43",
              fontSize: "18px"
            }}
          >
            الرئيسية
          </Link>
        </div>

        <div className="row m-0 Bold" style={{ width: "88%", paddingTop: "4.25px" }}>
          <div className="row rowHomestudent pt-2 m-0 col-md-8 d-flex align-items-start justify-content-evenly">
            <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#4941A6", width: "10rem" }}>
              <p>عدد الامتحانات المستخدمة</p>
              <p className="fs-6">17</p>
            </div>

            <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#C01F59", width: "10rem" }}>
              <p>عدد الامتحانات المتبقية</p>
              <p className="fs-6">2</p>
            </div>

            <div className="col-3 rounded-4 shadow-box" style={{ backgroundColor: "#C17011", width: "10rem" }}>
              <p>متوسط الدرجات</p>
              <p className="fs-6">70%</p>
            </div>

            <div className="row child pt-4 p-0 m-0 rounded-4" style={{ width: "100%", backgroundColor: "#4941A6" }}>
              <div className="col-md-7">
                <Link
                  className="btn rounded-5 px-5 py-1"
                  to="#"
                  style={{
                    backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "white",
                    color: layoutBackground === "#0E0A43" ? "#C01F59" : "black",
                    fontSize: "18px"
                  }}
                >
                  رسالة اليوم
                </Link>
                <p className="p-3 pt-4">“ ينقسم الفاشِلون إلى نصفين: هؤلاء الذين يُفكرون ولا يعملون، وهؤلاء الذين يَعملون ولا يُفكرون أبدًا. “</p>
              </div>
              <div className="col-md-4 mb-4 boxday"></div>
            </div>
          </div>

          <div className="homeStudentcalender pt-3 col-md-4 d-flex align-items-center justify-content-center flex-column">
            <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "auto", backgroundColor: "#4941A6" }}>
              <div className="wrapper_todo_calender mt-3 d-flex align-items-center justify-content-center flex-column" style={{ backgroundColor: "#4941A6", border: "1px #4941A6 solid", borderRadius: "20px", width: "100%" }}>
                <div className="calender calenderhomestudent d-flex align-items-center justify-content-center" style={{ width: "100%" }}>
                  <Calendar onChange={props.onChange} value={props.date} />
                </div>

                {allNotes.length > 0 && (
                  <div className="mt-4 todo_app_wrapper d-flex justify-content-center" style={{ height: "30vh", overflow: "auto" }}>
                    <div className="todo_app" style={{ overflow: "auto" }}>
                      {allNotes.map(({ id, note }) => (
                        <div className="mb-3 mt-2 change_width_in_sm" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }} key={id}>
                          <div className="input_contain_value">
                            <input type="text" className="form-control" value={note} readOnly />
                          </div>
                          <div className="wraber_delete d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1D195D", width: "2vw", height: "2vw", borderRadius: "8px" }}>
                            <img src={delet} alt="Delete" width="17px" height="17px" data-bs-toggle="modal" data-bs-target="#deleteElementModal" onClick={() => onSelect(id)} />
                          </div>
                          <div data-bs-toggle="modal" data-bs-target="#UpdateManagerModal" className="wraber_delete d-flex justify-content-center align-items-center" onClick={() =>{onSelect(id); handleGetUpdate(id);} } style={{ backgroundColor: "#4941A6", width: "2vw", height: "2vw", borderRadius: "8px", boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px' }}>
                            <img src={edit} alt="Edit" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ textAlign: "center", display: 'flex', justifyContent: "center", marginTop: "10px" }}>
                  <button

                    type="button"
                    className="btn mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#addManagerModal"
                    style={{ backgroundColor: "#FE4F60", color: '#FFFFFF' }}>
                    <span style={{ marginLeft: "10px" }}>
                      <img src={plus} alt="Plus Icon" />
                    </span>
                    إضافة ملحوظة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////modal/////////////////////////////////////////////////////////    */}
      <div

        className="modal fade DElementFade "
        id="deleteElementModal"
        tabIndex="-1"
        aria-labelledby="deleteElementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2 ">
          <div className="modal-content DElementContent modal-backdrop1">
            <div className="modal-body DElementBody text-center">
              <img src={imagee} alt="Warning Icon" className="warning-icon" />
              <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
              <p className="parag">سيتم حذف {props.type} {props.name}</p>
            </div>
            <div className="modal-footer DElementFooter">
              <div>
                <button
                  type="button"
                  className="btn-secondary cancel-btn DElementCancel mx-1"
                  data-bs-dismiss="modal"
                >
                  لا
                </button>
                <button
                  type="button"
                  className="btn btn-danger cancel-btn DElementSave mx-1"
                  data-bs-dismiss="modal"
                  onClick={() => deleteNote(useId)}
                >
                  نعم
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////endmodals/////////////////////////////////////////////////////////    */}
      {/* ////////////////////////////////////////////add modals/////////////////////////////////////////////////////////    */}
      <div
        className="modal fade managerFade"
        id="addManagerModal"
        tabIndex="-1"
        aria-labelledby="addManagerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered managergDialog">
          <div className="modal-content managerContent">
            <div className="modal-header managerHeader">
              <h5 className="modal-title managerTitle" >
                إضافة ملحوظة
              </h5>
              <button type="button" className="btn-close kh" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body managerBody">
              <form className="modal-body managerForm" onSubmit={handleSubmit}>
                <div className="parent1">
                  <div className="child1 col-lg-5">
                    <div className="form-group managerFGroup">
                      <label htmlFor="lastName">العنوان</label>
                      <input
                        type="text"
                        className="form-control managerControl"
                        id="lastName"
                        placeholder={`أدخل العنوان `}
                        value={address}
                        onChange={handleAddressChange}
                      />
                      {addressValidationMessage && <p style={{ color: 'red' }}>{addressValidationMessage}</p>}

                      <span className="form-text text-muted">

                      </span>
                    </div>
                    <div className="form-group managerFGroup">
                      <label htmlFor="">الملحوظة</label>
                      <input
                        type="text"
                        className="form-control managerControl"
                        id="lastName"
                        placeholder="أدخل الملحوظة"
                        value={note}
                        onChange={handleNoteChange} />
                      {noteValidationMessage && <p style={{ color: 'red' }}>{noteValidationMessage}</p>}

                    </div>

                    <div className="modal-footer managerFooter ms-4 ">
                      <button
                        type="button"
                        className="btn canceled managerCancel"
                        data-bs-dismiss="modal"
                        id="firstbutt"
                      >
                        إلغاء
                      </button>
                      <button type="submit" className="btn save managerSave">إضافة</button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////// end add modals/////////////////////////////////////////////////////////    */}
      {/* ////////////////////////////////////////////Update modals/////////////////////////////////////////////////////////    */}
      <div className="modal fade managerFade" id="UpdateManagerModal" tabIndex="-1" aria-labelledby="addManagerModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered managergDialog">
          <div className="modal-content managerContent">
            <div className="modal-header managerHeader">
              <h5 className="modal-title managerTitle">تعديل الملحوظة</h5>
              <button type="button" className="btn-close kh" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body managerBody">
              <form className="modal-body managerForm" onSubmit={handleSubmitUpdate}>
                <div className="parent1">
                  <div className="child1 col-lg-5">
                    <div className="form-group managerFGroup">
                      <label htmlFor="address">العنوان</label>
                      <input
                        type="text"
                        className="form-control managerControl"
                        id="address"
                        placeholder="أدخل العنوان"
                        value={getDataUpdateAddress}
                        onChange={handleAddressChangeUpdate}
                      />
                      {addressUpdateValidationMessage && <p style={{ color: 'red' }}>{addressUpdateValidationMessage}</p>}
                    </div>
                    <div className="form-group managerFGroup">
                      <label htmlFor="note">الملحوظة</label>
                      <input
                        type="text"
                        className="form-control managerControl"
                        id="note"
                        placeholder="أدخل الملحوظة"
                        value={getDataUpdateNote}

                        onChange={handleNoteChangeUpdate}
                      />
                      {noteUpdateValidationMessage && <p style={{ color: 'red' }}>{noteUpdateValidationMessage}</p>}
                    </div>
                  </div>
                </div>
                <div className="modal-footer managerFooter ms-4 pt-3" >
                  <button type="button" className="btn canceled managerCancel" data-bs-dismiss="modal" id="firstbutt">
                    إلغاء
                  </button>
                  <button type="submit" className="btn save managerSave">تعديل</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////// end Update modals/////////////////////////////////////////////////////////    */}

    </>
  );
}

export default HomeStudentview;
