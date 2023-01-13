import './Rooms.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tab } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { Box } from '@mui/system'
import HomePage from './HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import LogIn from './LogIn'


function Rooms() {
    return (
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
            <button id='roombutton'>FIND THE ROOM FOR YOU</button>
        </div>
    )
}

export default Rooms