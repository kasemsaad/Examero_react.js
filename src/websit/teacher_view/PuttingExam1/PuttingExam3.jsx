import React, { useState } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
import './PuttingExam1.css';

import { useSelector } from 'react-redux';

function PuttingExam3(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);

  const [subject, setSubject] = useState(''); 
  const [grade, setGrade] = useState(''); 
  const [fullMark, setFullMark] = useState(''); 
  const [questionCount, setQuestionCount] = useState('');
  const [fileLabel, setFileLabel] = useState('تحميل شعار مدرستك أن وجد '); 
  const [showJordanianLogo, setShowJordanianLogo] = useState(false); 
  const [progress, setProgress] = useState(65);
  const [numberOfQuestions, setNumberOfQuestions] = useState(''); 
  const [numberOfPages, setNumberOfPages] = useState(''); 
  const [showApperanceNotice, setShowApperanceNotice] = useState(false);

  const handleQuestionCountChange = (e) => {
    setQuestionCount(e.target.value);
  };

  const handleSelect = (eventKey, event) => {
    if (event.target.id === 'dropdown-basic-button-subject') {
      setSubject(eventKey);
    } else if (event.target.id === 'dropdown-basic-button-grade') {
      setGrade(eventKey);
    }
  };

  // Handle file change event
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileLabel(selectedFile.name);
    } else {
      setFileLabel('قم بتحميل دفتر العلامات الخاص بالصف الذي ادخلته');
    }
  };

  const handleJordanianLogoYes = () => {
    setShowJordanianLogo(true);
  };

  const handleJordanianLogoNo = () => {
    setShowJordanianLogo(false);
  };

  const handleApperanceNoticeYes = () => {
    setShowApperanceNotice(true);
  };

  const handleApperanceNoticeNo = () => {
    setShowApperanceNotice(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleNumberOfQuestionsChange = (e) => {
    setNumberOfQuestions(e.target.value);
  };
  
  const handleNumberOfPagesChange = (e) => {
    setNumberOfPages(e.target.value);
  };

  return (
    <>
      <div className='header-container1' style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
        <img src={putting} alt="Icon" className='header1teacherview-icon' />
        <span className='header1_putting_exam1'> انشاء الامتحان  </span>
      </div>
      <div className='header-container'>
        <span className='header_putting_exam1'>   إدخال بيانات الامتحان</span>
        <div className='header-line'></div>
      </div>

      <Form onSubmit={handleSubmit} className='form_putting_exam3'style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "#DADADA",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
        <ProgressBar now={progress} />

        <div className='header-container'>
          <span className='header3_putting_exam1'style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#4941A6" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>بيانات ترويسة الامتحان</span>
        </div>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="subject">
              <Form.Label><span className='text-danger'> * </span> المبحث</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-subject"
                title={<div className='re'>{subject || " أختر المبحث"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="اللغة العربية">
                  <span className="circle arabic"></span> اللغة العربية
                </Dropdown.Item>
                <Dropdown.Item eventKey="اللغة الانجليزية">
                  <span className="circle english"></span> اللغة الانجليزية
                </Dropdown.Item>
                <Dropdown.Item eventKey="الرياضيات">
                  <span className="circle english"></span> الرياضيات
                </Dropdown.Item>
                <Dropdown.Item eventKey="العلوم">
                  <span className="circle english"></span> العلوم
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="grade">
              <Form.Label><span className='text-danger'> * </span> الصف</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-grade"
                title={<div className='re'>{grade || "أختر الصف"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="الصف الأول">
                  <span className="circle arabic"></span> الصف الأول
                </Dropdown.Item>
                <Dropdown.Item eventKey="الصف الثاني">
                  <span className="circle english"></span> الصف الثاني
                </Dropdown.Item>
                <Dropdown.Item eventKey="الصف الثالث">
                  <span className="circle english"></span> الصف الثالث
                </Dropdown.Item>
                <Dropdown.Item eventKey="الصف الرابع">
                  <span className="circle english"></span> الصف الرابع
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="fullMark">
              <Form.Label><span className='text-danger'> * </span> علامة الامتحان الكاملة </Form.Label>
              <Form.Control
                type="text"
                value={fullMark}
                onChange={(e) => setFullMark(e.target.value)}
                placeholder="أدخل علامة الامتحان الكاملة (مثال: 120)"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="questionCount">
              <Form.Label><span className='text-danger'> * </span> عدد أسئلة الامتحان الرئيسية</Form.Label>
              <Form.Control
                type="number"
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
                placeholder="أدخل عدد أسئلة الامتحان الرئيسية"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="formFileUpload">
              <div className="d-flex align-items-center iciio">
                <Form.Label className="mr-2">شعار المدرسة</Form.Label>
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
          <Col xs={12} sm={6}>
            <Form.Group controlId="jordanianLogoCheckboxes">
              <div className='apperalogo'style={{
        backgroundColor: layoutBackground === "#0E0A43" ? "#4941A6" : "#ECECEC",
        color: layoutBackground === "#0E0A43" ? "white" : "black",
        fontSize: "18px"
      }}>
                <Form.Label className="mr-2">إظهار شعار المئوية الأردنية</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="jordanianLogoNo"
                    label="لا"
                    checked={!showJordanianLogo}
                    onChange={handleJordanianLogoNo}
                  />
                </div>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="jordanianLogoYes"
                    label="نعم"
                    checked={showJordanianLogo}
                    onChange={handleJordanianLogoYes}
                  />
                </div>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="">
     <span className='text-danger'>ملحوظة مهمة :</span>
      <Col xs={12} sm={6}>
      
            <Form.Group controlId="numberOfQuestions">
            <div className='d-flex justify-content-around '>
              <Form.Label>  أجب عن الأسئلة الاتية جميعها وعددها</Form.Label>
              <Form.Control
                type="text"
                value={numberOfQuestions}
                onChange={handleNumberOfQuestionsChange}
              />
            
            </div>
            </Form.Group>
     
            </Col>
            <Col xs={12} sm={6}>

            <Form.Group controlId="numberOfPages">
            <div className='d-flex justify-content-around'>
              <Form.Label>علماً أن عدد صفحات الامتحان</Form.Label>
              <Form.Control
                type="text"
                value={numberOfPages}
                onChange={handleNumberOfPagesChange}
              />
            </div>
            </Form.Group>
            </Col>

            
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={8}>
            <Form.Group controlId="apperanceNotice">
              <div className='apperance_notice'>
                <Form.Label className="mr-2">ظهور هذه الملحوظة بترويسة الامتحان</Form.Label>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="apperanceNoticeNo"
                    label="لا"
                    checked={!showApperanceNotice}
                    onChange={() => setShowApperanceNotice(false)}
                  />
                </div>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="apperanceNoticeYes"
                    label="نعم"
                    checked={showApperanceNotice}
                    onChange={() => setShowApperanceNotice(true)}
                  />
                </div>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
        <Col xs={12} sm={6}>
    <div className='text-warning'>يتم العمل الآن على إضافة أشكال مختلفة للترويسة ..</div>
  </Col>
  <Col xs={12} sm={6} className="text-start">
            <Button className='btn_putting_exam2_bfor' type="button">
              السابق
            </Button>
            <Button className='btn_putting_exam2_after' type="submit">
              التالي
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PuttingExam3;
