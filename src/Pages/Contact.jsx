import { NavLink } from "react-router-dom"
import About from "./About"
import { Tab } from "@mui/material"
import LogIn from "../LogIn"
import { Box } from "@mui/system"
import HomePage from "../HomePage"
import Tabs from "@mui/material/Tabs";

function Contact() {
    return (
        <div>
        <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs centered>
          <NavLink to='/Home' element={<HomePage/>} > <Tab label="cyber pro" /></NavLink>
          <NavLink> <Tab label="meeting rooms" /></NavLink>
          <NavLink> <Tab label="lecture rooms" /></NavLink>
          <NavLink> <Tab label="classrooms" /></NavLink>
          <NavLink to='/About' element={<About/>} > <Tab label="about" /></NavLink>
          <NavLink to='/Contact' element={<Contact/>} > <Tab label="contact" /></NavLink>
          <NavLink to='/Login' element={<LogIn/>}> <Tab label="log in" /></NavLink>
        </Tabs>
      </Box>
      </div>
        <div id="content">
            <div>
                <div class="firstrow">

                </div>
                <div class="firstwrite">
                    <h6 id="guitar1">We'd love to hear from you!</h6>

                </div>
            </div>
            <div class="prodetails">
                <span id="gibson">
                    Whether your question is about membership, leasing our facilities, technical problems or anything else, our
                    amazing support team is ready to answer any and all of your questions! <br/>
                        107-31265 Wheel Ave. Abbotsford, BC, V2T 6H2 Canada
                        (+1) 555 3215 (Free international calls!)
                </span>
                {/* להוסיף אופציה לשליחת מייל עם ספריית mail.js */}

            </div>

        </div>
        </div>
    )
}

export default Contact