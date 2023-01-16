import "./Calendar.css";
import Calendar from "react-calendar";
import React, { useState, useContext, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { Detail } from "./Context";

export default function Ckre() {
  const [value, onChange] = useState(new Date());
  const [chose, setchose] = useState();
  const [day, setDay] = useState([]);
  // להוסיף לדיי שהוא שווה לדיי2 בכניסה לחדר
  const [starttime, setstarttime] = useState(8);
  const [endtime, setendtime] = useState(0);
  const [array, setarray] = useState([]);
  const [lior, setLior] = useState(-1);
  const [eveneven, seteveneven] = useState(false);
  const [objNum, setObjNum] = useState();
  const { meeting, setmeeting } = useContext(Detail);
  const { rooms, setrooms } = useContext(Detail);
  const { roomid, setroomid } = useContext(Detail);
  //   for(let b=0;b<rooms[roomid]?.day2.length;b++){
  //   setDay(...day,rooms[roomid]?.day2[b]);
  // }
  // if (rooms[roomid]?.day2.length > 1) {
  // for (let i = 0; i < 7; i++) {
  //   day.push(rooms[roomid]?.day2[i]);
  // }
  // }
  useEffect(() => {
    console.log("useeffect", rooms[roomid]);
    console.log("useeffect", rooms[roomid]?.day2);
    console.log(day);
    rooms[roomid]?.day2.shift(day);
    rooms[roomid]?.day2.push(day);

    console.log("useeffect", rooms[roomid]?.day2);
    // להוציא חלק מתחילת המערך כך נשמר רק המערך הרצוי ואיתו להמשיך
  }, [day]);
  function name() {
    setLior(-1);

    if (eveneven === "true") {
      console.log("liorrrrrr");
      let x = 1;
      let y = [];
      for (let index = Number(starttime); index < Number(endtime); index++) {
        // array.push(index)
        console.log(objNum);
        console.log(day[objNum]?.selected?.includes(index));
        if (!day[objNum].selected.includes(index)) {
          y = [...y, index];
          console.log("matannnn");

          // day[objNum].selected.push(index);
          setarray([]);
        } else {
          console.log("matannnn");
          y = [];
          x = 2;
          break;
        }
      }
      // day[objNum].selected.push(y);
      if (x === 2) {
        alert("error");
      } else {
        for (let d = 0; d < y.length; d++) {
          day[objNum].selected.push(y[d]);
        }
        x = 4;
      }
    } else {
      console.log("liorrrrrr");
      for (let index = Number(starttime); index < Number(endtime); index++) {
        array.push(index);
        console.log(starttime);
        console.log(endtime);
      }

      setDay([
        ...day,
        {
          id: chose?.toString()?.slice(0, 15),
          day: chose?.toString()?.slice(0, 3),
          month: chose?.toString()?.slice(4, 7),
          monthnum: chose?.toString()?.slice(8, 10),
          year: chose?.toString()?.slice(11, 15),
          selected: [...array],
        },
      ]);
      console.log(array);

      setarray([]);
    }

    setmeeting([
      ...meeting,
      {
        id: chose?.toString()?.slice(0, 15),
        day: chose?.toString()?.slice(0, 3),
        month: chose?.toString()?.slice(4, 7),
        monthnum: chose?.toString()?.slice(8, 10),
        year: chose?.toString()?.slice(11, 15),
        selected: [...array],
      },
    ]);
    console.log(meeting, "hello");
  }

  const handleClick = (e) => {
    console.log(day);
    setchose(e);
    // setDayId();
    // objNum;
    let check = e.toString().slice(0, 15);
    for (let j = 0; j < day.length; j++) {
      console.log("hey");
      console.log("liorrrrrr");
      if (day[j].id === check) {
        console.log("liorrrrrr");
        seteveneven("true");
        // setObjNum(j);
        setObjNum(j);
        console.log(objNum);
        // bhsdbvhsnvjdsjnvhdsbnhdsncdnjhdnhdsbvhds

        console.log(day[j]);
        console.log("rooms ", rooms);
        setLior(j);
        break;
      } else {
        console.log(day, "cvngbdgc");
        setLior(-1);
        seteveneven("false");
        console.log("liorrrrrr");
        setObjNum(7);
        console.log(objNum);
        // dhbfhgdbfdsgfdgfdshfsdgfds
      }
    }
  };

  return (
    <div className="calendarcontainerincalendarpage">
      <div id="calendarincalendarpage">
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={(e) => handleClick(e)}
        />
      </div>
      <p>{chose?.toString()?.slice(0, 15)}</p>
      <p>The following hours are already booked:</p>
      {lior >= 0 ? (
        <p>
          {day[lior].selected.map((selectedHours) => {
            console.log(selectedHours);
            return (
              <div>
                <span>{selectedHours}:00</span>
              </div>
            );
          })}
        </p>
      ) : (
        <p></p>
      )}
      From
      <select
        name="start time"
        id=""
        onChange={(e) => setstarttime(e.target.value)}
      >
        <option value={8}>8:00</option>
        <option value={9}>9:00</option>
        <option value={10}>10:00</option>
        <option value={11}>11:00</option>
        <option value={12}>12:00</option>
        <option value={13}>13:00</option>
        <option value={14}>14:00</option>
      </select>
      Until
      <select
        name="end time"
        id=""
        onChange={(e) => setendtime(e.target.value)}
      >
        <option value={8}>8:00</option>
        <option value={9}>9:00</option>
        <option value={10}>10:00</option>
        <option value={11}>11:00</option>
        <option value={12}>12:00</option>
        <option value={13}>13:00</option>
        <option value={14}>14:00</option>
      </select>
      <button id="semek" onClick={() => name()}>
        Submit
      </button>
    </div>
  );
}
