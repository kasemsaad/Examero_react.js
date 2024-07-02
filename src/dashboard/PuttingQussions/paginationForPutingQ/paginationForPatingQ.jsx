import React from "react";
import MyButton from "../../../common/Button/Button";
import "./paginationFPQ.css";
const PaginationForPuttingQ = ({
  totalPages,
  currentPage,
  className,
  setCurrentPage,
}) => {
  const handelNext = () => {
    if (currentPage === totalPages) return;
    console.log(currentPage);
    setCurrentPage((currentPage) => currentPage + 1);
  };

  // handel prev page
  const handelPrev = () => {
    if (currentPage === 1) return;
    console.log(currentPage);

    setCurrentPage((currentPage) => currentPage - 1);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: " 41px",
          alignItems: "center",
        }}
        className={`footer-manger${className} `}
      >
        <MyButton
          content={">"}
          onClick={handelPrev}
          style={{
            backgroundColor: currentPage === 1 ? "#120E4D" : "#4941A6",
            height: "26px",
            width: "26px",
            display: "flex",
            fontSize: "18px",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          stylep={{ margin: "0", color: "white" }}
        />
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: currentPage === i + 1 ? "#4941A6 " : "#120E4D",
                height: "26px",
                width: "26px",
                display: "flex",
                fontSize: "18px",
                fontWeight: "700",
                alignItems: "center",
                justifyContent: "center",
                margin: "2px", // Added margin for better visual spacing
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <MyButton
          content={"<"}
          onClick={handelNext}
          style={{
            backgroundColor: currentPage === totalPages ? "#120E4D" : "#4941A6",
            height: "26px",
            width: "26px",
            display: "flex",
            fontSize: "18px",
            fontWeight: "700",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          stylep={{ margin: "0", color: "white" }}
        />
      </div>
    </>
  );
};

export default PaginationForPuttingQ;
