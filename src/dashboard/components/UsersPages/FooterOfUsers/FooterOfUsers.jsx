import React from "react";
import MyButton from "../../../../common/Button/Button";
const FooterOfUserFP = ({
  handelNext,
  handelPrev,
  totalPages,
  currentPage,
  className,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: " 54px",
        }}
        className={`footer-manger${className} `}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
            height: "fit-content",
          }}
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
                  backgroundColor:
                    currentPage === i + 1 ? "#4941A6 " : "#120E4D",
                  height: "26px",
                  width: "26px",
                  display: "flex",
                  fontSize: "18px",
                  fontWeight: "700",
                  justifyContent: "center",
                  margin: "1px", // Added margin for better visual spacing
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
              marginLeft: "5px",
              backgroundColor:
                currentPage === totalPages ? "#120E4D" : "#4941A6",
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
      </div>
    </>
  );
};

export default FooterOfUserFP;
