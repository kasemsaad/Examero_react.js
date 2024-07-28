import React, { useEffect, useState } from 'react';
import './ExamPage.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

function ExamPdf() {
  const [dataQuestion1, setdataQuestion1] = useState("");
  const [dataQuestion2, setdataQuestion2] = useState("");
  const [dataQuestion3, setdataQuestion3] = useState("");
  const jsonStrings=[localStorage.getItem("doc")]
  const parsedJsonObjects = jsonStrings.map(jsonStr => JSON.parse(jsonStr));
  const HeaderData1=JSON.parse(parsedJsonObjects[0][0])
  const HeaderData2=JSON.parse(parsedJsonObjects[0][1])
  const HeaderData3=JSON.parse(parsedJsonObjects[0][2])
  const HeaderData4=JSON.parse(parsedJsonObjects[0][3])
// console.log(HeaderData1)
// console.log(HeaderData2)
// console.log(HeaderData3)
// console.log(HeaderData4)
// // \\\\\\end parse exam\\\\\\\\\

// // \\\\\\start parse exam\\\\\\\\\
useEffect(() => {
const parse=[localStorage.getItem("all")]
const parse1=JSON.parse(parse)
// console.log(parse1)
parse1.map(item => {
const parse2=JSON.parse(item)
const parse3=JSON.parse(parse2.السؤال)
setdataQuestion1(parse1);
setdataQuestion2(parse2);
setdataQuestion3(parse3);
return item;
});
},[]);
// console.log(dataQuestion);
// \\\\\\end parse exam\\\\\\\\\
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
    });
  };

  return (
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
          {HeaderData1.institution}<br />
            مديرية   {HeaderData1.directorate}<br />
            مدرسة  {HeaderData1.school}<br />
            {HeaderData1.examName}    {parseInt(HeaderData2.semester)===1?"الفصل الدرسي الأول":parseInt(HeaderData2.semester)==="2"?"الفصل الدرسي الثاني":""}   {HeaderData2.curriculum}
          </div>
          <div className="exam-details d-flex justify-content-between" dir='rtl'>
            <div className='' align="start">
              الصف و الشعبة : {HeaderData2.examName}<br />
              المبحث:  {HeaderData3.subjectname}<br />
              {HeaderData2.directorate} .....................
            </div>
            <div className='' align="start">
               التاريخ  :  {HeaderData2.dayAndDate}<br />
              مدة الامتحان : {HeaderData2.examDuration} دقيقة فقط<br />
                          </div>
          </div>
          <div className="exam-note" hidden={HeaderData3.showApperanceNotice}  >
            ملحوظة مهمة : أجب عن الأسئلة الآتية جميعها وعددها ({HeaderData3.questionCount}) ، علماً أن عدد صفحات الامتحان ( )    
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
         JSON.parse(parsedQuestion.السؤال).map((markquestion,index)=>
          <div className="exam-answer">
            
          {index+1}) { markquestion.name }
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
{HeaderData4.finishExam}       
   </div>
          <div className="exam-wish">
          {HeaderData4.Message}       
          </div>
          <div className="exam-teacher">
            معلم المادة : {HeaderData4.teachername}       

          </div>
        </div>

      </div>
       <div className='d-flex align-item-center justify-content-center    p-5'>
       <Link to={`/teacher/PuttingExam5/${parseInt(HeaderData3.questionCount)+1}`}>
  <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2  p-5" >
    السابق
  </button>
</Link>
<Link >

      <button className="btn_putting_exam2_after text-white py-0 m-0 mt-3 mx-2 p-5" onClick={downloadPdf}>تحميل</button></Link>

       </div>
    </div>
  );
}

export default ExamPdf;
