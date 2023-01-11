import "./class.css";
import * as React from "react";
import Calendar from '../src/Calendar'
import { useState } from "react";
import { useContext } from "react";

function Class() {
  const value = useContext(CalendarApi)
  return (
    <div>
      <div id="fleximgdescription">
        <div id="classinfo">
          <div>
            <h2>classnumber</h2>
          </div>
          <div>
            <p>descripsion</p>
          </div>
        </div>
        <div id="classimg">
          <img
            src="https://www.cta.org/wp-content/uploads/2020/03/empty-classroom.jpg"
            alt="classroom img"
          />
        </div>
      </div>
      <div>
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
      </div>
      <div>info</div>
      <div>
        <h3>Cancellation rules and company policy</h3>
        <ul>
          <li>
            Cancellations made 7 days or more in advance of the event date, will
            receive a 100% refund.{" "}
          </li>
          <li>
            Cancellations made within 48 hours to the event will incur a 30%
            fee.
          </li>
          <li>Cancellations made within 3 - 6 days will incur a 20% fee.</li>
          <li>
            I understand that I am holding a spot so reservations for this event
            are nonrefundable. If I am unable to attend I understand that I can
            transfer to a friend
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Class;
