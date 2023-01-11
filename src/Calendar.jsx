import "./Calendar.css";
import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function Ckre() {
  const [value, onChange] = useState(new Date());
  const [chose, setchose] = useState();
  const [day, setDay] = useState([{}]);
  const [dayId, setDayId] = useState();
  const [starttime, setstarttime] = useState(8);
  const [endtime, setendtime] = useState(0);
  const [array, setarray] = useState([]);
  console.log(chose);

  //   console.log(chose);
  //   console.log(day);
//   console.log(starttime);
//   console.log(endtime);
  function name() {
   
    
    for (let index =  Number(starttime); index < Number(endtime); index++) {
      array.push(index)
      console.log(starttime);
      console.log(endtime);
    }
    console.log(array);
  
  }

  function dayinfo() {
    setDay([
      ...day,
      {
        id: dayId,
        day: chose?.toString()?.slice(0, 3),
        month: chose?.toString()?.slice(4, 7),
        monthnum: chose?.toString()?.slice(8, 10),
        year: chose?.toString()?.slice(11, 15),
        // selected:[...selected.value,],
        eightnine: true,
        nineten: true,
        teneleven: true,
        eleventwelve: true,
        twelveone: true,
        onetwo: true,
      },
    ]);
  }

  const handleClick = (e) => {
    setchose(e);
    setDayId(chose?.toString()?.slice(0, 15)?.replace(" ", ""));
  };

  return (
    <div className="calendar">
      <div>
        <Calendar
          onChange={onChange}
          value={value}
          onClickDay={(e) => handleClick(e)}
        />
      </div>
      <p>{chose?.toString()?.slice(0, 15)}</p>
      start time
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
      end time
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
      <button onClick={() => name()}>semememek</button>
      {starttime} <br />
      {endtime}
    </div>
  );
}
