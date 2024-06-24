import React from "react";
import MyButton from "../../../../common/Button/Button";
const FooterOfUserFP = ({
  handelNext,
  handelPrev,
  totalPages,
  currentPage,
}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: " 74px",
          alignItems: "center",
        }}
        className="footer-manger"
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

        <MyButton
          content={"<"}
          onClick={handelNext}
          style={{
            marginLeft: "5px",
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

export default FooterOfUserFP;
