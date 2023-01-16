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
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import HomePage from "./HomePage";
import Search from "./Search";
import Favoritepage from "./Favorite";
import Admin from "./Admin";
import { Detail } from "./Context";
import { useContext } from "react";
import { useEffect } from "react";
import Rooms from "./Rooms";
function HomeAfterLogin() {
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
  console.log(user);
// useEffect(() => {
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
            {/* {user == "Admin" && ( */}
              <NavLink to="/Admin" element={<Admin />}>
                {" "}
                <Tab label="Admin" />
              </NavLink>
            {/* )} */}
          </Tabs>
        </Box>
        </div>
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
            CYBERPRO Global is a world-class cyber education and training
            provider. We’ll support you in every stage of the process, from
            selecting the proper training program, to customizing it to fit your
            organization’s needs, and finally to facilitating the training in a
            unique and hands-on environment.
          </p>
        </div>
      </div>
    </div>
  );

// }, [user]);
}
export default HomeAfterLogin;
