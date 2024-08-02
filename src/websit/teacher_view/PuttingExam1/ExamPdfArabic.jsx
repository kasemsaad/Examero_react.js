
import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Api_website from '../../../utlis/axios_utils_websit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import loadIcon from '../../../assets/icons/teacherview/material-symbols_upload-sharp.svg';
import homeLogo from './WhatsApp Image 2024-07-31 at 12.55.50_962c7e48.jpg';
// import rightLogo from './WhatsApp Image 2024-07-31 at 12.55.50_962c7e48.jpg';
import leftLogo from './WhatsApp Image 2024-07-31 at 12.56.09_2c113d77.jpg';

function ExamPdf() {
  const navigate = useNavigate();
  const flag= localStorage.getItem("allow")
if(flag!=="1"){
  navigate("/")
}

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
  const [totalpage, settotalpage] = useState("");


  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const Errornotify = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
  useEffect(() => {
    const input = document.getElementById('exam-container');
    html2canvas(input, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgProps = pdf.getImageProperties(imgData);
        const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
        const totalPages = Math.ceil(imgHeight / pdfHeight);
        settotalpage(totalPages);

    });
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

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdfHeight;
        }
        pdf.save('exam.pdf');
        navigate("/ExamPdfArabicsolution");
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
    getSubjectId();
  }, []);


  const [mediaQuestion, setMediaQuestion] = useState(null);
  const [mediaAnswer, setMediaAnswer] = useState(null);


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'mediaQuestion') {
      setMediaQuestion(files[0]);
    } else if (name === 'mediaAnswer') {
      setMediaAnswer(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('mediaQuestion', mediaQuestion);
    formData.append('mediaAnswer', mediaAnswer);
    formData.append('group_id', idGroup);
    formData.append('subject_id', subjectid);
    formData.append('semster', idsemester);


    Api_website.post('/teachers/store-exam-info', formData)
      .then((response) => {
        console.log("success")
        notify("تم الحفظ بنجاح")
      })
      .catch((error) => {
        Errornotify("لم يتم حفظ الملفات")
      });

  }
  
  const [preview, setPreview] = useState(null);

  useEffect(() => {
      // Retrieve the preview from sessionStorage
      const previewData = localStorage.getItem('preview');
      setPreview(previewData);
  }, []);
  return (
    <>
      <ToastContainer position='top-center' />
    
      <div>
        <div id="exam-container" className="exam-container">
          <div className="exam-header">
            <div className="exam-logo">
              <img  hidden={!headerData3.showJordanianLogo} src={leftLogo} alt="logo" />
            </div>
            <div className="exam-title">
              ترويسة الامتحان باللغه العربية <br />
              <div className="exam-logo">
                <img src={homeLogo} alt="logo" />
              </div>
            </div>
            <div className="exam-logo">
              <img src={preview} alt="logo" />
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
            <div className="exam-note" hidden={!headerData3.showApperanceNotice}>
              ملحوظة مهمة : أجب عن الأسئلة الآتية جميعها وعددها ({headerData3.questionCount}) ، علماً أن عدد صفحات الامتحان ({totalpage})
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
                          )
                        }
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
        <div className='d-flex align-item-center justify-content-center p-5'>
          <Link hidden={true}  to={`/teacher/PuttingExam5/${parseInt(headerData3.questionCount) + 1}`}>
            <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5">
              السابق
            </button>
          </Link>
          <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" onClick={downloadPdf}>تحميل</button>
          <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" data-bs-toggle="modal" data-bs-target="#logout">حفظ</button>
        </div>
      </div>

      <div className="modal fade DElementFade" id="logout" tabIndex="-1" aria-labelledby="deleteElementModalLabel" aria-hidden="true">
        <div className="modal-dialog DElementDialog modal-dialog-centered ele_2">
          <div className="modal-content DElementContent modal-backdrop1">
            <div className="modal-body DElementBody text-center">
              <p className="modal-title DElementTitle pt-5" id="deleteElementModalLabel">رفع الملفات</p>
              <Row className="mt-5">
        
               <Col xs={12} sm={6}>
      <Form.Group controlId="formFileUpload">
        <div className="d-flex align-items-center justify-content-center iciio">
          <Form.Label className="mr-2">ملف الأسئلة</Form.Label>
        </div>
        <div className="custom-file-input-wrapper">
          <Form.Control
            type="file"
            name="mediaQuestion"
            accept=".pdf"
            onChange={handleFileChange}
            className="custom-file-input" // Ensure this class is defined in your CSS
          />
         
        </div>
      </Form.Group>
    </Col>
                <Col xs={12} sm={6}>
                  <Form.Group controlId="formFileUpload">
                    <div className="d-flex align-items-center justify-content-center iciio">
                      <Form.Label className="mr-2">ملف الإجابات</Form.Label>
                    </div>
                    <div className="custom-file-input-wrapper" encType="multipart/form-data">
                      <Form.Control
                        type="file" name="mediaAnswer" accept=".pdf" onChange={handleFileChange}
                      />
                      
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="modal-footer DElementFooter">
              <div>
                <button type="button" className="btn btn-danger cancel-btn DElementSave mx-1" data-bs-dismiss="modal" onClick={handleSubmit}>
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
