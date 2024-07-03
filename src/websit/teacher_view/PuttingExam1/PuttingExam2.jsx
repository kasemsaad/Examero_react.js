import React, { useState } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';

function PuttingExam2(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [dayAndDate, setDayAndDate] = useState('');
  const [examFormat, setExamFormat] = useState('');
  const [curriculum, setCurriculum] = useState('');
  const [directorate, setDirectorate] = useState('');
  const [examName, setExamName] = useState('');
  const [examDuration, setExamDuration] = useState(''); // Placeholder for exam duration state
  const [progress, setProgress] = useState(35); // Placeholder for progress state

  const handleDayAndDateChange = (e) => {
    setDayAndDate(e.target.value);
  };

  const handleSelect = (eventKey, event) => {
    switch (event.target.id) {
      case 'dropdown-basic-button-semester':
        setExamFormat(eventKey);
        break;
      case 'dropdown-basic-button-academicYear':
        setCurriculum(eventKey);
        break;
      case 'dropdown-basic-button-studentName':
        setDirectorate(eventKey);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

      <Form onSubmit={handleSubmit} className='form_putting_exam2'style={{
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
            <Form.Group controlId="semester">
              <Form.Label><span className='text-danger'> * </span> الفصل الدراسي</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-semester"
                title={<div className='re'>{examFormat || "أختر الفصل الدراسي"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="الفصل الدرسي الأول ">
                  <span className="circle arabic"></span> للفصل الدرسي الأول
                </Dropdown.Item>
                <Dropdown.Item eventKey="الفصل الدرسي الثاني ">
                  <span className="circle english"></span> للفصل الدرسي الثاني
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="academicYear">
              <Form.Label><span className='text-danger'> * </span>  العام الدراسي</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-academicYear"
                title={<div className='re'>{curriculum || "أختر العام الدراسي"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey="للعام ( 2025 - 2026 )">
                  <span className="circle arabic"></span> للعام ( 2025 - 2026 )
                </Dropdown.Item>
                <Dropdown.Item eventKey="للعام ( 2025 - 2026 )">
                  <span className="circle english"></span> للعام ( 2025 - 2026 )
                </Dropdown.Item>
                <Dropdown.Item eventKey=" للعام ( 2026 - 2027 )">
                  <span className="circle english"></span> للعام ( 2026 - 2027 )
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="className">
              <Form.Label><span className='text-danger'> * </span> الصف والشعبة</Form.Label>
              <Form.Control
                type="text"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                placeholder="أدخل اسم الصف والشعبة ( مثال : التاسع : أ  , ب , ج )  "
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="dayAndDate">
              <Form.Label><span className='text-danger'> * </span>  اليوم والتاريخ </Form.Label>
              <Form.Control
                type="date"
                value={dayAndDate}
                onChange={handleDayAndDateChange}
                placeholder="أدخل اسم اليوم والتاريخ  ( مثال : الخميس  12\8\2024 )"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="studentName">
              <Form.Label><span className='text-danger'> * </span> اسم الطالبـــ / ـــة</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-studentName"
                title={<div className='re'>{directorate || "  إختر اسم الطالبــــ \ ـــة :"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSelect}
              >
                <Dropdown.Item eventKey=" سليم">
                  <span className="circle arabic"></span> سليم
                </Dropdown.Item>
                <Dropdown.Item eventKey=" احمد">
                  <span className="circle english"></span> احمد
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="examDuration">
              <Form.Label><span className='text-danger'> * </span> مدة الامتحان </Form.Label>
              <Form.Control
                type="text" 
                value={examDuration}
                onChange={(e) => setExamDuration(e.target.value)}
                placeholder="أدخل مدة الامتحان ( مثال  :  1 ساعة و 30 دقيقة فقط )"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row >
 
</Row>
<Row className="mb-3">
  <Col className="text-start">
  
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

export default PuttingExam2;
