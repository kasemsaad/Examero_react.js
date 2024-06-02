import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Strcture from './strcture';

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/Strcture" element={<Strcture />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
