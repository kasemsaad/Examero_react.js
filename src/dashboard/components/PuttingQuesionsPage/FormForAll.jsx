// import React from "react";
// import MyButton from "../../../common/Button/Button";
// const FormForAll = () => {
//   return (
//     <>
//       <form style={{ display: "flex", height: "87%" }}>
//         <div class="form-group col-8  mx-3 d-flex flex-column justify-content-end">
//           <label for="exampleInputEmail1">اسم الصف</label>
//           <input
//             type="text"
//             style={{}}
//             className="form-control col-8"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder=" أدخل أسم الصف الجديد هنا"
//           />
//         </div>
//         <div
//           style={{
//             width: "40%",
//           }}
//           className=" d-flex  align-items-end   "
//         >
//           <MyButton
//             style={{
//               width: "6rem",
//               height: "auto",
//               border: "none",
//               backgroundColor: "#C01F59",
//               borderRadius: "12.65px",
//               padding: "5px",
//             }}
//             content="إضافة"
//           />
//         </div>
//       </form>
//     </>
//   );
// };

// export default FormForAll;
import React from "react";
import MyButton from "../../../common/Button/Button";
import "./FormForAll.css";

const FormForAll = () => {
  return (
    <>
      <form className="form-container">
        <div className="form-group col-8 mx-3 d-flex flex-column justify-content-end">
          <label className="mb-1" htmlFor="exampleInputEmail1">
            اسم الصف
          </label>
          <input
            type="text"
            className="form-control col-8"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=" أدخل أسم الصف الجديد هنا"
          />
        </div>
        <div className="button-container">
          <MyButton className="my-button" content="إضافة" />
        </div>
      </form>
    </>
  );
};

export default FormForAll;
