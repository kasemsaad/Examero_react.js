import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FirstTriangle from "./dashboard/components/FirstTriangle/FirstTriangle";
import MyButton from "./common/Button/Button";
import MyTable from "./common/Table/Table";

function App() {
  let button = true;
  let header = {
    col1: "اسم المدير",
    col2: "البريد الالكتروني",
    col3: " رقم الهاتف",
    col4: "الخصائص",
    col5: "ملاحظات",
  };

  let body = [
    {
      id: 6,
      name2: "rady mohamed",
      name3: "rady mohamed",
      name4: "rady mohamed",
    },
    {
      id: 4,
      name2: "rady mohamed",
      name3: "rady mohamed",
      name4: "rady mohamed",
    },
    {
      id: 15,
      name2: "rady mohamed",
      name3: "rady mohamed",
      name4: "rady mohamed",
    },
    {
      id: 4,
      name2: "rady mohamed",
      name3: "rady mohamed",
      name4: "rady mohamed",
    },
  ];
  let icons = {
    trash: true,
    eye: true,
    edit: true,
  };
  return (
    <div className="App vh-100">
      <MyTable header={header} body={body} icons={icons} button={button} />
    </div>
  );
}

export default App;
