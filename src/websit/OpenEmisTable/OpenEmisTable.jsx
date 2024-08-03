import React, { useEffect, useMemo, useState } from "react";
import MyTable2 from "../../common/Table/tableSARA";
import FooterOfUserFP from "../../dashboard/components/UsersPages/FooterOfUsers/FooterOfUsers";
import AddUsersModel from "../../dashboard/components/UsersPages/addUsers/users";
import { Link, useLocation } from "react-router-dom";
import Api_website from "../../utlis/axios_utils_websit";
import { useSelector } from "react-redux";
import enter from '../../assets/icons/teacherview/lucide_file-input.svg';
import plus from '../../assets/icons/teacherview/Vector (2).svg';
import DeleteopenemisModal from "../../dashboard/components/UsersPages/DeletUserModal/DeleteopenemisModal";
import ShowOpenEmisModal from "../../dashboard/components/UsersPages/ShowUserModal/ShowOpenEmisModal";
import EditopenemisModal from "../../dashboard/components/UsersPages/ArrowOfUsers/EditUsers/EditopenemisModal";

const OpenEmisTable = () => {
  let header = {
    name1: "اسم الصف ",
    name2: "اسم المبحث",
    name3: "رقم الهاتف",
    name5: "الحالة",
    name6: "ملاحظات ",
    name7: "الخصائص",
  };

  const getStatusMessage = (status) => {
    let message = "";
    let style = {};
  
    switch (status[0]) {
      case 1:
        message = "بالانتظار";
        style = { color: "#FF8A00" }; 
        break;
      case 2:
        message = "مستلمة";
        style = { color: "#A6A0F4" }; 
        break;
      case 3:
        message = "منتهية";
        style = { color: "#FE4F60" };
        break;
      default:
        message = status[1];
        style = { color: "#FE4F60" };
        break;
    }
  
    return (
      <span style={style}>
        {message}
      </span>
    );
  };

  const layoutBackground = useSelector((state) => state.dark.lay);

  const icon = { eye: true, edit: true, trash: true };

  const [rowData, setRowData] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [idOfDeleteItem, setIdOfDeleteItem] = useState("");
  const [showOpenemisData, setshowOpenemisData] = useState("");

  const pageSize = 10; // Assuming you have a fixed page size
  const newData = useMemo(
    () =>
      data.map(({ id, group, subject, phone_number, status, note }, index) => ({
        indx: (currentPage - 1) * pageSize + index + 1, // Calculate ID based on current page
        id, 
        group,
        subject,
        phone_number,
        status: getStatusMessage(status),
        note,
      })),
    [data, currentPage]
  );

  const [filteredManagers, setFilteredManagers] = useState(newData);

  useEffect(() => {
    setFilteredManagers(newData);
  }, [newData]);

  const handelFetchId = async (row) => {
    await Api_website.get(`/teachers/open-emis/${row.id}`)
      .then((response) => {
        setRowData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelShowOpenemisById = async (row) => {
    document.body.style.removeProperty("overflow");
    await Api_website.get(`/teachers/open-emis/${row.id}`)
      .then((response) => {
        setshowOpenemisData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, [currentPage]);

  const fetchAllData = async () => {
    await Api_website
      .get(`/teachers/open-emis?page=${currentPage}`)
      .then((response) => {
        const allData = response.data.data;
        setData(allData);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handelPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const [metaFPagination, setMetaFPagination] = useState("");
  const totalPages = metaFPagination.last_page;
  const { pathname } = useLocation();

  return (
    <>
      {/* header */}
      <div className="container-manger min-vh-100 w-100">
        <div style={{ width: "85%", margin: "auto" }} className="cont">
          <div className='headdd pt-4  d-flex justify-content-between' style={{
            backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
            color: layoutBackground === "#0E0A43" ? "white" : "black",
            fontSize: "24px"
          }}>
            <div >
              <img src={enter} alt="Icon" className='header1teacherview-iconuu ' style={{width:'7%',marginLeft:'.5rem'}}/>
              <span className='header1_enter_data_teach_view65'>إدخال علامات Open Emis</span>
            </div>
          </div> 
          
          <div className="d-flex mb-4 justify-content-end">
            <Link to="/teacher/insertingOpenEmisTags" style={{ background: '#C01F59', borderRadius: '19px', textDecoration: 'none' }} className="p-2">
              <img src={plus} alt="Icon" className='header1teacherview-iconuu ' style={{ width: '5%', marginLeft: '5px' }} />
              <span className='header1_enter_data_teach_view65' style={{color:'white'}}>إدخال علامات Open Emis جديدة</span>
            </Link>
          </div>

          {/* Start for table */}
          <div style={{ width: "100%", overflow: "auto", height: "400px" }}>
            <MyTable2
              header={header}
              body={filteredManagers}
              icons={icon}
              handelDeleteItem={(row) => setIdOfDeleteItem(row)}
              handelShow={handelShowOpenemisById}
              showItem={"#show-open-emis-dash"}
              sendMessage={"#send-message-dash"}
              deleteModalName={"#deleteElementModal_openEmis"}
              editButtonName={"#edit-openemis-dash"}
              handelEdit={handelFetchId}
              customRender={(row, headerKey) => {
                if (headerKey === "name5") {
                  return (
                    <td>
                      {getStatusMessage(row[headerKey])}
                    </td>
                  );
                }
                return <td>{row[headerKey]}</td>;
              }}
            />
          </div>
          {/* End for table */}

          {/* Start buttons of pagination */}
          <FooterOfUserFP
            handelNext={handelNext}
            handelPrev={handelPrev}
            currentPage={currentPage}
          />
          {/* End buttons of pagination */}

          <EditopenemisModal
            content={"تعديل Open Emis "}
            fetchAllData={fetchAllData}
            rowData={rowData}
          />
          <AddUsersModel
            api="teachers"
            content={"إضافة معلم جديد"}
            fetchAllData={fetchAllData}
          />
         
          <DeleteopenemisModal
            fetchAllData={fetchAllData}
            idOfDeleteItem={idOfDeleteItem}
            content={"Open Emis"}
          />
          <ShowOpenEmisModal content={"open-emis"} userData={showOpenemisData} />
         
        </div>
      </div>
    </>
  );
};

export default OpenEmisTable;
