import "./App.css";
import HomePage from "./HomePage";
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from "react-router-dom";
import Login from "./LogIn"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
