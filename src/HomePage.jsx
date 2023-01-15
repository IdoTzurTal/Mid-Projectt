import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./homepage.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import About from "./Pages/About";
import LogIn from "./LogIn";
import Contact from "./Pages/Contact";
import Search from "./Search";

function HomePage() {
  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs className="homebnav" centered>
          <NavLink to='/Home' element={<HomePage/>} > <Tab label="cyber pro" /></NavLink>
          <NavLink to='/About' element={<About/>} > <Tab label="about" /></NavLink>
          <NavLink to='/Contact' element={<Contact/>} > <Tab label="contact" /></NavLink>
          <NavLink to='/Login' element={<LogIn/>}> <Tab label="log in" /></NavLink>
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
export default HomePage;
