import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function PuttingExam2(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [dayAndDate, setDayAndDate] = useState('');
  const [semester, setSemester] = useState('اختر الفصل الدراسي ');
  const [semesterName, setSemesterName] = useState('');
  const currentYear = new Date().getFullYear();
  const [curriculum, setCurriculum] = useState(` (${currentYear - 1}-${currentYear})`);
  const [directorate, setDirectorate] = useState('إختر اسم الطالبــــ / ـــة ');
  const [examName, setExamName] = useState('');
  const [examDuration, setExamDuration] = useState('');
  const [progress, setProgress] = useState(35);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleDayAndDateChange = (e) => {
    setDayAndDate(e.target.value);
  };
  localStorage.removeItem("preview") 

  const handleSelect = (eventKey, event) => {
    const dropdownButtonId = event.target.closest('.dropdown-menu').previousElementSibling.id;
    switch (dropdownButtonId) {
      case 'dropdown-basic-button-semester':
        setSemester(eventKey);
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
    let doc = localStorage.getItem("doc");
    doc = doc ? JSON.parse(doc) : [];

    const formData = {
      dayAndDate,
      semester: semester,
      curriculum,
      directorate,
      examName,
      examDuration,
      progress,
    };

    if (!doc.length) {
      doc.splice(1, 1, JSON.stringify(formData));
    } else {
      doc.splice(1, 1, JSON.stringify(formData));
    }

    localStorage.setItem("doc", JSON.stringify(doc));
    localStorage.setItem("doc1", JSON.stringify(doc));
    localStorage.setItem("all", "[]" )
    localStorage.setItem("Box", "[]" )
    navigate("/teacher/PuttingExam3");
  };

  const years = [];
  for (let i = 2000; i <= currentYear; i++) {
    years.push(i);
  }

  useEffect(() => {
    backup();
  }, []);

  const backup = () => {
    let jsonArray = [localStorage.getItem("doc1")];
    function parseArray(array) {
      return array.map(item => {
        if (typeof item === 'string') {
          try {
            return JSON.parse(item);
          } catch (e) {
            console.error('Error parsing JSON:', e, 'Raw item:', item);
            return null;
          }
        }
        return item;
      });
    }
    let parsedArray = parseArray(jsonArray);
    if (parsedArray[0] && Array.isArray(parsedArray[0]) && parsedArray[0][1]) {
      const data = JSON.parse(parsedArray[0][1]);
      setTimeout(() => {
        setDayAndDate(data.dayAndDate);
        setSemester(data.semester);
        setCurriculum(data.curriculum);
        setDirectorate(data.directorate);
        setExamName(data.examName);
        setExamDuration(data.examDuration);
      }, 1);
    } else {
      console.error('Parsed array is not valid or does not contain expected data:', parsedArray);
    }
  }

  const validateForm = () => {
    const errorss = {};

    if (!semester || semester === 'اختر الفصل الدراسي ') {
      errorss.semester = 'اختر الفصل الدراسي ';
    }
    if (!examName) {
      errorss.examName = 'أدخل  الصف والشعبة';
    }
    if (!dayAndDate) {
      errorss.dayAndDate = 'أدخل   اليوم والتاريخ';
    }
    if (!directorate || directorate === 'إختر اسم الطالبــــ / ـــة ') {
      errorss.directorate = 'إختر اسم الطالبــــ / ـــة ';
    }
    if (!examDuration) {
      errorss.examDuration = 'أدخل مدة الامتحان';
    }

    if (Object.keys(errorss).length > 0) {
      setErrors(errorss);
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className='py-2'>
        <div className='header-container1' style={{
          backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
          color: layoutBackground === "#0E0A43" ? "white" : "black",
          fontSize: "18px"
        }}>
          <img src={putting} alt="Icon" className='header1teacherview-icon' />
          <span className='header1_putting_exam1'> انشاء الامتحان </span>
        </div>
        <div className='header-container'>
          <span className='header_putting_exam1'> إدخال بيانات الامتحان</span>
          <div className='header-line'></div>
        </div>

        <Form onSubmit={handleFormSubmit} className='form_putting_exam2' style={{
          backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "#DADADA",
          color: layoutBackground === "#0E0A43" ? "white" : "black",
          fontSize: "18px"
        }}>
          <ProgressBar now={progress} />

          <div className='header-container'>
            <span className='header3_putting_exam1' style={{
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
                  title={<div className='re'>{semester==="1"?"الفصل الدراسي الأول":semester==="2"?"الفصل الدراسي الثاني":"اختر الفصل الدراسي"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={handleSelect}
                >
                  <Dropdown.Item className='text-white' eventKey="1" onClick={() => setSemesterName(" الفصل الدراسي الأول")}>
                    <span className="circle arabic"></span> الفصل الدراسي الأول
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="2" onClick={() => setSemesterName(" الفصل الدراسي الثاني")}>
                    <span className="circle english"></span> الفصل الدراسي الثاني
                  </Dropdown.Item>
                </DropdownButton>
                {errors.semester && <Form.Text className='text-danger'>{errors.semester}</Form.Text>}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="curriculum">
                <Form.Label><span className='text-danger'> * </span> العام الدراسي</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-academicYear"
                  title={
                    <div className='re'>
                      {curriculum || "أختر العام الدراسي"}
                      <img src={dropdownIcon} alt="Icon" className='dropdown-icon' />
                    </div>
                  }
                  onSelect={handleSelect}
                >
                  <div className="scrollable-dropdown-list">
                    {years.map((year, index) => (
                      <Dropdown.Item className='text-white' key={index} eventKey={` ( ${year - 1} - ${year} )`}>
                        <span className="circle arabic"></span>  ( {year - 1} - {year} )
                      </Dropdown.Item>
                    ))}
                  </div>
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
                  placeholder="أدخل اسم الصف والشعبة ( مثال : التاسع : أ , ب , ج )"
                />
                {errors.examName && <Form.Text className='text-danger'>{errors.examName}</Form.Text>}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="dayAndDate">
                <Form.Label><span className='text-danger'> * </span> اليوم والتاريخ</Form.Label>
                <Form.Control
                  type="date"
                  value={dayAndDate}
                  onChange={handleDayAndDateChange}
                />
                {errors.dayAndDate && <Form.Text className='text-danger'>{errors.dayAndDate}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} sm={6}>
              <Form.Group controlId="studentName">
                <Form.Label><span className='text-danger'> * </span> اسم الطالبـــ / ـــة</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-studentName"
                  title={<div className='re'>{directorate || " إختر اسم الطالبــــ / ـــة :"}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={handleSelect}
                >
                  <Dropdown.Item className='text-white' eventKey="اسم الطالب : ">
                    <span className="circle arabic"></span> اسم الطالب :
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="اسم الطالبة : ">
                    <span className="circle english"></span> اسم الطالبة :
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="اسم الطالبـــ / ــــة : ">
                    <span className="circle english"></span> اسم الطالبـــ / ــــة :
                  </Dropdown.Item>
                </DropdownButton>
                {errors.directorate && <Form.Text className='text-danger'>{errors.directorate}</Form.Text>}
              </Form.Group>
            </Col>
            <Col xs={12} sm={6}>
              <Form.Group controlId="examDuration">
                <Form.Label><span className='text-danger'> * </span> مدة الامتحان</Form.Label>
                <Form.Control
                  type="number"
                  value={examDuration}
                  onChange={(e) => setExamDuration(e.target.value)}
                  placeholder="أدخل مدة الامتحان ( مثال : 1 ساعة و 30 دقيقة فقط )"
                />
                {errors.examDuration && <Form.Text className='text-danger'>{errors.examDuration}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row>
          </Row>
          <Row className="mb-3">
            <Col className="text-start">
              <Link to="/teacher/PuttingExam1">
                <Button className='btn_putting_exam2_bfor' type="button">
                  السابق
                </Button>
              </Link>
              <Button className='btn_putting_exam2_after' type="submit">
                التالي
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default PuttingExam2;
