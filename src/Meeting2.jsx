import "./Meeting2.css";
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
import Class from "./Class";
import Lecture from "./Lecture";
import { Detail } from "./Context";
import HomeAfterLogin from "./HomeAfterLogin";
import Search from "./Search";
import Favoritepage from "./Favorite";
import Admin from "./Admin";
import Rooms from "./Rooms";

function Meeting2() {
    // const value = useContext(CalendarApi)
    const { user, setuser } = useContext(Detail);
    setuser(localStorage.getItem("user"));
    const {rooms, setrooms} = useContext(Detail);
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
            <div id="fleximgdescriptionmeeting2">
                <div id="meeting2info">
                    <div>
                        <h2>Yellowstone Meeting Room</h2>
                    </div>
                    <div>
                        <p>Top of the line, fully equipped meeting room</p>
                    </div>
                </div>
            </div>
            <div id="meeting2img">
                <span id="officeinfomeeting2">
                    Good for small and large groups.<br />
                    High-speed Internet and conference A/V tools.<br />
                    For all meeting types: private, business and executive.<br />
                    Enjoy shared amenities and business essentials.
                </span>
                <img
                    src="weworkmeetingroom.png"
                    alt="classroom img"
                />
            </div>

            <div className="calendarcontainerinmeeting2page">
                <div id="calendarinmeeting2page">
                    <div id="meeting2availabilitycontainer">
                        <span id="meeting2availability">Check availability now!</span>
                        <span id="meeting2availabilitydescription">Use the calendar to select a timeframe and we will let you know if it's available.</span>
                        <span className="amenitiesmeeting2">What this place offers</span>
                        <ul className="amenitieslistmeeting2">
                        <li>Room Number: {rooms[7].name}</li>
                            <li>Room Type: {rooms[7].type}</li>
                            <li>Room Capacity: {rooms[7].capacity}</li>
                            <li>Air Conditioning? {rooms[7].airconditioning}</li>
                            <li>Zoom? {rooms[7].zoom}</li>
                            <li>Whiteboard? {rooms[7].whiteboard}</li>
                            <li>Projector? {rooms[7].projector}</li>
                        </ul>
                    </div>
                    <Ckre />
                </div>
            </div>

            <div id="meeting2cancellation">
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
export default Meeting2;
