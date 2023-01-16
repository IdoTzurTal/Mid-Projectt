import "./Admin.css";
import { Box } from "@mui/system";
import { Tab } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import { NavLink } from "react-router-dom";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import LogIn from "./LogIn";
import Rooms from "./Rooms";
import HomePage from "./HomePage";
import { Detail } from "./Context";
import { useContext, useState } from "react";
import HomeAfterLogin from "./HomeAfterLogin";
import Search from "./Search";
import Favoritepage from "./Favorite";

function Admin() {
  const { meeting, setmeeting } = useContext(Detail);
  const { rooms, setrooms } = useContext(Detail);
  const [favorite, setfavorite] = useState();
   
  
    
    // rooms.map((single, index) => {
    //     if (single.favorite== true) {
    //       favorite.push(single) 
    //     }})
    //     console.log(favorite);
    
    
   
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
      <h2>Welcome, Admin</h2>
      <h4>Today's meetings</h4>
    </div>
  );
}

export default Admin;
