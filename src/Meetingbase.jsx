import "./Meetingbase.css";
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
import Class from "./Class";
import Lecture from "./Lecture";


function Meetingbase() {
    // const value = useContext(CalendarApi)
    return (
        <div>
            <div>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs className="contactnav" centered>
                        <NavLink to='/Home' element={<HomePage />} > <Tab label="cyber pro" /></NavLink>
                        <NavLink to='/Meetingbase' element={<Meetingbase />}> <Tab label="meeting rooms" /></NavLink>
                        <NavLink to='/Lectureroom' element={<Lecture />}> <Tab label="lecture rooms" /></NavLink>
                        <NavLink to='/Classroom' element={<Class />}> <Tab label="classrooms" /></NavLink>
                        <NavLink to='/About' element={<About />} > <Tab label="about" /></NavLink>
                        <NavLink to='/Contact' element={<Contact />} > <Tab label="contact" /></NavLink>
                        <NavLink to='/Login' element={<LogIn />}> <Tab label="log in" /></NavLink>
                    </Tabs>
                </Box>
            </div>
            <div id="fleximgdescriptionmeeting">
                <div id="meetinginfo">
                    <div>
                        <h2>Yellowstone Meeting Room</h2>
                    </div>
                    <div>
                        <p>Top of the line, fully equipped meeting room</p>
                    </div>
                </div>
            </div>
            <div id="meetingimg">
                <span id="officeinfomeeting">
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
        </div>
    );
}
export default Meetingbase;
