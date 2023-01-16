import "./AboutAfterLogin.css"
import { NavLink } from "react-router-dom";
import { Tab } from "@mui/material";
import LogIn from "./LogIn";
import { Box } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import HomeAfterLogin from "./HomeAfterLogin";
import Rooms from "./Rooms";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import Admin from "./Admin";
import Search from "./Search";
import Favoritepage from "./Favorite";
import { useContext } from "react";
import { Detail } from "./Context";
function Contact() {
  const [request, setRequest] = useState();
  const [userRequest, setUserRequest] = useState();
  const [detail, setDetail] = useState();
  const [requests, setRequests] = useState([]);
  const { user, setuser } = useContext(Detail);
  setuser(localStorage.getItem("user"));
  function handleSubmit(e) {
    e.preventDefault();
    setRequests([
      ...requests,
      { tag: request, userName: userRequest, details: detail },
    ]);
    console.log(requests);
  }
  return (
    <div className="abuyacontain">
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
        <div class="container">
            <div>
                <img id="officeimg" src="/office image for about.jpeg" alt="image unavailable" />
            </div>
            <span id="officeworks">

                Officeworks is the world’s biggest office lease and booking platform. You might know us from our world-class
                facilities, our supportive community, or our awesome Officeworks utilities.<br/>

                We collaborate with the world's finest companies to bring the forefront of easy office booking right to the palm of your hand.<br/>
                Officeworks gives your business the commercial office space solutions it needs – minus the headaches of upfront capital and lengthy leases.<br/>
                That’s why more than 50% of Fortune 100 companies are WeWork members.<br/>

                On top of that, imagine accomodating in some of the best equipped facilities in the world, while also gaining access to said companies' office perks and features. That's Officeworks.<br/>
                Create a workplace that meets all your business requirements with your pick of Grade A buildings, branding, security, IT and more.
            </span>
        </div>
    </div>
  );
}

export default Contact;
