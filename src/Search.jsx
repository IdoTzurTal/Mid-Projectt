import {  useState } from "react";
import Context from "./Context";
import { Children } from "react";
import { Navigate, useNavigate } from "react-router";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./HomeAfterLogin.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Meeting from "./Meeting";
import Class from "./Class";
import Lecture from "./Lecture";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import HomeAfterLogin from "./HomeAfterLogin";
import Favoritepage from "./Favorite";
import Admin from "./Admin";
import { Detail } from "./Context";
import { useContext } from "react";
import { useEffect } from "react";
import Rooms from "./Rooms";
import './Search.css'

export default function Search() {
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { roomid, setroomid } = useContext(Detail);
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
        setroomid(0);
        console.log("room1");
        navigate("/Lectureroom");
        break;

      case "room 2":
        setroomid(1);
        console.log("room2");
        navigate("/Lecture2");
        break;

      case "room 3":
        setroomid(2);
        console.log("room3");
        navigate("/Lecture3");
        break;
      case "room 4":
        setroomid(3);
        console.log("room4");
        navigate("/Classroom");
        break;
      case "room 5":
        setroomid(4);
        console.log("room5");
        navigate("/Class2");
        break;
      case "room 6":
        setroomid(5);
        console.log("room6");
        navigate("/Class3");
        break;
      case "room 7":
        setroomid(6);
        console.log("room7");
        navigate("/Meetingroom");
        break;
      case "room 8":
        setroomid(7);
        console.log("room8");
        navigate("/Meeting2");
        break;
      case "room 9":
        setroomid(8);
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
        <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs className="contactnav" centered>
            <NavLink to="/HomeAfterLogin" element={<HomeAfterLogin />}>
              {" "}
              <Tab label="Home" />
            </NavLink>
            <NavLink to="/Rooms" element={<Rooms />}>
              {" "}
              <Tab label="our rooms" />
            </NavLink>
            <NavLink to="/Aboutafterlogin" element={<AboutAfterLogin />}>
              {" "}
              <Tab label="about" />
            </NavLink>
            <NavLink to="/Contactafterlogin" element={<ContactAfterLogin />}>
              {" "}
              <Tab label="contact" />
            </NavLink>
            <NavLink to="/Search" element={<Search />}>
              {" "}
              <Tab label="search" />
            </NavLink>
            <NavLink  onClick={() => {
                  localStorage.setItem('favorite',JSON.stringify(favorite) );
                  JSON.parse(favorite)}}                 
                  to="/Favoritepage" element={<Favoritepage />} >
              {" "}
              <Tab label="favorite" />
            </NavLink>
            { user == '"Admin"' && (
              <NavLink to="/Admin" element={<Admin />}>
                <Tab label="Admin" />
              </NavLink>
            )} 
          </Tabs>
        </Box>
        </div>
      <h1>Our Facilities</h1>
        <div className="searchtop">
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
      </div>
      {rooms.map((single, index) => {
        roomsingle.push(single.name);
        return (
          <div className="buyasearch">
            <p key={index}>
              <h4>{single.name}</h4>
              <br />
              Room Type: {single.type}
              <br />
              Capacity: {single.capacity}
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
