import React, { useEffect, useMemo, useState } from "react";
import HeaderNotificaion from "../../components/NotificationPage/Header/Header";
import MyTable from "../../../common/Table/Table";
import "./manger.css";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import ArrowForUsers from "../../components/UsersPages/ArrowOfUsers/ArrowForUsers";
import SearchAndAddUsers from "../../components/UsersPages/searchInputAndAddButton/handelSearch&AddUsers";
import AddMangerModel from "../../components/UsersPages/AddMangerModal/AddMangersModal";
import EditMangerModal from "../../components/UsersPages/EditMangerModal/EditMangerModal";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import FooterOfUserFP from "../../components/UsersPages/FooterOfUsers/FooterOfUsers";
import ShowUserModal from "../../components/UsersPages/ShowUserModal/ShowUser";
import SendMessage from "../../components/UsersPages/SendMessageModal.jsx/SendMessageModal";
const Mangers = () => {
  // header of the table
  let header = {
    name1: "اسم المدير",
    name2: "البريد الإلكتروني",
    name3: "رقم الهاتف",
    name4: "الخصائص",
    name5: "ملاحظات",
  };

  // icons object to show the icons in the table
  const icon = { eye: true, edit: true, trash: true, butt: true };
  const other = { butt: true };
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
    const response = await Api_Dashboard.get(`/managers/${row.id}`)
      .then((response) => {
        setRowData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelShowMangerById = async (row) => {
    const response = await Api_Dashboard.get(`/managers/${row.id}`)
      .then((response) => {
        setShowMangerData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, [currentPage]);

  const fetchAllData = async () => {
    const response = await Api_Dashboard.get(`/managers?page=${currentPage}`)
      .then((response) => {
        const allData = response.data.data;
        setData(allData);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // take from the array object some proprety that it will pass to the table

  // handel the function of search

  console.log(filteredManagers);
  const FilteredManagers = (dataFormComp) => {
    setFilteredManagers(dataFormComp);
    console.log(dataFormComp);
  };

  // handel pagination
  const [metaFPagination, setMetaFPagination] = useState("");
  const totalPages = metaFPagination.last_page;
  const [mangerIdForSendMessage, setMangerIdForSendMessage] = useState("");
  const handelMessage = (row) => {
    console.log(row);
    setMangerIdForSendMessage(row);
    console.log(mangerIdForSendMessage);
  };
  const handelNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };
  const handel = (da) => {
    console.log(da);
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
        <HeaderNotificaion content={"مديرو الموقع"} />
        <div style={{ width: "85%", margin: "auto" }} className=" cont ">
          {/* Start Arrow for navigate */}
          <ArrowForUsers />
          {/* Arrow end  */}

          {/* Start the search and add component */}
          <SearchAndAddUsers
            newData={newData}
            buttonContent={"أضافة مدير"}
            handel={handel}
            fetchAllData={fetchAllData}
            // FilteredUsers={FilteredManagers}
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
              other={other}
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
          <EditMangerModal
            api="managers"
            content={"تعديل المدير "}
            fetchAllData={fetchAllData}
            rowData={rowData}
          />
          <AddMangerModel
            api="managers"
            content={"إضافة مدير جديد"}
            fetchAllData={fetchAllData}
          />
          <DeleteUserModal
            api="managers"
            fetchAllData={fetchAllData}
            idOfDeleteItem={idOfDeleteItem}
          />
          <ShowUserModal content={"المدير"} userData={showMangerData} />
          <SendMessage api={"/points/"} mangerID={mangerIdForSendMessage} />
        </div>
      </div>
    </>
  );
};

export default Mangers;
