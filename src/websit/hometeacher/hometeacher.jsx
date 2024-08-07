import React, { useEffect, useState } from 'react'
// import "./home_dashboard.css"
import main from "./../../assets/image/Vector (2).svg"
import tringle from "./../../assets/image/Intersect (4).svg"
import sec_tringle from "./../../assets/image/Intersect (5).svg"
import exam from "./../../assets/image/exam-time 1.svg"
import test from "./../../assets/image/Test.svg"
import testt from "./../../assets/icons/teacherview/octicon_question-16.svg"
import cer from "./../../assets/icons/teacherview/Vector (1).svg"
import tab from "./../../assets/icons/teacherview/ph_table.svg"
import op from "./../../assets/icons/teacherview/lucide_file-input (1).svg"
import purble_intersect from "./../../assets/image/Intersect (6).svg"
import sec_purble_intersect from "./../../assets/image/Intersect (7).svg"
import sec_yellow_intersect from "./../../assets/image/Intersect (8).svg"
import yellow_intersect from "./../../assets/image/Intersect (9).svg"
import student from "./../../assets/image/Vector (3).svg"
import owner from "./../../assets/image/Vector (4).svg"
import achives from "./../../assets/image/la_gifts.svg"
import plus from "./../../assets/image/+.svg"
import imagee from './../../assets/image/High Importance.svg';




import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import delet from "./../../assets/image/fluent_delete-12-regular.svg"
import edit from "./../../assets/image/uil_edit.svg"
import Calender from '../../dashboard/Home_Dashboard/Calender/calender'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Api_website from '../../utlis/axios_utils_websit'
import { useSelector } from 'react-redux'

let useId;
function onSelect(id) {
  useId = id
}
export default function Home_teacher() {
  const {form} =useForm()
  const [date, setDate] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [allNotes, setAllNotes] = useState("");
  const [plans, setPlans] = useState([]);

  const setId = (id) => {
    localStorage.setItem("sidbarId", JSON.stringify(id));
  };
  const getAllNotes=()=>{
    
      Api_website.get(`teachers/notes`)
      .then(response => {
        console.log(response);
        setAllNotes(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching notes data:", error);
      });

  }


  const [info, setinfo] = useState("");

  const getinfo=()=>{
    
    Api_website.get(`teachers/exams-info`)
    .then(response => {
      setinfo(response.data);
    })
    .catch(error => {
      console.error("Error fetching notes data:", error);
    });

}



const [address, setAddress] = useState('');
const [note, setNote] = useState('');
const [addressValidationMessage, setAddressValidationMessage] = useState('');
const [noteValidationMessage, setNoteValidationMessage] = useState('');
const [data, setInfo] = useState([]);

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


// add note 
const handleSubmit = (event) => {
  document.body.style.overflow = '';

  event.preventDefault();
  const data = {
    address: address,
    note: note
  };
    Api_website.post(`teachers/notes`, data)
    .then(response => {
      const modalElement = document.getElementById('addAdminNote');
      modalElement.style.display = "none"
      getAllNotes()

      setAddress("")
      setNote("")

          })
    .catch(error => {
      console.error('Error adding note:');
    });

};


useEffect(()=>{
  getAllNotes();
  getDataStudentExam();


},[])
  const [values , setValues]=useState({
    id:useId,
    address:'',
    note:''
  });
  const handleGetUpdate = (id) => {
    Api_website.get(`teachers/notes/${id}`)
    .then(response => {
      setValues({...values,address:response.data.data.address,note:response.data.data.note});
      getAllNotes()
          })
    .catch(error => {
      console.error('Error get note:');
    });

};

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
  Api_website.post(`teachers/notes/${useId}`,data)
    .then(response => {
      console.log('Note update successfully:');
      // const modalElement = document.getElementById('UpdateManagerModal');
      // modalElement.style.display = "none"
      getAllNotes()
          })
    .catch(error => {
      console.error('Error update note:');
    });
};

const [inputUser,setInputUser]=useState({
  address: "",
  note: "",
 
  })

const getUsersFromInput=(e)=>{
  let USER={...inputUser}
  USER[e.target.name]=e.target.value
  setInputUser(USER)
  }
  const [formData, setFormData] = useState({ title: "", note: "" });
  const [arrayContainer, setContainer] = useState([]);
  const [RejectedQuestions, setRejectedQuestions] = useState(1);
  const [AcceptedQuestions, setAcceptedQuestions] = useState(1);
  const [remainingPoints, setRemainingPoints] = useState(0);
  const [totalPointsUsed, setTotalPointsUsed] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 1) setter(value - 1);
  };
 
//**********************************************************************8 */

  const handleNotes = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };  const layoutBackground = useSelector((state) => state.dark.lay);

  const onChange = (newDate) => {
    setDate(newDate);
  };


  const deleteNote = (id) => {
    Api_website.delete(`teachers/notes/${id}`)
    .then(response => {
      console.log('Note deleted successfully');
      getAllNotes()
          })
    .catch(error => {
      console.error('Error deleting note:');
    });

};


const getDataStudentExam = () => {
  Api_website.get('teachers/stat-info')
    .then(response => {
      const responseData = response.data;

      // Check if 'data' exists in the response and has the expected structure
      if (responseData && responseData.data) {
        const { allPoint, allPointUsed, allPointReminder, acceptedQuestion, rejectQuestion } = responseData.data;

        // Update state with the fetched data
        setTotalPoints(allPoint);
        setTotalPointsUsed(allPointUsed);
        setRemainingPoints(allPointReminder);
        setAcceptedQuestions(acceptedQuestion);
        setRejectedQuestions(rejectQuestion);
      } else {
        console.error("Invalid data format: 'data' is not present in the response.");
        setTotalPoints(0);
        setTotalPointsUsed(0);
        setRemainingPoints(0);
        setAcceptedQuestions(0);
        setRejectedQuestions(0);
      
      }
    })
    .catch(error => {
      console.error("Error fetching stat info data:", error);
      setTotalPoints(0);
      setTotalPointsUsed(0);
      setRemainingPoints(0);
      setAcceptedQuestions(0);
      setRejectedQuestions(0);
     
    });
};

  return (
    <>
      <div className="container " style={{ overflow: 'auto', marginTop: '18px', direction: 'rtl', height: 'auto', border: "2px solid purble", borderRadius: "10px", width: "90%", margin: "auto" }}>
      <div className='col-12 mt-3 d-flex align-items-center'>
    <div style={{ width: "5.333333%" }}>
      <img src={main} className="img-fluid " alt="صورة شخصية" style={{ width: '16px', height: '16px' }} />
    </div>
    
    <div className='col-1'>
      <p style={{ margin: '0', padding: "0", color: "#FFFFFF", fontSize: '24px',backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "24px" }}>الرئيسية</p>
    </div>
  </div>
  <div className="row child pt-4 p-0 m-0 mt-3 rounded-4" style={{ width: "100%" }}>
  <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className='box_of_book pt-4 ' style={{ height: "148px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
        </div>
        <div style={{ position: "absolute", bottom: "0", left: "0" }}>
          <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
        </div>
        <div className='d-flex justify-content-center pt-1'>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
            <img src={exam} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
          </div>
        </div>
        <div className='text-center position-relative'>
          <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" ,marginTop:'15px'}}>عدد النقاط المتبقية</p>
          <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
            <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px',marginTop:'15px' }}>
              <p style={{ margin: '0', padding: "0" }}>{remainingPoints}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* صندوق النقاط المستخدمة */}
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className='box_of_book pt-4' style={{ height: "148px", borderRadius: "17.18px", backgroundColor: '#C01F59', position: 'relative' }}>
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <img src={purble_intersect} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
        </div>
        <div style={{ position: "absolute", bottom: "0", left: "0" }}>
          <img src={sec_purble_intersect} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
        </div>
        <div className='d-flex justify-content-center pt-1'>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
            <img src={exam} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
          </div>
        </div>
        <div className='text-center position-relative'>
          <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF",marginTop:'15px' }}>عدد النقاط المستخدمة</p>
          <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
            <div className='pt-11' style={{ backgroundColor: "#1D195D", width: "100px", marginTop:'15px',height: '22.9px', borderRadius: '22.9px' }}>
              <p style={{ margin: '0', padding: "0" }}>{totalPointsUsed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* صندوق الأسئلة المقبولة */}
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className='box_of_book pt-4' style={{ height: "148px", borderRadius: "17.18px", backgroundColor: '#C17011', position: 'relative' }}>
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <img src={sec_yellow_intersect} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
        </div>
        <div style={{ position: "absolute", bottom: "0", left: "0" }}>
          <img src={yellow_intersect} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
        </div>
        <div className='d-flex justify-content-center pt-1'>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
            <img src={test} alt="صورة شخصية" style={{ paddingTop: "9px" }} />
          </div>
        </div>
        <div className='text-center position-relative'>
          <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" }}>عدد الاسئلة المقبولة</p>
          <p style={{ margin: "4px 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" }}> من قبل الموقع</p>
          <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
            <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
              <p style={{ margin: '0', padding: "0" }}>{AcceptedQuestions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* صندوق الأسئلة المرفوضة */}
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className='box_of_book pt-4' style={{ height: "148px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
        <div style={{ position: "absolute", top: "0", right: "0" }}>
          <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
        </div>
        <div style={{ position: "absolute", bottom: "0", left: "0" }}>
          <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
        </div>
        <div className='d-flex justify-content-center pt-1'>
          <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
            <img src={test} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
          </div>
        </div>
        <div className='text-center position-relative'>
          <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" }}>عدد الاسئلة المرفوضة</p>
          <p style={{ margin: "4px 0", fontWeight: "700", fontSize: "12px", color: "#FFFFFF" }}>من قبل الموقع</p>
          <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
            <div  style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
              <p style={{ margin: '0', padding: "0" }}>{RejectedQuestions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>






  </div>
  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

  <div className="col-xl-8 col-md-12">

    <div className="row child pt-4 p-0 m-0 mt-3 rounded-4" style={{ width: "100%", backgroundColor: "#4941A6" }}>
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

    {/* Main Boxes Section */}
    <div className='mt-3 d-flex flex-wrap justify-content-center'>
      {/* Box 1 */}
      <div className='col-lg-3 d-flex justify-content-center col-md-6 col-12 mb-4'>
        <div className='box_of_book ' style={{ height: "127px", width: "117px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
          </div>
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
          </div>
          <div className='d-flex justify-content-center pt-1'>
            <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
              <img src={testt} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
            </div>
          </div>
          <div className='text-center position-relative'>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px" }}>وضع الأسئلة</p>
            <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
              <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
                <Link to="/teacher/CreateQuestation" onClick={()=>setId(2)} style={{ color: 'white', textDecoration: 'none', padding: '8px 12px' }}>اضغط هنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className='col-lg-3 d-flex justify-content-center col-md-6 col-12 mb-4'>
        <div className='box_of_book' style={{ height: "127px", width: "117px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
          </div>
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
          </div>
          <div className='d-flex justify-content-center pt-1'>
            <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
              <img src={cer} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
            </div>
          </div>
          <div className='text-center position-relative'>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px" }}>شهادات التقدير</p>
            <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
              <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
                <Link to="/teacher/CertificationTeacher" onClick={()=>setId(4)} style={{ color: 'white', textDecoration: 'none', padding: '8px 12px' }}>اضغط هنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className='col-lg-3 d-flex justify-content-center col-md-6 col-12 mb-4'>
        <div className='box_of_book' style={{ height: "127px", width: "117px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
          </div>
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
          </div>
          <div className='d-flex justify-content-center pt-1'>
            <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
              <img src={tab} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
            </div>
          </div>
          <div className='text-center position-relative'>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px" }}>جدول المواصفات</p>
            <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
              <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
                <Link to="/teacher/SpecificationTeacher" onClick={()=>setId(6)} style={{ color: 'white', textDecoration: 'none', padding: '8px 12px' }}>اضغط هنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className='col-lg-3 d-flex justify-content-center col-md-6 col-12 mb-4'>
        <div className='box_of_book' style={{ height: "127px", width: "117px", borderRadius: "17.18px", backgroundColor: '#4941A6', position: 'relative' }}>
          <div style={{ position: "absolute", top: "0", right: "0" }}>
            <img src={tringle} alt="صورة شخصية" style={{ width: '53.83px', height: '57.62px' }} />
          </div>
          <div style={{ position: "absolute", bottom: "0", left: "0" }}>
            <img src={sec_tringle} alt="صورة شخصية" style={{ width: '66.42px', height: '61.84px' }} />
          </div>
          <div className='d-flex justify-content-center pt-1'>
            <div style={{ width: "40px", height: "40px", backgroundColor: "#1D195D", borderRadius: "50%", textAlign: "center", position: "relative" }}>
              <img src={op} alt="صورة شخصية" style={{ paddingTop: "7px" }} />
            </div>
          </div>
          <div className='text-center position-relative'>
            <p style={{ margin: "4px 0 0 0", fontWeight: "700", fontSize: "12px" }}>علامات Open Emis</p>
            <div className='d-flex justify-content-center align-items-center position-absolute' style={{ width: "100%", zIndex: '10' }}>
              <div style={{ backgroundColor: "#1D195D", width: "100px", height: '22.9px', borderRadius: '22.9px' }}>
                <Link to="/teacher/OpenEmisTable" onClick={()=>setId(5)} style={{ color: 'white', textDecoration: 'none', padding: '8px 12px' }}>اضغط هنا</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div className="col-xl-3 wraber_123" style={{ overflow: "hidden" }}>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Calendar component or other content */}
      <Calender
        edit={edit}
        Calendar={Calendar}
        onChange={onChange}
        date={date}
        delet={delet}
        plus={plus}
        handleNotes={handleNotes}
        formData={formData}
        arrayContainer={arrayContainer}
        allNotes={allNotes}
        onSelect={onSelect}
        address={address}
        handleGetUpdate={handleGetUpdate}
        handleSubmit={handleSubmit}
        note={note}
        handleNoteChange={handleNoteChange}
        editButtonModal={"#updateAdminModal"}
        deleteButtonModal={"#deleteModalAdminNote"}
      />
    </div>
  </div>

</div>


      </div>

     







    



{/* add note */}
    <div
        className="modal fade managerFade"
        id="addAdminNote"
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
                        required
                        form={form}
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
                      >
                        إلغاء
                      </button>
                      <button  type="submit" className="btn save managerSave" >إضافة</button>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>








{/* edit */}

<div className="modal fade managerFade" 
id="updateAdminModal"
 tabIndex="-1"
  aria-labelledby="addManagerModalLabel"
   aria-hidden="true" >
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
                        required
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
                  <button data-bs-dismiss="modal" type="submit" className="btn save managerSave">تعديل</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* delete modal */}


      <div

className="modal fade DElementFade "
id="deleteModalAdminNote"
tabIndex="-1"
aria-labelledby="deleteElementModalLabel"
aria-hidden="true"
>
<div className="modal-dialog DElementDialog modal-dialog-centered ele_2 ">
  <div className="modal-content DElementContent modal-backdrop1">
    <div className="modal-body DElementBody text-center">
      <img src={imagee} alt="Warning Icon" className="warning-icon" />
      <p className="modal-title DElementTitle" id="deleteElementModalLabel">هل أنت متأكد ؟</p>
      <p className="parag">سيتم حذف </p>
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




    </>
  )
}
