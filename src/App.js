import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Add/>}></Route>
            <Route path='/editdata/:id' element={<Edit/>}></Route>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
