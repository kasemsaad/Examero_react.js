import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangle/SecondTriangle";

const PuttingQArrow = ({ onClick, linkTo }) => {
  return (
    <>
      <div style={{ height: "7rem", display: "flex" }}>
        <FirstTriangle content={"الصفوف"} />
        <SecondTriangle content={"المباحث"} className="iddd" />
        <SecondTriangle linkTo={linkTo} content={"الوحدات"} className="to" />
        <SecondTriangle content={"الدروس"} className="arrowfour" />
        <SecondTriangle content={"أنواع الأسئلة"} className="arrowfive" />
      </div>
    </>
  );
};

export default PuttingQArrow;
