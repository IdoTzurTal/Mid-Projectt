import "./App.css";
import HomePage from "./HomePage";
import Login from "./LogIn";
import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Class from "./Class";
import Class2 from "./Class2";
import Class3 from "./Class3";
import Lecture from "./Lecture";
import Lecture2 from "./Lecture2";
import Lecture3 from "./Lecture3";
import Meeting from "./Meeting";
import Meeting2 from "./Meeting2";
import Meeting3 from "./Meeting3";
import Ckre from "./Calendar";
import Search from "./Search";
import HomeAfterLogin from "./HomeAfterLogin";
import Context from "./Context";
import Rooms from "./Rooms";
import Admin from "./Admin";
import Error from "./Error"
import Favoritepage from "./Favorite";
function App() {
  // const CalendarApi = createContext()

  return (
    <div className="App">
      <Context>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/HomeAfterLogin" element={<HomeAfterLogin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Classroom' element={<Class />}></Route>
        <Route path='/Lectureroom' element={<Lecture />}></Route>
        <Route path='/Meetingroom' element={<Meeting/>}></Route>
        <Route path='/Search' element={<Search/>}></Route> 
        <Route path='/Class2' element={<Class2 />}></Route>
        <Route path='/Class3' element={<Class3 />}></Route>     
        <Route path='/Lecture2' element={<Lecture2 />}></Route>
        <Route path='/Lecture3' element={<Lecture3 />}></Route>
        <Route path='/Meeting2' element={<Meeting2 />}></Route>
        <Route path='/Meeting3' element={<Meeting3 />}></Route>
        <Route path='/Rooms' element={<Rooms />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
        <Route path='/Favoritepage' element={<Favoritepage />}></Route>
        <Route path='/*' element={<Error />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
      </Routes>
      </Context>
    </div>
  );
}

export default App;
