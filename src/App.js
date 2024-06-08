
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './common/header/header';
import LayoutComp from './layout/layoutComp/layoutComp';
import J from './common/j/j';
import Log from './common/j/log';
import AccountSetting from './dashboard/Account-settting/AccountSetting';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './websit/Home/home.jsx';
import Notification from "./dashboard/Notification/Notification";
import "@fontsource/cairo"; // Defaults to weight 400
import Home_dashboard from './dashboard/Home_Dashboard/Home_dashboard.jsx';
function App(props) {
  return (


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher/" element={<LayoutComp />} />
          <Route path="/dashboard/" element={<LayoutComp />}>
            <Route index element={<Log />} />
            <Route path="not" element={<Notification />} />
            <Route path="login" element={<J />} />
            <Route path="b" element={<AccountSetting />} />
            <Route path="h" element={<Home_dashboard/>} />


          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
