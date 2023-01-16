import { Box } from "@mui/system";
import { Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Tab } from "@mui/material"
import HomeAfterLogin from "./HomeAfterLogin";
import Rooms from "./Rooms";
import AboutAfterLogin from "./AboutAfterLogin"
import ContactAfterLogin from "./ContactAfterLogin"
import Search from "./Search";
import Admin from "./Admin";



export default function Favoritepage() {
  let listfav = [{}];
  listfav = JSON.parse(localStorage.getItem("favorite"));
  console.log(listfav);
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
            <NavLink to="/Admin" element={<Admin />}>
              {" "}
              <Tab label="Admin" />
            </NavLink>
          </Tabs>
        </Box>
      </div>
      <h1>favorite rooms</h1>
      {listfav.map((item, index) => {
        if (index > 0) {
          return (
            <div>
              <p key={index}>
                <h4> name: {item?.single?.name}</h4>
                <br />
                Room Type: {item?.single?.type}
                <br />
                Capacity:{item?.single?.capacity}
                <br />
                Zoom: {item?.single?.zoom}
                <br />
                Air Conditioning: {item?.single?.airconditioning} <br />
                Projector: {item?.single?.projector} <br />
                Whiteboard: {item?.single?.whiteboard}
                <br />
                <br />
                <hr />
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}

