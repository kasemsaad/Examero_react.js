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
import ImageUploader from './imgUpload';


function PuttingExam3(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const Navigate = useNavigate()
  const [groupid, setgroupid] = useState(''); 
  const [droupname, setdroupname] = useState(' اختر الصف '); 
  const [subject, setSubject] = useState('المبحث اختر'); 
  const [Subjectid, setSubjectid] = useState(" ");
  const [Subjectname, setSubjectname] = useState("  اختر المبحث");
  const [grade, setGrade] = useState(''); 
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
  const [errors, setErrors] = useState({});
  const [planname, setplanname] = useState("الباقات");
  const [planid, setplanid] = useState("");
  const [planss, setplans] = useState("");
  const [preview, setPreview] = useState('');
  const [file, setfile] = useState("")


  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await Api_dashboard.get('teachers/groups/selection');
        setAllGroup(response.data.data);
        back()

      } catch (error) {
        console.error("Error fetching groups data:", error);
      }
    };

    const fetchSubjects = async () => {
      try {
        const response = await Api_dashboard.get('/teachers/subjects/selection/groupId');
        setAllSubject(response.data.data);
      } catch (error) {
        console.error("Error fetching subjects data:", error);
      }
    };

    fetchGroups();
    fetchSubjects();
    plans()
  }, []);
  const plans = () => {
    Api_dashboard.get('/teachers/plans')
      .then((response) => {
        setplans(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
      });
  }
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
      grade:groupid,
      gradename:droupname,
      subject:Subjectid,
      subjectname:Subjectname,
      fullMark,
      questionCount,
      fileLabel,
      showJordanianLogo,
      numberOfQuestions,
      numberOfPages,
      showApperanceNotice,  
      idGroup:groupId,
      idSubjectid:Subjectid,
      planid,
      planname,
    };

    if (!doc.length) {
      doc.splice(2,2, JSON.stringify(formData));
    } else {
        doc.splice(2,2, JSON.stringify(formData));
    }
    
    localStorage.setItem("doc", JSON.stringify(doc));
    localStorage.setItem("doc1", JSON.stringify(doc));
    localStorage.setItem("all", "[]" )
    localStorage.setItem("Box", "[]" )
     Navigate("/teacher/PuttingExam4");
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
 
const back=()=>{
  let jsonArray = [
    localStorage.getItem("doc1")
  ];
  
  function parseArray(array) {
    return array.map(item => (typeof item === 'string' ? JSON.parse(item) : item));
  }
  
  let parsedArray = parseArray(jsonArray);
  
  if (parsedArray[0] && Array.isArray(parsedArray[0]) && parsedArray[0][2]) {
  
      const data = JSON.parse(parsedArray[0][2]);
     
        setSubjectid(data.subject);
        setSubjectname(data.subjectname);
        setgroupid(data.grade);
        setdroupname(data.gradename);
        setFullMark(data.fullMark);
        setQuestionCount(data.questionCount);
        setFileLabel(data.fileLabel);
        setShowJordanianLogo(data.showJordanianLogo);
        setNumberOfQuestions(data.numberOfQuestions);
        setNumberOfPages(data.numberOfPages);
        setShowApperanceNotice(data.showApperanceNotice);
        // console.log(data.examFormat);
      
     
  } else {
    console.error("No valid JSON data found in parsedArray[0]");
    }
}




const validateForm = () => {
  const errorss = {};


     
  if (!groupid || groupid === 'اختر الصف') {
    errorss.groupid = 'اختر الصف';
  }
      if (!subject || subject === 'المبحث اختر') {
        errorss.subject = 'اختر المبحث';
      }
      if (!fullMark) {
        errorss.fullMark = 'ادخل علامة الامتحان الكاملة';
      }
      if (!questionCount) {
        errorss.questionCount = 'ادخل عدد أسئلة الامتحان الرئيسية';
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


      const reader = new FileReader();

      reader.onloadend = () => {
        const preview = reader.result;
        setPreview(preview);
        localStorage.setItem('preview', preview);
      };
      if (file) {
        reader.readAsDataURL(file);
      }

    };

    const handleFileChangee = (event) => {
      const file = event.target.files[0];
      setfile(file)
    }

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

      <Form onSubmit={handleFormSubmit} className='form_putting_exam3' style={{
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
            <Form.Group controlId="grade">
              <Form.Label><span className='text-danger'> * </span> الصف</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-grade"
                title={<div className='re'>{droupname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleChangeGroup}
              >
                {Array.isArray(AllGroup) && AllGroup.length > 0 ? (
                  AllGroup.map(({ id, name }) => (
                    <Dropdown.Item className='text-white' key={id} eventKey={name} 
                    onClick={()=>{
                      setgroupid(id);
                      setdroupname(name)}} >
                      <span className="circle arabic"></span>{name}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
                )}
              </DropdownButton>
                   {errors.groupid && <Form.Text className='text-danger'>{errors.groupid}</Form.Text>}

            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="subject">
              <Form.Label><span className='text-danger'> * </span> المبحث</Form.Label>
              <DropdownButton
                id="dropdown-basic-button-subject"
                title={<div className='re'>{Subjectname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                onSelect={handleSubjectSelect}
              >
                {Array.isArray(AllSubject) && AllSubject.length > 0 ? (
                  AllSubject.map(({ id, name }) => (
                    <Dropdown.Item className='text-white' key={id} eventKey={name} onClick={() => {setSubjectid(id); setSubjectname(name)} } > 
                      <span className="circle arabic"></span> {name}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
                )}
              </DropdownButton>
              {errors.subject && <Form.Text className='text-danger'>{errors.subject}</Form.Text>}

            </Form.Group>
          </Col>

          
        </Row>

        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="fullMark">
              <Form.Label><span className='text-danger'> * </span> علامة الامتحان الكاملة </Form.Label>
              <Form.Control
                type="number"
                value={fullMark}
                onChange={(e) => setFullMark(e.target.value)}
                placeholder="أدخل علامة الامتحان الكاملة (مثال: 120)"
              />
                              {errors.fullMark && <Form.Text className='text-danger'>{errors.fullMark}</Form.Text>}
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
            {errors.questionCount && <Form.Text className='text-danger'>{errors.questionCount}</Form.Text>}
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* <Col xs={12} sm={6}>
            <Form.Group controlId="formFileUpload">
              <div className="d-flex align-items-center iciio">
                <Form.Label className="mr-2">شعار المدرسة</Form.Label>
              </div>
              <div className="custom-file-input-wrapper">
                <Form.Control
                 type="file" onChange={handleFileChangee}
                  className="file-input"
                />
                <div className="custom-file-label">
                  <div>{fileLabel}</div>
                  <div><img src={loadIcon} alt="Upload Icon" className="load-icon" /></div>
                </div>
              </div>
            </Form.Group>
          </Col> */}
          <Col xs={12} sm={6}>
              <Form.Group controlId="lesson">
                <Form.Label><span className='text-danger'>  </span> الباقه</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{planname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                >
                  {Array.isArray(planss) && planss.length > 0 ? (
                    planss.map(({ id, plan }) => (
                      <Dropdown.Item
                        className='text-white'
                        key={id}
                        eventKey={plan.name}
                        onClick={() => {
                          setplanid(plan.id);
                          setplanname(plan.name);
                        }}
                      >
                        <span className="circle arabic"></span> {plan.name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item className='text-white' disabled>لا توجد باقات</Dropdown.Item>
                  )}
                </DropdownButton>
                {errors.lesson && <Form.Text className='text-danger'>{errors.lesson}</Form.Text>}

              </Form.Group>
            </Col>
          <Col xs={12} sm={6}>
              <Form.Group controlId="lesson">
                <Form.Label><span className='text-danger'>  </span> الباقه</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{planname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                >
                  {Array.isArray(planss) && planss.length > 0 ? (
                    planss.map(({ id, plan }) => (
                      <Dropdown.Item
                        className='text-white'
                        key={id}
                        eventKey={plan.name}
                        onClick={() => {
                          setplanid(plan.id);
                          setplanname(plan.name);
                        }}
                      >
                        <span className="circle arabic"></span> {plan.name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item className='text-white' disabled>لا توجد باقات</Dropdown.Item>
                  )}
                </DropdownButton>
                {errors.lesson && <Form.Text className='text-danger'>{errors.lesson}</Form.Text>}

              </Form.Group>
            </Col>
          <Col xs={12} sm={6}>
              <Form.Group controlId="lesson">
                <Form.Label><span className='text-danger'>  </span> الباقه</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{planname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                >
                  {Array.isArray(planss) && planss.length > 0 ? (
                    planss.map(({ id, plan }) => (
                      <Dropdown.Item
                        className='text-white'
                        key={id}
                        eventKey={plan.name}
                        onClick={() => {
                          setplanid(plan.id);
                          setplanname(plan.name);
                        }}
                      >
                        <span className="circle arabic"></span> {plan.name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item className='text-white' disabled>لا توجد باقات</Dropdown.Item>
                  )}
                </DropdownButton>
                {errors.lesson && <Form.Text className='text-danger'>{errors.lesson}</Form.Text>}

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
          {/* <div  className='me-4' >
          <Form.Label><span className='text-danger'> * </span>شعار المدرسة</Form.Label>
            <input type="file" onChange={handleFileChangee} />
          </div> */}
        </Row>

        <Row className="mb-3">
          <span className='text-danger'>ملحوظة مهمة :</span>
          <Col xs={12} sm={6}>
            <Form.Group controlId="numberOfQuestions">
              <div className='d-flex justify-content-'>
                <Form.Label  className='d-inline-block' >أجب عن الأسئلة الاتية جميعها وعددها</Form.Label>
                <Form.Control style={{width:"6rem" ,height:"3rem"}}
                  type="number"
                  value={numberOfQuestions}
                  onChange={handleNumberOfQuestionsChange}
                  hidden={true}
                />
              </div>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="numberOfPages">
              <div className='d-flex justify-content-around'>
              <Form.Label className='d-inline-block' >علماً أن عدد صفحات الامتحان</Form.Label>
              <Form.Control style={{width:"6rem" ,height:"3rem"}}
                  type="number"
                  value={numberOfPages}
                  onChange={handleNumberOfPagesChange}
                  hidden={true}

                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col xs={12} sm={8}>
            <Form.Group controlId="apperanceNotice">
              <div className='apperance_notice'>
                <Form.Label className="m-0">ظهور هذه الملحوظة بترويسة الامتحان</Form.Label>
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
            {/* <div className='text-warning'>يتم العمل الآن على إضافة أشكال مختلفة للترويسة ..</div> */}
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
