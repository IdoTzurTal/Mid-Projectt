import { useEffect, useState } from "react";
import { useContext } from "react";
import { Detail } from "./Context";
import Context from "./Context";
import { Children } from "react";

export default function Search() {
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
      if (rooms[i].porjector === "yes") {
        console.log(rooms[i]);
        temp.push(rooms[i]);
      }
    }
    setrooms(temp);
  }
  function Fun2() {
    const temp = [];
    for (let i = 0; rooms.length > i; i++) {
      if (rooms[i].aircondition === "yes") {
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
      if (rooms[i].capicity >= x) {
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

  return (
    <div>
      <h1>Our Rooms</h1>
      <select name="roomtype" onChange={(e) => Fun5(e.target.value)}>
        <option value="">select room type</option>
        <option value="conferenceHall">conferenceHall</option>
        <option value="meetroom">meetroom</option>
        <option value="classes">classes</option>
      </select>
      <input
        type="number"
        placeholder="capicty"
        onChange={(e) => Fun6(e.target.value)}
      />
      board
      <input type="checkbox" value={"board"} onChange={(e) => Fun4(e, "yes")} />
      zoom
      <input type="checkbox" value={"zoom"} onChange={(e) => Fun3(e, "yes")} />
      air condition
      <input
        type="checkbox"
        value={"aircondition"}
        onChange={(e) => Fun2(e, "yes")}
      />
      projector
      <input
        type="checkbox"
        value={"porjector"}
        onChange={(e) => Fun(e, "yes")}
      />
      <button onClick={(e) => window.location.reload(false)}>reset</button>
      <h2>rooms</h2>
      {rooms.map((single, index) => {
        return (
          <div>
            <p key={index}>
              <h4> name: {single.name}</h4>
              <br />
              type: {single.type}
              <br />
              capicity:{single.capicity}
              <br />
              zoom: {single.zoom}
              <br />
              aircondition: {single.aircondition} <br />
              porjector: {single.porjector} <br />
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
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
