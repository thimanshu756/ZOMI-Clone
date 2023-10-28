import './App.css';
import Dashboard from './pages/Dashboard';
import Earn from './pages/Earn';
import Home from './pages/Home';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <div className='cont'>

    <Routes>
      <Route  index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/earn' element={<Earn/>}/>
    </Routes>
    </div>
   </>
  );
}

export default App;
