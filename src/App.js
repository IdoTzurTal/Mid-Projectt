import "./App.css";
import HomePage from "./HomePage";
// import { Route, Routes } from "react-router-dom";
import Login from "./LogIn"
import './App.css';
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom';
import Ckre from "./Calendar";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
      </Routes> */}
     <Ckre></Ckre>
    </div>
  );
}

export default App;
