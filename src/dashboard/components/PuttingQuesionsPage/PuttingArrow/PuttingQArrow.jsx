import { useLocation } from "react-router-dom";
import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangl/SecondTriangle";
import "./PuttinQArrow.css";
// Inside your component

const PuttingQArrow = ({ myColor }) => {
  const location = useLocation();
  const { pathname } = location;
  let pag = Number(pathname.at(-1));
  return (
    <div style={{ height: "7rem", display: "flex" }}>
      <FirstTriangle
        // linkTo={"/dashboard/q"}
        style={{
          backgroundColor: pag === 1 ? "#4941A6" : pag > 1 ? "#1D195D" : "",
        }}
        content={"الصفوف"}
      />
      <div className="iddd">
        <SecondTriangle
          style={{
            backgroundColor: pag === 2 ? "#4941A6" : pag > 2 ? "#1D195D" : "",
          }}
          stylep={{ color: pag === 2 ? "white" : pag > 2 ? "white" : "" }}
          content={"المباحث"}
          className="iddd"
        />
      </div>

      <div className="to-arr-put">
        <SecondTriangle
          content={"الوحدات"}
          className="to"
          stylep={{ color: pag === 3 ? "white" : pag > 3 ? "white" : "" }}
          style={{
            backgroundColor: pag === 3 ? "#4941A6" : pag > 3 ? "#1D195D" : "",
          }}
        />
      </div>
      <div className="arrowfour">
        <SecondTriangle
          content={"الدروس"}
          className="arrowfour"
          stylep={{ color: pag === 4 ? "white" : pag > 4 ? "white" : "" }}
          style={{
            backgroundColor: pag === 4 ? "#4941A6" : pag > 4 ? "#1D195D" : "",
          }}
        />
      </div>
      <div className="arrowfive">
        <SecondTriangle
          content={"أنواع الأسئلة"}
          style={{
            backgroundColor: pag === 5 ? "#4941A6" : pag > 5 ? "#1D195D" : "",
          }}
          stylep={{ color: pag === 5 ? "white" : pag > 5 ? "white" : "" }}
        />
      </div>
    </div>
  );
};

export default PuttingQArrow;
