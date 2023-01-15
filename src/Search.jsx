import { useEffect, useState } from "react";
import { useContext } from "react";
import { Detail } from "./Context";
import Context from "./Context";
import { Children } from "react";
import { Navigate, useNavigate } from "react-router";


export default function Search() {

  const navigate = useNavigate();

  const [typecheck, settypechek] = useState();
  const [favorite, setfavorite] = useState(false);
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
 
  const {rooms, setrooms} = useContext(Detail);


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
      if (rooms[i].board === "yes") {
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
        navigate('/Lectureroom')
       
        break;
    
      case "room 2":
        console.log("room2");
        navigate('/Lecture2')
        break;
    
      case "room 3":
        console.log("room3");
        navigate('/Lecture3')
        break;
      case "room 4":
        console.log("room4");
        navigate('/Classroom')
        break;
      case "room 5":
        console.log("room5");
        navigate('/Class2')
        break;
      case "room 6":
        console.log("room6");
        navigate('/Class3')
        break;
      case "room 7":
        console.log("room7");
        navigate('/Meetingroom')
        break;
      case "room 8":
        console.log("room8");
        navigate('/Meeting2')
        break;
      case "room 9":
        console.log("room9");
        navigate('/Meeting3')
        break;
     
    
      default: console.log(roomsingle);
        break;
    }
  }

  let roomsingle =[];
  return (
    <div>
      <h1>Our Rooms</h1>
      <select name="roomtype" onChange={(e) => Fun5(e.target.value)}>
        <option value="">select room type</option>
        <option value="lectureHall">conferenceHall</option>
        <option value="meetingroom">meetroom</option>
        <option value="classroom">classes</option>
      </select>
      <input
        type="number"
        placeholder="capacity"
        onChange={(e) => Fun6(e.target.value)}
      />
      board
      <input type="checkbox" value={"board"} onChange={(e) => Fun4(e, "yes")} />
      zoom
      <input type="checkbox" value={"zoom"} onChange={(e) => Fun3(e, "yes")} />
      air condition
      <input
        type="checkbox"
        value={"airconditioning"}
        onChange={(e) => Fun2(e, "yes")}
      />
      projector
      <input
        type="checkbox"
        value={"projector"}
        onChange={(e) => Fun(e, "yes")}
      />
      <button onClick={(e) => window.location.reload(false)}>reset</button>
      <h2>rooms</h2>
      {rooms.map((single, index) => {
        roomsingle.push(single.name)
        return (
          <div>
            <p key={index}>
              <h4> name: {single.name}</h4>
              <br />
              type: {single.type}
              <br />
              capicity:{single.capacity}
              <br />
              zoom: {single.zoom}
              <br />
              aircondition: {single.airconditioning} <br />
              porjector: {single.projector} <br />
              board: {single.board}
              <br />
              <br />
              <button
                onClick={(e) => {
                  favChange(index, "favorite");
                  single.favorite == true
                    ? (single.favorite = false)
                    : (single.favorite = true);
                  console.log(single.favorite);
                  console.log(rooms);
                }}
              >
                {fav[index]}
              </button>
              <button onClick={(e)=>{navigatetospesific(roomsingle[index])}}>select room</button>
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
