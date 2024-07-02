// import React, { useEffect, useState } from "react";
// import "./Notificaion.css";
// import HeaderNotificaion from "../components/NotificationPage/Header/Header.jsx";
// import ArrowNotification from "../components/NotificationPage/Arrow/Arrow.jsx";
// import MessagesNotification from "../components/NotificationPage/messages/messages.jsx";
// import MyButton from "../../common/Button/Button.jsx";
// import Api_Dashboard from "../interceptor/interceptorDashboard.jsx";

// const Notification = () => {
//   let messages = [
//     {
//       id: 1,
//       message: " قام احمد باضافة راضي الى الجروب",
//     },
//     {
//       id: 2,
//       message: " قام احمد باضافة راضي الى الجروب",
//     },
//     {
//       id: 3,
//       message: " قام احمد باضافة راضي الى الجروب",
//     },
//     {
//       id: 4,
//       message: " قام احمد باضافة راضي الى الجروب",
//     },
//     {
//       id: 5,
//       message: " قام احمد باضافة راضي الى الجروب",
//     },
//     {
//       id: 6,
//       message: " قام احمد باضاف",
//     },
//     {
//       id: 7,
//       message: " قام احمد باضاف",
//     },
//     {
//       id: 8,
//       message: " قام احمد باضاف",
//     },
//   ];
//   ////
//   const [isCheckedAll, setIsCheckedAll] = useState(false);
//   const [isChecked, setIsChecked] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [metaFPagination, setMetaFPagination] = useState("");
//   const [notify, setNotifiy] = useState([""]);
//   const [deleteCheckedItem, setDeleteCheckedItem] = useState([]);
//   useEffect(() => {
//     fetchAllNotfiy();
//   }, [currentPage]);
//   const fetchAllNotfiy = async () => {
//     const respons = await Api_Dashboard.get(
//       `/activity/manager?page=${currentPage}`
//     )
//       .then((response) => {
//         setNotifiy(response.data.data);
//         console.log(response.data.data);
//         setMetaFPagination(response.data.meta.pagination);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleSelectAll = (e) => {
//     setIsCheckedAll(!isCheckedAll);

//     // setDeleteCheckedItem(notify.map((li) => li.id));
//     // if (isCheckedAll) {
//     //   setDeleteCheckedItem([{}]);
//     // }
//   };
//   console.log(isChecked);

//   const handleClick = (e) => {
//     console.log(e.target);
//     const { id, checked } = e.target;

//     // setIsChecked([...isChecked, { checked, id }]);

//     if (checked) {
//       // Add the id to the array if it's checked
//       setIsChecked((prev) => [...prev, { checked, id }]);
//     } else {
//       // Remove the id from the array if it's unchecked

//       setIsChecked((prev) => prev.filter((item) => item.id !== id));
//     }
//   };

//   // const handeleDelete = (e) => {
//   //   const { id } = e.target;
//   //   setDeleteCheckedItem((prevMeseages) =>
//   //     prevMeseages.filter((message) => !isChecked.includes(message.id))
//   //   );
//   //   console.log(isChecked);
//   // };
//   const check = isChecked.length;
//   console.log(isChecked.length);
//   return (
//     <>
//       <div className="notification min-vh-100">
//         <HeaderNotificaion content={"الإشعارات"} />

//         <div className="parent">
//           <ArrowNotification />
//           {check && check > 0 && (
//             <div className="towButt " style={{ marginBottom: "10px" }}>
//               <MyButton
//                 className={"btttn "}
//                 style={{ backgroundColor: "#0E0A43" }}
//                 onClick={handleSelectAll}
//                 content={" تحديد الكل"}
//               />
//               <MyButton
//                 className={"bttt"}
//                 // onClick={handeleDelete}
//                 style={{ marginRight: "10px", backgroundColor: "#0E0A43" }}
//                 content={"  حذف المحدد"}
//               />
//             </div>
//           )}

//           <hr />

//           {notify.map((not) => {
//             return (
//               <MessagesNotification
//                 not={not}
//                 handleChang={handleClick}
//                 isChecked={deleteCheckedItem}
//                 isCheckedAll={isCheckedAll}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Notification;
