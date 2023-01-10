import { Box } from "@mui/system"
import { Tab } from "@mui/material"
import { NavLink } from "react-router-dom"
import HomePage from "../HomePage"
import Contact from "./Contact"
import LogIn from "../LogIn"
import Tabs from "@mui/material/Tabs";
import "../Pages/About.css";

function About() {
    return (
        <div>
        <div>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs className="aboutnav" centered>
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

    )
}

export default About