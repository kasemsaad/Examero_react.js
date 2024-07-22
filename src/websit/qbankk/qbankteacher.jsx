import React, { useEffect, useMemo, useState } from "react";
import MyTable from "../../common/Table/Table";
import FooterOfUserFP from "../../dashboard/components/UsersPages/FooterOfUsers/FooterOfUsers";
import { Link, useLocation } from "react-router-dom";
import Api_website from "../../utlis/axios_utils_websit";
import { useSelector } from "react-redux";
import plus from '../../assets/icons/teacherview/Vector (2).svg';
import testt from '../../assets/icons/teacherview/octicon_question-16.svg';
import DeleteQuestationModel from "../../dashboard/components/UsersPages/DeletUserModal/deletequestationmodel";
import ShowquestationModal from "../../dashboard/components/UsersPages/ShowUserModal/ShowquestationModal";

export const QbankTeacherTable = () => {
  const header = {
    name1: "الفصل الدراسي",
    name2: "اسم الصف",
    name3: "اسم المبحث",
    name4: "اسم الوحدة",
    name5: "اسم الدرس",
    name6: "الحاله",
    name7: "الخصائص",
  };

  const getStatusMessage = (status) => {
    if (!status || status.length < 2) return null;

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

    return <span style={style}>{message}</span>;
  };

  const getSemesterMessage = (semster) => {
    if (!semster || semster.length < 2) return null;

    let semester = "";

    switch (semster[0]) {
      case 1:
        semester = "الاول";
        break;
      case 2:
        semester = "الثاني";
        break;
      default:
        semester = semster[1];
        break;
    }

    return <span>{semester}</span>;
  };

  const layoutBackground = useSelector((state) => state.dark.lay);
  const icon = { eye: true, trash: true };

  const [rowData, setRowData] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [idOfDeleteItem, setIdOfDeleteItem] = useState("");
  const [showOpenemisData, setshowOpenemisData] = useState("");
  const [filteredManagers, setFilteredManagers] = useState([]);

  const newData = useMemo(
    () =>
      data.map(({ id, semster, status, group, subject, unit, lesson }) => ({
        id,
        semster: getSemesterMessage(semster),
        groupName: group?.name || "",
        SubjectName: subject?.name || "",
        unitName: unit?.name || "",
        lessonName: lesson?.name || "",
        status: getStatusMessage(status),
      })),
    [data]
  );

  useEffect(() => {
    setFilteredManagers(newData);
  }, [newData]);

  const handleFetchId = async (row) => {
    try {
      const response = await Api_website.get(`/teachers/questions/${row.id}`);
      setRowData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowOpenemisById = async (row) => {
    document.body.style.removeProperty("overflow");
    try {
      const response = await Api_website.get(`/teachers/questions/${row.id}`);
      setshowOpenemisData(response.data.question);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [currentPage]);

  const fetchAllData = async () => {
    try {
      const response = await Api_website.get(`/teachers/questions?page=${currentPage}`);
      const allData = response.data.data;
      setData(allData);
      setMetaFPagination(response.data.meta.pagination);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    if (currentPage === totalPages) return;
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const [metaFPagination, setMetaFPagination] = useState("");
  const totalPages = metaFPagination.last_page;
  const { pathname } = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="container-manger min-vh-100 w-100">
        <div style={{ width: "85%", margin: "auto" }} className="cont">
          <div
            className='headdd pt-4 pb-4 p-1 d-flex justify-content-between'
            style={{
              backgroundColor: layoutBackground === "#0E0A43" ? "#0E0A43" : "#ECECEC",
              color: layoutBackground === "#0E0A43" ? "white" : "black",
              fontSize: "24px",
            }}
          >
            <div>
              <img
                src={testt}
                alt="Icon"
                className='header1teacherview-iconuu'
                style={{ width: '12%', marginLeft: '5px' }}
              />
              <span className='header1_enter_data_teach_view65'>وضع الأسئلة</span>
            </div>
          </div>

          <div className="new-feature-section" style={{ padding: "10px", marginBottom: "15px",marginTop: "5px", borderRadius: "8px" ,border:"2px solid #A6A0F4 "  }}>
            <div className="d-flex justify-content-between align-items-center">
              <span style={{ fontSize: "15px", fontWeight: "bold", color: '#A6A0F4' }}>ما الذي سأستفيده من إضافة الأسئلة بمنصة Examero ؟</span>
              <button onClick={handleToggle} style={{ color: 'white', background: "none", border: "none", cursor: "pointer" }}>
                {isExpanded ? "▲" : "▼"}
              </button>
            </div>
            {isExpanded && (
              <div style={{ marginTop: "10px" }}>
                <p>نحن متحمسون لأن نشارككم خبر إضافة مثيرة ومبتكرة إلى موقعنا التعليمي !</p>
                <p>الآن، يمكن للمعلمين بسهولة إضافة الأسئلة والحصول على النقاط المجانية والتي تتيح للمعلمين استخدام كافة خدمات منصة Examero بشكل مجاني. كل سؤال تقوم برفعه ويتم قبوله من خلال مشرفي المنصة يتم احتساب المكافأة برصيدك بشكل تلقائي.</p>
                <p>في عالم التعليم، يعتبر تنويع الأسئلة وتطويرها أمرًا حيويًا، وهذه الإضافة تمكنكم من تحقيق ذلك بكل سهولة ويسر.</p>
                <p>نحن متحمسون لرؤية الإبداعات التعليمية الجديدة التي ستخلقونها باستخدام هذه الميزة الجديدة.</p>
                <p>أطيب التحيات،</p>
                <p style={{ color: '#FF8A00' }}>. [ Exmaero ] فريق الدعم</p>
              </div>
            )}
          </div>

          <div className="d-flex mb-4 justify-content-between">
            <div
              style={{ background: '#FE4F60', borderRadius: '19px', textDecoration: 'none', marginLeft: '5px', marginRight: '5px' }}
              className="p-2"
            >
              <span className='header1_enter_data_teach_view65' style={{ color: 'white' }}>البيانات وضع الأسئلة</span>
            </div>
            <Link
              to="/teacher/CreateQuestation"
              style={{ background: '#C01F59', borderRadius: '19px', textDecoration: 'none' }}
              className="p-2"
            >
              <img
                src={plus}
                alt="Icon"
                className='header1teacherview-iconuu'
                style={{ width: '10%', marginLeft: '10px' }}
              />
              <span className='header1_enter_data_teach_view65' style={{ color: 'white' }}>إضافة سؤال</span>
            </Link>
          </div>

          <div style={{ width: "100%", overflow: "auto", height: "400px" }}>
            <MyTable
              header={header}
              body={filteredManagers}
              icons={icon}
              handelDeleteItem={(row) => setIdOfDeleteItem(row)}
              handelShow={handleShowOpenemisById}
              showItem={"#show-questation-dash"}
              sendMessage={"#send-message-dash"}
              deleteModalName={"#deleteElementModal_questationn"}
              handelEdit={handleFetchId}
              customRender={(row, headerKey) => {
                switch (headerKey) {
                  case "name4":
                    return <td>{row.unitName}</td>;
                  case "name5":
                    return <td>{row.lessonName}</td>;
                  case "name3":
                    return <td>{row.SubjectName}</td>;
                  case "name6":
                    return <td>{getSemesterMessage(row[headerKey])}</td>;
                  case "name7":
                    return <td>{getStatusMessage(row[headerKey])}</td>;
                  default:
                    return <td>{row[headerKey]}</td>;
                }
              }}
            />
          </div>

          <FooterOfUserFP
            handelNext={handleNext}
            handelPrev={handlePrev}
            currentPage={currentPage}
          />

          <DeleteQuestationModel
            fetchAllData={fetchAllData}
            idOfDeleteItem={idOfDeleteItem}
            content={"السوال"}
          />
          <ShowquestationModal content={"السوال"} userData={showOpenemisData} />
        </div>
      </div>
    </>
  );
};
