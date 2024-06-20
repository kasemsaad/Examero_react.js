import MyButton from "../../../common/Button/Button";
import "./FirstTriangle.css";
const FirstTriangle = ({ content, className, onClick, linkTo, id, style }) => {
  const com = 1;
  return (
    <>
      <div className={className}>
        <MyButton
          style={style}
          linkTo={linkTo}
          className={"triangle-left"}
          content={content}
          onClick={onClick}
        />
      </div>
    </>
  );
};
export default FirstTriangle;
