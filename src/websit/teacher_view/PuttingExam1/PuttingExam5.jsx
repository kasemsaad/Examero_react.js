

// // export default PuttingExam;
// import React, { useState, useEffect } from 'react';
// import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
// import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
// import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
// import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
// import Api_dashboard from '../../../utlis/axios_utils_websit';
// import './PuttingExam1.css';
// import { useSelector } from 'react-redux';
// import { Link, Navigate, useNavigate } from 'react-router-dom';

// function PuttingExam3(props) {
//   const layoutBackground = useSelector((state) => state.dark.lay);
//   const navigate = useNavigate();

//   const [showApperanceNotice, setShowApperanceNotice] = useState(false);
//   const [appearanceNoticeText, setAppearanceNoticeText] = useState('أوتوماتيكي');

//   const [groupId, setGroupId] = useState(null);
//   const [unit, setUnit] = useState('اختر الوحدة');
//   const [lesson, setLesson] = useState('اختر الدرس');
//   const [questionType, setQuestionType] = useState('اختر نوع السؤال');
//   const [levelQuestion, setLevelQuestion] = useState('اختر مستوى السؤال');
//   const [typingQuestion, setTypingQuestion] = useState('اختر صيغة السؤال');
//   const [markQuestion, setMarkQuestion] = useState('');
//   const [addressQuestion, setAddressQuestion] = useState('اختر عنوان السؤال الرئيسي');

//   const [progress, setProgress] = useState(90);
//   const [allUnit, setAllUnit] = useState([]);
//   const [allLesson, setAllLesson] = useState([]);
//   const [typeQuestion, setTypeQuestion] = useState([]);
//   const [Untis, setUntis] = useState([]);
//   const [subjectidd, setsubjectid] = useState([]);
//   const [errors, setErrors] = useState({});

//   const questions = async () => {
//     try {
//       const response = await Api_dashboard.get('/teachers/questions-type/selection');
//       setTypeQuestion(response.data.data);
//     } catch (error) {
//       console.error("Error fetching question types data:", error);
//     }
//   };
//   const ids=()=>{
  
//     let jsonArray = [
//       localStorage.getItem("doc1")
//     ];
  
//     function parseArray(array) {
//       return array.map(item => {
//         if (typeof item === 'string') {
//           try {
//             return JSON.parse(item);
//           } catch (e) {
//             console.error('Error parsing JSON:', e, 'Raw item:', item);
//             return null;
//           }
//         }
//         return item;
//       });
//     }
  
//     let parsedArray = parseArray(jsonArray);
//     if (parsedArray[0] && parsedArray[0][2]) {
//       setsubjectid(JSON.parse(parsedArray[0][2]).idSubjectid);
//     }else{
//       navigate('/teacher/PuttingExam1');    }
//   }
//   const units = async () => {
//     try {
//       const response = await Api_dashboard.get(`/teachers/units/selection/${subjectidd}`);
//       setAllUnit(response.data.data);
//     } catch (error) {
//       console.error("Error fetching units data:", error);
//     }
//   };

//   const lessons = async () => {
//     try {
//       const response = await Api_dashboard.get(`/teachers/lessons/selection/${Untis}`);
//       setAllLesson(response.data.data);

//     } catch (error) {
//       console.error("Error fetching lessons data:", error);
//     }
//   };
//   useEffect(() => {
//     // Group();
//     // subjects();
//     ids();
//     units();
//     lessons();
//     questions();
//   }, [ids]);

//   const handleApperanceNoticeYes = () => {
//     setShowApperanceNotice(true);
//     setAppearanceNoticeText('يدوي');
//   };

//   const handleApperanceNoticeNo = () => {
//     setShowApperanceNotice(false);
//     setAppearanceNoticeText('أوتوماتيكي');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       // subject,
//       // grade,
//       unit,
//       lesson,
//       questionType,
//       levelQuestion,
//       typingQuestion,
//       markQuestion,
//       addressQuestion,
//       appearanceNotice: appearanceNoticeText
//     };
// console.log(formData)
//     // Add any additional form data as needed

//     // Example: send the form data to an API
//     // Api_dashboard.post('/your/api/endpoint', formData)
//     //   .then((response) => {
//     //     console.log(response.data);
//     //     navigate('/teacher/PuttingExam4');
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error submitting form data:', error);
//     //   });

//   };
//       const errorss = {};
//     if (!unit || unit === 'اختر الوحدة') {
//       errors.unit = 'Please select a unit';
//     }
//     if (!lesson || lesson === 'اختر الدرس') {
//       errors.lesson = 'Please select a lesson';
//     }
//     if (!questionType || questionType === 'اختر نوع السؤال') {
//       errors.questionType = 'Please select a question type';
//     }
//     if (!levelQuestion || levelQuestion === 'اختر مستوى السؤال') {
//       errors.levelQuestion = 'Please select a level question';
//     }
//     if (!typingQuestion || typingQuestion === 'اختر صيغة السؤال') {
//       errors.typingQuestion = 'Please select a typing question';
//     }
//     if (!markQuestion) {
//       errors.markQuestion = 'Please enter a mark question';
//     }
//     if (!addressQuestion) {
//       errors.addressQuestion = 'Please enter an address question';
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }
//   return (
//     <>
//       <div className='py-2'>
//         <div className='header-container1' style={{
//           backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
//           color: layoutBackground === "#0E0A43" ? "white" : "black",
//           fontSize: "18px"
//         }}>
//           <img src={putting} alt="Icon" className='header1teacherview-icon' />
//           <span className='header1_putting_exam1'> انشاء الامتحان  </span>
//         </div>
//         <div className='header-container'>
//           <span className='header_putting_exam1'> إعداد اسئلة الامتحان</span>
//           <div className='header-line'></div>
//         </div>

//         <Form onSubmit={handleSubmit} className='form_putting_exam3' style={{
//           backgroundColor: layoutBackground === "#0E0A43" ? "#1D195D" : "#DADADA",
//           color: layoutBackground === "#0E0A43" ? "white" : "black",
//           fontSize: "18px"
//         }}>
//           <ProgressBar now={progress} />

//           <div className='header-container'>
//             <span className='header3_putting_exam1' style={{
//               backgroundColor: layoutBackground === "#0E0A43" ? "#4941A6" : "#ECECEC",
//               color: layoutBackground === "#0E0A43" ? "white" : "black",
//               fontSize: "18px"
//             }}>بيانات ترويسة الامتحان</span>
//           </div>

//           <Row className="mb-3">
        
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="unit">
//                 <Form.Label><span className='text-danger'> * </span> الوحدة</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{unit}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setUnit(e)}
//                 >
//                   {Array.isArray(allUnit) && allUnit.length > 0 ? (
//                     allUnit.map(({ id, name }) => (
//                       <Dropdown.Item className='text-white' key={id} eventKey={name} onClick={() => setUntis(id) }>
//                         <span className="circle arabic"></span> {name}
//                       </Dropdown.Item>
//                     ))
//                   ) : (
//                     <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
//                   )}
//                 </DropdownButton>
//               </Form.Group>
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="lesson">
//                 <Form.Label><span className='text-danger'> * </span> الدرس</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{lesson}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setLesson(e)}
//                 >
//                   {Array.isArray(allLesson) && allLesson.length > 0 ? (
//                     allLesson.map(({ id, name }) => (
//                       <Dropdown.Item className='text-white' key={id} eventKey={name}>
//                         <span className="circle arabic"></span> {name}
//                       </Dropdown.Item>
//                     ))
//                   ) : (
//                     <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
//                   )}
//                 </DropdownButton>
//               </Form.Group>
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="questionType">
//                 <Form.Label><span className='text-danger'> * </span> نوع السؤال</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{questionType}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setQuestionType(e)}
//                 >
//                   {Array.isArray(typeQuestion) && typeQuestion.length > 0 ? (
//                     typeQuestion.map(({ id, name }) => (
//                       <Dropdown.Item className='text-white' key={id} eventKey={name}>
//                         <span className="circle arabic"></span> {name}
//                       </Dropdown.Item>
//                     ))
//                   ) : (
//                     <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
//                   )}
//                 </DropdownButton>
//               </Form.Group>
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="levelQuestion">
//                 <Form.Label><span className='text-danger'> * </span> مستوى السؤال</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{levelQuestion}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setLevelQuestion(e)}
//                 >
//                   <Dropdown.Item className='text-white' eventKey="1">
//                     <span className="circle arabic"></span> سهل
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="2">
//                     <span className="circle arabic"></span> متوسطة
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="3">
//                     <span className="circle arabic"></span> صعبة
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="4">
//                     <span className="circle arabic"></span> مهارات تفكير عاليا
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="5">
//                     <span className="circle arabic"></span> سؤال خارجي
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </Form.Group>
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="typingQuestion">
//                 <Form.Label><span className='text-danger'> * </span> صيغة السؤال</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{typingQuestion}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setTypingQuestion(e)}
//                 >
//                   <Dropdown.Item className='text-white' eventKey="أختر الأجابة الصحيحة">
//                     <span className="circle arabic"></span> أختر الأجابة الصحيحة
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="أكمل الفراغ">
//                     <span className="circle arabic"></span> أكمل الفراغ
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="ضع أشارة صح أو خطا">
//                     <span className="circle arabic"></span> ضع أشارة صح أو خطا
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="علل">
//                     <span className="circle arabic"></span> علل
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="عرف">
//                     <span className="circle arabic"></span> عرف
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="أذكر">
//                     <span className="circle arabic"></span> أذكر
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="أشرح">
//                     <span className="circle arabic"></span> أشرح
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </Form.Group>
//             </Col>
//             <Col xs={12} sm={4}>
//               <Form.Group controlId="markQuestion">
//                 <Form.Label><span className='text-danger'> * </span> علامة السؤال</Form.Label>
//                 <Form.Control
//                   type="number"
//                   value={markQuestion}
//                   onChange={(e) => setMarkQuestion(e.target.value)}
//                   placeholder="اختر علامة السؤال"
//                   required
//                 />
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col xs={12} sm={8}>
//               <Form.Group controlId="apperanceNotice">
//                 <div className='apperance_notice justify-content-between'>
//                   <span className='text-danger'>الية اختيار السؤال </span>
//                   <div>
//                     <Form.Check
//                       type="radio"
//                       id="apperanceNoticeNo"
//                       className='text-danger'
//                       label="أوتوماتيكي"
//                       checked={!showApperanceNotice}
//                       onChange={handleApperanceNoticeNo}
//                     />
//                   </div>
//                   <div>
//                     <Form.Check
//                       type="radio"
//                       id="apperanceNoticeYes"
//                       className='text-danger'
//                       label="يدوي"
//                       checked={showApperanceNotice}
//                       onChange={handleApperanceNoticeYes}
//                     />
//                   </div>
//                 </div>
//                 {/* <div className='selected-appearance-notice'>
//                   <span>اختيار السؤال: {appearanceNoticeText}</span>
//                 </div> */}
//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             {/* <Col xs={12} sm={6}>
//               <Form.Group controlId="addressQuestion">
//                 <Form.Label><span className='text-danger'> * </span> عنوان السؤال الرئيسي</Form.Label>
//                 <DropdownButton
//                   id="dropdown-basic-button-subject"
//                   title={<div className='re'>{addressQuestion}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
//                   onSelect={(e) => setAddressQuestion(e)}
//                 >
//                   <Dropdown.Item className='text-white' eventKey="أجد قيمة  ( x )">
//                     <span className="circle arabic"></span> أجد قيمة  ( x )
//                   </Dropdown.Item>
//                   <Dropdown.Item className='text-white' eventKey="أجد قيمة التكاملات الآتية">
//                     <span className="circle arabic"></span> أجد قيمة التكاملات الآتية
//                   </Dropdown.Item>
//                 </DropdownButton>
//               </Form.Group>
//             </Col> */}

//             <Col xs={12} sm={4}>
//               <Form.Group controlId="addressQuestion">
//                 <Form.Label><span className='text-danger'> * </span>عنوان السؤال الرئيسي</Form.Label>
//                 <Form.Control
//                   type="text"
//                   // value={markQuestion}
//                   onChange={(e) => setAddressQuestion(e.target.value)}
//                   placeholder="ادخل علامة السؤال"
                  
//                 />
//                                              {errorss.addressQuestion && <div className="text-danger">{errorss.addressQuestion}</div>}

//               </Form.Group>
//             </Col>
//           </Row>

//           <Row className="mb-3">
//             <Col xs={12} sm={6}>
//               {/* <div className='text-warning'>يتم العمل الآن على إضافة أشكال مختلفة للترويسة ..</div> */}
//             </Col>
//             <Col xs={12} sm={6} className="text-start">
//               <Link to="/teacher/PuttingExam4">
//                 <Button className='btn_putting_exam2_bfor' type="button">
//                   السابق
//                 </Button>
//               </Link>
//               <Button className='btn_putting_exam2_after' type="submit">
//                 التالي
//               </Button>
//             </Col>
//           </Row>
//         </Form>
//       </div>
//     </>
//   );
// }

// export default PuttingExam3;


import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
import Api_dashboard from '../../../utlis/axios_utils_websit';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function PuttingExam3(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const navigate = useNavigate();

  const [showApperanceNotice, setShowApperanceNotice] = useState(false);
  const [appearanceNoticeText, setAppearanceNoticeText] = useState('أوتوماتيكي');

  const [groupId, setGroupId] = useState(null);
  const [unit, setUnit] = useState('اختر الوحدة');
  const [lesson, setLesson] = useState('اختر الدرس');
  const [questionType, setQuestionType] = useState('اختر نوع السؤال');
  const [levelQuestion, setLevelQuestion] = useState('اختر مستوى السؤال');
  const [typingQuestion, setTypingQuestion] = useState('اختر صيغة السؤال');
  const [markQuestion, setMarkQuestion] = useState('');
  const [addressQuestion, setAddressQuestion] = useState('اختر عنوان السؤال الرئيسي');

  const [progress, setProgress] = useState(90);
  const [allUnit, setAllUnit] = useState([]);
  const [allLesson, setAllLesson] = useState([]);
  const [typeQuestion, setTypeQuestion] = useState([]);
  const [Untis, setUntis] = useState([]);
  const [subjectidd, setsubjectid] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await Api_dashboard.get('/teachers/questions-type/selection');
        setTypeQuestion(response.data.data);
      } catch (error) {
        console.error("Error fetching question types data:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchUnitsAndLessons = async () => {
      if (subjectidd) {
        try {
          const unitResponse = await Api_dashboard.get(`/teachers/units/selection/${subjectidd}`);
          setAllUnit(unitResponse.data.data);
          const lessonResponse = await Api_dashboard.get(`/teachers/lessons/selection/${Untis}`);
          setAllLesson(lessonResponse.data.data);
        } catch (error) {
          console.error("Error fetching units or lessons data:", error);
        }
      }
    };

    fetchUnitsAndLessons();
  }, [subjectidd, Untis]);

  useEffect(() => {
    const getSubjectId = () => {
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
      if (parsedArray[0] && parsedArray[0][2]) {
        setsubjectid(JSON.parse(parsedArray[0][2]).idSubjectid);
      } else {
        navigate('/teacher/PuttingExam1');
      }
    };

    getSubjectId();
  }, [navigate]);

  const handleApperanceNoticeYes = () => {
    setShowApperanceNotice(true);
    setAppearanceNoticeText('يدوي');
  };

  const handleApperanceNoticeNo = () => {
    setShowApperanceNotice(false);
    setAppearanceNoticeText('أوتوماتيكي');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      unit,
      lesson,
      questionType,
      levelQuestion,
      typingQuestion,
      markQuestion,
      addressQuestion,
      appearanceNotice: appearanceNoticeText
    };

    console.log(formData);
    // Add any additional form data as needed
    // Example: send the form data to an API
    // Api_dashboard.post('/your/api/endpoint', formData)
    //   .then((response) => {
    //     console.log(response.data);
    //     navigate('/teacher/PuttingExam4');
    //   })
    //   .catch((error) => {
    //     console.error('Error submitting form data:', error);
    //   });
  };

  const validateForm = () => {
    const errorss = {};
    if (!unit || unit === 'اختر الوحدة') {
      errorss.unit = 'Please select a unit';
    }
    if (!lesson || lesson === 'اختر الدرس') {
      errorss.lesson = 'Please select a lesson';
    }
    if (!questionType || questionType === 'اختر نوع السؤال') {
      errorss.questionType = 'Please select a question type';
    }
    if (!levelQuestion || levelQuestion === 'اختر مستوى السؤال') {
      errorss.levelQuestion = 'Please select a level question';
    }
    if (!typingQuestion || typingQuestion === 'اختر صيغة السؤال') {
      errorss.typingQuestion = 'Please select a typing question';
    }
    if (!markQuestion) {
      errorss.markQuestion = 'Please enter a mark question';
    }
    if (!addressQuestion) {
      errorss.addressQuestion = 'Please enter an address question';
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
          <span className='header1_putting_exam1'> انشاء الامتحان  </span>
        </div>
        <div className='header-container'>
          <span className='header_putting_exam1'> إعداد اسئلة الامتحان</span>
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
          <Col xs={12} sm={4}>
  <Form.Group controlId="unit">
    <Form.Label><span className='text-danger'> * </span> الوحدة</Form.Label>
    <DropdownButton
      id="dropdown-basic-button-subject"
      title={<div className='re'>{unit}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
      onSelect={(e) => setUnit(e)}
    >
      {Array.isArray(allUnit) && allUnit.length > 0 ? (
        allUnit.map(({ id, name }) => (
          <Dropdown.Item className='text-white' key={id} eventKey={name} onClick={() => setUntis(id)}>
            <span className="circle arabic"></span> {name}
          </Dropdown.Item>
        ))
      ) : (
        <Dropdown.Item className='text-white' disabled>لا توجد مجموعات</Dropdown.Item>
      )}
    </DropdownButton>
    {errors.unit && <Form.Text className='text-danger'>{errors.unit}</Form.Text>}
  </Form.Group>
</Col>

            <Col xs={12} sm={4}>
              <Form.Group controlId="lesson">
                <Form.Label><span className='text-danger'> * </span> الدرس</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{lesson}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={(e) => setLesson(e)}
                >
                  {Array.isArray(allLesson) && allLesson.length > 0 ? (
                    allLesson.map(({ id, name }) => (
                      <Dropdown.Item className='text-white' key={id} eventKey={name} onClick={() => setLesson(name)}>
                        <span className="circle arabic"></span> {name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item className='text-white' disabled>لا توجد دروس</Dropdown.Item>
                  )}
                </DropdownButton>
                    {errors.lesson && <Form.Text className='text-danger'>{errors.lesson}</Form.Text>}

              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group controlId="questionType">
                <Form.Label><span className='text-danger'> * </span> نوع السؤال</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{questionType}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={(e) => setQuestionType(e)}
                >
                  {Array.isArray(typeQuestion) && typeQuestion.length > 0 ? (
                    typeQuestion.map(({ id, name }) => (
                      <Dropdown.Item className='text-white' key={id} eventKey={name} onClick={() => setQuestionType(name)}>
                        <span className="circle arabic"></span> {name}
                      </Dropdown.Item>
                    ))
                  ) : (
                    <Dropdown.Item className='text-white' disabled>لا توجد أنواع أسئلة</Dropdown.Item>
                  )}
                </DropdownButton>
                                    {errors.questionType && <Form.Text className='text-danger'>{errors.questionType}</Form.Text>}

              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12} sm={4}>
              <Form.Group controlId="levelQuestion">
                <Form.Label><span className='text-danger'> * </span> مستوى السؤال</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{levelQuestion}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={(e) => setLevelQuestion(e)}
                >
                      <Dropdown.Item className='text-white' eventKey="1">
                     <span className="circle arabic"></span> سهل
                   </Dropdown.Item>
                   <Dropdown.Item className='text-white' eventKey="2">
                    <span className="circle arabic"></span> متوسطة
                   </Dropdown.Item>
                   <Dropdown.Item className='text-white' eventKey="3">
                     <span className="circle arabic"></span> صعبة
                  </Dropdown.Item>
                   <Dropdown.Item className='text-white' eventKey="4">
                     <span className="circle arabic"></span> مهارات تفكير عاليا
                  </Dropdown.Item>
                   <Dropdown.Item className='text-white' eventKey="5">
                    <span className="circle arabic"></span> سؤال خارجي
                   </Dropdown.Item>
                </DropdownButton>
                {errors.levelQuestion && <Form.Text className='text-danger'>{errors.levelQuestion}</Form.Text>}

              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group controlId="typingQuestion">
                <Form.Label><span className='text-danger'> * </span> صيغة السؤال</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{typingQuestion}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={(e) => setTypingQuestion(e)}
                >
                  <Dropdown.Item className='text-white' eventKey="طلاب" onClick={() => setTypingQuestion('طلاب')}>مذكر   ( طلاب ) </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="طالبات" onClick={() => setTypingQuestion('طالبات')}>مؤنث  ( طالبات ) </Dropdown.Item>
                </DropdownButton>
                  {errors.typingQuestion && <Form.Text className='text-danger'>{errors.typingQuestion}</Form.Text>}
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group controlId="markQuestion">
                <Form.Label><span className='text-danger'> * </span> علامة السؤال </Form.Label>
                <Form.Control
                  type="number"
                  value={markQuestion}
                  placeholder='ادخل علامة السؤال '
                  onChange={(e) => setMarkQuestion(e.target.value)}
                />
                {errors.markQuestion && <Form.Text className='text-danger'>{errors.markQuestion}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
          <Col xs={12} sm={6}> 
              <Form.Group controlId="addressQuestion">
                <Form.Label><span className='text-danger'> * </span> عنوان السؤال</Form.Label>
                <Form.Control
                  type="text"
                  value={addressQuestion}
                  onChange={(e) => setAddressQuestion(e.target.value)}
                />
                {errors.addressQuestion && <Form.Text className='text-danger'>{errors.addressQuestion}
                  </Form.Text>}
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
             <Col xs={12} sm={6}>
               {/* <div className='text-warning'>يتم العمل الآن على إضافة أشكال مختلفة للترويسة ..</div> */}
             </Col>
             <Col xs={12} sm={6} className="text-start">
               <Link to="/teacher/PuttingExam4">
                 <Button className='btn_putting_exam2_bfor' type="button">                   السابق
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
