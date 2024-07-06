// import MyButton from "../../common/Button/Button";
import { Link } from 'react-router-dom';
import './createExam.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import plus from '../../../assets/image/+.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import CreateExamIcon from '../../../assets/icons/Home/wpf_create-new.svg'
import Api_Website from '../../../utlis/axios_utils_websit';
import Api_dashboard from '../../../utlis/axios_utils_dashboard';
function CreateExam(props) {


  const layoutBackground = useSelector((state) => state.dark.lay);
  const [duration, setDuration] = useState('');  // User input for duration
  const [timeLeft, setTimeLeft] = useState(0);   // Time left in seconds
  const [isActive, setIsActive] = useState(false); // Timer state
  const [timeValidationMessage] = useState('');
  // Function to start the timer
  const startTimer = () => {

    const parsedDuration = parseInt(duration);

    if (isNaN(parsedDuration) || parsedDuration <= 0) {
      return;
    }

    setTimeLeft(parsedDuration * 60);  // Convert minutes to seconds
    setIsActive(true);  // Start the timer
  };

  // Handle the countdown logic using useEffect
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      clearInterval(interval);
      setTimeout(() => {

        const modalElementExams = document.getElementById('Exam');
        modalElementExams.style.display = "none"
        const modalElementFinishTimer = document.getElementById('FinishTimer');
        modalElementFinishTimer.style.display = "block"
        setData("")
        setSelectedOptions("")
      }, 9000);
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);


  // Convert timeLeft to minutes and seconds for display
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  //////////////////////////Get All Note///////////////////////////////////////////////////
  const [AllGroup, setAllGroup] = useState("");
  const [AllSubject, setAllSubject] = useState("");
  const [AllUnit, setAllUnit] = useState("");
  const [AllLesson, setAllLesson] = useState("");
  const [Allplans, setPlans] = useState("");
  useEffect(() => {
    Api_Website.get(`/students/groups/selection`)
      .then(response => {
        setAllGroup(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching groups data:", error);
      });
    getPlans()
  }, []);
  /////////////////المبحث////////////////////

  const getSubject = (id) => {
    Api_Website.get(`/students/subjects/selection/${id}`)
      .then(response => {
        setAllSubject(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });

  }
  /////////////////الوحده////////////////////
  const getUnit = (id) => {

    Api_Website.get(`/students/units/selection/${id}`)
      .then(response => {
        setAllUnit(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });

  }
  ///////////////الدروس//////////////////
  const getLesson = (id) => {
    Api_Website.get(`/students/lessons/selection/${id}`)
      .then(response => {
        setAllLesson(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching subjects data:", error);
      });
  }
  ///////////////الباقه//////////////////
  const getPlans = () => {
    Api_Website.get(`/students/plans`)
      .then(response => {
        setPlans(response.data.plans);
        // console.log(response.data)
      })
      .catch(error => {
        console.error("Error fetching plans data:", error);
      });
  }
  ////////////////////////الاسئله/////////////////////////////////////////
  const [easyCount, setEasyCount] = useState(5);
  const [mediumCount, setMediumCount] = useState(5);
  const [hardCount, setHardCount] = useState(0);
  const [thinkingCount, setThinkingCount] = useState(0);
  const [externalCount, setExternalCount] = useState(0);

  const totalQuestions = easyCount + mediumCount + hardCount + thinkingCount + externalCount;

  const increment = (setter, count) => {
    // if (totalQuestions < 25) {
    setter(count + 1);
  }
  // };

  const decrement = (setter, count) => {
    if (count > 0) {
      setter(count - 1);
    }
  };
  //////////////////////////////////////////////////////
  const [error, setError] = useState('');
  const [group_id, setGroup_id] = useState('');
  const [subject_id, setSubject_id] = useState('');
  const [semster, setSemster] = useState('');
  const [plans_id, setPlansid] = useState('');
  const [unit_id, setUnit_id] = useState('');
  const [lesson_id, setLesson_id] = useState('');
  const [QusetionExam, setQusetionExam] = useState('');
  const [answerss, setAnswers] = useState([{}]);
  const handleGroupChange = (id) => {
    setGroup_id(id);
  };
  const handleChangeGroup = (event) => {
    const selectedId = event.target.value;
    getSubject(selectedId);
    handleGroupChange(selectedId);
  }

  const handleSubjectChange = (id) => {
    setSubject_id(id);
  };
  const handleChangesubject = (event) => {
    const selectedId = event.target.value;
    getUnit(selectedId);
    handleSubjectChange(selectedId);
  };
  const handleSemesterChange = (id) => {
    setSemster(id);
  };

  const handlesemesterChanges = (event) => {
    const selectedId = event.target.value;
    getLesson(selectedId);
    handleSemesterChange(selectedId);
  };
  const handlePlansChange = (id) => {
    setPlansid(id);
  };
  const handleChangeplas = (event) => {
    const selectedId = event.target.value;
    getPlans(selectedId);
    handlePlansChange(selectedId);
    setError('');
  }
  const handleUnit_idChange = (id) => {
    setUnit_id(id);
  };
  const handleChange = (event) => {
    const selectedId = event.target.value;
    getLesson(selectedId);
    handleUnit_idChange(selectedId);
  };
  const handleLesson_idChange = (id) => {
    setLesson_id(id);
  };
  const handleLessonsChange = (event) => {
    const selectedId = event.target.value;
    handleLesson_idChange(selectedId);
    setError('');
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      group_id: group_id,              //required
      subject_id: subject_id,          //required
      semster: semster,                //required //الفصل الدراسي 1,2
      plan_id: plans_id,
      unit_id: unit_id,
      lesson_id: lesson_id,

      filters_level: [
        {
          level: 1,
          number: easyCount
        },
        {
          level: 2,
          number: mediumCount
        },
        {
          level: 3,
          number: hardCount
        },
        {
          level: 4,
          number: thinkingCount
        },
        {
          level: 5,
          number: externalCount
        }
      ]
    };
    if (!unit_id) delete data.unit_id;
    if (!lesson_id) delete data.lesson_id;
    if (!group_id) {
      setError('الرجاء اختيار الصف');
    } else
      if (!subject_id) {
        setError('الرجاء اختيارالمبحث');
      } else
        if (!semster) {
          setError('الرجاء اختيار الفصل الدراسي');
        } else
          if (!plans_id) {
            setError('الرجاء اختيار الباقه');

          } else
            if (lesson_id && !unit_id) {
              setError('الرجاء اختيار الوحده');

            } else
              if (duration <= 0) {
                setError('مدة الامتحان يجب ان تكون دقيقة عالاقل');
              }
              else {
                Api_Website.post(`/students/genrate-exam`, data)
                  .then(response => {
                    // console.log(response.data.data.questions[1].media.name );

                    const modalElementExam = document.getElementById('Exam');
                    modalElementExam.style.display = "block"
                    setQusetionExam(response.data.data)
                    startTimer()
                    const modalElementFinishTimer = document.getElementById('FinishTimer');
                    modalElementFinishTimer.style.display = "none"
                    const transformedAnswers = response.data.data.questions.reduce((acc, question) => {
                      acc.answers[question.id] = [];
                      return acc;
                    }, { answers: {} });

                    setAnswers(transformedAnswers)


                  })
                  .catch(error => {
                    console.error('Error generat exam', error);
                  });

                setError("");

              }
  };
  const [selectedOptions, setSelectedOptions] = useState({}); // Map of questionId to selected optionIds
  const [data, setData] = useState("");
  const [result, setResult] = useState("");


  const handleSubmitExam = (event) => {
    event.preventDefault();
    call(data)

    const lastobject = call(data)
    Api_Website.post(`/students/submit-exam`, lastobject)
      .then(response => {
        console.log('submit exam');
        const modalElementSubit = document.getElementById('FinishExam');
        modalElementSubit.style.display = "block"
        const modalElementExam = document.getElementById('Exam');
        modalElementExam.style.display = "none"
        setResult(response.data.data)
        setCurrentPage(0)
        setTimeout(() => {
          const modalElementSubit = document.getElementById('FinishExam');
          modalElementSubit.style.display = "none"
          setData("")
          setSelectedOptions("")
        }, 8000);

      })
      .catch(error => {
        console.error('Error submit exam', error);
      });


  };

  /////////////////////////////getexam////////////////////////////////////////////
  // ///////////pagenation///////////////////
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 1;
  const questions = Array.isArray(QusetionExam?.questions) ? QusetionExam.questions : [];

  const indexOfLastQuestion = (currentPage + 1) * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const isPreviousDisabled = currentPage === 0;
  const isNextDisabled = indexOfLastQuestion >= questions.length;

  const handleNext = () => {
    if (!isNextDisabled) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (!isPreviousDisabled) setCurrentPage(currentPage - 1);
  };

  ////////////////////////////////questions///////////////////////////////////////////////////////////////
  const handleCheckboxChange = (questionId, optionId) => {
    // console.log(questionId,optionId)
    setSelectedOptions(prevSelected => {
      const newSelected = { ...prevSelected };

      if (!newSelected[questionId]) {
        newSelected[questionId] = [];
      }
      if (newSelected[questionId].includes(optionId)) {
        newSelected[questionId] = newSelected[questionId].filter(id => id !== optionId);
      } else {
        newSelected[questionId].push(optionId);
      }
      return newSelected;
    });
  };

  const call = (d) => {
    //////////////////////compa//////////////////////////////////////////////////////////////// // 
    let obj1 = d;

    let obj2 = answerss

    let obj3 = {
      "answers": {}
      ,
      group_id: group_id,
      subject_id: subject_id,
      semster: semster,
    };
    // console.log(obj3);

    for (let id in obj2.answers) {
      obj3.answers[id] = []
    }

    for (let id in obj1.answers) {

      if (obj2.answers.hasOwnProperty(id)) {
        obj3.answers[id] = obj1.answers[id];
      }
    }

    return obj3

  }

  useEffect(() => {
    setData({
      answers: selectedOptions,
      group_id: group_id,             
      subject_id: subject_id,          
      semster: semster,
    });
  }, [selectedOptions]);



  return (
    <>

      <div className="container py-5 d-flex align-items-center justify-content-center flex-column">
        <div className=" " style={{ width: "85%", paddingTop: "4.25px" }}  >
          <img className="" src={CreateExamIcon} alt="HomeIcon" style={{ backgroundColor: "transparent" }} />
          <Link
            className="btn"
            to="#"  // Replace '#' with a valid route path like '/home' or '/dashboard'
            style={{
              backgroundColor: "transparent",
              color: layoutBackground === "#0E0A43" ? "white" : "#0E0A43",
              fontSize: "18px"
            }}
          >        إنشاء الامتحان للطالب</Link>
        </div>
        <div className=" " style={{ width: "85%", paddingTop: "4.25px" }}>
          <div className=" rounded-3" style={{ backgroundColor: "#2F2791" }}>
            <p className='p-4 fs-5'>
              <span style={{ color: "#FFA031" }}>          ملحوظة :        </span>
              بالخطة الأولى والثانية يتم فتح الأسئلة بحد أقصى 25 سؤالا ، مع العلم أنه في حالة  اختيار أقل من 25 سؤال يتم احتسابهم كامتحان كامل
            </p>
          </div>
          {/* --------------------add exam-------------------------------- */}
          <div className="  ">


            <button className=" fs-4 rounded-3 p-0 p-1 px-4  my-2  " algin="center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
              style={{ backgroundColor: "#FE4F60", color: "", width: "", border: "none" }} >
              <img className="p-1 ms-2" src={plus} alt='plus' style={{ backgroundColor: "black", borderRadius: "50%" }} />
              إضافة امتحان
            </button>
            <div className='pe-1 pb-2'>
              {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                  {error}
                </div>
              )}
            </div>

            <form className="modal-body managerForm" onSubmit={handleSubmit}>

              <div className="collapse" id="collapseExample" >

                <div className="card card-body rounded-3" style={{ backgroundColor: "#1D195D" }}>
                  <div className=" d-flex justify-content-start flex-wrap" style={{ width: "100%" }}>
                    <div className='mx-2'>
                      <label>الصف</label>
                      <select
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        defaultValue=""
                        onChange={handleChangeGroup}
                      >
                        <option value="" >إختر الصف</option>
                        {Array.isArray(AllGroup) && AllGroup.length > 0 ? (
                          AllGroup.map(({ id, name }) => (
                            <option
                              key={id}
                              value={id}
                              style={{ backgroundColor: "white", color: "black" }}
                            >{name}</option>
                          ))
                        ) : (
                          <option disabled>لا توجد مجموعات</option>
                        )}
                      </select>
                    </div>

                    <div className='mx-2'>
                      <label>المبحث</label>
                      <select
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        defaultValue=""
                        onChange={handleChangesubject}
                      >
                        <option value="" >إختر المبحث</option>
                        {Array.isArray(AllSubject) && AllSubject.length > 0 ? (
                          AllSubject.map(({ id, name }) => (
                            <option
                              key={id}
                              value={id}
                              style={{ backgroundColor: "white", color: "black" }}
                              onChange={handleChangesubject}

                            >
                              {name}
                            </option>
                          ))
                        ) : (
                          <option disabled>لا توجد مجموعات</option>
                        )}
                      </select>
                    </div>


                    <div className="mx-2">
                      <label htmlFor="semester-select">الفصل الدراسي</label>
                      <select
                        id="semester-select"
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        value={semster}
                        onChange={handlesemesterChanges}
                      >
                        <option value="" >إختر الفصل الدراسي</option>
                        <option value="1">الأول</option>
                        <option value="2">الثاني</option>
                      </select>
                    </div>


                    <div className="mx-2">
                      <label>الباقه</label>
                      <select
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        onChange={handleChangeplas}
                        defaultValue=""
                      >
                        <option value="" >إختر الباقه</option>
                        {Array.isArray(Allplans) && Allplans.length > 0 ? (
                          Allplans.map(({ id, name }) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))
                        ) : (
                          <option disabled>لا توجد مجموعات</option>
                        )}
                      </select>
                    </div>

                    <div className="mx-2">
                      <label>الوحدة</label>
                      <select
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        onChange={handleChange}
                        defaultValue="" // Ensure no option is selected by default
                      >
                        <option value="" >إختر الوحدة</option>
                        {Array.isArray(AllUnit) && AllUnit.length > 0 ? (
                          AllUnit.map(({ id, name }) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))
                        ) : (
                          <option disabled>لا توجد مجموعات</option>
                        )}
                      </select>
                    </div>

                    <div className="mx-2">
                      <label htmlFor="lesson-select">الدرس</label>
                      <select
                        id="lesson-select"
                        className="px-2 py-1 rounded-3"
                        style={{ color: 'black', backgroundColor: 'white', border: 'none', padding: '8px', width: '100%' }}
                        onChange={handleLessonsChange}
                        defaultValue=""
                      >
                        <option value="" className='px-5 rounded-3' style={{ color: "black", backgroundColor: "white", border: "none" }}>إختر الدرس</option> {/* Placeholder option */}
                        {Array.isArray(AllLesson) && AllLesson.length > 0 ? (
                          AllLesson.map(({ id, name }) => (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          ))
                        ) : (
                          <option disabled>لا توجد مجموعات</option>
                        )}
                      </select>
                    </div>

                    <div className="px-2 d-flex flex-column">
                      <label>مدة الامتحان</label>
                      <input type='number' className=' py-2 rounded-3 text-center'
                        placeholder='بالدقيقة '
                        value={duration}
                        // maxLength={20}
                        onChange={(e) => setDuration(e.target.value)}
                        style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic" />
                      {timeValidationMessage && <p style={{ color: 'red' }}>{timeValidationMessage}</p>}

                    </div>

                    <div className="px-2">
                      <label> الأسئلة </label>
                      <Dropdown className=' p-0'>
                        <Dropdown.Toggle className='px-5 rounded-3' style={{ color: "black", backgroundColor: "white", border: "none" }} id="dropdown-basic2">
                          إختر الأسئلة
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ backgroundColor: "white" }}    >
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <div className="drocontainer">
                            <div className="question-row">
                              <button className="control-button" onClick={() => decrement(setEasyCount, easyCount)}>-</button>
                              <span className="countQuestion">{easyCount}</span>
                              <button className="control-button" onClick={() => increment(setEasyCount, easyCount)}>+</button>
                              <span className="labelQuestion">عدد الأسئلة السهلة</span>
                            </div>
                            <div className="question-row">
                              <button className="control-button" onClick={() => decrement(setMediumCount, mediumCount)}>-</button>
                              <span className="countQuestion">{mediumCount}</span>
                              <button className="control-button" onClick={() => increment(setMediumCount, mediumCount)}>+</button>
                              <span className="labelQuestion">عدد الأسئلة المتوسطة</span>
                            </div>
                            <div className="question-row">
                              <button className="control-button" onClick={() => decrement(setHardCount, hardCount)}>-</button>
                              <span className="countQuestion">{hardCount}</span>
                              <button className="control-button" onClick={() => increment(setHardCount, hardCount)}>+</button>
                              <span className="labelQuestion">عدد الأسئلة الصعبة</span>
                            </div>
                            <div className="question-row">
                              <button className="control-button" onClick={() => decrement(setThinkingCount, thinkingCount)}>-</button>
                              <span className="countQuestion">{thinkingCount}</span>
                              <button className="control-button" onClick={() => increment(setThinkingCount, thinkingCount)}>+</button>
                              <span className="labelQuestion">مهارات تفكير عاليا</span>
                            </div>
                            <div className="question-row">
                              <button className="control-button" onClick={() => decrement(setExternalCount, externalCount)}>-</button>
                              <span className="countQuestion">{externalCount}</span>
                              <button className="control-button" onClick={() => increment(setExternalCount, externalCount)}>+</button>
                              <span className="labelQuestion">سؤال خارجي</span>
                            </div>
                            <div className="total-questions">
                              <span>مجموع الأسئلة</span>
                              <span className="total">{totalQuestions}</span>
                            </div>
                          </div>

                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                  </div>
                  <div className=" mt-5" dir='ltr'>
                    <button type="submit" className=' text-bold rounded-4 px-4 py-2' style={{ backgroundColor: "#C01F59", color: "white" }}>إنشاء الامتحان</button>
                  </div>
                </div>

              </div>
            </form>
          </div>
          <form className="modal-body managerForm" onSubmit={handleSubmitExam} id="Exam">
            <div className="  ">
              {/* /////////////////button///////////////////////////////////////////////// */}
              <div className="lineButton " style={{}}>
                <button className=" fs-4 rounded-5 p-0  px-4  my-2" algin="center" type="button"
                  style={{ backgroundColor: "#FE4F60", color: "", width: "", border: "none" }} >
                  الامتحان   </button>
              </div>
              {/* <MyButton className="btn mx-3 py-0" style={{ height: "2.5rem", width:"8rem", color: "white", backgroundColor: "#4941A6" }} to={"/Home"} content={"انشاء حساب"} /> */}
              {/* /////////////////endbutton///////////////////////////////////////////////// */}
              {/* /////////////////exam///////////////////////////////////////////////// */}
              <div id="collapseExample2">
                {Array.isArray(QusetionExam.questions) && currentQuestions.map((question, index) => (

                  <div key={question.id} className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex px-3">
                        <h3 >السؤال /{indexOfFirstQuestion + index + 1}</h3>
                        {/* <h3>السؤال /{indexOfFirstQuestion + index + 1}</h3> */}
                        <button className='me-3 text-bold rounded-3 px-4' style={{ border: "none", backgroundColor: "#C01F59", color: "white", height: "2.5rem" }}>
                          علامة السؤال ({question.point})
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="timerexam p-3 d-flex align-items-center justify-content-center" style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                          <div className='fontsizexam' style={{ color: "#FE4F60" }}>
                            <div id="timer-display" className="timer-display" >
                              {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>

                        <img src={`${Api_dashboard.defaults.baseURL}/assets/Questions/${question.media?.name}`} id="image" alt=""
                          style={{
                            width: "12vw",
                            height: question.media?.name ? "12vw" : "0vw"
                          }} />

                        <li className='bulits fontsizexam py-2'>{question.name}</li>
                        {Array.isArray(question.options) && question.options.map(({ id, option, media }) => (
                          <div key={id}>
                            <div className='pt-2 pe-4 py-3'>
                              <input
                                type="checkbox"
                                id={`vehicle-${id}-1`}
                                name={`vehicle-${id}-1`}
                                value="Bike"
                                checked={selectedOptions[question.id]?.includes(id) || false}
                                data-question-id={question.id}
                                data-option-id={id}
                                onChange={() => handleCheckboxChange(question.id, id)}
                              />
                              <label
                                className='btn rounded-3 px-4 me-3 '
                                style={{ color: "white", border: "2px solid #C01F59" }}
                                htmlFor={`vehicle-${id}-1`}
                              >
                                <img src={`${Api_dashboard.defaults.baseURL}/assets/Options/${media?.name}`} id="image" alt=""

                                  style={{
                                    width: "12vw",
                                    height: media?.name ? "12vw" : "0vw"
                                  }}

                                />
                                <div>
                                  {option}
                                </div>
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5" dir='ltr'>
                      <button onClick={handleNext} className='btn rounded-5 px-4 py-2' style={{ width: "100px", backgroundColor: "#C01F59", color: "white" }} disabled={isNextDisabled}>
                        التالي
                      </button>
                      <button onClick={handlePrevious} className='btn rounded-5 px-4 py-2' style={{ width: "100px", backgroundColor: "#CDCDCD", color: "black" }} disabled={isPreviousDisabled}>
                        السابق
                      </button>
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-center">
                      <button type="submit" className='text-bold rounded-4 px-4 py-2' style={{ backgroundColor: "#C01F59", color: "white" }}>تسليم الامتحان</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>

          {/* /////////////////endexam///////////////////////////////////////////////// */}
          {/* ////////////////الوقت  انتهي  ///////////////////////////////////////////////// */}

          <div className="collapse mt-3" id="FinishTimer" style={{ display: "none" }} >

            <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>

              <div className=" d-flex align-items-center justify-content-between ">

                <div className="  d-flex px-3">
                </div>

                <div className=" d-flex  align-items-center justify-content-center ">
                  <div className="timerexam p-3  d-flex align-items-center justify-content-center " style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                    <div className='fontsizexam' style={{ color: "#FE4F60" }}>00:00</div>
                  </div>
                </div>
              </div>

              <div className=' d-flex align-items-center justify-content-center flex-column' >
                <i className='fas fa-exclamation text-center' style={{ width: "35px", height: "35px", fontSize: "25px", color: "#FE4F60 ", borderRadius: "50%", border: "4px solid #FE4F60" }}></i>
                <h2 style={{ color: layoutBackground === "#0E0A43" ? "#FE4F60" : "#4941A6", }}>  الوقت  انتهي  </h2>
                <h3 style={{ color: layoutBackground === "#0E0A43" ? "white" : "black" }}>قم بإعداد امتحان آخر</h3>
                <h5><span className='fontsizexam' style={{ color: "#FE4F60" }}>حظ موفق</span></h5>
              </div>

            </div>
          </div>

          {/* -------------------الوقت  انتهي  -------------------------------- */}
          {/* /////////////////تم مراجعة النتائج ///////////////////////////////////////////////// */}

          <div className="collapse  mt-3" style={{ display: "none" }} id="FinishExam">

            <div className="card card-body rounded-5" style={{ backgroundColor: "#1D195D" }}>

              <div className=" d-flex align-items-center justify-content-between ">

                <div className="  d-flex px-3">
                </div>

                <div className=" d-flex  align-items-center justify-content-center ">
                  <div className="timerexam p-3  d-flex align-items-center justify-content-center " style={{ border: "2px solid #FFFFFF", borderRadius: "50%", width: "80px", height: "80px" }}>
                    <div className='fontsizexam' style={{ color: "#FE4F60" }}>00 :00</div>
                  </div>
                </div>
              </div>

              <div className=' d-flex align-items-center justify-content-center flex-column' >
                <i className='fas fa-check-double pt-1 text-center' style={{ width: "40px", height: "40px", fontSize: "29px", color: "#A6A0F4 ", borderRadius: "50%", border: "3px solid #A6A0F4" }}></i>
                <h2 style={{ color: layoutBackground === "#0E0A43" ? "#FE4F60" : "#4941A6", }}>تم مراجعة النتائج </h2>
                <h3 style={{ color: layoutBackground === "#0E0A43" ? "white " : "black" }}>حصلت على</h3>
                <h3><span className='fontsizexam' style={{ color: "white" }}>{result.total_score}</span> /<span className='fontsizexam' style={{ color: "#FE4F60" }}>{result.result}</span></h3>
              </div>

            </div>
          </div>

          {/* --------------------تم مراجعة النتائج -------------------------------- */}
        </div>
      </div>
    </>
  )
}
export default CreateExam;