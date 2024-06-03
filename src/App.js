import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/header/header';
import LayoutComp from './layout/layoutComp/layoutComp';
import J from './common/j/j';
import Log from './common/j/log';
import AccountSetting from './dashboard/Account-settting/AccountSetting';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strcture from './strcture';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/Strcture" element={<Strcture />} />
            <Route path='/' element={<LayoutComp/>}>
        <Route index element={<Log/>} />
        <Route path='/login' element={<J/>}/>
        <Route path='/b' element={<AccountSetting/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
