import React, { useEffect,useMemo, useState } from 'react'
import "./teacherProfile.css"
import { Modal, Button } from 'react-bootstrap';

import MyTable from '../../../common/Table/Table';
import home from "../../../assets/image/material-symbols_person-outline (1).svg"
import Homeicon from "../../../assets/icons/Home/Frame 119.svg"
import eye from '../../../assets/image/register and login image/hugeicons_view (1).svg'
import success from "../../../assets/image/Vector (1).svg"
import lock from "../../../assets/image/mdi_password-outline.svg"
import Api_website from '../../../utlis/axios_utils_websit'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function TeacherProfile() {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [alert , Setalert]=useState(false)
  const [alerterror , Setalerterror]=useState(false)
  // const [data, setInfo] = useState([]);



  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);


  const getDataStudentExam = () => {
    Api_website.get('/teachers/plans/details')
        .then(response => {
            setData(response.data.data);
        })
        .catch(error => {
            console.error("Error fetching plans data:", error);
        });
};

const handleClose = () => setShow(false);
    const handleShow = (planId) => {
        const planDetails = data.find(plan => plan.id === planId);
        setSelectedPlan(planDetails);
        setShow(true);
    };






  const [PasswordAlert , SetPasswordAlert]=useState(false)
  const [inputUser,setInputUser]=useState({
    firstName: "",
    lastName: "",
    email: "",
    governorate: "",
    date_of_birth: '',
    phone_number: "",
    image: "" ,
  })
  const [errormesssage,Seterrormessage]=useState('')
 
  const getUsersFromInput=(e)=>{
    let USER={...inputUser}
    USER[e.target.name]=e.target.value
    setInputUser(USER)
  }
  
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setInputUser({ ...inputUser, image: file });
    }
  }
  useEffect(()=>{
    getRefreshUser()
    getDataStudentExam()

  },[])

  const getRefreshUser = async ()=>{
    document.body.style.removeProperty('overflow');

    await Api_website.get('/teachers/refresh').then((response)=>{
      let user= response.data.user
      setInputUser(user)
     }).catch((err)=>{
      console.log(err);
     })
  }


  const HandleSubmit =async (event) => {

    event.preventDefault();
    const payload = {
      first_name: inputUser.firstName,
      last_name: inputUser.lastName,
      date_of_birth: inputUser.date_of_birth,
      phone_number: inputUser.phone_number,
      email: inputUser.email
    };

    if (inputUser.image) {
      payload.image = inputUser.image;
    }
    console.log(payload.image)

    document.body.style.removeProperty('overflow');

    await Api_website.post('/teachers/update', payload, {
      
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          Setalert(true);
          setTimeout(() => {
            Setalert(false);
          }, 2000);
          getRefreshUser(   )
        }).catch((err) => {
          Seterrormessage(err.response.data.message);
          Setalerterror(true);
          setTimeout(() => {
            Seterrormessage(false);
          }, 2000);
        });
  };

 

const [paswwordInputs,SetpasswordInput]=useState({
  current_password:'',
  password:'',
  password_confirmation:''
})
const [errorMessagePass,SetErrorMessagePass]=useState(false)
const [responseErrorMesage,SetresponseErrorMesage]=useState('')
const getInputPasswor=(e)=>{

  let inputPass={...paswwordInputs}
  inputPass[e.target.name]=e.target.value
  SetpasswordInput(inputPass)

}

  const HandleSavePassword =async (event) => {
    event.preventDefault();
    document.body.style.removeProperty('overflow')
    await Api_website.post('/teachers/change-password',paswwordInputs).then((response)=>{
      SetPasswordAlert(true)
      setTimeout(()=>{
        SetPasswordAlert(false)
      },2000)}).catch((err)=>{
        console.log(err.response.data.message)
        SetErrorMessagePass(true)
        SetresponseErrorMesage(err.response.data.message)
        setTimeout(()=>{
          SetErrorMessagePass(false)
        },2000)

    })
   
  };


  return (

    <>
    
      <div className="container" style={{ overflow: 'auto', marginTop: '10px', direction: 'rtl', height: 'auto' }}>
        <div className=" w-100 h-100 pb-4" style={{ height: '60vh', marginTop: '80px', position: 'relative', borderRadius: '24px', border: '1px #4941A6 solid' }}>
        <form onSubmit={(e) => HandleSubmit(e)} encType="multipart/form-data">

        <div>
      <div className="upload">
  
      <img src={` http://127.0.0.1:8000/assets/Teacher/${inputUser.media?.name}`} id="image" alt="Upload Preview" />

        <div className="rightRound" id="upload">
          <input type="file"   accept=".jpg, .jpeg, .png" name='image' onChange={handleImageChange} />
          <i className="fa fa-camera"></i>
        </div>

        <div className="leftRound" id="cancel" style={{ display: 'none' }}>
          <i className="fa fa-times"></i>
        </div>
        
        <div className="rightRound" id="confirm" style={{ display: 'none' }}>
          <i className="fa fa-check"></i>
        </div>
      </div>
    </div>         
            <div  className="container">
              <div className="d-flex align-items-center" style={{ direction: 'rtl', marginBottom: '20px' }}>
                <div className="d-flex align-items-center " style={{width:"13vw"}}>
                  <img src={home} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '30px', height: '30px' }} />
                  <h3 className="ml-3 mx-2  personal_inf" style={{ margin: "0", padding: "0", color: "#A6A0F4" }}>البيانات الشخصية</h3>
                </div>
                {
                  alert ?
                <div className=" alert-primary " style={{ backgroundColor: "#ACEADF", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px" }}>
                  <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                    <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                    <div>
                      <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px",marginRight:"10px" }}>تم حفظ التغييرات بنجاح</p>
                    </div>
                  </div>
                </div>
               :"" }

               { errormesssage?
                 <div className=" alert-danger " style={{ backgroundColor: "#F68C8C", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px" }}>
                 <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                   <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                   <div>
                     <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px",marginRight:"10px" }}>{errormesssage}</p>
                   </div>
                 </div>
               </div>
               :""}

              </div>



              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="name"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>الاسم</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control"  name='firstName'  placeholder='ادخل الاسم' required value={inputUser.firstName}/>
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="phone"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}> رقم الهاتف</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="number" className="form-control" name='phone_number'  placeholder='ادخل رقم الهاتف' value={inputUser.phone_number}/>
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="familyName"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>اسم العائلة</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control" id="familyName"  name='lastName' required placeholder='ادخل اسم العائله' value={inputUser.lastName}/>
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="email"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>البريد الألكتروني</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="email" className="form-control" id="email" placeholder='ادخل البريد الاكتروني' name='email' required value={inputUser.email}/>
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
             

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="birthDate"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>تاريخ الميلاد</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="date" className="form-control" required placeholder='dd/mm/yyy' name='date_of_birth' value={inputUser.date_of_birth}/>
                  </div>
                </div>
                <div className="col-md-12 mt-3 button_wraper " style={{ direction: "ltr", marginLeft: "10px" }}>
                  <button type='submit' className="btn btn-danger" style={{ marginLeft: "30px" }}>حفظ</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>




      <form  onSubmit={(e)=>HandleSavePassword(e)}>
      <div className="password-card p-4 " style={{
        height: 'auto',
        marginTop: '50px',
        borderRadius: '24px',
        border: '2px #4941A6 solid',
        backgroundColor: "",
        marginBottom: "20px"
      }}>
       <div style={{direction:'rtl' ,margin:"0",padding:"0",display:'flex',alignItems:"center"}}>
        <div>
       <img src={lock} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '16px', height: '15px' ,color:"#A6A0F4"}} />
        </div>
       <h4 className="" style={{marginRight:"8px",color:"#A6A0F4",padding:"0",marginBottom:"0",fontSize:"18px",fontWeight:"600px"}}>كلمة المرور</h4>
       {
                  PasswordAlert ?
                <div class=" alert-primary " style={{ backgroundColor: "#ACEADF", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px",marginRight:"20px",
              }}>
                  <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                    <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                    <div>
                      <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px",marginRight:"10px" }}>تم حفظ التغييرات بنجاح</p>
                    </div>
                  </div>
                </div>
               :"" }


{
                  errorMessagePass ?
                <div class=" alert-primary " style={{ backgroundColor: "#F68C8C", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px",marginRight:"20px",
              }}>
                  <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                    <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                    <div>
                      <p style={{ margin: "0", padding: "0", color: "white", fontSize: "14px", fontWeight: "600px",marginRight:"10px" }}>{responseErrorMesage} </p>
                    </div>
                  </div>
                </div>
               :"" }

        </div>
        <div className="row mt-4">
          <div className="col-md-4 form-group">
            <label htmlFor="currentPassword"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>كلمة المرور الحالية</label>
            <input onChange={getInputPasswor} type="password"  name='current_password' className="form-control" style={{marginTop:"7px"}} required placeholder='***************'/>
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="newPassword"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>كلمة المرور الجديدة</label>
            <input onChange={getInputPasswor}  type="password" name='password' id="newPassword" className="form-control" style={{marginTop:"7px"}}  required placeholder='***************'/>
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="confirmPassword"  style={{
                                color: layoutBackground === "#0E0A43" ? "white" : "black"}}>تأكيد كلمة المرور الجديدة</label>
            <input onChange={getInputPasswor}  type="password"  name='password_confirmation'  className="form-control" style={{marginTop:"7px"}} placeholder='***************' required />
          </div>
          <div className="col-md-12 mt-3 " style={{ direction: "ltr" }}>
            <button type='submit' className="btn btn-danger">حفظ التغييرات</button>
          </div>
        </div>
      </div>
      </form>

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
          </Link>

       
          <table className='tabelstudent' style={{ width: "100%" }}>
                <thead>
                    <tr style={{
                        color: layoutBackground === "#0E0A43" ? "#FE4F60" : "black",
                    }}>
                        <th>اسم الباقة</th>
                        <th>عدد النقاط</th>
                        <th>النقاط المستخدمة</th>
                        <th>النقاط المتاحة</th>
                        <th>التفاصيل</th>
                    </tr>
                </thead>
                <tbody style={{
                    color: layoutBackground === "#0E0A43" ? "white" : "black"
                }}>
                    {Array.isArray(data) && data.length > 0 ? data.map(({ id, plan, points, point_used }, index) => (
                        <tr key={index} style={{
                            backgroundColor: index % 2 === 0 ? (layoutBackground === "#0E0A43" ? "#1d195d" : "#FCFCFC") : (layoutBackground === "#0E0A43" ? "#090631" : "#DADADA")
                        }}>
                            <td>{plan.name}</td>
                            <td>{points}</td>
                            <td>{point_used}</td>
                            <td>{points - point_used}</td>
                            <td>
                                <img
                                    className='p-1'
                                    style={{ background: '#120E4D', cursor: 'pointer' }}
                                    src={eye}
                                    alt="View details"
                                    onClick={() => handleShow(id)}
                                />
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header className='flex-column-reverse' style={{ backgroundColor: '#1D195D', borderBottom: '1px solid #A6A0F4' }}>
        <Modal.Title style={{ color: '#FF8A00' }}>تفاصيل صرف النقاط</Modal.Title>
        <button type="button" className="btn-close custom-close " style={{color:'red'}} aria-label="Close" onClick={handleClose}></button>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#1D195D', color: 'white' }}>
        {selectedPlan ? (
          <>
            <p>{selectedPlan.plan.description}</p>
            <p>Status: {selectedPlan.plan.status === 1 ? 'Active' : 'Inactive'}</p>

            <table className='tabelstudent' style={{ width: "90%", color: 'white' }}>
              <thead style={{ borderBottom: '1px solid #A6A0F4' }}>
                <tr>
                  <th style={{ color: '#FE4F60', borderBottom: '1px solid #A6A0F4' }}>الخدمة المقدمة</th>
                  <th style={{ color: '#FE4F60', borderBottom: '1px solid #A6A0F4' }}>النقاط المستخدمة</th>
                  <th style={{ color: '#FE4F60', borderBottom: '1px solid #A6A0F4' }}>التاريخ</th>
                </tr>
              </thead>

              <tbody>
                {selectedPlan.details.map(detail => (
                  <tr key={detail.id}>
                    <td>{detail.type[1]}</td>
                    <td>{detail.point}</td>
                    <td>{new Date(detail.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer className='justify-content-center' style={{ backgroundColor: '#1D195D' }}>
        <Button variant="secondary" onClick={handleClose} style={{ borderRadius: '30px', color: '#FE4F60', border: '2px solid #FE4F60', backgroundColor: '#1D195D' }}>
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>

        </div>
        </div>

    </>
  )
}
export default TeacherProfile;
