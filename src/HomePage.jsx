import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Homepage.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import About from "./Pages/About";
import LogIn from "./LogIn";
import Contact from "./Pages/Contact";
import Search from "./Search";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { country: "israel" },
  headers: {
    "X-RapidAPI-Key": "ab91c96668msha147f021cb07807p13eceajsn256314909fbf",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

function HomePage() {
  const [covidData, setCovidData] = React.useState();

  React.useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setCovidData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs className="homebnav" centered>
          <NavLink to="/" element={<HomePage />}>
            {" "}
            <Tab label="Home" />
          </NavLink>
          <NavLink to="/About" element={<About />}>
            {" "}
            <Tab label="about" />
          </NavLink>
          <NavLink to="/Contact" element={<Contact />}>
            {" "}
            <Tab label="contact" />
          </NavLink>
          <NavLink to="/Login" element={<LogIn />}>
            {" "}
            <Tab label="log in" />
          </NavLink>
        </Tabs>
      </Box>
      <div id="mainhomeimg"></div>
      <div>
        <h2>Corona Statistics:</h2>
        <h4>sickness </h4>
        <p>
          <span>isolation: </span>
          <span>{covidData?.response[0].cases.active + " "}</span>
          <span>Difficult situation: </span>
          <span>{covidData?.response[0].cases.critical + " "}</span>
          <span>new: </span>
          <span>{covidData?.response[0].cases.new + " "}</span>
        </p>
        <h4>deathes</h4>
        <p>
          <span>deathes: </span>
          <span>{covidData?.response[0].deaths.total + " "}</span>
        </p>
      </div>
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
      <div>
        <a href="https://ul.waze.com/ul?place=ChIJueZL8cZLHRUR4v_7nbKJsMw&ll=32.08728010%2C34.80409030&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
          <img
            src="Location2.png"
            alt="Click here for location"
            width="1500px"
            height="300px"
          />
        </a>
      </div>
    </div>
  );
}
export default HomePage;
