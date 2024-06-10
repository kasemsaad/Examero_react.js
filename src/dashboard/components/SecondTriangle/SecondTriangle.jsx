import MyButton from "../../../common/Button/Button";
import "./Second.css";
const SecondTriangle = ({ content, className, linkTo, onClick }) => {
  return (
    <>
      <div className={className}>
        <MyButton
          className={"ques"}
          content={content}
          linkTo={linkTo}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default SecondTriangle;
