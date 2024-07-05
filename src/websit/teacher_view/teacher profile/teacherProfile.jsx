import React, { useEffect, useState } from 'react';
import "./teacherProfile.css";
import personal from "./../../../assets/image/IMG_20231104_171844_696.jpg";
import success from "./../../../assets/image/Vector (1).svg";
import lock from "./../../../assets/image/mdi_password-outline.svg";

import fra from "./../../../assets/icons/teacherview/Vector.svg";
import Api_website from '../../../utlis/axios_utils_websit.jsx';
import MyTable from "../../../common/Table/Table.jsx";

function TeacherProfile() {
  let header = {
                                                      
    name1: " اسم الباقة",
    name2: "  الاشتراكات الحالية",
    name3: "  عدد النقاط  ",
    name4: " النقاط المستخدمة ",
    name5: "  النقاط المتاحة",
    name6: "تفاصيل",


    
  };

  let body = [
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
  ];

  let icon = { eye: true};
  const [alert, setAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [inputUser, setInputUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date_of_birth: '',
    phone_number: "",
    image: "" 
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [passwordInputs, setPasswordInputs] = useState({
    current_password: '',
    password: '',
    password_confirmation: ''
  });
  const [errorMessagePass, setErrorMessagePass] = useState(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState('');

  useEffect(() => {
    getRefreshUser();
  }, []);

  const getRefreshUser = async () => {
    try {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        throw new Error('Token not found');
      }
  
      const response = await Api_website.get('/teachers/refresh', {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
  
      const { created_at, ...userWithoutCreatedAt } = response.data.user;
      setInputUser(userWithoutCreatedAt);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };
  
  const handleChange = (e) => {
    setInputUser({ ...inputUser, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordInputs({ ...passwordInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // نسخ كائن المستخدم بدون حقل created_at والتأكد من استخدام الأسماء الصحيحة للأعمدة
    const { created_at, fullName, ...updatedUser } = {
      first_name: inputUser.firstName,
      last_name: inputUser.lastName,
      email: inputUser.email,
      date_of_birth: inputUser.date_of_birth ? new Date(inputUser.date_of_birth).toISOString().split('T')[0] : '',
      phone_number: inputUser.phone_number,
      image: inputUser.image
    };
  
    try {
      const response = await Api_website.post('/teachers/update', updatedUser);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 2000);
    }
  };
  
  const handleSavePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await Api_website.post('/teachers/change-password', passwordInputs);
      setPasswordAlert(true);
      setTimeout(() => {
        setPasswordAlert(false);
      }, 2000);
    } catch (err) {
      console.error("Error changing password:", err);
      setResponseErrorMessage(err.response.data.message);
      setErrorMessagePass(true);
      setTimeout(() => {
        setErrorMessagePass(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="container" style={{ overflow: 'auto', marginTop: '10px', direction: 'rtl', height: 'auto' }}>
        <div className="w-100 h-100 pb-4" style={{ height: '60vh', marginTop: '80px', position: 'relative'}}>
          <div style={{  top: '-12px', right: '20px', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
            <img style={{ objectFit: 'cover' }} src={personal} width="100%" height="100%" alt="Profile" />
          
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ paddingTop: '10px' }} className="container">
              <div className="d-flex align-items-center" style={{ direction: 'rtl', marginBottom: '20px' }}>
                {alert &&
                  <div className="alert-primary" style={{ backgroundColor: "#ACEADF", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px" }}>
                    <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                      <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                      <div>
                        <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px", marginRight: "10px" }}>تم حفظ التغييرات بنجاح</p>
                      </div>
                    </div>
                  </div>
                }
                {errorAlert &&
                  <div className="alert-danger" style={{ backgroundColor: "#F68C8C", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px" }}>
                    <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                      <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                      <div>
                        <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px", marginRight: "10px" }}>{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                }
              </div>

              <div className="row" style={{ justifyContent: 'space-between' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="fullName">الاسم</label>
                  </div>
                  <div className="input_size">
                    <input onChange={handleChange} type="text" className="form-control" name='firstName' placeholder='هشام محمد' required value={inputUser.firstName} />
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="phone"> رقم الهاتف</label>
                  </div>
                  <div className="input_size">
                    <input onChange={handleChange} type="text" className="form-control" name='phone_number' placeholder='01112222' value={inputUser.phone_number} />
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="familyName">اسم العائلة</label>
                  </div>
                  <div className="input_size">
                    <input onChange={handleChange} type="text" className="form-control" id="familyName" name='lastName' required placeholder='حسن' value={inputUser.lastName} />
                  </div>
                </div>

                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="email">البريد الألكتروني</label>
                  </div>
                  <div className="input_size">
                    <input onChange={handleChange} type="email" className="form-control" id="email" placeholder='hesham@gmail.com' name='email' required value={inputUser.email} />
                  </div>
                </div>
              </div>

              <div className="row Wraber_ele" style={{ justifyContent: 'space-between', marginTop: '33px' }}>
                <div className="col-lg-6 top_input_margin row" style={{ alignItems: 'center' }}>
                  <div className="label_size">
                    <label htmlFor="birthDate">تاريخ الميلاد</label>
                  </div>
                  <div className="input_size">
                    <input onChange={handleChange} type="text" className="form-control" required placeholder='21/2/1800' name='date_of_birth' value={inputUser.date_of_birth} />
                  </div>
                </div>
                <div>
                <hr style={{marginTop:'2rem',marginBottom:'2rem'}}></hr>

                </div>

                <div className="col-md-12 mt-1 button_wraper d-flex justify-content-center " style={{ direction: "ltr", marginLeft: "10px" }}>
                  <button type='submit' className="btn btn-danger">حفظ التعديلات</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <form onSubmit={handleSavePassword}>
        <div className="container password-card p-4 " style={{
          height: 'auto',
          borderRadius: '24px',
          backgroundColor: "",
          marginBottom: "20px"
        }}>
          <div style={{ direction: 'rtl', margin: "0", padding: "0", display: 'flex', alignItems: "center" }}>
            <div>
              <img src={lock} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '16px', height: '15px', color: "#A6A0F4" }} />
            </div>
            <h4 className="" style={{ marginRight: "8px", color: "#A6A0F4", padding: "0", marginBottom: "0", fontSize: "18px", fontWeight: "600px" }}>كلمة المرور</h4>
            {passwordAlert &&
              <div className="alert-primary" style={{ backgroundColor: "#ACEADF", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px", marginRight: "20px" }}>
                <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                  <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                  <div>
                    <p style={{ margin: "0", padding: "0", color: "#000000", fontSize: "14px", fontWeight: "600px", marginRight: "10px" }}>تم حفظ التغييرات بنجاح</p>
                  </div>
                </div>
              </div>
            }

            {errorMessagePass &&
              <div className="alert-primary" style={{ backgroundColor: "#F68C8C", height: "41px", display: "flex", alignItems: "center", borderRadius: "10px", marginRight: "20px" }}>
                <div className='d-flex ' style={{ alignItems: "center", marginRight: "17px", width: '30vw' }}>
                  <img src={success} className="img-fluid rounded-circle" alt="صورة شخصية" style={{ width: '10px', height: '10px' }} />
                  <div>
                    <p style={{ margin: "0", padding: "0", color: "white", fontSize: "14px", fontWeight: "600px", marginRight: "10px" }}>{responseErrorMessage}</p>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className=" row mt-4">
            <div className="col-md-4 form-group">
              <label htmlFor="currentPassword">كلمة المرور الحالية</label>
              <input onChange={handlePasswordChange} type="password" name='current_password' className="form-control" style={{ marginTop: "7px" }} required placeholder='أدخل كلمة المرور الحالية هنا' />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="newPassword">كلمة المرور الجديدة</label>
              <input onChange={handlePasswordChange} type="password" name='password' id="newPassword" className="form-control" style={{ marginTop: "7px" }} required placeholder='أدخل كلمة المرور الجديدة هنا' />
            </div>
            <div className="col-md-4 form-group">
              <label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</label>
              <input onChange={handlePasswordChange} type="password" name='password_confirmation' className="form-control" style={{ marginTop: "7px" }} placeholder='أعد أدخل كلمة المرور الجديدة هنا' required />
            </div>
            <div>
                <hr style={{marginTop:'2rem',marginBottom:'2rem'}}></hr>

                </div>
            <div className="col-md-12 mt-1  d-flex justify-content-center " style={{ direction: "ltr" }}>
              <button type='submit' className="btn btn-danger"> حفظ كلمة السر الجديدة</button>
            </div>
          </div>
        </div>
      </form>
      
      <div className="MyTable  container">
            <div className='d-flex'> 
            <div>
              <img src={fra} className="img-fluid " style={{ width: '20px', height: '20px', color: "#A6A0F4" }} />
            </div>
            <h4 className="" style={{ marginRight: "8px", color: "#A6A0F4", padding: "0", marginBottom: "0", fontSize: "18px", fontWeight: "600px" }}> تفاصيل الباقة</h4>
            </div>
          <MyTable header={header} body={body} icons={icon} />
        </div>
    </>
  );
}

export default TeacherProfile;

