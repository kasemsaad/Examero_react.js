import React, { useEffect, useMemo, useState } from "react";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import MyTable from "../../../common/Table/Table";
import FooterFPuttingQ from "../../components/PFooter/FooterFPuttingQ";
import FormFPkindOfQ from "../../components/PuttingQuesionsPage/FormForKindOfQ/FormFPKindOfQ";
import "./ForKindOfQuestions.css";
import PaginationForPuttingQ from "../paginationForPutingQ/paginationForPatingQ";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";
const PuttingKindOfQ = () => {
  let header = {
    name1: "نوع السؤال",
    name2: "حالة الؤال",
    name3: "الخصائص",
  };

  let icon = { trash: true };
  let other = { toggle: true };
  const [metaFPagination, setMetaFPagination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = metaFPagination.last_page;
  const [typeOfQuesions, setTypeOfQuesions] = useState("");
  const [DeletedItem, setDeletedItem] = useState("");

  const fetchAllKQuestons = async () => {
    const respons = await Api_Dashboard.get(
      `/questions-type?page=${currentPage}`
    )
      .then((response) => {
        setTypeOfQuesions(response.data.data);
        console.log(response);
        setMetaFPagination(response.data.meta.pagination);

        console.log(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchAllKQuestons();
  }, [currentPage]);

  const newTypes = useMemo(() => {
    if (typeOfQuesions) {
      return typeOfQuesions.map((typeOfQuesion) => ({
        id: typeOfQuesion.id,
        name: typeOfQuesion.name,
      }));
    } else {
      return [];
    }
  }, [typeOfQuesions]);

  const toggelValues = useMemo(() => {
    if (Array.isArray(typeOfQuesions)) {
      return typeOfQuesions.map(({ status }) => ({
        status,
      }));
    } else {
      return [];
    }
  }, [typeOfQuesions]);
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
            <AddComponent addStyle={"add-lesson"} content={"إضافة نوع سؤال"} />
          </div>
          <FormFPkindOfQ fetchAllKQuestons={fetchAllKQuestons} />
          <div
            className=" d-flex align-items-center my-info-kind"
            style={{ height: "9rem" }}
          >
            <div className="col-12 d-flex align-items-center  ">
              <div className="my-ifo-kind">
                <div>
                  <p>بيانات الأسئلة</p>
                </div>
              </div>
              <div className="class-info-divider"></div>
            </div>
          </div>
          <div className="MyTable">
            <MyTable
              other={other}
              togellValue={toggelValues}
              header={header}
              body={newTypes}
              icons={icon}
              deleteModalName={"#deleteElementModal_users-dash"}
              handelDeleteItem={(id) => {
                setDeletedItem(id);
              }}
            />
          </div>
          <PaginationForPuttingQ
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={(page) => setCurrentPage(page)}
          />
          <DeleteUserModal
            fetchAllData={fetchAllKQuestons}
            api={"questions-type"}
            idOfDeleteItem={DeletedItem}
          />
        </div>
        <FooterFPuttingQ next={"التالي"} prev={"السابق"} />
      </div>
    </>
  );
};

export default PuttingKindOfQ;
