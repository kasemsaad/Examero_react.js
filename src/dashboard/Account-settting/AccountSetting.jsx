import React, { useState } from 'react'
import "./Account.css"
import MyTable from "./.././../common/Table/Table.jsx"
import personal from "./../../assets/image/IMG_20231104_171844_696.jpg"
import home from "./../../assets/image/material-symbols_person-outline (1).svg"
import toast, { Toaster } from 'react-hot-toast';

import success from "./../../assets/image/Vector (1).svg"
import lock from "./../../assets/image/mdi_password-outline.svg"





function AccountSetting() {

  const [alert , Setalert]=useState(false)
  const [PasswordAlert , SetPasswordAlert]=useState(false)

  

  const HandleSubmit = (event) => {
    event.preventDefault();
    {
      toast('Here is your toast.');
    }
    Setalert(true)
    setTimeout(()=>{
      Setalert(false)
    },2000)
  };





  
  const HandleSavePassword = (event) => {
    event.preventDefault();
   
    SetPasswordAlert(true)
    setTimeout(()=>{
      SetPasswordAlert(false)
    },2000)
  };


  return (

    <>
      <div className="container" style={{ overflow: 'auto', marginTop: '10px', direction: 'rtl', height: 'auto' }}>
        <div className=" w-100 h-100 pb-4" style={{ height: '60vh', marginTop: '80px', position: 'relative', borderRadius: '24px', border: '1px #4941A6 solid' }}>
          <div style={{ position: 'absolute', top: '-12px', right: '20px', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
            <img style={{ objectFit: 'cover' }} src={personal} width="100%" height="100%" alt="Profile" />
          </div>
          <form onSubmit={(e) => HandleSubmit(e)}>
            <div style={{ paddingTop: '100px' }} className="container">
              <div className="d-flex align-items-center" style={{ direction: 'rtl', marginBottom: '20px' }}>
                <div className="d-flex align-items-center " style={{width:"13vw"}}>
                  <img src={home} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '30px', height: '30px' }} />
                  <h3 className="ml-3 mx-2  personal_inf" style={{ margin: "0", padding: "0", color: "#A6A0F4" }}>البيانات الشخصية</h3>
                </div>
                {
                  alert ?
                <div class=" alert-primary " style={{ backgroundColor: "#ACEADF", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px" }}>
                  <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                    <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                    <div>
                      <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px",marginRight:"10px" }}>تم حفظ التغييرات بنجاح</p>
                    </div>
                  </div>
                </div>
               :"" }

              </div>



              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="name">الاسم</label>
                  </div>
                  <div className="input_size">
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="email">عنوان البريد</label>
                  </div>
                  <div className="input_size">
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="familyName">اسم العائلة</label>
                  </div>
                  <div className="input_size">
                    <input type="text" className="form-control" id="familyName" />
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="email">البريد الألكتروني</label>
                  </div>
                  <div className="input_size">
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="governorate">المحافظة</label>
                  </div>
                  <div className="input_size col-md-10 col-sm-7">
                    <input type="text" className="form-control" id="governorate" />
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="birthDate">تاريخ الميلاد</label>
                  </div>
                  <div className="input_size">
                    <input type="text" className="form-control" id="birthDate" />
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
      <form action="" onSubmit={(e)=>HandleSavePassword(e)}>
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

        </div>
        <div className="row mt-4">
          <div className="col-md-4 form-group">
            <label htmlFor="currentPassword" >كلمة المرور الحالية</label>
            <input type="password" id="currentPassword" className="form-control" style={{marginTop:"7px"}}/>
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="newPassword">كلمة المرور الجديدة</label>
            <input type="password" id="newPassword" className="form-control" style={{marginTop:"7px"}} />
          </div>
          <div className="col-md-4 form-group">
            <label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</label>
            <input type="password" id="confirmPassword" className="form-control" style={{marginTop:"7px"}} />
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
export default AccountSetting;
