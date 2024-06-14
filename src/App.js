import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './common/header/header';
import LayoutComp from "./layout/layoutComp/layoutComp";
import J from "./common/j/j";
import Log from "./common/j/log";
import AccountSetting from "./dashboard/Account-settting/AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./websit/Home/home.jsx";
import Notification from "./dashboard/Notification/Notification";
import PuttingQuestions from "./dashboard/PuttingQussions/ForClasses/PuttingQuestions.jsx";
import PuttingQForMab7as from "./dashboard/PuttingQussions/ForMab7s/PuttingQForMabhas.jsx";
import "@fontsource/cairo"; // Defaults to weight 400
import Home_dashboard from "./dashboard/Home_Dashboard/Home_dashboard.jsx";
import CreateTechAcc from "./websit/register and login/create_taech_acc/create_teach_acc.jsx";
import CreateStudentAcc from "./websit/register and login/create_stud_acc/create_stud_acc.jsx";
import Reset_page1 from "./websit/register and login/resetpage/resetpage.jsx";
import Reset_code_page from "./websit/register and login/reset_password/reset_password.jsx";
import Login1 from "./websit/register and login/login/login2.jsx";
import New_pass from "./websit/register and login/new_pass/new_pass.jsx";
import PuttingQUnites from "./dashboard/PuttingQussions/ForUnits/PuttingQUnits.jsx";
import PuttingQFLessons from "./dashboard/PuttingQussions/ForLessons/PuttingQFLessons.jsx";
import PuttingKindOfQ from "./dashboard/PuttingQussions/ForKindOfQuestions/PuttingKOQuestions.jsx";
import Mangers from "./dashboard/Users/mangers.jsx";
import ReceivedEmis from "./dashboard/OpenEmis/Received/ReceivedEmis.jsx";
import Teacher from "./dashboard/Plans/Teachers.jsx";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ct" element={<CreateTechAcc />} />
        <Route path="/cs" element={<CreateStudentAcc />} />
        <Route path="/l1" element={<Login1 />} />
        <Route path="/reset1" element={<Reset_page1 />} />
        <Route path="/reset2" element={<Reset_code_page />} />
        <Route path="/newp" element={<New_pass />} />
        <Route path="/teacher/" element={<LayoutComp />} />
        <Route path="/dashboard/" element={<LayoutComp />}>
          <Route index element={<Log />} />
          <Route path="not" element={<Notification />} />
          <Route
            path="putting/questions/levels"
            element={<PuttingQuestions />}
          />
          <Route
            path="putting/questions/subjects"
            element={<PuttingQForMab7as />}
          />
          <Route path="putting/questions/units" element={<PuttingQUnites />} />
          <Route
            path="putting/questions/lessons"
            element={<PuttingQFLessons />}
          />

          <Route path="putting/questions/kinds" element={<PuttingKindOfQ />} />
          <Route path="mangers" element={<Mangers />} />
          <Route path="emis" element={<ReceivedEmis />} />
          <Route path="teacher" element={<Teacher />} />

          <Route path="login" element={<J />} />
          <Route path="b" element={<AccountSetting />} />
          <Route path="h" element={<Home_dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
