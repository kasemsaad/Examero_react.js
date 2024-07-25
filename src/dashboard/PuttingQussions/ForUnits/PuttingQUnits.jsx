import React, { useEffect, useMemo, useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import MyTable from "../../../common/Table/Table";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import FormForPQUnits from "../../components/PuttingQuesionsPage/FormForUnites/FormForUnites";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import EditUnitModal from "../../components/PuttingQuesionsPage/EditUnitModal/EditUnitModal";
import PaginationForPuttingQ from "../paginationForPutingQ/paginationForPatingQ";
import "./PuttingQFUnites.css";
const PuttingQUnites = () => {
  let header = {
    name1: "اسم الوحده",
    name3: "اسم الصف",
    name2: "اسم المبحث",
    name4: "حالة الوحده",
    name5: "الخصائص",
  };

  let icon = { edit: true, trash: true };
  let other = { toggle: true };
  const [units, setUnits] = useState();
  const [activeClasses, setActiveClasses] = useState("");
  const [activeSubjects, setActiveSubjects] = useState("");
  const [DeletedItem, setDeletedItem] = useState("");
  const [errorss, setErrors] = useState("");
  const [RowDataOfUnite, setRowDataOfUnite] = useState("");
  const [metaFPagination, setMetaFPagination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = metaFPagination.last_page;
  const fetchDataForUnitById = async (Data) => {
    if (Data) {
      document.body.style.overflow = "";

      await Api_Dashboard.get(`/units/${Data.id}`)
        .then((response) => {
          setRowDataOfUnite(response.data.data);

          fetchSubjectByClassId(response.data.data.group.id);
        })
        .catch((err) => {
          setErrors(err);
        });
    }
  };
  const fetchSubjectByClassId = async (id) => {
    if (id) {
      const respons = await Api_Dashboard.get(`subjects/selection/${id}`)
        .then((response) => {
          setActiveSubjects(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetchSubjectByClassId();
  }, []);

  const fetchAllActiveClasses = async () => {
    const respons = await Api_Dashboard.get("/groups/selection")
      .then((response) => {
        setActiveClasses(response.data.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchAllActiveClasses();
  }, []);

  useEffect(() => {
    fetchAllUnits();
  }, [currentPage]);

  const fetchAllUnits = async () => {
    const respons = await Api_Dashboard.get(`/units?page=${currentPage}`)
      .then((response) => {
        setUnits(response.data.data);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const newUnits = useMemo(() => {
    if (units) {
      return units.map((unite) => ({
        id: unite.id,
        name: unite.name,
        group: unite.group.name,
        subject: unite.subject.name,
      }));
    } else {
      return [];
    }
  }, [units]);

  const toggelValues = useMemo(() => {
    if (Array.isArray(units)) {
      return units.map(({ status }) => ({
        status,
      }));
    } else {
      return [];
    }
  }, [units]);

  return (
    <>
      <div className=" min-vh-100 mab7asContainer">
        <HeaderOfPuttingQuestions />
        <div className="question-dash-units " style={{ margin: "auto" }}>
          <PuttingQArrow />
          <div>
            <AddComponent content={"إضافة وحدة"} />
          </div>
          <FormForPQUnits
            fetchAllUnits={fetchAllUnits}
            activeSubjects={activeSubjects}
            handelSelectedClass={(id) => fetchSubjectByClassId(id)}
            activeClasses={activeClasses}
          />
          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <InfoComponent content={"بيانات الوحده"} />
          </div>
          <div className="MyTable">
            <MyTable
              editButtonName={"#edit-Unit-dash"}
              deleteModalName={"#deleteElementModal_users-dash"}
              handelDeleteItem={(id) => {
                setDeletedItem(id);
              }}
              handelEdit={(data) => {
                fetchDataForUnitById(data);
              }}
              togellValue={toggelValues}
              other={other}
              header={header}
              body={newUnits}
              icons={icon}
              // classIds={classIds}
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
          content={"هذه الوحده"}
          fetchAllData={fetchAllUnits}
          api={"units"}
          idOfDeleteItem={DeletedItem}
        />
        <EditUnitModal
          fetchAllUnits={fetchAllUnits}
          activeSubjects={activeSubjects}
          handelSelectedClass={(id) => fetchSubjectByClassId(id)}
          activeClasses={activeClasses}
          RowDataOfUnite={RowDataOfUnite}
        />
      </div>
    </>
  );
};

export default PuttingQUnites;
