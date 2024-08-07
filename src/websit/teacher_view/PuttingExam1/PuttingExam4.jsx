import React, { useState } from 'react';
import { Form, Button, Row, Col, ProgressBar } from 'react-bootstrap';
import putting from '../../../assets/icons/teacherview/wpf_create-new.svg';
import './PuttingExam1.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function PuttingExam4(props) {

  const [progress, setProgress] = useState(85);
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [finishExam, setfinishExam] = useState("إنتهت الأسئلة")
  const [Message, setMessage] = useState("تمنياتي لكم بالتوفيق والنجاح")
  const [teachername, setTeacherName] = useState("ابوكيان")
  const Navigate = useNavigate()

  const [values, setValues] = useState({
    finishExam:"إنتهت الأسئلة",
    Message:"تمنياتي لكم بالتوفيق والنجاح",
    teachername: "ابوكيان"
  });

  const handleInputChangefinishExam = (e) => {
    const { value } = e.target;
    setValues({ ...values, finishExam: value });
    setfinishExam(value)
   
  };
  const handleInputChangeMessage = (e) => {
    const { value } = e.target;
    setValues({ ...values, Message: value });
    setMessage(value)

   
  };
  const handleInputChangeteachername = (e) => {
    const { value } = e.target;
    setValues({ ...values, teachername: value });
    setTeacherName(value)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let doc = localStorage.getItem("doc");
    doc = doc ? JSON.parse(doc) : [];

    const formData = {
      finishExam,
      Message,
      teachername

    };

    
    if (!doc.length) {
      doc.splice(3, 3, JSON.stringify(formData));
    } else {
        doc.splice(3, 3, JSON.stringify(formData));
    }
    
    localStorage.setItem("doc", JSON.stringify(doc));
    localStorage.setItem("doc1", JSON.stringify(doc));
    localStorage.setItem("all", "[]" )
    localStorage.setItem("Box", "[]" )
    Navigate("/teacher/PuttingExam5/1");
  };
  return (
    <>
      <div className='py-2'>
        <div className='header-container1 ' style={{
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

        <Form onSubmit={handleSubmit} className='form_putting_exam4' style={{
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
            }}> بيانات تزييل الامتحان</span>
          </div>

          <div className='text-center nn'>
            <span className='m-2 t1'>ماذا تريد أن تكتب اخر صفحة الامتحان </span>
            <div className='align-items-center m-2 t2'>
              <div className='d-inline-block text-center'>
                {finishExam}
                <br />
                {Message}
              </div>
              <div className='d-flex justify-content-center'>
                <div className='teacher_name'>معلم المادة : {teachername} </div>
              </div>
              <div className='d-flex justify-content-center'>
                <Button

                  data-bs-toggle="modal"
                  data-bs-target="#addManagerModal"
                  className='btn_edit_exam' type="button">
                  تعديل
                </Button>
              </div>
            </div>
          </div>

          <Row>
            <Col className="text-start">
            <Link to="/teacher/PuttingExam3">
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

        <div
          className="modal fade managerFade"
          id="addManagerModal"
          tabIndex="-1"
          aria-labelledby="addManagerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered managergDialog">
            <div className="modal-content managerContent">
              <div className="modal-header managerHeader">
                <h5 className="modal-title managerTitle" >
                  تعديل
                </h5>

                <button type="button" className="btn-close kh" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className='pt-2' align="center">

              </div>

              <div className="modal-body managerBody">
                <form className="modal-body managerForm" action='/teacher/PuttingExam4' >
                  <div className="parent1">
                    <div className="child1 col-lg-10">
                      <div className="form-group managerFGroup">

                        <label htmlFor="lastName">العنوان</label>
                        <input
                          type="text"
                          className="form-control managerControl"
                          id="lastName"
                          placeholder={`أدخل العنوان `}
                          value={values.finishExam}
                          onChange={handleInputChangefinishExam}
                          required
                        />

                        <span className="form-text text-muted">

                        </span>
                      </div>
                      <div className="form-group managerFGroup">

                        <label htmlFor="lastName">الرساله</label>
                        <input
                          type="text"
                          className="form-control managerControl"
                          id="lastName"
                          value={values.Message}
                          onChange={handleInputChangeMessage}
                          placeholder={`أدخل الرساله `}
                          required
                        />

                        <span className="form-text text-muted">

                        </span>
                      </div>
                      <div className="form-group managerFGroup">
                        <label htmlFor="">معلم المادة</label>
                        <input
                          type="text"
                          className="form-control managerControl"
                          id="lastName"
                          value={values.teachername}
                          onChange={handleInputChangeteachername}
                          placeholder="أدخل اسم المعلم"
                          required
                        />

                        {/* {noteValidationMessage && <p style={{ color: 'red' }}>{noteValidationMessage}</p>} */}
                      </div>

                    </div>

                  </div>
                  <div className="modal-footer managerFooter pt-4 ">
                    <button
                      type="button"
                      className="btn canceled managerCancel"
                      data-bs-dismiss="modal"
                      id="firstbutt"
                      onClick={() => {

                      }}
                    >
                      تعديل 
                    </button>
                    {/* <button type="submit" className="btn save managerSave" >إضافة</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default PuttingExam4;
