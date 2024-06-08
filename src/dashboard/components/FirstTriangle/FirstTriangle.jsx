import MyButton from "../../../common/Button/Button";
import "./FirstTriangle.css";
const FirstTriangle = ({ content }) => {
  return (
    <>
      <MyButton className={"triangle-left"} content={content} />
    </>
  );
};
export default FirstTriangle;
