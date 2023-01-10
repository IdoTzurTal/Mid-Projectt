import "./App.css";
import HomePage from "./HomePage";
import About from './Pages/About'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
