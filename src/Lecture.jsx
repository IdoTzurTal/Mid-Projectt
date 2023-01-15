import "./Lecture.css";
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
import Rooms from "./Rooms";
import { Detail } from "./Context";

function Lecture() {
    // const value = useContext(CalendarApi)
    const {rooms, setrooms} = useContext(Detail);
    
    return (
        <div>
            <div>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs className="contactnav" centered>
                        <NavLink to='/Home' element={<HomePage />} > <Tab label="cyber pro" /></NavLink>
                        <NavLink to='/Rooms' element={<Rooms />}> <Tab label="Rooms" /></NavLink>
                        <NavLink to='/About' element={<About />} > <Tab label="about" /></NavLink>
                        <NavLink to='/Contact' element={<Contact />} > <Tab label="contact" /></NavLink>
                        <NavLink to='/Login' element={<LogIn />}> <Tab label="log in" /></NavLink>
                    </Tabs>
                </Box>
            </div>
            <div id="fleximgdescriptionlecture">
                <div id="lectureinfo">
                    <div>
                        <h2>Sequoia Lecture Hall</h2>
                    </div>
                    <div>
                        <p>University grade, auditorium styled lecture hall</p>
                    </div>
                </div>
            </div>
            <div id="lectureimg">
                <span id="officeinfolecture">
                    The architectural design of 360 degree lecture hall is a flipped traditional lecture hall with a circular shape.<br />
                    Students seating stations are in a perfect circle regardless of which type of furniture is used in new hall.<br />
                    The teacher’s place is in the middle rather than at front.
                </span>
                <img
                    src="weworkoffice.png"
                    alt="classroom img"
                />
            </div>
            <div className="calendarcontainerinlecturepage">
                <div id="calendarinlecturepage">
                    <div id="lectureavailabilitycontainer">
                        <span id="lectureavailability">Check availability now!</span>
                        <span id="lectureavailabilitydescription">Use the calendar to select a timeframe and we will let you know if it's available.</span>
                        <span className="amenities">What this place offers</span>
                        <ul className="amenitieslist">
                            <li>Room Number: {rooms[0].name}</li>
                            <li>Room Type: {rooms[0].type}</li>
                            <li>Room Capacity: {rooms[0].capacity}</li>
                            <li>Air Conditioning? {rooms[0].airconditioning}</li>
                            <li>Zoom? {rooms[0].zoom}</li>
                            <li>Whiteboard? {rooms[0].whiteboard}</li>
                        </ul>
                    </div>
                    <Ckre />
                </div>
            </div>


            <div id="lecturecancellation">
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
export default Lecture;
