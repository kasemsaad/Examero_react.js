import image from "../../../assets/icons/PuttingQuestion/octicon_question-16.svg";
import "./HeaderPuttingQuestion.css";
const HeaderOfPuttingQuestions = () => {
  return (
    <>
      <div className="imag-question col-12">
        <div className="inner-image-question col-5 h-100 d-flex align-items-center">
          <div className="inner-image-question d-flex col-9 justify-content-center align-items-center">
            <img src={image} alt="" />
            <p>وضع الأسئله</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOfPuttingQuestions;
