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
import { Detail } from "./Context";
import Rooms from "./Rooms";

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
  const { rooms, setrooms } = React.useContext(Detail);
  const { roomid, setroomid } = React.useContext(Detail);

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
            Officeworks is a provider of coworking spaces, including physical and virtual shared spaces, headquartered in New York City. As of December 31, 2021, the company operated 44.8 million square feet (4,160,000 m2) of space, including 19.8 million square feet (1,840,000 m2) in the United States and Canada, in 756 locations in 38 countries, and had 590,000 members, with a weighted average commitment term of 20 months.
          </p>
        </div>
      </div>
      <hr />
      <div className="companyfront">
        <h5>"We make sure to sanitize and maintain our facilities regularly.<br />
          Please make sure you are Covid-negative when booking one of our rooms."<br />
          Ido Tzur Tal, CEO<br /> Officeworks </h5>
        <h2>Daily Corona Statistics:</h2>
        <p>
          <span>Currently Quarantined: </span>
          <span>{covidData?.response[0].cases.active + " "}</span>
          <span>| Critical Condition: </span>
          <span>{covidData?.response[0].cases.critical + " "}</span>
          <span>| Confirmed Cases (Today): </span>
          <span>{covidData?.response[0].cases.new + " "}</span>
        </p>
        <h4>Death Toll (Since March 2020)</h4>
        <p>
          <span>{covidData?.response[0].deaths.total + " "}</span>
        </p>
      </div>
      <hr></hr>
      <div>
        <h3 id="vacancy">Current Vacancy:</h3>
        {rooms.map((item) => (
          <div>
            <p>{item.name}</p>
            <div>
              {item.day2[0]?.map((item2) => (
                <div>
                  <p>{item2.id}</p>
                  <p>
                    {item2?.selected.map((item3) => (
                      <div>
                        <p>{item3 + ":00"}</p>
                      </div>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {console.log("useeffect", rooms)}
        {console.log("noder", rooms[0].id)}
        {/* {for (let index = 0; index < rooms[roomid].day2.length; index++){}
        {
          <div>
            <h2>day</h2>
            <p>{rooms[roomid].day2[index].id}</p>
            <h4>already taken</h4>
            <p>{rooms[roomid].day2[index].selected[0]}</p>
          </div>
        }} */}
      </div>
      <div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%D7%97%D7%99%D7%9C%D7%96%D7%95%D7%9F%203&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            {/* <a href="https://putlocker-is.org">putlocker</a> */}
            <br />
            <style>
              .mapouterposition:relative;text-align:right;height:400px;width:1000px;
            </style>
            {/* <a href="https://www.embedgooglemap.net">
              google maps iframe code generator
            </a> */}
            <style>
              .gmap_canvas
              overflow:hidden;background:none!important;height:400px;width:1000px;
            </style>
          </div>
        </div>
        {/* <a href="https://ul.waze.com/ul?place=ChIJueZL8cZLHRUR4v_7nbKJsMw&ll=32.08728010%2C34.80409030&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location">
          <img
            src="Location2.png"
            alt="Click here for location"
            width="1500px"
            height="300px"
          />
        </a> */}
      </div>
    </div>
  );
}
export default HomePage;
