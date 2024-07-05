import MyButton from "../../../common/Button/Button";
import "./FirstTriangle.css";
const FirstTriangle = ({
  content,
  className,
  onClick,
  linkTo,
  style,
  stylep,
}) => {
  return (
    <>
      <div className={className}>
        <MyButton
          style={style}
          linkTo={linkTo}
          className={"triangle-left"}
          content={content}
          onClick={onClick}
          stylep={stylep}
        />
      </div>
    </>
  );
};
export default FirstTriangle;
