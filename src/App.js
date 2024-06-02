import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './common/header/header';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import LayoutComp from './layout/layoutComp/layoutComp';
import J from './common/j/j';
import Log from './common/j/log';
import AccountSetting from './dashboard/Account-settting/AccountSetting';
function App() {
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutComp/>}>
        <Route index element={<Log/>} />
        <Route path='/login' element={<J/>}/>
        <Route path='/b' element={<AccountSetting/>}/>




        </Route>
      </Routes>
    </BrowserRouter>



    </>

  );
}

export default App;
