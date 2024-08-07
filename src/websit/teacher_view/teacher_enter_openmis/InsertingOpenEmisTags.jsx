import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Api_website from '../../../utlis/axios_utils_websit.jsx';
import enter from '../../../assets/icons/teacherview/lucide_file-input.svg';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
import './InsertingOpenEmisTags.css';
import { useSelector } from 'react-redux';

function InsertingOpenEmisTags(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [researcherName, setResearcherName] = useState('');
  const [className, setClassName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fileLabel, setFileLabel] = useState('قم بتحميل دفتر العلامات الخاص بالصف الذي ادخلته');
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [idOfPointSelected, SetidOfPointSelected] = useState('');

  const layoutBackground = useSelector((state) => state.dark.lay);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileLabel(file.name);
    } else {
      setFileLabel('قم بتحميل دفتر العلامات الخاص بالصف الذي ادخلته');
    }
  };
  const [activePlanData, SetactivePlanData] = useState([]);
  useEffect(() => {
    getConnect();
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  setErrorMessage(''); // Reset error message

  // Validate fields
  if (!username) {
      setErrorMessage('يرجى إدخال اسم المستخدم.');
      setTimeout(() => {
          setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
  }
  if (!password) {
      setErrorMessage('يرجى إدخال كلمة المرور.');
      setTimeout(() => {
          setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
  }
  if (!className) {
      setErrorMessage('يرجى إدخال اسم الصف.');
      setTimeout(() => {
          setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
  }
  if (!researcherName) {
      setErrorMessage('يرجى إدخال اسم المبحث.');
      setTimeout(() => {
          setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
  }
  if (!phoneNumber) {
      setErrorMessage('يرجى إدخال رقم الهاتف.');
      setTimeout(() => {
          setErrorMessage('');
      }, 3000); // Clear error message after 3 seconds
      return;
  }
 
  // Prepare form data
  const formData = new FormData();
  formData.append('user_name', username);
  formData.append('password_site', password);
  formData.append('group', className);
  formData.append('subject', researcherName);
  formData.append('phone_number', phoneNumber);
  if (idOfPointSelected) {
      formData.append('plan_id', idOfPointSelected);
  }
  formData.append('document', selectedFile);

  // Submit data to API
  Api_website.post('/teachers/open-emis', formData)
    .then(response => {
      console.log('تم إرسال البيانات بنجاح:', response.data);
      setSuccessMessage('تم إرسال البيانات بنجاح'); // Assuming response.data.message contains the success message
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds

      // Clear form data
      setUsername('');
      setPassword('');
      setResearcherName('');
      setClassName('');
      setPhoneNumber('');
      setFileLabel('قم بتحميل دفتر العلامات الخاص بالصف الذي ادخلته');
      setSelectedFile(null);
    })
    .catch(error => {
      console.error('حدث خطأ أثناء إرسال البيانات:', error);
      if (error.response) {
        // Handle error response from server
        const responseData = error.response.data;
        const errorMessage = responseData.message || 'حدث خطأ أثناء إرسال البيانات.';
        setErrorMessage(errorMessage);
        setTimeout(() => {
          setErrorMessage('');
        }, 3000); // Clear error message after 3 seconds
      }
    });
};
  const getConnect = async () => {
    await Api_website.get(`/teachers/plans`)
        .then((response) => {
            SetactivePlanData(response.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
const getPoint = (e) => {
  const selectedValue = e.target.value;
  SetidOfPointSelected(selectedValue);
};
  return (
    <>
      <div className='header-container1 pt-3' style={{"borderRadius": '10%',
        backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
        <img src={enter} alt="Icon" className='header1teacherview-icon' />
        <span className='header1_enter_data_teach_view mt-5' style={{fontSize: '24px'}}>إدخال علامات Open Emis</span>
      </div>
      <div className='header-container '>
        <span className='header_enter_data_teach_view'>إدخال بيانات دفتر العلامات</span>
        <div className='header-line'></div>
      </div>
      <Form onSubmit={handleSubmit} className='form_enter_data_teach_view p-6' style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#DADADA",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <Row className="mb-3 mt-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="formUsername">
              <Form.Label>اسم المستخدم</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ادخل اسم المستخدم"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="formPassword">
              <Form.Label>كلمة المرور</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="إدخل كلمة السر الخاصة بك في موقع Open Emis"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="formClassName">
              <Form.Label>اسم الصف</Form.Label>
              <Form.Control
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="أدخل اسم الصف هنا (مثال: الصف السادس ب)"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="formResearcherName">
              <Form.Label>اسم المبحث</Form.Label>
              <Form.Control
                type="text"
                value={researcherName}
                onChange={(e) => setResearcherName(e.target.value)}
                placeholder="ادخل اسم المبحث"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control
                type="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="أدخل رقم الهاتف هنا (مثال: 0785860423)"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="formFileUpload">
              <div className="d-flex align-items-center iciio">
                <Form.Label className="mr-2">تحميل دفتر العلامات (صور / pdf)</Form.Label>
              </div>
              <div className="custom-file-input-wrapper">
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  className="file-input"
                />
                <div className="custom-file-label">
                  <div>{fileLabel}</div>
                  <div><img src={loadIcon} alt="Upload Icon" className="load-icon" /></div>
                </div>
              </div>
             
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">

<Col xs={12} sm={6}>
<label htmlFor="">اسم الباقه</label>
                  <select
                      id="dataSelect"
                      className="form-select"
                      onChange={getPoint}
                      
                  >
                      <option value="" disabled selected>اختر اسم الباقه</option>
                      {activePlanData.map((item, index) => (
                          <option key={index} value={item.plan.id}>
                              {item.plan.name}
                          </option>
                      ))}
                  </select>
              </Col>
                
              </Row> 
        <Row>
          <Col className="text-start">
            <Button className='btn_enter_data_teach_view pl-3 pr-3' type="submit">
              إرسال
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default InsertingOpenEmisTags;
