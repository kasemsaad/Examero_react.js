import React, { useEffect, useState } from 'react'
import "./editStudentProfaile.css"
// import MyTable from "../../../common/Table/Table.jsx"
// import personal from "../../../assets/image/IMG_20231104_171844_696.jpg"
import home from "../../../assets/image/material-symbols_person-outline (1).svg"

import success from "../../../assets/image/Vector (1).svg"
import lock from "../../../assets/image/mdi_password-outline.svg"
import Api_website from '../../../utlis/axios_utils_websit'
// import Api_Dashboard from '../interceptor/interceptorDashboard.jsx'
// import Api_Website from '../../../utlis/axios_utils_websit.jsx';
// import photo from "./../../assets/image/man 2.svg"
// import editPencil from "./../../assets/image/Ellipse 202.svg"







function EditStudentProfaile() {
  const [alert , Setalert]=useState(false)
  const [alerterror , Setalerterror]=useState(false)

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
 
  // fn to get user and handle onchange to make 2 waybinding 
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
  },[])
  
  const getRefreshUser = async ()=>{
    await Api_website.get('/students/refresh').then((response)=>{
      let user= response.data.User
      setInputUser(user)
     }).catch((err)=>{
      console.log(err);
     })
  }


//  fn to post object which take from inputs 
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


    await Api_website.post('/students/update', payload, {
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

 
//********This all about showing data in inputs and get user and showing it in inputs ************************* */

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

    await Api_website.post('/students/change-password',paswwordInputs).then((response)=>{
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
  
      <img src={`http://127.0.0.1:8000/assets/Student/${inputUser.media?.name}`} id="image" alt="Upload Preview" />


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
            <div style={{ paddingTop: '50px' }} className="container">
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
                    <label htmlFor="name">الاسم</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control"  name='firstName'  placeholder='هشام محمد' required value={inputUser.firstName}/>
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="phone"> رقم الهاتف</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="number" className="form-control" name='phone_number'  placeholder='01112222' value={inputUser.phone_number}/>
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="familyName">اسم العائلة</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control" id="familyName"  name='lastName' required placeholder='حسن' value={inputUser.lastName}/>
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="email">البريد الألكتروني</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="email" className="form-control" id="email" placeholder='hesham@gmail.com' name='email' required value={inputUser.email}/>
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                {/* <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="governorate">المحافظة</label>
                  </div>
                  <div className="input_size col-md-10 col-sm-7">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control"  name='governorate' required placeholder='المنيا' value={inputUser.governorate}/>
                  </div>
                </div> */}

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="birthDate">تاريخ الميلاد</label>
                  </div>
                  <div className="input_size">
                    <input onChange={(e)=>getUsersFromInput(e)} type="text" className="form-control" required placeholder='21/2/1800' name='date_of_birth' value={inputUser.date_of_birth}/>
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
            <label htmlFor="currentPassword" >كلمة المرور الحالية</label>
            <input onChange={getInputPasswor} type="password"  name='current_password' className="form-control" style={{marginTop:"7px"}} required placeholder='***************'/>
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="newPassword">كلمة المرور الجديدة</label>
            <input onChange={getInputPasswor}  type="password" name='password' id="newPassword" className="form-control" style={{marginTop:"7px"}}  required placeholder='***************'/>
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</label>
            <input onChange={getInputPasswor}  type="password"  name='password_confirmation'  className="form-control" style={{marginTop:"7px"}} placeholder='***************' required />
          </div>
          <div className="col-md-12 mt-3 " style={{ direction: "ltr" }}>
            <button type='submit' className="btn btn-danger">حفظ التغييرات</button>
          </div>
        </div>
      </div>
      </form>


    </>
  )
}
export default EditStudentProfaile;