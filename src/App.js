
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './common/header/header';
import LayoutComp from './layout/layoutComp/layoutComp';
import AccountSetting from './dashboard/Account-settting/AccountSetting';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './websit/Home/home.jsx';
import Notification from "./dashboard/Notification/Notification";
import "@fontsource/cairo"; // Defaults to weight 400
import Home_dashboard from './dashboard/Home_Dashboard/Home_dashboard.jsx';
import CreateTechAcc from './websit/register and login/create_taech_acc/create_teach_acc.jsx';
import CreateStudentAcc from './websit/register and login/create_stud_acc/create_stud_acc.jsx';
import Reset_page1 from './websit/register and login/resetpage/resetpage.jsx'
import Reset_code_page from './websit/register and login/reset_password/reset_password.jsx';
import Login1 from './websit/register and login/login/login2.jsx'
import New_pass from './websit/register and login/new_pass/new_pass.jsx'
import HomeDashoardLogin from './dashboard/homeLogin/homeLogin.jsx';
import CertificateGenerator from './dashboard/Certificate/Certificate.jsx';
import Qbank from './dashboard/Qbank/Qbank.jsx';
import Specification from './dashboard/Specifecation/Specification.jsx';
import ProtectedRoute from './dashboard/protectedRouteDashboard.jsx/protectedRouteDashboard.jsx';
import Plans from './dashboard/Plans/Plans.jsx';
import PlansStudent from './dashboard/Plans/PlansStudent/PlansStudent.jsx';
import PlansTeacher from './dashboard/Plans/PlansTeacher/PlansTeacher.jsx';

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
          <Route index element={
            <ProtectedRoute>
              <Home_dashboard />
            </ProtectedRoute>
          } />
          <Route path="not" element={ <Notification />} />
          <Route path="b" element={<AccountSetting />} />
          <Route path="certify" element={<CertificateGenerator />} />
          <Route path="qbank" element={<Qbank />} />
          <Route path="specify" element={<Specification />} />
          <Route path="specify" element={<Specification />} />
          <Route path="PlansTeacher" element={<PlansTeacher />} />
          <Route path="planstudent" element={<PlansStudent />} />





        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
