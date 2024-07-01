import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Homeicon from '../../../assets/icons/home_student_view/majesticons_home-line copy.svg';
import delet from '../../../assets/image/fluent_delete-12-regular.svg';
import edit from '../../../assets/image/uil_edit.svg';
import imagee from '../../../assets/icons/create_Exam/High Importance.svg';
import plus from '../../../assets/image/+.svg';
import '../Student_View/homeStudentView.css';
import "../../../dashboard/Home_Dashboard/home_dashboard.css";
import "./DeleteElement.css";
import "./AddNewUser.css";
import Api_Website from '../../../utlis/axios_utils_websit.jsx';

let useId;
function onSelect(id) {
  useId = id
}
function HomeStudentview(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);

  useEffect(() => {
    getAllNotes();
    getinfo();
  }, []);
  //////////////////////////Get All Note///////////////////////////////////////////////////
  const [allNotes, setAllNotes] = useState("");
  // const [AllExam, setAllExam] = useState("");
  const getAllNotes=()=>{
    
      Api_Website.get(`/students/notes`)
      .then(response => {
        setAllNotes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching notes data:", error);
      });

  }
  const [info, setinfo] = useState("");

  const getinfo=()=>{
    
    Api_Website.get(`students/exams-info`)
    .then(response => {
      setinfo(response.data);
    })
    .catch(error => {
      console.error("Error fetching notes data:", error);
    });

}
  // const getExam=()=>{
  //   request({
  //     url: '/students/exams',
  //     method: 'get',  
  //     headers: {
  //     'Authorization': `Bearer ${getToken()}`
  //     }
  //   })
  //     .then(response => {
  //       setAllExam(response.data.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching notes data:", error);
  //     });
  // }
  //////////////////////////End Get All Note///////////////////////////////////////////////////
  //////////////////////////Delete Note///////////////////////////////////////////////////
  const deleteNote = (id) => {
      Api_Website.delete(`/students/notes/${id}`)
      .then(response => {
        console.log('Note deleted successfully');
        getAllNotes()
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

      Api_Website.post(`students/notes`, data)
      .then(response => {
        const modalElement = document.getElementById('addManagerModal');
        modalElement.style.display = "none"
        getAllNotes()
            })
      .catch(error => {
        console.error('Error adding note:');
      });

  };

  //////////////////////////End add Note///////////////////////////////////////////////////
  //////////////////////////update Note///////////////////////////////////////////////////
useEffect(()=>{

})
  const [values , setValues]=useState({
    id:useId,
    address:'',
    note:''
  });
 
  const handleGetUpdate = (id) => {
      Api_Website.get(`students/notes/${id}`)
      .then(response => {
        setValues({...values,address:response.data.data.address,note:response.data.data.note});
        getAllNotes()
            })
      .catch(error => {
        console.error('Error get note:');
      });

  };
  ////////////////////////////////////add update//////////////////////////////////////////////////////////////
  // const [DataAfterUpdateAddress, setDataAfterUpdateAddress] = useState("");
  // const [DataAfterUpdateNote, setDataAfterUpdateNote] = useState("");
  const [noteUpdateValidationMessage, setNoteUpdateValidationMessage] = useState('');
  const [addressUpdateValidationMessage, setAddressUpdateValidationMessage] = useState('');
  const validateAddress = (address) => {
    if (address.trim() === '') {
      return 'لا يجب ان يكون فارغ'; // "Should not be empty"
    } else if (address.length > 15) {
      return 'الملحوظه لاتزيد عن 15 حرف'; // "Note should not exceed 50 characters"
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(address)) {
      return 'يجب ان يكون نص'; // "Must be text"
    } else {
      return '';
    }
  };

  // Handle input change with validation
  const handleInputChangeAddress = (e) => {
    const { value } = e.target;
    setValues({ ...values, address: value });

    // Validate the input
    const validationMessage = validateAddress(value);
    setAddressUpdateValidationMessage(validationMessage);
  };
  const validateNote = (note) => {
    if (note.trim() === '') {
      return 'لا يجب ان يكون فارغ'; // "Should not be empty"
    } else if (note.length > 50) {
      return 'الملحوظه لاتزيد عن 50 حرف'; // "Note should not exceed 50 characters"
    } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(note)) {
      return 'يجب ان يكون نص'; // "Must be text"
    } else {
      return '';
    }
  };

  // Handle input change with validation
  const handleInputChangeNote = (e) => {
    const { value } = e.target;
    setValues({ ...values, note: value });

    // Validate the input
    const validationMessage = validateNote(value);
    setNoteUpdateValidationMessage(validationMessage);
  };

  const handleSubmitUpdate = (event) => {

    event.preventDefault();
    const data = {
      address: values.address,
      note: values.note
    };
      Api_Website.post(`students/notes/${useId}`,data)
      .then(response => {
        console.log('Note update successfully:');
        const modalElement = document.getElementById('UpdateManagerModal');
        modalElement.style.display = "none"
        getAllNotes()
            })
      .catch(error => {
        console.error('Error update note:');
      });
  };
  //////////////////////////End add Note///////////////////////////////////////////////////
  const [inputUser,setInputUser]=useState({
    address: "",
    note: "",
   
  })
const getUsersFromInput=(e)=>{
  let USER={...inputUser}
  USER[e.target.name]=e.target.value
  setInputUser(USER)
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
            <div className="row d-flex p-0 align-items-start justify-content-between">

            <div className="col-3 rounded-4  shadow-box shadow-boxxx boximgbackground1 d-flex flex-column justify-content-center " style={{ backgroundColor: "#4941A6", width: "45%" }}>
              <p>عدد الامتحانات المستخدمة</p>
              <p className="fs-6">{info.exam_student_finished}</p>
            </div>


            <div className="col-3 rounded-4  shadow-boxxx boximgbackground3 d-flex flex-column justify-content-center" style={{ backgroundColor: "#C17011", width: "45%" }}>
              <p>متوسط الدرجات</p>
              <p className="fs-6">{info.exam_average}%</p>
            </div>
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

          <div className="homeStudentcalender pt-2 col-md-4 d-flex align-items-center justify-content-center flex-column">
            <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "100%", height: "auto", backgroundColor: "#4941A6" }}>
              <div className="wrapper_todo_calender  d-flex align-items-center justify-content-center flex-column" style={{ backgroundColor: "#4941A6", border: "1px #4941A6 solid", borderRadius: "20px", width: "100%" }}>
                <div className="calender calenderhomestudent d-flex align-items-center justify-content-center" style={{ width: "100%" }}>
                  <Calendar onChange={props.onChange} value={props.date} />
                </div>

                {allNotes.length > 0 && (
                  <div className="mt-4 todo_app_wrapper d-flex justify-content-center" style={{ height: "30vh", overflow: "auto" }}>
                    <div className="todo_app" style={{ overflow: "auto" }}>
                      {allNotes.map(({ id, address }) => (
                        <div className="mb-3 mt-2 change_width_in_sm" style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }} key={id}>
                          <div className="input_contain_value">
                            <input type="text" className="form-control" value={address} readOnly />
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

                  </div>

                </div>
                    <div className="modal-footer managerFooter pt-4 ">
                      <button
                        type="button"
                        className="btn canceled managerCancel"
                        data-bs-dismiss="modal"
                        id="firstbutt"
                      >
                        إلغاء
                      </button>
                      <button type="submit" className="btn save managerSave" >إضافة</button>
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
                        value={values.address}
                        onChange={handleInputChangeAddress}
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
                        value={values.note}
                        onChange={handleInputChangeNote}


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
