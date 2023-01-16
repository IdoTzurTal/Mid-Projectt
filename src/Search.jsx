import { useEffect, useState } from "react";
import { useContext } from "react";
import { Detail } from "./Context";
import Context from "./Context";
import { Children } from "react";
import { Navigate, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/system";
import HomePage from './HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import LogIn from './LogIn'
import Rooms from "./Rooms";
import './Search.css'

export default function Search() {
  const navigate = useNavigate();

  const [typecheck, settypechek] = useState();
  const {favorite,setfavorite} =useContext(Detail)

  const [fav, setfav] = useState([
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
    "not favorite",
  ]);

  const { rooms, setrooms } = useContext(Detail);

  function Fun() {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].projector === "yes") {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }
  function Fun2() {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].airconditioning === "yes") {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }
  function Fun3() {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].zoom === "yes") {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }
  function Fun4() {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].whiteboard === "yes") {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }

  function Fun5(x) {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].type === x) { 
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }

  function Fun6(x) {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].capacity >= x) {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }

  const favChange = (index, newValue) => {
    if (fav[index] == "not favorite") {
      const tempArray = [...fav];
      tempArray[index] = newValue;
      setfav(tempArray);
    } else {
      const tempArray = [...fav];
      tempArray[index] = "not favorite";
      setfav(tempArray);
    }
  };

  function navigatetospesific(roomsingle) {
    switch (roomsingle) {
      case "room 1":
        console.log("room1");
        navigate("/Lectureroom");
        break;

      case "room 2":
        console.log("room2");
        navigate("/Lecture2");
        break;

      case "room 3":
        console.log("room3");
        navigate("/Lecture3");
        break;
      case "room 4":
        console.log("room4");
        navigate("/Classroom");
        break;
      case "room 5":
        console.log("room5");
        navigate("/Class2");
        break;
      case "room 6":
        console.log("room6");
        navigate("/Class3");
        break;
      case "room 7":
        console.log("room7");
        navigate("/Meetingroom");
        break;
      case "room 8":
        console.log("room8");
        navigate("/Meeting2");
        break;
      case "room 9":
        console.log("room9");
        navigate("/Meeting3");
        break;

      default:
        console.log(roomsingle);
        break;
    }
  }

  let roomsingle = [];
  return (
    <div>
                  <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs className="contactnav" centered>
                    <NavLink to='/Home' element={<HomePage />} > <Tab label="cyber pro" /></NavLink>
                    <NavLink to='/Rooms' element={<Rooms />}> <Tab label="Rooms" /></NavLink>
                    <NavLink to='/About' element={<About />} > <Tab label="about" /></NavLink>
                    <NavLink to='/Contact' element={<Contact />} > <Tab label="contact" /></NavLink>
                    <NavLink to='/Login' element={<LogIn />}> <Tab label="log in" /></NavLink>
                </Tabs>
            </Box>
      <h1>Our Facilities</h1>
      <select name="roomtype" onChange={(e) => {Fun5(e.target.value)}}>
        <option value="">Filter By Room Type</option>
        <option value="Lecture Hall">Lecture Hall</option>
        <option value="Meeting Room">Meeting Room</option>
        <option value="Classroom">Classroom</option>
      </select>
      <input
        type="number"
        placeholder="Capacity"
        onChange={(e) => Fun6(e.target.value)}
      />
      Whiteboard
      <input type="checkbox" value={"whiteboard"} onChange={(e) => Fun4(e, "yes")} />
      Zoom
      <input type="checkbox" value={"zoom"} onChange={(e) => Fun3(e, "yes")} />
      Air Conditioning
      <input
        type="checkbox"
        value={"airconditioning"}
        onChange={(e) => Fun2(e, "yes")}
      />
      Projector
      <input
        type="checkbox"
        value={"projector"}
        onChange={(e) => Fun(e, "yes")}
      />
      <button onClick={(e) => window.location.reload(false)}>Reset</button>
      {rooms.map((single, index) => {
        roomsingle.push(single.name);
    
        return (
          <div className="buyasearch">
            <p key={index}>
              <h4> name: {single.name}</h4>
              <br />
              Room Type: {single.type}
              <br />
              Capacity:{single.capacity}
              <br />
              Zoom: {single.zoom}
              <br />
              Air Conditioning: {single.airconditioning} <br />
              Projector: {single.projector} <br />
              Whiteboard: {single.whiteboard}
              <br />
              <br />
              <button
                onClick={(e) => {
                  favChange(index, "favorite");
                  single.favorite == true
                    ? (single.favorite = false)
                    : (single.favorite = true) && setfavorite([...favorite,{single}]) ;
                    console.log(favorite);
                }}
              >
                {fav[index]}
              </button>
              <button
                onClick={(e) => {
                  navigatetospesific(roomsingle[index]);
                  localStorage.setItem('favorite',JSON.stringify(favorite) );
                  JSON.parse(favorite)
                  console.log(favorite);
                }}
              >
                Select Room
              </button>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
