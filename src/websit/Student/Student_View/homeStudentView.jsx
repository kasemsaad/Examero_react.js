import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import Homeicon from '../../../assets/icons/home_student_view/majesticons_home-line copy.svg';
import delet from '../../../assets/image/fluent_delete-12-regular.svg';
import edit from '../../../assets/image/uil_edit.svg';
import imagee from '../../../assets/icons/create_Exam/High Importance.svg';
import sora from './126-1268354_community-student-icon-graduate-icon.png';
import sora2 from './man 2.png';
import plus from '../../../assets/image/+.svg';
import '../Student_View/homeStudentView.css';
import "../../../dashboard/Home_Dashboard/home_dashboard.css";
import "./DeleteElement.css";
import "./AddNewUser.css";
import Api_Website from '../../../utlis/axios_utils_websit.jsx';
import { Button } from 'antd';
import Api_dashboard from '../../../utlis/axios_utils_dashboard.jsx';

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
  const [GroupId, setGroupId] = useState("");
  const [Groupname, setGroupname] = useState("");
  const [Allsubjectss, setAllsubjects] = useState("");
  const [first, setfirst] = useState("");

  const getAllNotes = () => {
    document.body.style.removeProperty('overflow');
    Api_Website.get(`/students/notes`)
      .then(response => {
        setAllNotes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching notes data:", error);
      });

  }
  const [info, setinfo] = useState("");

  const getinfo = () => {
    document.body.style.removeProperty('overflow');

    Api_Website.get(`students/exams-info`)
      .then(response => {
        setinfo(response.data);
      })
      .catch(error => {
        console.error("Error fetching notes data:", error);
      });

  }

  const deleteNote = (id) => {
    document.body.style.removeProperty('overflow');

    Api_Website.delete(`/students/notes/${id}`)
      .then(response => {
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
  const [ValidationMessage, setValidationMessage] = useState('');
  const handleAddressChange = (event) => {
    const value = event.target.value;

    if (value.trim() === " ") {
      setAddressValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 20) {
      setAddressValidationMessage('العنوان لايزيد عن 20 حرف');
    // } else if (!/^[\u0621-\u064Aa-zA-Z_ ]*$/.test(value)) {
    //   setAddressValidationMessage('يجب ان يكون نص');
    }
     else {
      setAddressValidationMessage('');
      setAddress(value);

    }

  };

  const handleNoteChange = (event) => {
    const value = event.target.value;

    if (value.trim() === " ") {
      setNoteValidationMessage('لا يجب ان يكون فارغ');
    } else if (value.length > 50) { // Example max length for note
      setNoteValidationMessage('الملحوظه لاتزيد عن 50 حرف');
    // } else if (!/^[\u0621-\u064Aa-zA-Z_ ]*$/.test(value)) {
    //   setNoteValidationMessage('يجب ان يكون نص');
    }
     else {
      setNoteValidationMessage('');
      setNote(value);
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      address: address,
      note: note
    };
    document.body.style.removeProperty('overflow');
    Api_Website.post(`students/notes`, data)
      .then(response => {
        const modalElement = document.getElementById('addManagerModal');
        modalElement.style.display = "none"
        setAddress('');
        setNote('');
        setValidationMessage('');
        setAddressValidationMessage('');
        setNoteValidationMessage('');
        getAllNotes();

      })
      .catch(error => {
        setValidationMessage("لم يتم الاضافه")
        console.error('Error adding note:');
      });

  };

  //////////////////////////End add Note///////////////////////////////////////////////////
  //////////////////////////update Note///////////////////////////////////////////////////
  useEffect(() => {
  })
  const [values, setValues] = useState({
    id: useId,
    address: '',
    note: ''
  });

  const handleGetUpdate = (id) => {
    document.body.style.removeProperty('overflow');

    Api_Website.get(`students/notes/${id}`)
      .then(response => {
        setValues({ ...values, address: response.data.data.address, note: response.data.data.note });
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
    // } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(address)) {
    //   return 'يجب ان يكون نص'; // "Must be text"
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
    // } else if (!/^[\u0600-\u06FF\sA-Za-z]+$/.test(note)) {
    //   return 'يجب ان يكون نص'; // "Must be text"
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
    document.body.style.removeProperty('overflow');

    Api_Website.post(`students/notes/${useId}`, data)
      .then(response => {
        const modalElement = document.getElementById('UpdateManagerModal');
        modalElement.style.display = "none"
        getAllNotes()
     
      })
      .catch(error => {
        console.error('Error update note:');
      });

  };
  //////////////////////////End add Note///////////////////////////////////////////////////
 

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const refresh = async () => {
    try {
      const response = await Api_Website.get(`/students/refresh`);
      setGroupId(response.data.User.group.id);
      setGroupname(response.data.User.group.name);
    } catch (error) {
      console.error('Error updating note in refresh:', error);
    }
  };

  const subjects = async () => {
    try {
      const response = await Api_Website.get(`/students/subjects/selection/${GroupId}`);
      setAllsubjects(response.data.data);
        setfirst(response.data.data[0].id);
    } catch (error) {
      console.error('Error updating note in subjects:', error);
    }
  };

  const [indices, setIndices] = useState(Array(10).fill(undefined));
  const [imgNames, setImgNames] = useState(Array(5).fill(""));
  const [img, setImg] = useState("");
  const firstid=first  
  const [buttonGroupId, setbuttonGroupId] = useState(firstid);

  const honorary = async () => {
    try {
      const response = await Api_Website.get(`/students/honorary-board/${buttonGroupId||first   }`);
      const data = response.data.data;
      setImg(response.data.path_user_image);

      const newImgNames = imgNames.map((name, idx) => data[idx]?.user?.media?.file_name || "");
      const newIndices = data.flatMap((item, idx) => [item.user, item]);

      setImgNames(newImgNames);
      setIndices(newIndices);
    } catch (error) {
      console.error('Error updating note in honorary:', error);
    }
  };

  useEffect(() => {
    // Assuming refresh and subjects are defined elsewhere
    refresh();
    subjects();
    honorary();
  }, [GroupId,first,buttonGroupId]);

  const students = Array(5).fill(null).map((_, idx) => {
    const userIdx = idx * 2;
    const user = indices[userIdx];
    const score = indices[userIdx + 1]?.total_percentage;
    const img = imgNames[idx];
    console.log(user)
    return user?.first_name !== undefined
    
      ? {
        name: `${user.first_name} ${user.last_name}`,
        score: score,
        img: img,
        color: "#FFBA69",
        media: user.media,
        flag: 1
      }
      : {
        name: ["الاول", "الثاني", "الثالث", "الرابع", "الخامس"][idx],
        score: 0,
        img: sora,
        color: "#FF8A65",
        flag: 0
      };
  });
  return (
    <>
      {/* <ActionComponent /> */}
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

            <div className="row  child pt-4 p-0 m-0 rounded-4" style={{ width: "100%", backgroundColor: "#4941A6" }} >
              <p className='  text-center' style={{ width: "100%", color: "white" }}><span style={{ color: "#FFB660" }}>لوحة الشرف</span> الصف {Groupname}</p>
              <div className='row py-2' dir='ltr' style={{ width: "100%" }}>
              <div className='container d-flex flex-wrap justify-content-start'  style={{ flexDirection: 'row-reverse' }}>
    {Array.isArray(Allsubjectss) && Allsubjectss.length > 0 ? (
      Allsubjectss.map((item, index) => (
        <Button 
          className='mx-2 mb-2' 
          onClick={() => setbuttonGroupId(item.id)} 
          style={{ 
            backgroundColor: item.id === (buttonGroupId || first) ? "#FE4F60" : "#635BBA", 
            color: "white", 
            border: "none" 
          }} 
          key={index}
        >
          {item.name}
        </Button>
      ))
    ) : (
      <option disabled>لا توجد مجموعات</option>
    )}
  </div>
  <div style={{ backgroundColor: "#FFBA69", width: "100%", height: "3px" }}></div>
</div>

              {/* ////////////////// */}

              <div className="row  p-0 m-0" dir='ltr' style={{ flexDirection: "row-reverse" }}>
                {students.map((student, index) => (
                  <div className="col p-0  pt-2" key={index} align="center">
                    <div className="student-card text-center">
                      <img
                        src={student.flag === 1 ? student.media==null? sora2:`${Api_dashboard.defaults.baseURL}${img}${student.img}` : sora}
                        alt="student"
                        className="student-img rounded-circle"
                      />                           
                       <div className="student-info">
                        <h6 className='pt-2'>{student.name}</h6>
                        <p style={{ color: student.color }}>{student.score} %</p>
                      </div>
                      <div className={`rank-badge rank-${index + 1}`}>
                        <span className='' style={{ paddingRight: "1.8px", paddingTop: "3px", color: student.color }}> {index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="row child pt-4 p-0 m-0 rounded-4" style={{ width: "100%" }}>

              <div className="new-feature-section" style={{ backgroundColor:"#4941A6", padding: "10px", marginBottom: "15px", marginTop: "5px", borderRadius: "8px", border: "2px solid #A6A0F4 " }}>
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: "15px", fontWeight: "bold", color: '#A6A0F4' }}>كيف أنضم للوحة الشرف ؟ </span>
                  <button onClick={handleToggle} style={{ color: 'white', background: "none", border: "none", cursor: "pointer" }}>
                    {isExpanded ? "▲" : "▼"}
                  </button>
                </div>
                {isExpanded && (
                  <div style={{ marginTop: "10px" }}>
                    <p> قم بانشاء امتحان بالمواصفات الآتية : </p>
                    <p> 1. اختر المبحث في الصف والفصل الدراسي  الخاص بك .</p>
                    <p> 2. مدة الامتحان لا تزيد عن ساعة واحدة.</p>
                    <p> 3. الامتحان يشمل  كل وحدات ودروس المبحث.</p>
                    <p> 4. عدد أسئلة الامتحان لا تقل عن 20 سؤالا.</p>
                    <p style={{ color: '#FF8A00' }}>. [ Exmaero ] فريق الدعم</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="homeStudentcalender pt-2 col-md-4 d-flex align-items-center flex-column">
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
                          <div data-bs-toggle="modal" data-bs-target="#UpdateManagerModal" className="wraber_delete d-flex justify-content-center align-items-center" onClick={() => { onSelect(id); handleGetUpdate(id); }} style={{ backgroundColor: "#4941A6", width: "2vw", height: "2vw", borderRadius: "8px", boxShadow: 'rgba(0, 0, 0, 0.75) -2px 3px 5px 0px' }}>
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
            <div className='pt-2' align="center">

              {ValidationMessage && <h4 style={{ color: 'red' }}>{ValidationMessage}</h4>}
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
                        required
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
                        required
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
                    onClick={() => {
                      setAddress('');
                      setNote('');
                      setValidationMessage('');
                      setAddressValidationMessage('');
                      setNoteValidationMessage('');
                    }}
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
