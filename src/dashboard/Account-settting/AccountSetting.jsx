import React, { useState } from 'react'
import "./Account.css"
import MyTable from "./.././../common/Table/Table.jsx"
import personal from "./../../assets/image/IMG_20231104_171844_696.jpg"
import home from "./../../assets/image/material-symbols_person-outline (1).svg"





 function AccountSetting() {
 

  return (
   
    <>
 <div
      className="container"
      style={{
        overflow: 'auto',
        marginTop: '10px',
        direction: 'rtl',
        height: 'auto',
      }}
    >
      <div
        className=" w-100 h-100 pb-4"
        style={{
          height: '60vh',
          marginTop: '80px',
          position: 'relative',
          borderRadius: '24px',
          border: '2px #4941A6 solid',
          backgroundColor:""
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'blue',
            overflow: 'hidden',
          }}
        >
          <img
            style={{ objectFit: 'cover' }}
            src={personal}
            width="100%"
            height="100%"
            alt="Profile"
          />
        </div>
<form action="index.html">
        <div style={{ paddingTop: '100px' }} className="container">
          <div
            className="d-flex align-items-center"
            style={{ direction: 'rtl', marginBottom: '20px' }}
          >
            <div className="d-flex align-items-center">
              <img
                src={home}
                className="img-fluid rounded-circle"
                alt="Profile"
                style={{ width: '30px', height: '30px' }}/>
              <h3 className="ml-3 mx-2 text-muted"style={{margin:"0"}}>البيانات الشخصية</h3>
            </div>
          </div>



          <div className="row" style={{ justifyContent: 'space-between',}}>
            <div
              className="col-lg-6 row "
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">الاسم</label>
              </div>
              <div className="col-lg-7  col-xs-8 col-sm-8  name_input" style={{marginRight:"21px"}}>
                <input type="text" className="form-control" id="name" />
              </div>
            </div>

            <div
              className="col-lg-6  row wrab_phone"
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">رقم الهاتف</label>
              </div>
              <div className=" col-xl-7 col-md-8 col-sm-8  phone_input" style={{marginRight:"26px"}}>
                <input type="text" className="form-control" id="name" />
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
            <div
              className="col-lg-6 row"
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">اسم العائله</label>
              </div>
              <div className="col-lg-7 col-md-8 col-sm-8  family_input ">
                <input type="text" className="form-control" id="name" />
              </div>
            </div>

            <div
              className="col-lg-6 col-sm-12 row email_inp_wraper"
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">البريد الالكتروني</label>
              </div>
              <div className=" col-lg-7 col-md-8 col-sm-8   email_input">
                <input type="text" className="form-control" id="name" />
              </div>
            </div>
          </div>

          <div className="row " style={{ justifyContent: 'space-between', marginTop: '33px'}}>
            <div
              className="col-lg-6 row wraber_country"
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">المحافظه</label>
              </div>
              <div className="col-lg-7 col-md-8  col-sm-8 country_input" style={{marginRight:"5px"}}>
                <input type="text" className="form-control" id="name" />
              </div>
            </div>

            <div
              className="col-lg-6 col-sm-12 row wraber_birth "
              style={{ alignItems: 'center' }}
            >
              <div className="col-auto">
                <label htmlFor="name">تاريخ الميلاد</label>
              </div>
              <div className="col-lg-7 col-md-8 col-sm-8 birth_input" style={{marginRight:"21px"}}>
                <input type="text" className="form-control" id="name" />
              </div>
            </div>
          </div>
          </div>
          <div className="mt-4 button_margin col-11  "
            style={{ direction: 'ltr', padding: '0 12px',  justifyContent:"flex-start"}}>
            <div className='align_btn' style={{marginLeft:"9px"}}>
              <button type='submit' className="btn btn-danger">حفظ</button>
            </div>
          </div>
          </form>
        </div>
      </div>




      <div className="password-card p-4 " style={{
          height: '25vh',
          marginTop: '50px',
          borderRadius: '24px',
          border: '2px #4941A6 solid',
          backgroundColor:"",
          marginBottom:"20px"
        }}>
    <h4 className="text-center">كلمة المرور</h4>
    <div className="row">
        <div className="col-md-4 form-group">
            <label htmlFor="currentPassword">كلمة المرور الحالية</label>
            <input type="password" id="currentPassword" className="form-control" />
        </div>
        <div className="col-md-4 form-group">
            <label htmlFor="newPassword">كلمة المرور الجديدة</label>
            <input type="password" id="newPassword" className="form-control" />
        </div>
        <div className="col-md-4 form-group">
            <label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</label>
            <input type="password" id="confirmPassword" className="form-control" />
        </div>
        <div className="col-md-12 mt-3 "style={{direction:"ltr"}}>
            <button className="btn btn-danger">حفظ التغييرات</button>
        </div>
    </div>
</div> 










    </>
  )
}
export default AccountSetting ;
