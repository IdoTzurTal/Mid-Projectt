import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./LogIn"
import './App.css';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Class from "./Class";
import { createContext, useContext } from "react";
import Lecture from "./Lecture";
import Meeting from "./Meeting";
import Ckre from "./Calendar";
import Search from "./Search";
import HomeAfterLogin from "./HomeAfterLogin";
import Context from "./Context";

function App() {
  // const CalendarApi = createContext()

  return (
    <div className="App">
      <Context>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/home" element={<HomeAfterLogin />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Classroom' element={<Class />}></Route>
        <Route path='/Lectureroom' element={<Lecture />}></Route>
        <Route path='/Meetingroom' element={<Meeting/>}></Route>
        <Route path='/search' element={<Search/>}></Route> 
      </Routes>
      </Context>
    </div>
  );
}

export default App;
