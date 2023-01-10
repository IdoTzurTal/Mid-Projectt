import "./App.css";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import Login from "./LogIn"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
