import React, { useEffect, useState } from "react";
import "./Notificaion.css";
import HeaderNotificaion from "../components/NotificationPage/Header/Header.jsx";
import ArrowNotification from "../components/NotificationPage/Arrow/Arrow.jsx";
import MessagesNotification from "../components/NotificationPage/messages/messages.jsx";
import MyButton from "../../common/Button/Button.jsx";
import Api_Dashboard from "../interceptor/interceptorDashboard.jsx";

const Notification = ({ api, man, all }) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [metaFPagination, setMetaFPagination] = useState("");
  const [notify, setNotifiy] = useState([]);
  // const [myActivityIds,setMyActivityIds]=useState({
  //   activityIds:isChecked
  // })
  let activityIds = { activityIds: isChecked };
  console.log(activityIds);

  useEffect(() => {
    fetchAllNotfiy();
  }, [currentPage]);

  const fetchAllNotfiy = async () => {
    await Api_Dashboard.get(`${api}?page=${currentPage}`)
      .then((response) => {
        console.log(response);

        {
          man && setNotifiy(response.data.data.data);
        }
        {
          all && setNotifiy(response.data.data);
        }
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteNotifications = async (activityIds) => {
    console.log(JSON.stringify(activityIds));
    await Api_Dashboard.delete("/activity", activityIds)
      .then((response) => {
        // setNotifiy(response.data.data);
        // setMetaFPagination(response.data.meta.pagination);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectAll = () => {
    if (isCheckedAll) {
      setIsChecked([]);
    } else {
      const ids = notify.map((not) => not.id);
      setIsChecked(ids);
    }
    setIsCheckedAll(!isCheckedAll);
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    const idNum = Number(id);

    setIsChecked((prev) =>
      checked ? [...prev, idNum] : prev.filter((item) => item !== idNum)
    );
  };
  console.log(isChecked);
  const getValues = () => {
    console.log(isChecked);
  };
  const check = isChecked.length;

  return (
    <>
      <div className="notification min-vh-100">
        <HeaderNotificaion content={"الإشعارات"} />

        <div className="parent">
          <ArrowNotification />
          {check > 0 && (
            <div className="towButt " style={{ marginBottom: "10px" }}>
              <MyButton
                className={"btttn "}
                style={{ backgroundColor: "#0E0A43" }}
                onClick={handleSelectAll}
                content={" تحديد الكل"}
              />
              <MyButton
                className={"bttt"}
                onClick={() => deleteNotifications(activityIds)}
                style={{ marginRight: "10px", backgroundColor: "#0E0A43" }}
                content={"  حذف المحدد"}
              />
            </div>
          )}

          <hr />
          <div style={{ height: "300px" }}>
            {notify &&
              notify.map((not, index) => (
                <MessagesNotification
                  key={index}
                  isChecked={isChecked}
                  not={not}
                  handleChange={handleChange}
                  isCheckedAll={isCheckedAll}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
