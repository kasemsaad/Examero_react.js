import MyButton from "../../../common/Button/Button";
import "./Second.css";
const SecondTriangle = ({ content, className }) => {
  return (
    <>
      <div className={className}>
        <MyButton className={"ques"} content={content} />
      </div>
    </>
  );
};

export default SecondTriangle;
