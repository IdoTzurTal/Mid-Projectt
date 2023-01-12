import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./HomeAfterLogin.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Meeting from "./Meeting";
import Class from "./Class";
import Lecture from "./Lecture";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import HomePage from "./HomePage";
import Search from "./Search";

function HomeAfterLogin() {
  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs className="hometabs" centered>
          <NavLink to='/Home' element={<HomePage/>} > <Tab label="cyber pro" /></NavLink>
          <NavLink to='/Meetingroom' element={<Meeting />}> <Tab label="meeting rooms" /></NavLink>
          <NavLink to='/Lectureroom' element={<Lecture />}> <Tab label="lecture rooms" /></NavLink>
          <NavLink to='/Classroom' element={<Class/>} > <Tab label="classrooms" /></NavLink>
          <NavLink to='/About' element={<About/>} > <Tab label="about" /></NavLink>
          <NavLink to='/Contact' element={<Contact/>} > <Tab label="contact" /></NavLink>
          <NavLink to='/Search' element={<Search/>}> <Tab label="search" /></NavLink>
        </Tabs>
      </Box>
      <div id="mainhomeimg"></div>
      <div></div>
      <div id="flexendhome">
        <div id="flexicons">
          <a href="https://he-il.facebook.com/" target="_blank">
            <FaFacebookSquare className="icons" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            <FaMailBulk className="icons" />
          </a>
        </div>
        <div id="info">
          <p>
          CYBERPRO Global is a world-class cyber education and training provider. We’ll support you in every stage of the process, from selecting the proper training program, to customizing it to fit your organization’s needs, and finally to facilitating the training in a unique and hands-on environment.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HomeAfterLogin;