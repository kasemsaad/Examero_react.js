import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangle/SecondTriangle";

// Inside your component

const PuttingQArrow = ({ myColor }) => {
  return (
    <div style={{ height: "7rem", display: "flex" }}>
      <FirstTriangle
        // linkTo={"/dashboard/q"}

        content={"الصفوف"}
      />
      <div className="iddd">
        <SecondTriangle
          style={{
            backgroundColor:
              myColor === 0 ? "#4941A6" : myColor > 0 ? "#1D195D" : "",
          }}
          content={"المباحث"}
          className="iddd"
        />
      </div>

      <div className="to-arr-put">
        <SecondTriangle content={"الوحدات"} className="to" />
      </div>
      <div className="arrowfour">
        <SecondTriangle content={"الدروس"} className="arrowfour" />
      </div>
      <div className="arrowfive">
        <SecondTriangle content={"أنواع الأسئلة"} />
      </div>
    </div>
  );
};

export default PuttingQArrow;
