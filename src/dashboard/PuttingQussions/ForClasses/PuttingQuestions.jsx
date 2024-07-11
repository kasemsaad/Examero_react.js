// export default PuttingQuestions;
import React, { useEffect, useMemo, useState } from "react";
import MyButton from "../../../common/Button/Button";
import MyTable from "../../../common/Table/Table";
import FormForAll from "../../components/PuttingQuesionsPage/FormForClasses/FormForAll";
// import image from "../../assets/icons/PuttingQuestion/octicon_question-16.svg";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import { useNavigate } from "react-router-dom";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import EditClassModal from "../../components/PuttingQuesionsPage/editClassModal/editClassModal";
import FooterOfUserFP from "../../components/UsersPages/FooterOfUsers/FooterOfUsers";
import PaginationForPuttingQ from "../paginationForPutingQ/paginationForPatingQ";
import "./Quesion.css";
import { toast } from "react-toastify";
const PuttingQuestions = () => {
  const [classData, setClassData] = useState(false);
  const [groupsData, setGroupsData] = useState("");
  const [metaFPagination, setMetaFPagination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [DeletedItem, setDeletedItem] = useState("");
  const totalPages = metaFPagination.last_page;
  const [errorss, setErrors] = useState("");
  const [rowDataOfClass, setRowDataOfClass] = useState([]);
  const [AlertPoint, SetAlertPoint] = useState("");
  const [AlertPointSuccess, SetAlertPointSuccess] = useState("");
  let header = {
    name1: "اسم الصف",
    name2: "حالة الصف",
    name3: "الخصائص",
  };
  let other = { toggle: true };
  let icon = { edit: true, trash: true, toggle: true };
  useEffect(() => {
    fetchDataForClass();
  }, []);
  const fetchDataForClass = async (Data) => {
    setClassData(Data);
    if (Data) {
      await Api_Dashboard.get(`/groups/${Data.id}`)
        .then((response) => {
          setRowDataOfClass(response.data.data);
        })
        .catch((err) => {
          setErrors(err);
        });
    }
  };
  useEffect(() => {
    fetchAllData();
  }, [currentPage]);
  const fetchAllData = async () => {
    const respons = await Api_Dashboard.get(`/groups?page=${currentPage}`)
      .then((response) => {
        setGroupsData(response.data.data);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {});
  };

  const newData = useMemo(() => {
    if (Array.isArray(groupsData)) {
      return groupsData.map(({ id, name }) => ({
        id,
        name,
      }));
    } else {
      return [];
    }
  }, [groupsData]);

  const togellValue = useMemo(() => {
    if (Array.isArray(groupsData)) {
      return groupsData.map(({ status }) => ({
        status,
      }));
    } else {
      return [];
    }
  }, [groupsData]);

  const navegiate = useNavigate();
  const handelNav = () => {
    navegiate("/dashboard/putting/questions/subjects=2");
  };

  return (
    <div className="questionContainer min-vh-100 w-100">
      <HeaderOfPuttingQuestions />
      <div className="question-dash" style={{ width: "80%", margin: "auto" }}>
        <PuttingQArrow />
        <div>
          <AddComponent content={"إضافة صف"} />
        </div>

        <div className="MyForm col-8">
          <FormForAll classErrors={errorss} fetchAllData={fetchAllData} />
        </div>

        <div
          className="class-info-button-container d-flex align-items-center"
          style={{ height: "9rem" }}
        >
          <InfoComponent content={"بيانات الصفوف"} />
        </div>

        <div className="MyTable">
          <MyTable
            editButtonName={"#editClassModal"}
            deleteModalName={"#deleteElementModal_users-dash"}
            handelDeleteItem={(id) => {
              setDeletedItem(id);
            }}
            handelEdit={(row) => {
              fetchDataForClass(row);
            }}
            other={other}
            header={header}
            body={newData}
            tog={groupsData}
            icons={icon}
            togellValue={togellValue}
          />
        </div>
        <PaginationForPuttingQ
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={(page) => setCurrentPage(page)}
        />
      </div>
      <div className="nextButton-que  col-12">
        <div className="nexB2">
          <div className="col-sm-3 d-flex align-items-center justify-content-center">
            <MyButton
              onClick={handelNav}
              // onClick={() => {
              //   navigate(1);
              // }}
              content={"التالي"}
              className="MyButton-qu"
            />
          </div>
        </div>
      </div>
      <DeleteUserModal
        content={"هذا الصف"}
        fetchAllData={fetchAllData}
        api={"groups"}
        idOfDeleteItem={DeletedItem}
      />
      <EditClassModal
        fetchAllData={fetchAllData}
        rowDataOfClass={rowDataOfClass}
      />
    </div>
  );
};

export default PuttingQuestions;
