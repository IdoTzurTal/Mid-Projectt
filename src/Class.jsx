import "./Class.css";
import * as React from "react";
// import Calendar from '../src/Calendar'
import { useState } from "react";
import { useContext } from "react";
import Ckre from "./Calendar"
import { NavLink } from "react-router-dom";
import { Tab, Tabs, Box } from "@mui/material";
import HomePage from "./HomePage";
import Contact from "./Pages/Contact";
import LogIn from "./LogIn";
import About from "./Pages/About";
import Lecture from "./Lecture";
import Meeting from "./Meeting";


function Class() {
  // const value = useContext(CalendarApi)
  return (
    <div>
      <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs className="contactnav" centered>
            <NavLink to='/Home' element={<HomePage />} > <Tab label="cyber pro" /></NavLink>
            <NavLink to='/Meetingroom' element={<Meeting />}> <Tab label="meeting rooms" /></NavLink>
            <NavLink to='/Lectureroom' element={<Lecture />}> <Tab label="lecture rooms" /></NavLink>
            <NavLink to='/Classroom' element={<Class />}> <Tab label="classrooms" /></NavLink>
            <NavLink to='/About' element={<About />} > <Tab label="about" /></NavLink>
            <NavLink to='/Contact' element={<Contact />} > <Tab label="contact" /></NavLink>
            <NavLink to='/Login' element={<LogIn />}> <Tab label="log in" /></NavLink>
          </Tabs>
        </Box>
      </div>
      <div id="fleximgdescriptionclass">
        <div id="classinfo">
          <div>
            <h2>Yosemite Classroom</h2>
          </div>
          <div>
            <p>A state of the art academic classroom</p>
          </div>
        </div>
      </div>
      <div id="classimg">
        <span id="officeinfoclass">
          Elevated, move-in ready private workspace for teams of 20 or more.<br />
          Private amenities can include interior offices, meeting rooms, lounges, pantries.<br /> and more
          Customise your workspace with a suite of office add-ons, finishes and enhancements.
        </span>
        <img
          src="weworkoffice.png"
          alt="classroom img"
        />
      </div>

      <div id="calendarcontainerinclasspage">

        <div id="calendarinclasspage">
          <div id="classavailabilitycontainer">
            <span id="classavailability">Check availability now!</span>
            <span id="classavailabilitydescription">Use the calendar to select a timeframe and we will let you know if it's available.</span>
          </div>
          <Ckre />
        </div>

      </div>


      <div id="classcancellation">
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
            are nonrefundable.<br /> If I am unable to attend I understand that I can
            transfer to a friend.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Class;
