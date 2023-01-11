import "./App.css";
import HomePage from "./HomePage";
// import { Route, Routes } from "react-router-dom";
import Login from "./LogIn"
import './App.css';
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom';
import Class from "./Class";
import { createContext } from "react";
import Lecture from "./Lecture";
import Meeting from "./Meeting";
import Ckre from "./Calendar";

function App() {
  const CalendarApi = createContext()
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Classroom' element={<Class />}></Route>
        <Route path='/Lectureroom' element={<Lecture />}></Route>
        <Route path='/Meetingroom' element={<Meeting/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
