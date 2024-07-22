import React, { useEffect, useMemo, useState } from "react";
import HeaderNotificaion from "../../components/NotificationPage/Header/Header";
import MyTable from "../../../common/Table/Table";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import ArrowForUsers from "../../components/UsersPages/ArrowOfUsers/ArrowForUsers";
import SearchAndAddUsers from "../../components/UsersPages/searchInputAndAddButton/handelSearch&AddUsers";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import FooterOfUserFP from "../../components/UsersPages/FooterOfUsers/FooterOfUsers";
import ShowUserModal from "../../components/UsersPages/ShowUserModal/ShowUser";
import SendMessage from "../../components/UsersPages/SendMessageModal.jsx/SendMessageModal";
import EditUserModal from "../../components/UsersPages/ArrowOfUsers/EditUsers/EditeUsers";
import AddUsersModel from "../../components/UsersPages/addUsers/users";
import SendTecherMessageModal from "../../components/UsersPages/sendMessageUsersModal/sendMessageUserModal";
import { useLocation } from "react-router-dom";
const StudentsDash = () => {
  // header of the table
  let header = {
    name1: "اسم الطالب",
    name2: "البريد الإلكتروني",
    name3: "رقم الهاتف",
    name4: "الخصائص",
  };

  // icons object to show the icons in the table
  const icon = { eye: true, edit: true, trash: true, butt: true };
  ///

  const [rowData, setRowData] = useState("");
  let [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [idOfDeleteItem, setIdOfDeleteItem] = useState("");
  const [showMangerData, setShowMangerData] = useState("");

  const newData = useMemo(
    () =>
      data.map(({ id, fullName, email, phone_number }) => ({
        id,
        fullName,
        email,
        phone_number,
      })),
    [data]
  );
  const [filteredManagers, setFilteredManagers] = useState(newData);

  useEffect(() => {
    setFilteredManagers(newData);
  }, [newData]);

  const handelFetchId = async (row) => {
    const response = await Api_Dashboard.get(`/students/${row.id}`)
      .then((response) => {
        setRowData(response.data.data);
      })
      .catch((err) => {});
  };
  const handelShowMangerById = async (row) => {
    document.body.style.removeProperty("overflow");
    const response = await Api_Dashboard.get(`/students/${row.id}`)
      .then((response) => {
        setShowMangerData(response.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchAllData();
  }, [currentPage]);

  const fetchAllData = async () => {
    const response = await Api_Dashboard.get(`/students?page=${currentPage}`)
      .then((response) => {
        const allData = response.data.data;
        setData(allData);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {});
  };
  // take from the array object some proprety that it will pass to the table

  // handel the function of search

  const FilteredManagers = (dataFormComp) => {
    setFilteredManagers(dataFormComp);
  };

  // handel pagination
  const [metaFPagination, setMetaFPagination] = useState("");
  const totalPages = metaFPagination.last_page;
  const [mangerIdForSendMessage, setMangerIdForSendMessage] = useState("");
  const handelMessage = (row) => {
    setMangerIdForSendMessage(row);
  };
  const handelNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };
  // handel prev page
  const handelPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      {/* header */}
      <div className="container-manger min-vh-100 w-100">
        <HeaderNotificaion content={"المستخدمين"} />
        <div style={{ width: "85%", margin: "auto" }} className=" cont ">
          {/* Start Arrow for navigate */}
          <ArrowForUsers
            loc2={"/dashboard/users/student"}
            loc1={"/dashboard/users/teachers"}
            name1={"المعلمين"}
            name2={"الطلاب"}
          />
          {/* Arrow end  */}

          {/* Start the search and add component */}
          <SearchAndAddUsers
            newData={newData}
            buttonContent={"أضافة طالب"}
            FilteredUsers={FilteredManagers}
          />
          {/* // End */}

          {/* Start for table */}
          <div style={{ width: "100%", overflow: "auto", height: "400px" }}>
            <MyTable
              header={header}
              body={filteredManagers}
              icons={icon}
              handelMessage={(row) => handelMessage(row)}
              handelDeleteItem={(row) => {
                setIdOfDeleteItem(row);
              }}
              handelShow={(row) => {
                handelShowMangerById(row);
              }}
              showItem={"#show-manger-dash"}
              sendMessage={"#send-message-dash"}
              deleteModalName={"#deleteElementModal_users-dash"}
              editButtonName={"#edit-manger-dash"}
              handelEdit={(row) => {
                handelFetchId(row);
              }}
            />
          </div>
          {/* End fro table */}

          {/* Start buttons of pagination */}
          <FooterOfUserFP
            handelNext={handelNext}
            handelPrev={handelPrev}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          {/* End buttons of pagination */}
          <EditUserModal
            api="students"
            content={"تعديل الطالب "}
            fetchAllData={fetchAllData}
            rowData={rowData}
          />
          <AddUsersModel
            api="students"
            content={"إضافة طالب جديد"}
            fetchAllData={fetchAllData}
          />
          <DeleteUserModal
            content={"هذا الطالب"}
            api="students"
            fetchAllData={fetchAllData}
            idOfDeleteItem={idOfDeleteItem}
          />
          <ShowUserModal content={"الطالب"} userData={showMangerData} />
          <SendTecherMessageModal
            api={"/teacher/points/"}
            mangerID={mangerIdForSendMessage}
          />
        </div>
      </div>
    </>
  );
};

export default StudentsDash;
