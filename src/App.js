import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/cairo"; // Defaults to weight 400
// import Header from './common/header/header';
import LayoutComp from "./layout/layoutComp/layoutComp";
import AccountSetting from "./dashboard/Account-settting/AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./websit/Home/home.jsx";

import Notification from "./dashboard/Notification/Notification";
import PuttingQuestions from "./dashboard/PuttingQussions/ForClasses/PuttingQuestions.jsx";
import PuttingQForMab7as from "./dashboard/PuttingQussions/ForMab7s/PuttingQForMabhas.jsx";
import "@fontsource/cairo"; // Defaults to weight 400
import Home_dashboard from './dashboard/Home_Dashboard/Home_dashboard.jsx';
import CreateStudentAcc from'./websit/register and login/create_stud_acc/create_stud_acc.jsx';
import Login1 from'./websit/register and login/login/login2.jsx'
import Login from'./websit/register and login/login/login1.jsx'
import CreateTechAcc from './websit/register and login/create_taech_acc/create_teach_acc.jsx';
import Reset_page1 from './websit/register and login/resetpage/resetpage_stud.jsx'
import Reset_code_page from './websit/register and login/reset_password/reset_password_stud.jsx';
import New_pass from './websit/register and login/new_pass/new_pass_stud.jsx'

import ResetPage1Teacher from './websit/register and login/resetpage/resetpage_teach.jsx'
import ResetCodePageTech from './websit/register and login/reset_password/reset_password_tech.jsx';
import NewPassTeach from './websit/register and login/new_pass/new_pass_tech.jsx'

import InsertingOpenEmisTags from './websit/teacher_view/teacher_enter_openmis/InsertingOpenEmisTags.jsx';
import PuttingExam1 from './websit/teacher_view/PuttingExam1/PuttingExam1.jsx';
import PuttingExam2 from './websit/teacher_view/PuttingExam1/PuttingExam2.jsx';
import PuttingExam3 from './websit/teacher_view/PuttingExam1/PuttingExam3.jsx';
import PuttingExam4 from './websit/teacher_view/PuttingExam1/PuttingExam4.jsx';
import Certified_exam from './websit/teacher_view/PuttingExam1/Certified_exam.jsx';
import EmailVerificationTech from './websit/register and login/EmailVerification/EmailVerificationtech.jsx';
import EmailVerificationStud from './websit/register and login/EmailVerification/EmailVerificationStud.jsx';

import HomeStudentView from './websit/Student/Student_View/homeStudentView.jsx'
import CreateExam from './websit/Student/createExam/createExam.jsx';
import TeacherProfile from './websit/teacher_view/teacher profile/teacherProfile.jsx';
import DataStudentExam from './websit/Student/dataStudentExam/dataStudentExam.jsx'
import EditStudentProfaile from './websit/Student/editStudentProfaile/editStudentProfaile.jsx'
import ProtectedRouteWebsite from '../src/websit/protectedRouteWebsite/protectedRouteWebsite.jsx';


import Home_dashboard from './dashboard/Home_Dashboard/Home_dashboard.jsx';
import HomeDashoardLogin from './dashboard/homeLogin/homeLogin.jsx';
import CertificateGenerator from './dashboard/Certificate/Certificate.jsx';
import Qbank from './dashboard/Qbank/Qbank.jsx';
import Specification from './dashboard/Specifecation/Specification.jsx';
import ProtectedRoute from './dashboard/protectedRouteDashboard.jsx/protectedRouteDashboard.jsx';
import PlansStudent from './dashboard/Plans/PlansStudent/PlansStudent.jsx';
import PlansTeacher from './dashboard/Plans/PlansTeacher/PlansTeacher.jsx';
import Notification from "./dashboard/Notification/Notification";
import PuttingQuestions from "./dashboard/PuttingQussions/ForClasses/PuttingQuestions.jsx";
import PuttingQForMab7as from "./dashboard/PuttingQussions/ForMab7s/PuttingQForMabhas.jsx";
import OpenEmis from './dashboard/open_Emis/openEmis.jsx';
import WaitingEmis from './dashboard/open_Emis/waitingEmis/waitingEmis.jsx';
import RecivedEmis from './dashboard/open_Emis/recivedEmis/recivedEmis.jsx';
import FinishedEmis from './dashboard/open_Emis/finishedEmis/finishedEmis.jsx';
import Reward from './dashboard/Reward/reward.jsx';
import RewardManger from './dashboard/Reward/rewardManager/rewardManger.jsx';
import RewardMoshref from './dashboard/Reward/rewardMoshref/rewardMoshref.jsx';
import RewardTeacher from './dashboard/Reward/rewardTeacher/rewardTeacher.jsx';
import ForgetPassDashBoard from './dashboard/Forget_password/forget_pass.jsx';
import EnterCodeDashBoard from './dashboard/Forget_password/enterCodeOfReset/enterCode.jsx';
import NewPassDashBoard from './dashboard/Forget_password/DashboardNewPassword/NewPassword.jsx';
import ErrorPage from './dashboard/Error/errorPage.jsx';
import Checks from './dashboard/checks/checks.jsx';
import NotFound from './websit/Student/notfound.jsx';


function App(props) {
  return (
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/verify-account-teacher" element={<EmailVerificationTech />} />
          <Route path="/verify-account-student" element={<EmailVerificationStud />} />
          <Route path="/CreateStudentAccount" element={<CreateStudentAcc/>} /> 
          <Route path="/CreateTecherAccount" element={<CreateTechAcc/>} />
          <Route path="/login_student" element={<Login1/>} />
          <Route path="/login_teacher" element={<Login/>} />
        {/* <Route path="/StudentNewPassword" element={<New_pass/>} />  */}
          <Route path="/StudentEnterCode" element={<Reset_code_page/>} />
          <Route path="/StudentSendEmail" element={<Reset_page1/>} /> 

          <Route path="/TeacherNewPassword" element={<NewPassTeach/>} /> 
          <Route path="/TeacherEnterCode" element={<ResetCodePageTech/>} />
          <Route path="/TeacherSendEmail" element={<ResetPage1Teacher/>} /> 


          <Route path="/student" element={<LayoutComp />} >
          <Route index element={
            <Home/>
            } />
          <Route path="homeStudentView" element={
            <ProtectedRouteWebsite>
              <HomeStudentView/>
          </ProtectedRouteWebsite>
            } />
          <Route path="createExam" element={
            <ProtectedRouteWebsite>
              <CreateExam/>
            </ProtectedRouteWebsite>
            } />
          <Route path="dataStudentExam" element={
            <ProtectedRouteWebsite>
             <DataStudentExam/>
            </ProtectedRouteWebsite>
            } />
          <Route path="editStudentProfaile" element={
            <ProtectedRouteWebsite>
             <EditStudentProfaile/>
             </ProtectedRouteWebsite>
             } />
           </Route>
           
           <Route path="/teacher/" element={<LayoutComp />} >
            <Route path="TeacherProfile" element={<TeacherProfile/>} />
            <Route path="InsertingOpenEmisTags" element={<InsertingOpenEmisTags/>} />
            <Route path="PuttingExam1" element={<PuttingExam1/>} />
            <Route path="PuttingExam2" element={<PuttingExam2/>} />
            <Route path="PuttingExam3" element={<PuttingExam3/>} />
            <Route path="PuttingExam4" element={<PuttingExam4/>} />
            <Route path="Certified_exam" element={<Certified_exam/>} />

           </Route>
         
        
           
           <Route path="login_dashboard" element={<HomeDashoardLogin />} />
           <Route path="forget_password" element={<ForgetPassDashBoard />} />
           <Route path="dashBoardEnterCode" element={<EnterCodeDashBoard />} />
           <Route path="DashboardNewPassword" element={<NewPassDashBoard />} />



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
          <Route path="PlansTeacher" element={<PlansTeacher />} />
          <Route path="planstudent" element={<PlansStudent />} />
          <Route path="waitingemis" element={<WaitingEmis />} />
          <Route path="recivedemis" element={<RecivedEmis />} />
          <Route path="finishedEmis" element={<FinishedEmis />} />
          <Route path="manger" element={<RewardManger />} />
          <Route path="rewardSupervisor" element={<RewardMoshref />} />
          <Route path="rewardteacher" element={<RewardTeacher />} />
          <Route path="check" element={<Checks />} />




           </Route>
           <Route path="/*" element={<ErrorPage />} />


        </Routes>
      </BrowserRouter>
  );
}

export default App;




