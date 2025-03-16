import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About.jsx'
import Register from './Components/Pages/Register.jsx'
import Admin from './Components/Pages/Admin.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx';
import Show from './Components/Pages/Show.jsx';
import Update from './Components/Pages/Update.jsx';
import Delete from './Components/Pages/Delete.jsx';
import StudentLogin from './Components/Pages/StudetLogin.jsx';
import StudentDetails from './Components/Pages/StudentDetails.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
             {/* Dynamic URL - : - useParams() */}
            <Route path='/update/student/:studentID' element={<Update/>}></Route>
            <Route path='/delete/student/:studentID' element={<Delete/>}></Route>
            <Route path='/studentlogin' element={<StudentLogin/>}></Route>
            <Route path='/studentdetails' element={<StudentDetails/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Routes>  
      </BrowserRouter>
    </div>
  );
}


export default App;
