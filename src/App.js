import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/header/header";
import LayoutComp from "./layout/layoutComp/layoutComp";
import J from "./common/j/j";
import Log from "./common/j/log";
import AccountSetting from "./dashboard/Account-settting/AccountSetting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstTriangle from "./dashboard/components/FirstTriangle/FirstTriangle";
import Notification from "./dashboard/Notification/Notification";
import Checkbox from "./dashboard/components/FirstTriangle/FirstTriangle";
function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComp />}>
            <Route index element={<Log />} />
            <Route path="/login" element={<J />} />
            <Route path="/b" element={<AccountSetting />} />
            <Route path="/home" element={<AccountSetting />} />
            <Route path="/h" element={<FirstTriangle />} />
            <Route path="/not" element={<Notification />} />
            {/* <Route path="/not" element={<Checkbox />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
