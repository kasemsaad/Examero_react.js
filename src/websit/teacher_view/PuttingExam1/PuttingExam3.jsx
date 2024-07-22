import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
// import Api_dashboard from '../../../utlis/axios_utils_dashboard';
import Api_dashboard from '../../../utlis/axios_utils_websit';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function PuttingExam3(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const Navigate = useNavigate()
  const [subject, setSubject] = useState('المبحث'); 
  const [grade, setGrade] = useState('الصف'); 
  const [fullMark, setFullMark] = useState(''); 
  const [questionCount, setQuestionCount] = useState('');
  const [fileLabel, setFileLabel] = useState('تحميل شعار مدرستك أن وجد '); 
  const [showJordanianLogo, setShowJordanianLogo] = useState(false); 
  const [progress, setProgress] = useState(65);
  const [numberOfQuestions, setNumberOfQuestions] = useState(''); 
  const [numberOfPages, setNumberOfPages] = useState(''); 
  const [showApperanceNotice, setShowApperanceNotice] = useState(false);
  const [AllGroup, setAllGroup] = useState([]);
  const [AllSubject, setAllSubject] = useState([]);
  const [groupId, setGroupId] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await Api_dashboard.get('teachers/groups/selection');
        setAllGroup(response.data.data);
      } catch (error) {
        console.error("Error fetching groups data:", error);
      }
    };

    const fetchSubjects = async () => {
      try {
        const response = await Api_dashboard.get('/teachers/subjects/selection/8');
        setAllSubject(response.data.data);
      } catch (error) {
        console.error("Error fetching subjects data:", error);
      }
    };

    fetchGroups();
    fetchSubjects();
  }, []);

  const handleQuestionCountChange = (e) => {
    setQuestionCount(e.target.value);
  };

  const handleSubjectSelect = (eventKey) => {
    setSubject(eventKey);
  };

  const handleGradeSelect = (eventKey) => {
    setGrade(eventKey);
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
    let doc = localStorage.getItem("doc");
    doc = doc ? JSON.parse(doc) : [];

    const formData = {
      subject,
      grade,
      fullMark,
      questionCount,
      fileLabel,
      showJordanianLogo,
      numberOfQuestions,
      numberOfPages,
      showApperanceNotice,
    };

    doc.push(formData);
    localStorage.setItem("doc", JSON.stringify(doc));

    console.log(formData);
    Navigate("/teacher/PuttingExam4")
  };

  const handleNumberOfQuestionsChange = (e) => {
    setNumberOfQuestions(e.target.value);
  };
  
  const handleNumberOfPagesChange = (e) => {
    setNumberOfPages(e.target.value);
  };
  
  const handleChangeGroup = async (eventKey) => {
    setGrade(eventKey);
    const selectedGroup = AllGroup.find(group => group.name === eventKey);
    if (selectedGroup) {
      setGroupId(selectedGroup.id);
      try {
        const response = await Api_dashboard.get(`/teachers/subjects/selection/${selectedGroup.id}`);
        setAllSubject(response.data.data);
      } catch (error) {
        console.error("Error fetching subjects data:", error);
      }
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
        <span className='header1_putting_exam1'> انشاء الامتحان  </span>
      </div>
      <div className='header-container'>
        <span className='header_putting_exam1'> إدخال بيانات الامتحان</span>
        <div className='header-line'></div>
      </div>

      <Form onSubmit={handleSubmit} className='form_putting_exam3' style={{
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
            <Form.Group controlId="subject">
              <Form.Label><span className='text-danger'> * </span> المبحث</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-subject"
                title={<div className='re'>{subject}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSubjectSelect}
              >
                {Array.isArray(AllSubject) && AllSubject.length > 0 ? (
                  AllSubject.map(({ id, name }) => (
                    <Dropdown.Item key={id} eventKey={name}>
                      <span className="circle arabic"></span> {name}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                )}
              </DropdownButton>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="grade">
              <Form.Label><span className='text-danger'> * </span> الصف</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-grade"
                title={<div className='re'>{grade}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleChangeGroup}
              >
                {Array.isArray(AllGroup) && AllGroup.length > 0 ? (
                  AllGroup.map(({ id, name }) => (
                    <Dropdown.Item key={id} eventKey={name}>
                      <span className="circle arabic"></span>{name}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled>لا توجد مجموعات</Dropdown.Item>
                )}
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
              <div className='apperalogo' style={{
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

        <Row className="mb-3">
          <span className='text-danger'>ملحوظة مهمة :</span>
          <Col xs={12} sm={6}>
            <Form.Group controlId="numberOfQuestions">
              <div className='d-flex justify-content-around'>
                <Form.Label>أجب عن الأسئلة الاتية جميعها وعددها</Form.Label>
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
                    onChange={handleApperanceNoticeNo}
                  />
                </div>
                <div>
                  <Form.Check
                    type="checkbox"
                    id="apperanceNoticeYes"
                    label="نعم"
                    checked={showApperanceNotice}
                    onChange={handleApperanceNoticeYes}
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
            <Link to="/teacher/PuttingExam2">
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

export default PuttingExam3;
