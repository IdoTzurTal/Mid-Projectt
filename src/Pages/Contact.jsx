import { NavLink } from "react-router-dom"
import About from "./About"
import { Tab } from "@mui/material"
import LogIn from "../LogIn"
import { Box } from "@mui/system"
import HomePage from "../HomePage"
import Tabs from "@mui/material/Tabs";
import '../Pages/Contact.css'
import { useState } from "react";
import '../Pages/Contact.css'
import Rooms from "../Rooms"

function Contact() {
  const [request, setRequest] = useState();
  const [userRequest, setUserRequest] = useState();
  const [detail, setDetail] = useState();
  const [requests, setRequests] = useState([]);
  
   function handleSubmit(e) {
    e.preventDefault();
    setRequests([
      ...requests,
      { tag: request, userName: userRequest, details: detail },
    ]);
    console.log(requests);
  }
    return (
       
       <div><div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs className="contactnav" centered>
          <NavLink to='/' element={<HomePage/>} > <Tab label="Home" /></NavLink>
          <NavLink to='/About' element={<About/>} > <Tab label="about" /></NavLink>
          <NavLink to='/Contact' element={<Contact/>} > <Tab label="contact" /></NavLink>
          <NavLink to='/Login' element={<LogIn/>}> <Tab label="log in" /></NavLink>
        </Tabs>
      </Box>
      </div>
        <div id="content">
            <img id="officecomms" src="OfficeCommunication-1.jpg" alt="image unavailable" />
                <div class="wedlovecontain">
                    <h6 id="wedlove">We'd love to hear from you!</h6>
                </div>
            <div class="contactdetailscontain">
                <p id="contactdetails">
                    Whether your question is about membership, leasing our facilities, technical problems or anything else,<br/> our
                    amazing support team is ready to answer any and all of your questions! <br/>
                        107-31265 Wheel Ave. Abbotsford, BC, V2T 6H2 Canada
                        (+1) 555 3215 (Free international calls!)
                </p>
                {/* ???????????? ???????????? ???????????? ???????? ???? ???????????? mail.js */}
            </div>
    </div>
    </div>
    ); }

export default Contact;
