// import MyButton from "../../common/Button/Button";
import { Link, useParams } from 'react-router-dom';
import './createExam.css'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import plus from '../../../assets/image/+.svg';
import Dropdown from 'react-bootstrap/Dropdown';
import Api_Website from '../../../utlis/axios_utils_websit';
function CorrectAnswer(props) {
  const layoutBackground = useSelector((state) => state.dark.lay);
  const [AllAnswerData, setAllAnswerData] = useState("")
  const { id } = useParams();

  const getanswerdata = () => {
    document.body.style.removeProperty('overflow');
    Api_Website.get(`/students/preview-exam/${id}`)
      .then(response => {
        setAllAnswerData(response.data.data.preview);
        console.log(response.data.data.preview)
      })
      .catch(error => {
        console.error("Error fetching  data:", error);
      });
  }
  useEffect(() => {
    getanswerdata()
  }, []);
  return (
    <>
      <div className='p-3'>
        {Array.isArray(AllAnswerData.questions) && (AllAnswerData.questions).map((question, index) => (

          <div key={question.id} className="card card-body rounded-5 m-2 " style={{ backgroundColor: "#1D195D" }}>
            <div className="d-flex align-items-center justify-content-between ">
              <div className="d-flex px-3">
                <h3 >السؤال ({index + 1})</h3>
                <button className='me-3 text-bold rounded-3 px-4' style={{ border: "none", backgroundColor: "#C01F59", color: "white", height: "2.5rem" }}>
                  علامة السؤال ({question.point})
                </button>
              </div>

            </div>
            <div>
              <div>

                <li className='bulits fontsizexam py-2'>{question.name}</li>
                {Array.isArray(question.options) && question.options.map(({ id, option, is_correct, studentChoices }) => (
                  <div key={id}>
                    <div className='pt-2 pe-4 py-3'>

                      <label
                        className='btn rounded-3 px-4 me-3 '
                        style={{ color: "white", border: "2px solid #C01F59" }}
                      >

                        <div>
                          {option}

                        </div>

                        {/* fas fa-xmark  */}
                      </label>
                      {is_correct == 1 ? <i className='fas fa-check fs-4 pe-3' style={{ color: "green" }}></i> : ""}
                      {Array.isArray(question.studentChoices) && question.studentChoices.map((choice, idx) => (
                        <span key={idx} className="pt-2 ">
                          {id == choice.studnet_choice ? <span> {choice.is_correct ? "" : <i className='fas fa-xmark  fs-4 pe-3' style={{ color: "red" }}></i>}</span> : ""}
                        </span>))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        ))}
      </div>
      <div className="" dir='ltr'>
        <Link to="/student/datastudentexam">
          <button className='btn rounded-5 px-4 py-2 mb-4 ms-3' style={{ width: "100px", backgroundColor: "#C01F59", color: "white" }} >
            رجوع
          </button>
        </Link>
      </div>
    </>
  )
}
export default CorrectAnswer;