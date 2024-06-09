import MyButton from "../../../common/Button/Button";
import "./Second.css";
const SecondTriangle = ({ content, className, to, onClick }) => {
  return (
    <>
      <div className={className}>
        <MyButton
          className={"ques"}
          content={content}
          to={to}
          onClick={onClick}
        />
      </div>
    </>
  );
};

export default SecondTriangle;
