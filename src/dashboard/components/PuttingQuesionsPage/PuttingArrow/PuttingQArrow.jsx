import { useState, useEffect } from "react";
import FirstTriangle from "../../FirstTriangle/FirstTriangle";
import SecondTriangle from "../../SecondTriangle/SecondTriangle";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Inside your component

const PuttingQArrow = ({ onClick, linkTo }) => {
  const location = useLocation();
  const { pathname } = location;

  const [color, setColor] = useState(0);
  // const [route, setRoute] = useState("");
  // const navigate = useNavigate();

  // Use useEffect to handle navigation after color state update
  // useEffect(() => {
  //   if (route) {
  //     navigate(route);
  //   }
  // }, [color, route, navigate]);

  const handleColor = (id, newRoute) => {
    setColor(id);
  };

  return (
    <div style={{ height: "7rem", display: "flex" }}>
      <FirstTriangle
        onClick={() => handleColor(1)}
        // linkTo={"/dashboard/q"}
        style={{
          backgroundColor: pathname === "/dashboard/q" ? "#4941a6" : "#1D195D",
        }}
        content={"الصفوف"}
      />
      <SecondTriangle
        onClick={() => handleColor(2)}
        // style={{
        //   backgroundColor:
        //     linkTo === "/dashboard/mab"
        //       ? "#1D195D"
        //       : color < 3
        //       ? "white"
        //       : "#4941a6",
        //   color: pathname === "/dashboard/mab" ? "white" : "#000",
        // }}
        // id={color}
        linkTo={"/dashboard/mab"}
        content={"المباحث"}
        className="iddd"
      />
      <SecondTriangle
        onClick={() => handleColor(3)}
        // style={{
        //   backgroundColor:
        //     pathname === "/dashboard/unite" ? "#4941a6" : "#CDCDCD",
        // }}
        // id={color}
        // linkTo={"/dashboard/unite"}
        content={"الوحدات"}
        className="to"
      />
      <SecondTriangle
        // onClick={() => handleColor(4, "/dashboard/lesson")}
        //style={{
        //   backgroundColor:
        //     pathname === "/dashboard/lesson" ? "#4941a6" : "#CDCDCD",
        // }}
        // id={color}
        //linkTo={"/dashboard/lesson"}
        content={"الدروس"}
        className="arrowfour"
      />
      <SecondTriangle
        // style={{
        //   backgroundColor:
        //     pathname === "/dashboard/kinds" ? "#4941a6" : "#CDCDCD",
        // }}
        //linkTo={"/dashboard/kinds"}
        content={"أنواع الأسئلة"}
        className="arrowfive"
      />
    </div>
  );
};

export default PuttingQArrow;
