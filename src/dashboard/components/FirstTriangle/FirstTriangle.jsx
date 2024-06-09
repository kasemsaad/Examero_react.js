import MyButton from "../../../common/Button/Button";
import "./FirstTriangle.css";
const FirstTriangle = ({ content, className, onClick }) => {
  return (
    <>
      <div className={className}>
        <MyButton
          className={"triangle-left"}
          content={content}
          onClick={onClick}
        />
      </div>
    </>
  );
};
export default FirstTriangle;
