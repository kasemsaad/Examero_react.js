// export default PuttingQuestions;
import React, { useEffect, useMemo, useState } from "react";
import FirstTriangle from "../../components/FirstTriangle/FirstTriangle";
import MyButton from "../../../common/Button/Button";
import MyTable from "../../../common/Table/Table";
import "./Quesion.css"; // Import the CSS file
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import SecondTriangle from "../../components/SecondTriangle/SecondTriangle";
import FormForAll from "../../components/PuttingQuesionsPage/FormForClasses/FormForAll";
// import image from "../../assets/icons/PuttingQuestion/octicon_question-16.svg";
import HeaderOfPuttingQuestions from "../../components/PheaderOfButtingQuestion/HeaderOfButtingQuestions";
import { useNavigate } from "react-router-dom";
import AddComponent from "../../components/PuttingQuesionsPage/AddComoponentForPage/Add";
import InfoComponent from "../../components/PuttingQuesionsPage/InfoComponentPq/InfoComponent";
import PuttingQArrow from "../../components/PuttingQuesionsPage/PuttingArrow/PuttingQArrow";
import Api_Dashboard from "../../interceptor/interceptorDashboard";
import DeleteUserModal from "../../components/UsersPages/DeletUserModal/DeleteUserModal";

const PuttingQuestions = () => {
  const [toggled, setToggled] = useState(false);
  const [groupsData, setGroupsData] = useState("");
  const [metaData, setMetaData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [DeletedItem, setDeletedItem] = useState("");
  const totalPages = metaData.last_page;

  let header = {
    name1: "اسم الصف",
    name2: "حالة الصف",
    name3: "الخصائص",
  };

  let body = [
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
    {
      id: 1,
      name1: "اسم الصف",
    },
  ];
  useEffect(() => {
    fetchAllData();
  }, []);
  const fetchAllData = async () => {
    const respons = await Api_Dashboard.get("/groups")
      .then((response) => {
        console.log(response);
        console.log("radppy");
        setGroupsData(response.data.data);
        setMetaData(response.data.meta.pagination);
      })
      .catch((err) => {
        console.log(err);
      });
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

  console.log("rady");
  let other = { toggle: true };
  let icon = { edit: true, trash: true, toggle: true };
  const navegiate = useNavigate();
  const handelNav = () => {
    navegiate("/dashboard/putting/questions/subjects=2");
  };
  return (
    <div className="questionContainer min-vh-100 w-100">
      <HeaderOfPuttingQuestions />

      <div className="question" style={{ width: "80%", margin: "auto" }}>
        <PuttingQArrow />
        <div>
          <AddComponent content={"إضافة سؤال"} />
        </div>

        <div className="MyForm col-8">
          <FormForAll fetchAllData={fetchAllData} />
        </div>

        <div
          className="class-info-button-container d-flex align-items-center"
          style={{ height: "9rem" }}
        >
          <InfoComponent content={"بيانات الصفوف"} />
        </div>

        <div className="MyTable">
          <MyTable
            deleteModalName={"#deleteElementModal_users-dash"}
            handelDeleteItem={(id) => {
              setDeletedItem(id);
            }}
            other={other}
            header={header}
            body={newData}
            icons={icon}
          />
        </div>
      </div>

      <div className="nextButton col-12">
        <div className="col-sm-3 d-flex align-items-center justify-content-center">
          <MyButton
            onClick={handelNav}
            // onClick={() => {
            //   navigate(1);
            // }}
            content={"التالي"}
            className="MyButton"
          />
        </div>
      </div>
      <DeleteUserModal
        fetchAllData={fetchAllData}
        api={"groups"}
        idOfDeleteItem={DeletedItem}
      />
    </div>
  );
};

export default PuttingQuestions;
