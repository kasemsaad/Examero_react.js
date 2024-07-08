import React, { useEffect, useMemo, useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import MyTable from "../../../common/Table/Table";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import "./ForLessons.css";
import FormFPLessons from "../../components/PuttingQuesionsPage/FormFPLessons/FormFPLessons";
// import MyButton from "../../../common/Button/Button";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import PaginationForPuttingQ from "../paginationForPutingQ/paginationForPatingQ";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
import EditLessonModal from "../../components/PuttingQuesionsPage/EditeLessonModal/EditeLessonModal";

const PuttingQFLessons = () => {
  let header = {
    name1: "اسم الدرس",
    name2: "اسم الوحده",
    name3: "اسم المبحث",
    name4: "اسم الصف",
    name5: "حالة الدرس",
    name6: "الخصائص",
  };

  let other = { toggle: true };
  let icon = { edit: true, trash: true, toggle: true };
  const [activeClasses, setActiveClasses] = useState("");
  const [lessons, setLessons] = useState("");
  const [activeSubjects, setActiveSubject] = useState([]);
  const [activeUnits, setActiveUnits] = useState([]);
  const [errorss, setErrors] = useState("");
  const [metaFPagination, setMetaFPagination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = metaFPagination.last_page;
  const [DeletedItem, setDeletedItem] = useState("");
  const [RowDataOfLesson, setRowDataOfLesson] = useState("");

  const fetchAllLessons = async () => {
    const response = await Api_Dashboard.get(`/lessons?page=${currentPage}`)
      .then((response) => {
        setLessons(response.data.data);
        setMetaFPagination(response.data.meta.pagination);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    fetchAllLessons();
  }, [currentPage]);

  const newLessons = useMemo(() => {
    if (lessons) {
      return lessons.map((lesson) => ({
        id: lesson.id,
        lesson: lesson.name,
        unit: lesson.unit.name,
        subject: lesson.unit.subject.name,
        group: lesson.unit.group.name,
      }));
    } else {
      return [];
    }
  }, [lessons]);
  const toggllValue = useMemo(() => {
    if (lessons) {
      return lessons?.map((lesson) => ({
        status: lesson.status,
      }));
    } else {
      return [];
    }
  }, [lessons]);
  const fetchSelectedLessonById = async (Data) => {
    if (Data) {
      await Api_Dashboard.get(`/lessons/${Data.id}`)
        .then((response) => {
          setRowDataOfLesson(response.data.data);
          fetchSubjectByIdOfClass(response.data.data.unit.group.id);
          fetchUnitsBySubjectId(response.data.data.unit.subject.id);
        })
        .catch((err) => {
          setErrors(err);
        });
    }
  };
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
  const fetchSubjectByIdOfClass = async (classId) => {
    if (classId) {
      const response = await Api_Dashboard.get(`/subjects/selection/${classId}`)
        .then((response) => {
          setActiveSubject(response.data.data);
          // fetchUnitsBySubjectId(response.data.data.id);
        })
        .catch((err) => {});
    }
  };

  const fetchUnitsBySubjectId = async (subjectId) => {
    if (subjectId) {
      const response = await Api_Dashboard.get(`/units/selection/${subjectId}`)
        .then((response) => {
          setActiveUnits(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    fetchUnitsBySubjectId();
  }, []);

  return (
    <>
      <div className=" min-vh-100 lessons-Container">
        <HeaderOfPuttingQuestions />
        <div
          className="lessons-quessions"
          style={{ width: "90%", margin: "auto" }}
        >
          <PuttingQArrow />
          <div>
            <AddComponent addStyle={"add-lesson"} content={"إضافة درس"} />
          </div>
          <FormFPLessons
            fetchSubjectByIdOfClass={(id) => fetchSubjectByIdOfClass(id)}
            activeClasses={activeClasses}
            activeSubjects={activeSubjects}
            activeUnits={activeUnits}
            fetchUnitsBySubjectId={(id) => fetchUnitsBySubjectId(id)}
            fechAlllessons={fetchAllLessons}
          />
          <div
            className="class-info-button-containerr d-flex align-items-center"
            style={{ height: "9rem" }}
          >
            <InfoComponent content={"بيانات الدروس"} />
          </div>
          <div className="MyTable">
            <MyTable
              editButtonName={"#edit-lesson-dash"}
              deleteModalName={"#deleteElementModal_users-dash"}
              handelDeleteItem={(id) => {
                setDeletedItem(id);
              }}
              handelEdit={(data) => {
                fetchSelectedLessonById(data);
              }}
              other={other}
              togellValue={toggllValue}
              header={header}
              body={newLessons}
              icons={icon}
            />
          </div>
          <PaginationForPuttingQ
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={(page) => setCurrentPage(page)}
          />
        </div>
        <FooterFPuttingQ next={"التالي"} prev={"السابق"} />
        <DeleteUserModal
          content={"هذا الدرس"}
          fetchAllData={fetchAllLessons}
          api={"lessons"}
          idOfDeleteItem={DeletedItem}
        />
        <EditLessonModal
          fetchSubjectByIdOfClass={(id) => fetchSubjectByIdOfClass(id)}
          fetchUnitsBySubjectId={(id) => fetchUnitsBySubjectId(id)}
          activeClasses={activeClasses}
          activeSubjects={activeSubjects}
          activeUnits={activeUnits}
          RowDataOfLesson={RowDataOfLesson}
          fetchAllLessons={fetchAllLessons}
        />
      </div>
    </>
  );
};

export default PuttingQFLessons;
