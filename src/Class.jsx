import "./Class.css";
import * as React from "react";
// import Calendar from '../src/Calendar'
import { useState } from "react";
import { useContext } from "react";
import Ckre from "./Calendar"
import { NavLink } from "react-router-dom";
import { Tab, Tabs, Box } from "@mui/material";
import HomePage from "./HomePage";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import LogIn from "./LogIn";
import Rooms from "./Rooms";
import { Detail } from "./Context";
import HomeAfterLogin from "./HomeAfterLogin";
import Search from "./Search";
import Favoritepage from "./Favorite";
import Admin from "./Admin";

function Class() {
  // const value = useContext(CalendarApi)
  const {rooms, setrooms} = useContext(Detail);
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
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
            <NavLink to="/Favoritepage" element={<Favoritepage />}>
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
      <div className="calendarcontainerinclasspage">
        <div id="calendarinclasspage">
          <div id="classavailabilitycontainer">
            <span id="classavailability">Check availability now!</span>
            <span id="classavailabilitydescription">Use the calendar to select a timeframe and we will let you know if it's available.</span>
            <span className="amenities">What this place offers</span>
              <ul className="amenitieslist">
              <li>Room Number: {rooms[3].name}</li>
                            <li>Room Type: {rooms[3].type}</li>
                            <li>Room Capacity: {rooms[3].capacity}</li>
                            <li>Air Conditioning? {rooms[3].airconditioning}</li>
                            <li>Zoom? {rooms[3].zoom}</li>
                            <li>Whiteboard? {rooms[3].whiteboard}</li>
              </ul>          
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
