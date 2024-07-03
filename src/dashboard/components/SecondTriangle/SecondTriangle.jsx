import MyButton from "../../../common/Button/Button";
import "./Second.css";
const SecondTriangle = ({
  content,
  className,
  linkTo,
  onClick,
  style,
  stylep,
}) => {
  // const com;
  return (
    <>
      <div>
        <MyButton
          style={style}
          stylep={stylep}
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
