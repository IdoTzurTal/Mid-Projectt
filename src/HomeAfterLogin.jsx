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


function HomeAfterLogin() {
  const [covidData, setCovidData] = React.useState();
  const { rooms, setrooms } = React.useContext(Detail);
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
  console.log(user);
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
      <div id="mainhomeimg"></div>
      {/* <div></div>
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
      </div> */}
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
      <hr></hr>
      <div>
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

// }, [user]);
}
export default HomeAfterLogin;
