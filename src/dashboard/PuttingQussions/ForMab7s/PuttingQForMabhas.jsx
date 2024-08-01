import React, { useEffect, useMemo, useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
// import FormForAll from "../../components/PuttingQuesionsPage/FormForAll";
import MyTable from "../../../common/Table/Table";
import FormForMaba7s from "../../components/PuttingQuesionsPage/FormForMaba7s/FormForMaba7s ";
import "./PuttingQForMahbas.css";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import EditSubjectModal from "../../components/PuttingQuesionsPage/editSubjectModal/EditSubjectModal";
import PaginationForPuttingQ from "../paginationForPutingQ/paginationForPatingQ";
const PuttingQForMab7as = () => {
  let header = {
    name1: "اسم المبحث",
    name2: "الصفوف التي يدرس فيها",
    name3: "حالة المبحث",
    name4: "الخصائص",
  };

  let icon = { edit: true, trash: true };
  let other = { toggle: true };
  const togellValue = [{ status: "5" }];
  const [DeletedItem, setDeletedItem] = useState("");
  const [rowDataOfSubjects, setRowDataOfSubjects] = useState("");
  const [classData, setClassData] = useState(false);
  const [errorss, setErrors] = useState("");
  const [metaFPagination, setMetaFPagination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = metaFPagination.last_page;

  useEffect(() => {
    fetchDataForClass();
  }, []);
  const fetchDataForClass = async (Data) => {
    setClassData(Data);

    if (Data) {
      await Api_Dashboard.get(`/subjects/${Data.id}`)
        .then((response) => {
          setRowDataOfSubjects(response.data.data);
        })
        .catch((err) => {
          setErrors(err);
        });
    }
  };

  useEffect(() => {
    fetchAllActiveClasse();
  }, []);
  const fetchAllActiveClasse = async () => {
    const respons = await Api_Dashboard.get("/groups/selection")
      .then((response) => {
        setActiveClasses(response.data.data);
      })
      .catch((err) => {});
  };
  const [subjects, setSubjects] = useState("");
  const [activeClasses, setActiveClasses] = useState("");

  useEffect(() => {
    fetchAllSubjects();
  }, [currentPage]);
  const fetchAllSubjects = async () => {
    const respons = await Api_Dashboard.get(`/subjects?page=${currentPage}`)
      .then((response) => {
        setSubjects(response.data.data);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {});
  };
  const newSubjects = useMemo(() => {
    if (Array.isArray(subjects)) {
      return subjects.map((item) => ({
        id: item.id,
        name: item.name,
        groups: item.groups.map((group) => group.name),
      }));
    } else {
      return [];
    }
  }, [subjects]);

  const togellValues = useMemo(() => {
    if (Array.isArray(subjects)) {
      return subjects.map(({ status }) => ({
        status,
      }));
    } else {
      return [];
    }
  }, [subjects]);

  return (
    <>
      <div className=" min-vh-100 mab7asContainer">
        <HeaderOfPuttingQuestions />
        <div className="question-dash-mab" style={{ margin: "auto" }}>
          <PuttingQArrow />
          <div>
            <AddComponent content={"اضافة مبحث"} />
          </div>
          <FormForMaba7s
            fetchAllData={fetchAllSubjects}
            activeClasses={activeClasses}
          />
          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <InfoComponent content={"بيانات المبحث"} />
          </div>
          <div className="MyTable">
            <MyTable
              editButtonName={"#editSubjectModal"}
              deleteModalName={"#deleteElementModal_users-dash"}
              handelDeleteItem={(id) => {
                setDeletedItem(id);
              }}
              handelEdit={(row) => {
                fetchDataForClass(row);
              }}
              other={other}
              header={header}
              body={newSubjects}
              icons={icon}
              togellValue={togellValues}
            />
          </div>
          <PaginationForPuttingQ
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={(page) => setCurrentPage(page)}
          />
        </div>
        <div className="nextButton col-12">
          <FooterFPuttingQ next={"التالي"} prev={"السابق"} />
        </div>
        <DeleteUserModal
          content={"هذا المبحث"}
          fetchAllData={fetchAllSubjects}
          api={"subjects"}
          idOfDeleteItem={DeletedItem}
        />
        <EditSubjectModal
          content={"هذاالمبحث"}
          fetchAllData={fetchAllSubjects}
          rowDataOfSubjects={rowDataOfSubjects}
          activeClasses={activeClasses}
        />
      </div>
    </>
  );
};

export default PuttingQForMab7as;
