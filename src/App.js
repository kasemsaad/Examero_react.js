import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutComp from "./layout/layoutComp/layoutComp";
import J from "./common/j/j";
import AccountSetting from "./dashboard/Account-settting/AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./websit/Home/home.jsx";
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
// import HomeDashoardLogin from "./dashboard/homeLogin/homeLogin.jsx";
import ProtectedRoute from "./dashboard/protectedRouteDashboard.jsx/protectedRouteDashboard.jsx";
import PuttingQUnites from "./dashboard/PuttingQussions/ForUnits/PuttingQUnits.jsx";
import PuttingQFLessons from "./dashboard/PuttingQussions/ForLessons/PuttingQFLessons.jsx";
import PuttingKindOfQ from "./dashboard/PuttingQussions/ForKindOfQuestions/PuttingKOQuestions.jsx";
// import Teacher from "./dashboard/Plans/Teachers.jsx";
import HomeDashoardLogin from "./dashboard/homeLogin/homeLogin.jsx";
import Mangers from "./dashboard/Users/Mangers/mangers.jsx";
import Supervisors from "./dashboard/Users/supervisors/supervisors.jsx";
import MangersActivity from "./dashboard/Notification/mangers.activity/mangersActivity.jsx";
import AllActivity from "./dashboard/Notification/supervisorsActivity/AllActivity.jsx";
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
        <Route path="login_dashboard" element={<HomeDashoardLogin />} />
        <Route path="/dashboard/" element={<LayoutComp />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Home_dashboard />
              </ProtectedRoute>
            }
          />

          {/* <Route path="not" element={<Notification />} /> */}
          <Route path="activity/mangers" element={<MangersActivity />} />
          <Route path="activity/all" element={<AllActivity />} />
          <Route
            path="putting/questions/levels=1"
            element={<PuttingQuestions />}
          />
          <Route
            path="putting/questions/subjects=2"
            element={<PuttingQForMab7as />}
          />
          <Route
            path="putting/questions/units=3"
            element={<PuttingQUnites />}
          />
          <Route
            path="putting/questions/lessons=4"
            element={<PuttingQFLessons />}
          />

          <Route
            path="putting/questions/kinds=5"
            element={<PuttingKindOfQ />}
          />

          <Route path="mangers" element={<Mangers />} />
          <Route path="supervisors" element={<Supervisors />} />
          {/* <Route path="teacher" element={<Teacher />} /> */}
          <Route path="login" element={<J />} />
          <Route path="b" element={<AccountSetting />} />
          <Route path="h" element={<Home_dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
