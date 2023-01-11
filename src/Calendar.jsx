import "./Calendar.css";
import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function Ckre() {
  const [value, onChange] = useState(new Date());
  const [chose, setchose] = useState();
  const [day, setDay] = useState([]);
  const [dayId, setDayId] = useState();
  const [starttime, setstarttime] = useState(8);
  const [endtime, setendtime] = useState(0);
  const [array, setarray] = useState([]);
  const [lior, setLior] = useState(-1)
  const[eveneven,seteveneven]=useState(false)
  const[objNum,setObjNum]=useState()
  console.log(chose);

  //   console.log(chose);
  //   console.log(day);
  //   console.log(starttime);
  //   console.log(endtime);
  function name() {
    setLior(-1)

    if(eveneven===true){
      for (let index = Number(starttime); index < Number(endtime); index++) {
        // array.push(index)
      if(!day[objNum].selected.includes(index)){
        day[objNum].selected.push(index)
        setarray([])

      }}

    }else{

    for (let index = Number(starttime); index < Number(endtime); index++) {
      array.push(index)
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
        eightnine: true,
        nineten: true,
        teneleven: true,
        eleventwelve: true,
        twelveone: true,
        onetwo: true,
      },

    ]);
    console.log(array);

    setarray([])
    }
  }

  const handleClick = (e) => {
    console.log("this", lior);
    console.log(day)
    setchose(e);
    // setDayId();
    const check = e.toString().slice(0, 15)
    for (let j = 0; j < day.length; j++) {
      console.log("hey");
      if (day[j].id === check) {
        seteveneven(true)
        setObjNum(j)


        console.log(day[j]);
        setLior(j);
        break
      }
      else {
        console.log(day , "cvngbdgc");
        setLior(-1)
      }
    }

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
      <p>The following hours are already booked:</p>
      {lior >= 0 ? <p>{day[lior].selected.map((selectedHours) => {
        console.log(selectedHours);
        return <div><span>{selectedHours}:00</span></div>
      })}</p> : <p></p>}


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
      <button id="semek" onClick={() => name()}>Submit</button>
      {starttime} <br />
      {endtime}
    </div>
  );
}
