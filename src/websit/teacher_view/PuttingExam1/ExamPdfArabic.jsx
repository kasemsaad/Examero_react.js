import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link,useNavigate } from 'react-router-dom';
import Api_website from '../../../utlis/axios_utils_websit';
import { toast, ToastContainer } from 'react-toastify';
import imagee from '../../../assets/icons/create_Exam/High Importance.svg';
import { Form, Button, Row, Col, Dropdown, DropdownButton, ProgressBar } from 'react-bootstrap';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';

function ExamPdf() {
  const navigate = useNavigate();
  const [dataQuestion1, setdataQuestion1] = useState([]);
  const [dataQuestion2, setdataQuestion2] = useState({});
  const [dataQuestion3, setdataQuestion3] = useState({});
  const [headerData1, setHeaderData1] = useState({});
  const [headerData2, setHeaderData2] = useState({});
  const [headerData3, setHeaderData3] = useState({});
  const [headerData4, setHeaderData4] = useState({});
  const [subjectid, setsubjectid] = useState(null);
  const [idGroup, setidGroup] = useState(null);
  const [idsemester, setidsemester] = useState(null);
  const [fileLabel, setFileLabel] = useState('تحميل ملف الاسئله '); 
  const [fileLabel2, setFileLabel2] = useState('تحميل ملف الإجابات '); 

  const notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
};
const Errornotify = (AlertPoint) => {
  toast.error(AlertPoint, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  })
};
  useEffect(() => {
    const docString = localStorage.getItem("doc");
    if (docString) {
      try {
        const docJson = JSON.parse(docString);
        setHeaderData1(JSON.parse(docJson[0]));
        setHeaderData2(JSON.parse(docJson[1]));
        setHeaderData3(JSON.parse(docJson[2]));
        setHeaderData4(JSON.parse(docJson[3]));
      } catch (error) {
        console.error("Error parsing doc:", error);
      }
    }

    const allString = localStorage.getItem("all");
    if (allString) {
      try {
        const allJson = JSON.parse(allString);
        allJson.forEach(item => {
          try {
            const parse2 = JSON.parse(item);
            const parse3 = JSON.parse(parse2.السؤال);
            setdataQuestion1(prevState => [...prevState, item]);
            setdataQuestion2(parse2);
            setdataQuestion3(parse3);
          } catch (error) {
            console.error("Error parsing question item:", error);
          }
        });
      } catch (error) {
        console.error("Error parsing all:", error);
      }
    }
  }, []);

  const downloadPdf = () => {
    const input = document.getElementById('exam-container');
    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
      pdf.save('exam.pdf');
      navigate("/ExamPdfArabicsolution")
    });
  };
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
    } else {
      navigate('/teacher/PuttingExam1');
    }
  }
  useEffect(() => {
    getSubjectId()
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // if (selectedFile && selectedFile.type === 'application/pdf') {
      setFileLabel(selectedFile.name);
    // } else {
    //   setFileLabel('قم بتحميل الملف');
    //   alert('يرجى تحميل ملف بصيغة PDF فقط');
    // }
  };
  
  const handleFileChange2 = (e) => {
    const selectedFile = e.target.files[0];
    // if (selectedFile && selectedFile.type === 'application/pdf') {
      setFileLabel2(selectedFile.name);
    // } else {
    //   setFileLabel2('قم بتحميل الملف');
    //   alert('يرجى تحميل ملف بصيغة PDF فقط');
    // }
  };
  
  const save = () => {
    const DataQustions = {
      group_id: idGroup,
      subject_id: subjectid,
      semster: idsemester,
      mediaQuestion: fileLabel,
      mediaAnswer: fileLabel2,
    };
    console.log(DataQustions);
    Api_website.post('/teachers/store-exam-info', DataQustions)
      .then((response) => {
        notify('تم الحفظ بنجاح');
      })
      .catch((error) => {
        let err = error.response.data.message;
        Errornotify(err);
        // console.error('dddd');
      });
  };

  return (
    <>
    <ToastContainer position='top-center' />
    <div>
      <div id="exam-container" className="exam-container">
        <div className="exam-header">
          <div className="exam-logo">
            <img src="https://i.ibb.co/7g6p4zM/logo.png" alt="logo" />
          </div>
          <div className="exam-title">
            ترويسة الامتحان باللغه العربية <br />
            <div className="exam-logo">
              <img src="https://i.ibb.co/7g6p4zM/logo.png" alt="logo" />
            </div>
          </div>
          <div className="exam-logo">
            <img src="https://i.ibb.co/7g6p4zM/logo.png" alt="logo" />
          </div>
        </div>
        <div className="exam-content">
          <div className="exam-info" style={{ textDecoration: "underline" }}>
            {headerData1.institution}<br />
            مديرية   {headerData1.directorate}<br />
            مدرسة  {headerData1.school}<br />
            {headerData1.examName}    {parseInt(headerData2.semester) === 1 ? "الفصل الدرسي الأول" : parseInt(headerData2.semester) === "2" ? "الفصل الدرسي الثاني" : ""}   {headerData2.curriculum}
          </div>
          <div className="exam-details d-flex justify-content-between" dir='rtl'>
            <div className='' align="start">
              الصف و الشعبة : {headerData2.examName}<br />
              المبحث:  {headerData3.subjectname}<br />
              {headerData2.directorate} .....................
            </div>
            <div className='' align="start">
              التاريخ  :  {headerData2.dayAndDate}<br />
              مدة الامتحان : {headerData2.examDuration} دقيقة فقط<br />
            </div>
          </div>
          <div className="exam-note" hidden={headerData3.showApperanceNotice}  >
            ملحوظة مهمة : أجب عن الأسئلة الآتية جميعها وعددها ({headerData3.questionCount}) ، علماً أن عدد صفحات الامتحان ( )
          </div>
          {
            Array.isArray(dataQuestion1) ?
              dataQuestion1.map((headquestion, index) => {
                try {
                  const parsedQuestion = JSON.parse(headquestion);
                  return (
                    <div key={index} className="exam-question">
                      {index + 1}) {parsedQuestion.addressQuestion} <span> : </span>
                      <span>({parsedQuestion.markQuestion}) درجة</span><br />

                      {
                        JSON.parse(parsedQuestion.السؤال).map((markquestion, index) =>
                          <div className="exam-answer">

                            {index + 1}) {markquestion.name}
                            {(markquestion.options).map((option, index) => (
                              <div key={index}>
                                {index + 1}
                                <span>) </span>
                                {option.option}
                                <br />
                              </div>
                            ))}
                          </div>

                        )}

                    </div>
                  );
                } catch (error) {
                  console.error('Error parsing question:', error);
                  return null;
                }
              })
              : null

          }
        </div>
        <div className="exam-footer">
          <div className="exam-end">
            {headerData4.finishExam}
          </div>
          <div className="exam-wish">
            {headerData4.Message}
          </div>
          <div className="exam-teacher">
            معلم المادة : {headerData4.teachername}

          </div>
        </div>

      </div>
      <div className='d-flex align-item-center justify-content-center    p-5'>
        <Link to={`/teacher/PuttingExam5/${parseInt(headerData3.questionCount) + 1}`}>
          <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2  p-5" >
            السابق
          </button>
        </Link>
        <Link > <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" onClick={downloadPdf}>تحميل</button></Link>
        <Link data-bs-toggle="modal" data-bs-target="#logout"> <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" >حفظ</button></Link>
      </div>
    </div>

    <div className="modal fade DElementFade" id="logout" tabIndex="-1" aria-labelledby="deleteElementModalLabel" aria-hidden="true">
  <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
    <div className="modal-content DElementContent modal-backdrop1">
      <div className="modal-body DElementBody text-center">
        {/* <img src={imagee} alt="Warning Icon" className="warning-icon" /> */}
        <p className="modal-title DElementTitle pt-5" id="deleteElementModalLabel">رفع الملفات</p>
        <Row className="mb-3">
          <Col xs={12} sm={6}>
            <Form.Group controlId="formFileUpload">
              <div className="d-flex align-items-center justify-content-center iciio">
                <Form.Label className="mr-2">ملف الأسئله</Form.Label>
              </div>
              <div className="custom-file-input-wrapper">
                <Form.Control
                  type="file"
                  accept="application/pdf"
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
            <Form.Group controlId="formFileUpload">
              <div className="d-flex align-items-center justify-content-center iciio">
                <Form.Label className="mr-2">ملف الإجابات</Form.Label>
              </div>
              <div className="custom-file-input-wrapper">
                <Form.Control
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange2}
                  className="file-input"
                />
                <div className="custom-file-label">
                  <div>{fileLabel2}</div>
                  <div><img src={loadIcon} alt="Upload Icon" className="load-icon" /></div>
                </div>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </div>
      <div className="modal-footer DElementFooter">
        <div>
          <button type="button" className="btn btn-danger cancel-btn DElementSave mx-1" data-bs-dismiss="modal" onClick={save}>
            نعم
          </button>
          <button type="button" className="btn-secondary cancel-btn DElementCancel mx-1" data-bs-dismiss="modal">
            لا
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default ExamPdf;
