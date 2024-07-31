import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link,useNavigate } from 'react-router-dom';
import Api_website from '../../../utlis/axios_utils_websit';
import { toast, ToastContainer } from 'react-toastify';

function ExamPdf() {
  const navigate = useNavigate();
  const [dataQuestion1, setdataQuestion1] = useState([]);
  const [dataQuestion2, setdataQuestion2] = useState({});
  const [dataQuestion3, setdataQuestion3] = useState({});
  const [headerData1, setHeaderData1] = useState({});
  const [headerData2, setHeaderData2] = useState({});
  const [headerData3, setHeaderData3] = useState({});
  const [headerData4, setHeaderData4] = useState({});
  const notify = (AlertPointSuccess) => {
    toast.success(AlertPointSuccess, {
        position: "top-center",
        autoClose: 2000,
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
      autoClose: 2000,
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
  const save=()=>{
  const  DataQustions={
      group_id:"",
      subject_id:"",
      semster:"",
      mediaQuestion:"",
      mediaAnswer:""
    }
    Api_website.post('/teachers/store-exam-info', DataQustions)
      .then((response) => {
        
      })
      .catch((error) => {
        let err = error.response.data.message;
        Errornotify(err)
      });
  }


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
        <Link > <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" onClick={save}>حفظ</button></Link>
      </div>
    </div>
    </>
  );
}

export default ExamPdf;
