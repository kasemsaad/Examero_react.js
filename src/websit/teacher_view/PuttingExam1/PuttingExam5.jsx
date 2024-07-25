
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import dropdownIcon from '../../../assets/icons/teacherview/Vector 13.svg';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
import Api_dashboard from '../../../utlis/axios_utils_websit';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Api_website from '../../../utlis/axios_utils_websit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import plus from '../../../assets/image/+.svg';

function PuttingExam5(props) {

  const layoutBackground = useSelector((state) => state.dark.lay);
  const navigate = useNavigate();
  const [showApperanceNotice, setShowApperanceNotice] = useState(false);
  const [appearanceNoticeText, setAppearanceNoticeText] = useState('أوتوماتيكي');
  
  const [lessonid, setlessonid] = useState('');
  const [lesson, setLesson] = useState('اختر الدرس');

  const [questionType, setQuestionType] = useState('');
  const [QuestionTypename, setQuestionTypename] = useState('اختر نوع السؤال');

  const [TypingQuestionid, setTypingQuestionid] = useState('');
  const [typingQuestion, setTypingQuestion] = useState('اختر صيغة السؤال');

  const [markQuestion, setMarkQuestion] = useState('');
  const [addressQuestion, setAddressQuestion] = useState('');
  const [progress, setProgress] = useState(90);
  const [allUnit, setAllUnit] = useState([]);
  const [allLesson, setAllLesson] = useState([]);
  const [typeQuestion, setTypeQuestion] = useState([]);
  const [Untis, setUntis] = useState("");
  const [Untisname, setUntisname] = useState("اختر الوحدة");
  const [idGroup, setidGroup] = useState(null);
  const [idsemester, setidsemester] = useState(null);
  const [subjectidd, setsubjectid] = useState(null);
  const [errors, setErrors] = useState({});
  const [AllQuestion, setAllQuestion] = useState([]);
  const [planss, setplans] = useState("");
  const [planid, setplanid] = useState("");
  const [planname, setplanname] = useState("الباقات");
  const [levelQuestionname, setlevelQuestionname] = useState("اختر مستوى السؤال");
  const [levelQuestionnameid, setlevelQuestionnameid] = useState("");
  const [count, setCount] = useState(2);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mapqustions, setmapqustions] = useState([]);
  const [countPages, setcountPages] = useState([]);
  const { page } = useParams();
  const [isButtonDisabled, setIsButtonDisabled] = useState("");
  let counter = page;

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
  }, [subjectidd, Untis,mapqustions]);

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
        setidGroup(JSON.parse(parsedArray[0][2]).idGroup);
        setidsemester(JSON.parse(parsedArray[0][1]).semester);
        setcountPages(parseInt(JSON.parse(parsedArray[0][2]).questionCount));
      } else {
        navigate('/teacher/PuttingExam1');
      }
      if (counter <= 0) {
        navigate(`/teacher/PuttingExam4`);
      }
      else if (counter > (1+parseInt(JSON.parse(parsedArray[0][2]).questionCount))) {
        navigate(`/teacher/PuttingExam5/${1+parseInt(JSON.parse(parsedArray[0][2]).questionCount)}`);
      } else {

      }

      if (counter >= 1+parseInt(JSON.parse(parsedArray[0][2]).questionCount)) {
        setIsButtonDisabled(true)
      } else {
        setIsButtonDisabled(false)

      }
    };

    getSubjectId();
    plans()
  }, [navigate, isButtonDisabled,countPages]);


  const handleApperanceNoticeYes = () => {
    setShowApperanceNotice(true);
    setAppearanceNoticeText('يدوي');
    manualy()
  };

  const handleApperanceNoticeNo = () => {
    setShowApperanceNotice(false);
    setAppearanceNoticeText('أوتوماتيكي');
  };
  const DataQustion = {
    group_id: idGroup,
    subject_id: subjectidd,
    semster: idsemester,
    question_type_id: questionType,
    for: TypingQuestionid,
    level: levelQuestionnameid,
    unit_id: Untis,
    lesson_id: lessonid,
    count: count,
    plan_id: planid,
  };

  for (let key in DataQustion) {
    if (DataQustion[key] === "" || DataQustion[key] === null || DataQustion[key] === undefined) {
      delete DataQustion[key];
    }
  }

  const manualy = () => {

    const DataQustions = {
      group_id: idGroup,
      subject_id: subjectidd,
      semster: idsemester,
      question_type_id: questionType,
      for: TypingQuestionid,
      level: levelQuestionnameid,
      unit_id: Untis,
      lesson_id: lessonid,
      plan_id: planid,
    };
    for (let key in DataQustions) {
      if (DataQustions[key] === '' || DataQustions[key] === null || DataQustions[key] === undefined) {
        delete DataQustions[key];
      }
    }
    Api_website.post('/teachers/genrate-exam', DataQustions)
      .then((response) => {
        setAllQuestion(response.data.data.allQuestion || []);
      })
      .catch((error) => {
        let err = error.response.data.message;
        handleApperanceNoticeNo()
        toast.error(err, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          // transition: Bounce,
        });
      });

  }
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleSubmit = (e, countPageunder) => {
    e.preventDefault();
    if (appearanceNoticeText === "يدوي") {
      // selectedQuestionIds
      const DataQustionManualy = { questionIds: selectedQuestionIds, plan_id: planid, }
      for (let key in DataQustionManualy) {
        if (DataQustionManualy[key] === '' || DataQustionManualy[key] === null || DataQustionManualy[key] === undefined) {
          delete DataQustionManualy[key];
        }
      }
      // console.log(DataQustionManualy)
      Api_website.post('/teachers/save-exam', DataQustionManualy)
        .then((response) => {
          console.log(response.data.data.questions)

          const question = {
            "السؤال": JSON.stringify(response.data.data.questions),
            lessonid,
            lesson,
            Untis,
            Untisname,
            planid,
            planname,
            markQuestion,
            addressQuestion,
            appearanceNotice: appearanceNoticeText,
            pageNumber: page,
            question_type_id: questionType,
            question_type_name: QuestionTypename,
            for: TypingQuestionid,
            forname: typingQuestion,
            level: levelQuestionnameid,
            levelname: levelQuestionname,
          };



          if (!question || Object.keys(question).length === 0) {
            console.error("Question object is empty or undefined");
          } else {
            console.log("Question object:", question);
          }

          const questionBank = question;
          // localStorage.setItem("questionBank", JSON.stringify(questionBank));

          const x = JSON.stringify(questionBank);
          // console.log("Serialized questionBank:", x);

          let doc = localStorage.getItem("all");
          doc = doc ? JSON.parse(doc) : [];
          console.log("Initial doc array:", doc);

          // Ensure `page` is a positive integer within bounds
          if (page < 1 || page > doc.length + 1) {

            toast.error(`لم يتم اضافه السؤال رقم ${doc.length + 1}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              // transition: Bounce,

            });
            setTimeout(() => {
              navigate(`/teacher/PuttingExam5/${doc.length + 1}`);
              window.location.reload();
            }, 2000);
          } else {
            doc[page - 1] = x;

            localStorage.setItem("all", JSON.stringify(doc));
          }

          toast.success('تم إضافه السؤال بنجاح', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          counter++
          setTimeout(() => {
          navigate(`/teacher/PuttingExam5/${counter}`);
          window.location.reload();
          },[2000])
        })
        .catch((error) => {
          let err = error.response.data.message;
          toast.error(err, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,
          });
        });

    } else if (appearanceNoticeText === "أوتوماتيكي") {
      Api_website.post('/teachers/genrate-exam', DataQustion)
        .then((response) => {
          const question = {
            "السؤال": JSON.stringify(response.data.data.allQuestion),          //count 
            lessonid,
            lesson,
            Untis,
            Untisname,
            markQuestion,
            addressQuestion,
            appearanceNotice: appearanceNoticeText,
            pageNumber: page,
            question_type_id: questionType,
            question_type_name: QuestionTypename,
            for: TypingQuestionid,
            forname: typingQuestion,
            level: levelQuestionnameid,
            levelname: levelQuestionname,
          };


          if (!question || Object.keys(question).length === 0) {
            console.error("Question object is empty or undefined");
          } else {
            console.log("Question object:", question);
            console.log("Question object:", question);
          }
          
          const questionBank = question;
          // localStorage.setItem("questionBank", JSON.stringify(questionBank));
          
          const x = JSON.stringify(questionBank);
            console.log(question);

          let doc = localStorage.getItem("all");
          doc = doc ? JSON.parse(doc) : [];

          // Ensure `page` is a positive integer within bounds
          if (page < 1 || page > doc.length + 1) {

            toast.error(`لم يتم اضافه السؤال رقم ${doc.length + 1}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              // transition: Bounce,

            });
            setTimeout(() => {
              navigate(`/teacher/PuttingExam5/${doc.length + 1}`);
              window.location.reload();
            }, 2000);

          } else {
            doc[page - 1] = x;

            localStorage.setItem("all", JSON.stringify(doc));
            toast.success('تم إضافه السؤال بنجاح', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            counter++
            setTimeout(() => {  
              navigate(`/teacher/PuttingExam5/${counter}`);
              window.location.reload();
              },[2000])          }

        })
        .catch((error) => {
          let err = error.response.data.message;
          toast.error(err, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            // transition: Bounce,

          });
          navigate(`/teacher/PuttingExam5/${counter}`);

        });
    } else {
      toast.error("لم يتم إضافه السؤال", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
    }
  

  };

  const validateForm = () => {
    const errorss = {};


    if (!questionType || questionType === 'اختر نوع السؤال') {
      errorss.questionType = 'اختر نوع السؤال';
    }
    if (!levelQuestionname || levelQuestionname === 'اختر مستوى السؤال') {
      errorss.levelQuestion = 'اختر مستوى السؤال';
    }
    if (!typingQuestion || typingQuestion === 'اختر صيغة السؤال') {
      errorss.typingQuestion = 'اختر صيغة السؤال';
    }
    if (!markQuestion) {
      errorss.markQuestion = 'ادخل علامة السؤال';
    }
    if (!addressQuestion) {
      errorss.addressQuestion = 'ادخل العنوان السؤال الرئيسي ';
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
      // navigate(`/teacher/PuttingExam5/${countPages}`);
    }
  };


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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (questionId) => {
    setSelectedQuestionIds((prevSelected) => {
      if (prevSelected.includes(questionId)) {
        return prevSelected.filter(id => id !== questionId);
      } else {
        return [...prevSelected, questionId];
      }
    });
  };

  const filteredQuestions = AllQuestion.filter((question) =>
    question.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedQuestions = AllQuestion.filter((question) =>
    selectedQuestionIds.includes(question.id)
  );
  const back = () => {
    if (counter <= 1) {
      navigate(`/teacher/PuttingExam4`);
      counter = 0;
    } else {
      counter--
      navigate(`/teacher/PuttingExam5/${counter}`);
      window.location.reload();
    }

  }

  useEffect(() => {
    const jsonStringArray=[localStorage.getItem("all")]
    const parsedData = jsonStringArray.map(item => JSON.parse(item));
    
    // Log the parsed data to verify
    setmapqustions(parsedData[0]);
    
    // console.log(parsedData[0]);
           
    
      }, []);

  //////////////////////////////////////////////////////////////////////////////////////////////////
const deleteQustion=(id)=>{
  const parse=[localStorage.getItem("doc")]
  const parse1=JSON.parse(parse[0])
  const array=[]
  parse1.map(item => {
  const parse2=JSON.parse(item)
  array.push(parse2)
  })
 const questionCount=array[2].questionCount

  
  const jsonStringArray = array.map(item => {
    // If the object has a questionCount property, set it to 10
    if (item.hasOwnProperty('questionCount')) {
      item.questionCount =  (parseInt(countPages)-1);
    }
    // Convert the object to a JSON string
    return JSON.stringify(item);
  });
  

  localStorage.setItem("doc",JSON.stringify(jsonStringArray));
  localStorage.setItem("doc1",JSON.stringify(jsonStringArray));

const deletedata=localStorage.getItem("all")
const arrayalldelete=JSON.parse(deletedata)
  if (id >= 0 && page <= arrayalldelete.length) {
    arrayalldelete.splice((id-1), 1);
    console.log(arrayalldelete)
    localStorage.setItem("all",JSON.stringify(arrayalldelete));
      window.location.reload();
  } else {
    console.log("Index out of bounds");
    toast.error("اضغط علي السابق لحذف السؤال", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  }

}
useEffect(() => {
  backup();
}, []);

const backup = () => {
  let jsonArray = [localStorage.getItem("all")];
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
  // let parsedArray = localStorage.getItem("all")
  let parsedArray = parseArray(jsonArray);
  if (parsedArray[0] && Array.isArray(parsedArray[0]) && parsedArray[0][parseInt(page)-1]) {
    const data = JSON.parse(parsedArray[0][parseInt(page)-1]);
    setTimeout(() => {
      setlessonid(data.lessonid)
      setLesson(data.lesson)
      setUntis(data.Untis)
      setUntisname(data.Untisname)
      setMarkQuestion(data.markQuestion)
      setAddressQuestion(data.addressQuestion)
      setAppearanceNoticeText(data.appearanceNotice)
      setQuestionType(data.question_type_id)
      setQuestionTypename(data.question_type_name)
      setTypingQuestionid(data.for)
      setTypingQuestion(data.forname)
      setlevelQuestionnameid(data.level)
      setlevelQuestionname(data.levelname)
    }, 1);
  } else {
    console.error('Parsed array is not valid or does not contain expected data:', parsedArray);
  }
}
// \\\\\\parse exam\\\\\\\\\
// const parse=[localStorage.getItem("all")]
// const parse1=JSON.parse(parse[0])
// // console.log(parse1)
// parse1.map(item => {
// const parse2=JSON.parse(item)
// const parse3=JSON.parse(parse2.السؤال)
// console.log(parse3);
// return item;
// });
// \\\\\\end parse exam\\\\\\\\\

  return (
    <>
      <ToastContainer />
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
          <div className='container'>
        <ul style={{ backgroundColor: "", borderRadius: "5px" }} className="p-2 mt-4">
      {Array.isArray(mapqustions) && mapqustions.length > 0 ? (
        mapqustions.map((question, index) => (
          <li
            style={{  backgroundColor: (index+1)==page?"#4941A6": "", display: "inline-block" ,borderRadius:"10px"}}
            className="mx-1 p-2 "
            key={index}
          >
            
           السؤال      ( {index+1} )
          </li>
        ))
      ) : (
        <li className='text-white' disabled>لا توجد أسئله</li>
      )}
     {(parseInt(page)+1) === parseInt(countPages)?"": <span id="add" hidden={isButtonDisabled}   className='mx-2 p-1' style={{backgroundColor:"" ,borderRadius:"10px"}}> أضافة السؤال ( {page} ) </span>}
    <Link className="  rounded-4 p-0  px-4  my-2  " algin="center" to="" 
              style={{ backgroundColor: "#FE4F60", color: "white", width: "", border: "none", textDecoration:"none",display: "inline-block"  }} > 
              + إضافة سؤال 
                          </Link>
    </ul>
        </div>
          <Row className="mb-3">
            <Col xs={12} sm={4}>
              <Form.Group controlId="unit">
                <Form.Label><span className='text-danger'>  </span> الوحدة</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{Untisname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                >
                  {Array.isArray(allUnit) && allUnit.length > 0 ? (
                    allUnit.map(({ id, name }) => (
                      <Dropdown.Item className='text-white' key={id} eventKey={id}
                        onClick={() => {
                          setUntis(id);
                          setUntisname(name)
                        }}>
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
                <Form.Label><span className='text-danger'></span> الدرس</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{lesson}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>
                  }
                >
                  {Array.isArray(allLesson) && allLesson.length > 0 ? (
                    allLesson.map(({ id, name }) => (
                      <Dropdown.Item className='text-white' key={id} eventKey={id}
                        onClick={() => {
                          setlessonid(id);
                          setLesson(name)
                        }}>
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
                          setplanid(id);
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

          </Row>

          <Row className="mb-3">


            <Col xs={12} sm={4}>
              <Form.Group controlId="questionType">
                <Form.Label><span className='text-danger'> * </span> نوع السؤال</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{QuestionTypename}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                  onSelect={(e) => setQuestionType(e)}
                >
                  {Array.isArray(typeQuestion) && typeQuestion.length > 0 ? (
                    typeQuestion.map(({ id, name }) => (
                      <Dropdown.Item className='text-white' key={id} eventKey={id}
                        onClick={() => {
                          setQuestionType(id)
                          setQuestionTypename(name)
                        }}>
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

            <Col xs={12} sm={4}>
              <Form.Group controlId="levelQuestion">
                <Form.Label><span className='text-danger'> * </span> مستوى السؤال</Form.Label>
                <DropdownButton
                  id="dropdown-basic-button-subject"
                  title={<div className='re'>{levelQuestionname}<img src={dropdownIcon} alt="Icon" className='dropdown-icon' /></div>}
                >
                  <Dropdown.Item className='text-white' eventKey="1"
                    onClick={() => { setlevelQuestionname("سهل"); setlevelQuestionnameid(1) }}>
                    <span className="circle arabic"></span> سهل
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="2"
                    onClick={() => { setlevelQuestionname("متوسطة"); setlevelQuestionnameid(2) }} >
                    <span className="circle arabic"></span> متوسطة
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="3"
                    onClick={() => { setlevelQuestionname("صعبة"); setlevelQuestionnameid(3) }} >
                    <span className="circle arabic"></span> صعبة
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="4"
                    onClick={() => { setlevelQuestionname("مهارات تفكير عاليا"); setlevelQuestionnameid(4) }} >

                    <span className="circle arabic"></span> مهارات تفكير عاليا
                  </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey="5"
                    onClick={() => { setlevelQuestionname("سؤال خارجي"); setlevelQuestionnameid(5) }} >

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
                >
                  <Dropdown.Item className='text-white' eventKey={1} onClick={() => { setTypingQuestionid(1); setTypingQuestion('كلاهما') }}>كلاهما</Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey={2} onClick={() => { setTypingQuestionid(2); setTypingQuestion('مذكر   ( طلاب )') }}>مذكر   ( طلاب ) </Dropdown.Item>
                  <Dropdown.Item className='text-white' eventKey={3} onClick={() => { setTypingQuestionid(3); setTypingQuestion('مؤنث  ( طالبات )') }}>مؤنث  ( طالبات ) </Dropdown.Item>
                </DropdownButton>
                {errors.typingQuestion && <Form.Text className='text-danger'>{errors.typingQuestion}</Form.Text>}
              </Form.Group>
            </Col>
            <Col xs={12} sm={4}>
              <Form.Group controlId="markQuestion">
                <Form.Label><span className='text-danger'> * </span> علامة السؤال </Form.Label>
                <Form.Control
                  type="number"
                  minLength={1}
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
                <Form.Label><span className='text-danger'> * </span> ادخل العنوان السؤال الرئيسي </Form.Label>
                <Form.Control
                  type="text"
                  value={addressQuestion}
                  placeholder='ادخل العنوان السؤال الرئيسي'
                  onChange={(e) => setAddressQuestion(e.target.value)}
                />
                {errors.addressQuestion && <Form.Text className='text-danger'>{errors.addressQuestion}
                </Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} sm={8}>
              <Form.Group controlId="apperanceNotice">
                <div className='apperance_notice justify-content-between'>
                  <span className='text-danger'>الية اختيار السؤال </span>
                  <div>
                    <Form.Check
                      type="radio"
                      id="apperanceNoticeNo"
                      className='text-danger'
                      label="أوتوماتيكي"
                      checked={!showApperanceNotice}
                      onChange={handleApperanceNoticeNo}
                    />
                  </div>
                  <div>
                    <Form.Check
                      type="radio"
                      id="apperanceNoticeYes"
                      className='text-danger'
                      label="يدوي"
                      checked={showApperanceNotice}
                      onChange={handleApperanceNoticeYes}
                    />
                  </div>
                </div>
                {/* <div className='selected-appearance-notice'>
                  <span>اختيار السؤال: {appearanceNoticeText}</span>
                </div> */}
              </Form.Group>
            </Col>
          </Row>


          {appearanceNoticeText === "أوتوماتيكي" ?
            <Row className="mb-3">

              <div className="">
                <label className="counter-label">عدد الأسئلة الفرعية</label>
                <div className="counter-controls">
                  <Button className="counter-button" onClick={decrementCount}>-</Button>
                  <input type="text" className="counter-input" value={count} readOnly />
                  <Button className="counter-button" onClick={incrementCount}>+</Button>
                </div>
              </div>
            </Row>

            :
            <div className="questions-table">
              <h5>الاسئلة التي تم اختيارها</h5>
              <ul style={{ backgroundColor: "#1D195D", borderRadius: "5px" }} className="p-2">
                {selectedQuestions.map((question) => (
                  <li style={{ backgroundColor: "#4941A6", display: "inline-block" }} className="mx-1 px-2" key={question.id}>
                    {question.name}
                  </li>
                ))}
              </ul>
              <h2>الاسئلة</h2>
              <hr />
              <div className="container-search">
                <input
                  className="search-input"
                  type="search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="ابحث عن سؤال"
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th className="pb-3">السؤال</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuestions.map((question) => (
                    <tr key={question.id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedQuestionIds.includes(question.id)}
                          onChange={() => handleCheckboxChange(question.id)}
                        />
                        {question.name}
                        <hr />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           
            </div>
          }

          <Row className="mb-3" >
            
            <Col xs={12} sm={6} >
            <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3" type="button" onClick={()=>{deleteQustion(page)}} >
                حذف السؤال
              </button>
            </Col>
            <Col xs={12} sm={6} className="text-start">
              {/* <Link to="/teacher/PuttingExam4"> */}
              <Button className='btn_putting_exam2_bfor' type="button" onClick={() => { back() }}>السابق
              </Button>
              {/* </Link> */}
              <Button className='btn_putting_exam2_after' type="submit"
                hidden={isButtonDisabled}>
                {/* disabled={isButtonDisabled}> */}
                التالي
              </Button>
            </Col>
          </Row>



        </Form>
      </div>
    </>
  );
}

export default PuttingExam5;







