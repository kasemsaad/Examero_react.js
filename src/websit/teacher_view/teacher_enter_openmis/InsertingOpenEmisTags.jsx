import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_name', username);
    formData.append('password_site', password);
    formData.append('group', className);
    formData.append('subject', researcherName);
    formData.append('phone_number', phoneNumber);
    if (selectedFile) {
      formData.append('document', selectedFile);
    }

    Api_website.post('/teachers/open-emis', formData)
      .then(response => {
        console.log('تم إرسال البيانات بنجاح:', response.data);
      })
      .catch(error => {
        console.error('حدث خطأ أثناء إرسال البيانات:', error);
      });
  };

  return (
    <>
      <div className='header-container1' style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
        <img src={enter} alt="Icon" className='header1teacherview-icon' />
        <span className='header1_enter_data_teach_view'>إدخال علامات Open Emis</span>
      </div>
      <div className='header-container'>
        <span className='header_enter_data_teach_view'>إدخال بيانات دفتر العلامات</span>
        <div className='header-line'></div>
      </div>
      <Form onSubmit={handleSubmit} className='form_enter_data_teach_view p-6' style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#DADADA",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
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
