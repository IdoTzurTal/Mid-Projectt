import './Rooms.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Tab } from '@mui/material'
import Tabs from '@mui/material/Tabs'
import { Box } from '@mui/system'
import HomePage from './HomePage'
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import LogIn from './LogIn'
import Search from './Search'
import HomeAfterLogin from './HomeAfterLogin'
import Favoritepage from './Favorite'
import Admin from './Admin'
import { Detail } from './Context'
import { useContext } from 'react'
function Rooms() {
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
           <button id='roombutton'><NavLink to='/Search' element={<Search/>} >FIND THE ROOM FOR YOU</NavLink> </button>
        </div>
    )
}

export default Rooms